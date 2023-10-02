import React, { useEffect, useState } from "react";
import {
  deletecoffeebyid,
  productsbyadminid,
} from "../api-helpers-axios/api-helpers";
import DeleteIcon from "@mui/icons-material/Delete";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AdminProfile() {
 const navigate = useNavigate();
  const [coffee, setCoffee] = useState([]);

  useEffect(() => {
    productsbyadminid()
      .then((res) => {
      
        setCoffee(res.product);
      })

      .catch((err) => console.log(err));
  }, []);
  useEffect(()=>{
    if(!localStorage.getItem("adminlogin")){
      alert("logged in first to access this page");
      navigate("/admin-login");
    }
    })
  const handleDelete = (id) => {
    deletecoffeebyid(id)
      .then((res) => {
        // console.log(res);
        alert("deleted");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  // console.log(coffee);
  return (
    <>
      <div className="row">
        <Typography
          variant="h2"
          fontFamily={"serif"}
          className="text-center"
          marginY={5}
          sx={{ color: "brown" }}
        >
          Admin Profile
        </Typography>
        <div className="col-sm-12 col-md-4">
          <div className="ms-5 text-center me-5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVnD6DstoRKjRAcCjqDrXpRzTDZPA6CWAQ1A&usqp=CAU"
              alt="Admin images"
              height="auto"
              width="150px"
              className=""
            />

            <p className="border border-dark rounded-pill mt-3 ms-5 me-5">
              Email: admin@test.com
              {/* {admin.email}{" "} */}
            </p>
          </div>
        </div>
        <div className=" col-md-2"></div>
        <div className="col-sm-12 col-md-6 mt-3 w-50 text-center">
          <div className="ms-5 me-5 ">
            <Typography
              variant="h4"
              fontFamily={"serif"}
              marginBottom={5}
              sx={{ color: "#6C3428" }}
            >
              Added Coffee....!
            </Typography>
            <ul className="list-group list-group-flush  mt-2">
              {coffee.map((item, index) => (
                <div
                  className="list-group-item list-group-item-action list-group-item-dark mb-3 d-flex justify-content-between text-dark"
                  key={index}
                  style={{ marginRight: "3rem" }}
                >
                  <p className="fs-4 fw-bold">
                    Coffee:
                    <span className=" ms-3 fs-5 lead">{item.title} </span>
                  </p>
                  <div onClick={() => handleDelete(coffee[index]._id)}>
                    <DeleteIcon fontSize="large" />
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
