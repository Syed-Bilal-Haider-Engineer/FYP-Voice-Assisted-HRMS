import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const POST = ({ values, url, Addstate }) => {
  const navigate = useNavigate();
  const ToastyHandler = (msg, status) => {
    if (status == false) {
      toast.error(`${msg}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success(`${msg}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // setTimeout(() => {
      //   navigate("/login");
      // }, 3000);
    }
  };
  const usersPost = async () => {
    await axios
      .post(url, values)
      .then((response) => {
            console.log(response.data);
        const status = response.data.status;
        const msg = response.data.message;
        // console.log("success message=", msg, "status=", status);
         
        // ...........Generate Token For login.............
        if (response.data.token) {
          const token = {
            token: response.data.token,
          };
          const string = JSON.stringify(token);
          const encrypt=window.btoa(string);
           localStorage.setItem("user",encrypt);
        }
        
        Addstate("");
        if (status == true) {
          ToastyHandler(msg, status);
        } else {
          ToastyHandler(msg, status);
        }
      })
      .catch((error) => {
        console.log(error);
        const msg = error.message;
        const status = error.status;
        console.log("error message=", msg, "status=", status);
        if (status == false) {
          ToastyHandler(msg, status);
        }
      });
    // console.log("values",values,"url",url);
  };
  useEffect(() => {
    values && usersPost();
  }, [values]);
};
