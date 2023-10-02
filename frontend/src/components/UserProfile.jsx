import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("userlogin")) {
      alert("logged in first to access profile");
      navigate("/user-login");
    }
  });
  return (
    <div>
      <p className="display-5 text-center mt-3 mb-5">User Profile</p>
      <div className="col-sm-12 col-md-6 mt-5 m-auto">
        <div className="ms-5 text-center me-5 mb-5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVnD6DstoRKjRAcCjqDrXpRzTDZPA6CWAQ1A&usqp=CAU"
            alt="user images"
            height="auto"
            width="150px"
            className=""
          />
          <p className="border border-dark rounded-pill mt-3 ms-5 me-5">
            Name: Nidhi Tulsyan
          </p>
          <p className="border border-dark rounded-pill mt-3 ms-5 me-5">
            Email: nidhi@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
