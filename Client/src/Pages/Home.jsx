import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ImgDiv,
  ImgDivimg,
  ToDo,
  ToDoinput,
  ChildDiv,
  ChildInsideDiv,
  LineHr,
  NoteName,
  PlusButton,
  ChildScrollDiv,
  LogoDiv,
  LogoImage,
} from "../Styles/HomeStyles";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import NoData from "../assets/notFound.svg";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import LogoImg from "../assets/Logo.svg";


import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { PopButtonDiv, PopInput } from "../Styles/PopUpStyles";
import { addItem } from "../APIS/itemApi";

const HomeComp = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState({ title: "" });

  const [openInput, setOpenInput] = React.useState(false);
  const handleOpenq = () => setOpenInput(true);
  const handleCloseq = () => setOpenInput(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api-data/all-item");
      setData(res.data);
    } catch (error) {
      console.error("Error Fetching data", error);
    }
  };

  const hendleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api-data/delete-item/${id}`);
      alert("Product deleted");
      fetchProducts();
    } catch (error) {
      console.error("Error deleting data", error);
    }
  };

  console.log(data);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addItem(form);
      alert("Product is added");
      setOpen(false);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting data", error);
    }
  };

  // edit

  const EditButton = async (id)=>{
    try {
      await axios.put(`http://localhost:4000/api-data/update-item/${id}`);
      alert('Item is added');
    } catch (error) {
           console.error("Error editing data", error);
    }
  }

  return (
    <>
      <div className="container">
        <LogoDiv>
          <LogoImage src={LogoImg} alt="" />
          <ToDo>ToDo List</ToDo>
        </LogoDiv>
        <ToDoinput type="search" placeholder="Search note..." />
        {data.length === 0 ? (
          <ImgDiv>
            <ImgDivimg src={NoData} alt="" />
          </ImgDiv>
        ) : (
          <ChildScrollDiv>
            {data.map((task, index) => (
              <div key={task._id}>
                <ChildDiv>
                  <ChildInsideDiv>
                    <h1>{index + 1}</h1>
                    <NoteName>{task.title}</NoteName>
                  </ChildInsideDiv>
                  <ChildInsideDiv>
                    <div>

                        <ModeEditOutlineOutlinedIcon
                          className="editIcon"
                          fontSize="medium"
                          onClick={handleOpenq}
                        />
                    
                    </div>

                    <DeleteOutlineOutlinedIcon
                      className="deleteIcon"
                      fontSize="medium"
                      onClick={() => hendleDelete(task._id)}
                    />
                  </ChildInsideDiv>
                </ChildDiv>
                <LineHr />
              </div>
            ))}
          </ChildScrollDiv>
        )}
        <PlusButton>
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
              <form onSubmit={handleSubmit}>
                <PopInput
                  type="text"
                  placeholder="Input your note..."
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  value={form.title}
                />
                <PopButtonDiv>
                  <Button onClick={handleClose} variant="outlined">
                    Cancel
                  </Button>
                  <Button type="submit" variant="contained">
                    Apply
                  </Button>
                </PopButtonDiv>
              </form>
            </Dialog>
          </React.Fragment>
        </PlusButton>
      </div>
      <Modal
          open={openInput}
          onClose={handleCloseq}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
    </>
  );
};

export default HomeComp;
