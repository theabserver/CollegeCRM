import {useState, useRef} from "react";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

export default function FormDialog({
  openDialog = false,
  title,
  contentText,
  ChildComponent,
  submitCB,
  closeCB
}) {
  const [open, setOpen] = useState(openDialog);
  const formRef = useRef();
  // can be called from calling component
  const handleClickOpen = () => {
    setOpen(openDialog);
  };
  const handleSubmit = () => {
    const formData = formRef.current.getData()
    console.log('Form Data: ', formData);
    submitCB(formData);
  }

  const handleClose = () => {
    sessionStorage.setItem('appointment', '')
    // use closeCB if passed else close the dialog from here
    closeCB && closeCB() || !closeCB && setOpen(false)
  };
  const getStartDate = () => {
    const appointment = sessionStorage.getItem('appointment')
    return (appointment != null && JSON.parse(appointment).start) || ""
  }
  const getEndDate = () => {
    const appointment = sessionStorage.getItem('appointment')
    return (appointment != null && JSON.parse(appointment).end) || ""
  }
  const getEvent = () => {
    const appointment = sessionStorage.getItem('appointment')
    return (appointment != null && JSON.parse(appointment).title) || ""
  }
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="edit-apartment"
      >
        <DialogTitle id="edit-apartment">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{contentText}</DialogContentText>
          <ChildComponent ref={formRef} event={getEvent()} defaultStartDate={getStartDate()} defaultEndDt={getEndDate()}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
