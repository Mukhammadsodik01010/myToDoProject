import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { PopButtonDiv, PopInput } from "../Styles/PopUpStyles";
// import Button from '@mui/material/Button';

const PopUp = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="primary"
        sx={{
          fontSize: "24px",
          border: "none",
          width: 56,
          height: 56,
          borderRadius: "50%",
          minWidth: 0,
          padding: 0,
        }}
        onClick={handleClickOpen}
      >
        +
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            fontSize: "24px",
            fontFamily: "Libre Baskerville",
            fontWeight: 700,
          }}
          textAlign={"center"}
        >
          New Note
        </DialogTitle>
        <PopInput type="text" placeholder="Input your note..." />
        <PopButtonDiv>
          <Button onClick={handleClose} variant="outlined">Cancel</Button>
          <Button variant="contained">Apply</Button>
        </PopButtonDiv>
      </Dialog>
    </React.Fragment>
  );
};
export default PopUp;
