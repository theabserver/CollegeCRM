import React, { useState, useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Box } from "@mui/material";
import { CalendarEventEditForm } from "../Components/CalendarEventEditForm";
import FormDialog from "../Components/FormDialogHOC";

const currentTime = new Date();

export const Dashboard = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      title: "Sample Meeting 1",
      start: currentTime,
      end: new Date(currentTime + 1 * 60 * 60 * 1000),
    },
    {
      id: 2,
      title: "Sample Meeting 2",
      start: currentTime + 2 * 60 * 60 * 1000,
      end: currentTime + 3 * 60 * 60 * 1000,
    },
  ]);
  const [showEventEdit, setShowEventEdit] = useState(false);
  // a custom render function
  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>&nbsp;
        <i>{eventInfo.event.title}</i>
      </>
    );
  }
  const formatEvents = () => {
    return appointments.map((appointment) => {
      const { title, end, start } = appointment;

      let startTime = new Date(start);
      let endTime = new Date(end);

      return {
        title,
        start: startTime,
        end: endTime,
        extendedProps: { ...appointment },
      };
    });
  };
  const getAppointment = () => sessionStorage.getItem("appointment");
  const handleEventClick = ({ event }) => {
    console.log("Event open");
    setShowEventEdit(true);
    sessionStorage.setItem(
      "appointment",
      JSON.stringify(
        appointments.find(
          (appointment) => appointment.id == event._def.extendedProps.id
        )
      )
    );
  };
  const editSubmitCB = (formData) => {
    console.log("Event submitted");
    let appointmentId = JSON.parse(getAppointment()).id;
    setAppointments(
      appointments.map((appointment) => {
        if (appointment.id == appointmentId)
          return {
            ...appointment,
            title: formData.meeting,
            start: formData.meetingStart,
            end: formData.meetingEnd,
          }
        else return appointment
      })
    );
    setShowEventEdit(false);
  };
  const closeEdit = () => {
    console.log("Event closed");
    setShowEventEdit(false);
  };
  const handleEventDrop = (info) => {
    if (window.confirm("Are you sure you want to change the event date?")) {
      // updateAppointment is another custom method
      updateAppointment({
        ...info.event.extendedProps,
        start: info.event.start,
        end: info.event.end,
      });
    } else {
      console.log("change aborted");
    }
  };
  return (
    <Box sx={{ height: 100 }}>
      {showEventEdit && (
        <FormDialog
          openDialog={true}
          title="Edit this event"
          contentText="Change the event time and duration"
          ChildComponent={CalendarEventEditForm}
          submitCB={editSubmitCB}
          closeCB={closeEdit}
        />
      )}
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        height="auto"
        eventContent={renderEventContent}
        editable={true}
        // eventDrop={handleEventDrop}
        eventClick={handleEventClick}
        events={formatEvents()}
      />
    </Box>
  );
};
