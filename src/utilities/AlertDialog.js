import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
// import Slide from "@mui/material/Slide";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
const AlertDialog = ({
  title,
  content,
  action,
  actionName,
  modalOpen,
  modalClose,
}) => {
  // const Transition = React.forwardRef(function Transition(props, ref) {
  //   return <Slide direction="up" ref={ref} {...props} />;
  // });

  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("xs");
  return (
    <Dialog
      open={modalOpen}
      onClose={modalClose}
      // TransitionComponent={Transition}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      className="successDialog"
    >
      <DialogTitle>
        <CheckCircleOutlineIcon />
      </DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button onClick={modalClose} color="primary">
          {actionName}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
