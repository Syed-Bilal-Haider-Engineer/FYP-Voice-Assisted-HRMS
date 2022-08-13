import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import Loading from "../../Loading";
import { useDispatch } from "react-redux";
import {
  Showusers,
  Getcategory,
  fetchvister,
  fetchJob,
  Fetchdepartment,
  Fetchdesignation,
  fetchHolidays,
  Userapplications,
  FetchEmployee,
  FetchEmployeeleave,
  project,
  Clientinfo,
  Tasksdata,
  Notice,
  Attendance,
  contactususer,
  settingaction
} from "../Redux/Actions/Actions";
import { emailAPI } from "../Recuriement/url";
export const POST = ({ values, url, Addstate,hremail }) => {
  console.log("values",values);
  // .....fetch user login details.......
  var Role, checkstatus,id,email;
  if (localStorage.getItem("user")) {
    const Islogin = window.atob(localStorage.getItem("user"));
    Role = JSON.parse(Islogin);
    checkstatus = Role.token;
    id=Role.id;
    email=Role.email;
  }
// .....close login Details........
  const usedispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toastyHandler = (msg, status) => {
    if (status == false) {
      toast.error(`${msg}`);
      Addstate("");
    } else {
      toast.success(`${msg}`);
      Addstate("");
    }
  };

  // Applications email....
  const Applicationemailhandler=()=>{
    try {
      let body = {
        email:values.applicationemail
      };
      axios.post(emailAPI + "/sendMail", body).then((resp) => {
        console.log("resp.data", resp.data);
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Application email error",error);
    }
  }
  
  const usersPost = async () => {
    setLoading(true);
    await axios
      .post(url, values)
      .then((response) => {
        setLoading(false);
        console.log("response",response.data);
        const status = response.data.status;
        const msg = response.data.message;
        const emailstatus = response.data.sendemail;
        // .....Post Update and Delete Response Implimentation..........
        if (response.data.Editecategory) {
          usedispatch(Getcategory(response.data.Editecategory));
        } else if (response.data.Jobdetails) {
          usedispatch(fetchJob(response.data.Jobdetails));
        } else if (response.data.visterdetails) {
          usedispatch(fetchvister(response.data.visterdetails));
        } 
        else if(response.data.tasks)
        {
          usedispatch(Tasksdata(response.data.tasks))

        }
        else if (response.data.leavedetails) {
          usedispatch(FetchEmployeeleave(response.data.leavedetails));
          if (emailstatus) {
            setLoading(true);
            try {
              let body = {
                email:values.hremail
              };
              axios.post(emailAPI + "/sendMail", body).then((resp) => {
                console.log("resp.data", resp.data);
              });
              setLoading(false);
            } catch (error) {
              setLoading(false);
              console.log("leave email error",error);
            }
          }
        } else if (response.data.applicationstatus) {
          usedispatch(Userapplications(response.data.applicationstatus));
           if(response.data.Appstatus==1)
           {
            Applicationemailhandler();
           }

        } else if (response.data.holidaydetails) {
          usedispatch(fetchHolidays(response.data.holidaydetails));
         
        }else if(response.data.contactus)
        {
          usedispatch(contactususer(response.data.contactus))
        }
         else if (response.data.departments) {
          usedispatch(Fetchdepartment(response.data.departments));
        } else if (response.data.designations) {
          usedispatch(Fetchdesignation(response.data.designations));
        } else if (response.data.attedance) {
          usedispatch(Attendance(response.data.attedance));
        }
        else if(response.data.projectdetails)
        {
           usedispatch(project(response.data.projectdetails));
        }
        else if(response.data.notice)
        {
          usedispatch(Notice(response.data.notice));
        }
        else if(response.data.clients){
          usedispatch(Clientinfo(response.data.clients));
        }
        // ....Employee Details.....
        else if(response.data.employeeinfo)
        {
      usedispatch(FetchEmployee(response.data.employeeinfo))
        }
        else if(response.data.setting)
        {
          usedispatch(settingaction(response.data.setting));
        }
        // .....End, Post ,deletiona and update....
        // .......login ............
        if (response.data.token) {
          const token = {
            token: response.data.token,
            id: response.data.id,
            email:response.data.email
          };

          // ......Islogin  token store in Localstorage....
          const string = JSON.stringify(token);
          const encrypt = window.btoa(string);
          localStorage.setItem("user", encrypt);
        }
        //  console.log("response.data.token",response.data.token);

        // zero mean normal users,
        // before the employee and one role mean
        // login Employee and two role mean islogin admin
        if (response.data.token == 0) {
          navigate("/");
        } else if (response.data.token == 1) {
          navigate("/Admindashboard/Employeedashboard");
        } else if (response.data.token == 2) {
          navigate("/Admindashboard");
        }
        //  ....Login End.....

        if (status == true) {
          toastyHandler(msg, status);
        } else {
          toastyHandler(msg, status);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        const msg = error.message;
        const status = error.status;
        console.log("error message=", msg, "status=", status);
        if (status == false) {
          toastyHandler(msg, status);
        }
      });
  };
  useEffect(() => {
    values && usersPost();
  }, [values]);

  return (
    <>
      <Loading loading={loading} />
    </>
  );
};
