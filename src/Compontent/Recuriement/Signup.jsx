import React, { useEffect, useState } from "react";
import logo from "../../Images/logo2.png";
import { Formik, Field, Form } from "formik";
import Errorsg from "../Msgerror/Errormsg";
import { NavLink } from "react-router-dom";
import schema from "../Yup/Yup";
import { POST } from "../API/PostAPI";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const url = "http://localhost/HRMS/Visters/Visters.php";
function Signup() {
  const Initivalue = {
    fname: "",
    lname: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  };
  const [add, setAddState] = useState("");
  // console.log("add",add);

  return (
    <>
      <div style={{ marginTop: "4%" }}>
        <Formik
          initialValues={Initivalue}
          validationSchema={schema}
          onSubmit={(values, { resetForm }) => {
            // console.log(values);
            setAddState(values);
            alert("submit");
            resetForm();
            //  window.location.replace('Login','/')
          }}
        >
          <div className="main-wrapper">
            <div className="account-content">
              <div className="container">
                <div className="account-box">
                  <div className="account-wrapper">
                    <h3 className="account-title"> Signup Form</h3>
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
                          <label>First Name</label>
                          <Field
                            className="form-control"
                            name="fname"
                            required
                            type="text"
                          />
                          <Errorsg name="fname" className="error" />
                        </div>
                        <div className="form-group">
                          <label>Last Name</label>
                          <Field
                            className="form-control"
                            name="lname"
                            required
                            type="text"
                          />
                          <Errorsg name="lname" className="error" />
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
                          <label>User Name</label>
                          <Field
                            className="form-control"
                            name="username"
                            required
                            type="text"
                          />
                          <Errorsg name="username" className="error" />
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <Field
                            className="form-control"
                            name="email"
                            required
                            type="email"
                            placeholder="Enter email"
                          />
                          <Errorsg name="email" className="error" />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col">
                            <label>Password</label>
                          </div>
                        </div>
                        <Field
                          className="form-control"
                          type="password"
                          required
                          name="password"
                        />
                        <Errorsg name="password" className="error" />
                      </div>
                      <div className="form-group">
                        <label>Phone#</label>
                        <Field
                          className="form-control"
                          name="phone"
                          required
                          type="tel"
                        />
                        <Errorsg name="phone" className="error" />
                      </div>
                      <div className="form-group">
                        <label>Address</label>
                        <Field
                          className="form-control"
                          name="address"
                          required
                          type="text"
                        />
                        <Errorsg name="address" className="error" />
                      </div>

                      <div className="form-group text-center">
                        <button
                          className="btn btn-primary account-btn"
                          name="login"
                          type="submit"
                        >
                          Singup
                        </button>
                        <div className="col-auto pt-2">
                          <NavLink
                            to="/"
                            className="text-muted float-left"
                            style={{ textDecoration: "none" }}
                          >
                            Home
                          </NavLink>
                          <NavLink
                            className="text-muted float-right"
                            to="/login"
                          >
                            Login..
                          </NavLink>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Formik>
        {add && <POST values={add} url={url} Addstate={setAddState} />}
      </div>
    </>
  );
}

export default React.memo(Signup);
