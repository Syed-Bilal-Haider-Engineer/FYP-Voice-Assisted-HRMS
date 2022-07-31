import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import Loading from '../../Loading';
export const POST = ({ values, url, Addstate }) => {
  const [loading, setLoading] = useState(false);
console.log("values",values);

  const navigate = useNavigate();
  const { state } = useLocation();

  const ToastyHandler = (msg, status) => {
    if (status == false) {
      toast.error(`${msg}`);
    } else {
      toast.success(`${msg}`);
    }
  };
  const usersPost = async () => {
    setLoading(true);
    await axios
      .post(url,values)
      .then((response) => {
        setLoading(false);
            console.log("server responces",response.data);
        const status = response.data.status;
        const msg = response.data.message;
        // .......login ............
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
         console.log("response.data.token",response.data.token);
        if(response.data.token==0){
          navigate('/')
        }
        else if(response.data.token==1)
        {
          navigate('/Admindashboard/Employeedashboard')
        }
        else if(response.data.token==2)
        {
          navigate('/Admindashboard/');

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
        setLoading(false);
        const msg = error.message;
        const status = error.status;
        console.log("error message=", msg, "status=", status);
        if (status == false) {
          ToastyHandler(msg, status);
        }
      });
  };
  useEffect(() => {
    values && usersPost();
  }, [values]);


  return <>  <Loading loading={loading} /> </>
};
