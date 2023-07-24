import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import {useRef, useImperativeHandle, forwardRef} from "react";
import dayjs from "dayjs";

export const CalendarEventEditForm = forwardRef((props, formRef) => {
    const meetingRef = useRef(props.event);
    const meetingStartRef = useRef(props.defaultStartDate);
    const meetingEndRef = useRef(props.defaultEndDt);
    useImperativeHandle(formRef, () => ({
        getData() {
          return {
            'meeting': meetingRef.current,
            'meetingStart': meetingStartRef.current,
            'meetingEnd': meetingEndRef.current,
          }
        }
      }));
    const updateEvent = (e) => {
        meetingRef.current = e.target.value
    }
    const updateMeetingStart = (e) => {
        meetingStartRef.current = e.$d
    }
    const updateMeetingEnd = (e) => {
        meetingEndRef.current = e.$d
    }
  return (
    <>
      <TextField
        sx={{ mt: 5, mb:3 }}
        autoFocus
        margin="dense"
        id="eventName"
        label="Event Name"
        type="text"
        fullWidth
        defaultValue={props.event}
        ref={meetingRef}
        onChange={updateEvent}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker format="DD/MM/YYYY hh:mm a" ref={meetingStartRef} onChange={updateMeetingStart} defaultValue={dayjs(props.defaultStartDate)} sx={{mr:3}} label="Meeting starts at" />
        <DateTimePicker format="DD/MM/YYYY hh:mm a" ref={meetingEndRef} onChange={updateMeetingEnd} defaultValue={dayjs(props.defaultEndDt)} label="Meeting ends at" />
      </LocalizationProvider>
    </>
  );
});
