import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const POST = ({ values, url, Addstate }) => {

  const navigate = useNavigate();
  const ToastyHandler = (msg, status) => {
    if (status == false) {
      toast.error(`${msg}`);
    } else {
      toast.success(`${msg}`);
      // setTimeout(() => {
      //   navigate("/login");
      // }, 3000);
    }
  };
  const usersPost = async () => {
    await axios
      .post(url,values)
      .then((response) => {
            console.log("server responces",response.data);
        const status = response.data.status;
        const msg = response.data.message;
        if (response.data.token) {
          console.log("id",response.data.id);
          const token = {
            token: response.data.token,
            id:response.data.id
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
