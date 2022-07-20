import React,{useContext, useEffect,useRef} from "react";
import logo from "../../Images/logo2.png";
import { NavLink } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import Errorsg from "../Msgerror/Errormsg";
import { toast } from "react-toastify";
import axios from "axios";
import {Applicationschema} from "../Yup/Yup";
function Apply() {
  const url="http://localhost/HRMS/Application/Application.php";
  const formData = new FormData();
const Initivalue={
  id:'',
   designation:"",
   companyname:'',
    des:"",
   degree:'',
   instituename:"",
   totalexp:"",
   cgpa:"",
   attend:"",
    degreeyear:"",
  subject:""
}
var Role,checkstatus;
  if(localStorage.getItem("user"))
  {
  const Islogin=window.atob(localStorage.getItem("user"));
   Role=JSON.parse(Islogin);
   checkstatus=Role.id;
  };
  console.log("id",checkstatus);
const inputRef = useRef(null);
const filehandler = async (values) => {
  const img = inputRef.current.files[0];
  formData.append("id",values.id);
   formData.append("designation",values.designation);
   formData.append("degreeyear",values.degreeyear);
   formData.append("totalexp",values.totalexp);
   formData.append("companyname",values.cname);
   formData.append("img",img);
   formData.append("description",values.des);
   formData.append("degree",values.degree);
   formData.append("totalexp",values.totalexp);
   formData.append("cgpa",values.cgpa);
   formData.append('attend',values.attend);
   formData.append('subject',values.subject);
   formData.append("instituename",values.instituename);
   //........Application Educations form............

   try {
    const response = await axios.post(url,formData,{headers:{ "Content-Type": "multipart/form-data" }});
    const msg=response.data;
    if(response.status==200)
    {
      toast.success(`${msg}`);
    }
  } catch(error) {
    toast.success(`${error}`);
  }
};
  return (
    <>
     <Formik
    initialValues={Initivalue}
    validationSchema={Applicationschema}
    onSubmit={(values, { resetForm }) => {
      values && filehandler(values);
      
      resetForm();
      //  window.location.replace('Login','/')
    }}>
      <div className="main-wrapper">
        <div className="account-content">
          <div className="container">
            <div className="account-box">
              <div className="account-wrapper">
                <h3 className="account-title">Applications Form</h3>
                {/* Account Form */}
                <Form>
                  <div
                    className="input_box"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                      <div className="form-group">
                      <Field
                        className="form-control"
                        name="id"
                        required=""
                        type="hidden"
                        value={checkstatus}
                      />  
                    </div>
                    <div className="form-group">
                      <label>Univeristy name</label>
                      <Field
                        className="form-control"
                        name="instituename"
                        required=""
                        type="text"
                      />
                       <Errorsg name="instituename" className="error" />
                    </div>
                    <div className="form-group">
                      <label>Degree</label>
                      <Field
                        className="form-control"
                        name="degree"
                        required=""
                        type="text"
                      />
                       <Errorsg name="degree" className="error" />
                    </div>
                  </div>
                  <div
                    className="input_box"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div className="form-group">
                      <label>Degree year</label>
                      <Field
                        className="form-control"
                        name="degreeyear"
                        required=""
                        type="text"
                      />
                      <Errorsg name="degreeyear" className="error" />
                    </div>
                    <div className="form-group">
                        <label>CPGA</label>
                    <Field
                      className="form-control"
                      name="cgpa"
                      required=""
                      type="number"
                    />
                    <Errorsg name="cgpa" className="error" />
                  </div>
                  </div>
                
                  
                  <div className="form-group">
                    <label>Attend</label>
                    <Field
                      className="form-control"
                      name="attend"
                      required=""
                      type="text"
                    />
                    <Errorsg name="attend" className="error" />
                  </div>
                  <div className="form-group">
                    <label>Major subjects</label>
                    <Field
                      className="form-control"
                      name="subject"
                      required=""
                      type="text"
                    />
                    <Errorsg name="subject" className="error" />
                  </div>
                 
                    <span style={{fontWeight:'bold',color:'red'}}>Experience</span>
                    <hr/>
                     
                    <div className="form-group">
                      <label>Company</label>
                      <Field
                        className="form-control"
                        name="companyname"
                        required=""
                        type="text"
                      />
                        <Errorsg name="companyname" className="error" />
                    </div>
                    <div className="form-group">
                      <label>Designations</label>
                      <Field
                        className="form-control"
                        name="designation"
                        required=""
                        type="text"
                      />
                       <Errorsg name="designation" className="error" />
                    </div>
                  <div
                    className="input_box"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div className="form-group" style={{width:'100%'}}>
                      <label>Experience</label>
                      <Field
                        className="form-control"
                        name="totalexp"
                        required=""
                        type="text"
                      />
                        <Errorsg name="totalexp" className="error" />
                    </div>
                  
                  </div>
             

                  <div className="form-group">
                    <label>Descriptions</label>
                    <Field
                      className="form-control"
                      as="textarea"
                      rows="5"
                      name="des"
                      required=""
                      type="text"
                    />
                      <Errorsg name="des" className="error" />
                  </div>
                
                  <div className="col-sm-12">
                      <div className="form-group">
                        <label>
                          File <span className="text-danger">*</span>
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          required=""
                          name="file"
                          ref={inputRef}
                        />
                       
                      </div>
                    </div>
                  <div className="form-group text-center">
                    <button
                      className="btn btn-primary account-btn"
                      name="login"
                      type="submit"
                    >
                      Apply
                    </button>
                    <div className="col-auto pt-2">
                      <a
                        className="text-muted float-right"
                        href="forgot-password.php"
                      >
                        Login..
                      </a>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Formik>
    </>
  );
}

export default Apply;
