import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
// import todos from "../Data";
import NoData from "../assets/notFound.svg";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import PopUp from "./Popup";
import LogoImg from "../assets/Logo.svg";

const HomeComp = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api-data/all-item");
      setData(res.data);
    } catch (error) {
      console.error("Error Fetching data");
    }
  };

  console.log(data);
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
                <Link
                  className="link"
                  to={`/detailed-page/${task.id}`}
                >
                  <ChildDiv>
                    <ChildInsideDiv>
                      <h1>{index + 1}</h1>
                      <NoteName>{task.title}</NoteName>
                    </ChildInsideDiv>
                    <ChildInsideDiv>
                      <ModeEditOutlineOutlinedIcon
                        className="editIcon"
                        fontSize="medium"
                      />
                      <DeleteOutlineOutlinedIcon
                        className="deleteIcon"
                        fontSize="medium"
                      />
                    </ChildInsideDiv>
                  </ChildDiv>
                </Link>
                <LineHr />
              </div>
            ))}
          </ChildScrollDiv>
        )}
        <PlusButton>
          <PopUp />
        </PlusButton>
      </div>
    </>
  );
};

export default HomeComp;
