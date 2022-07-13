import React from "react";
import logo from "../../Images/logo2.png";
import { Formik, Field, Form } from "formik";
import Errorsg from "../Msgerror/Errormsg";
import { Loginschema } from "../Yup/Yup";
function Login() {
  const Initivalue = {
    email: "",
    password: "",
  };
  return (
    <>
      <Formik
        initialValues={Initivalue}
        validationSchema={Loginschema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
          alert("submit");
          //  window.location.replace('Login','/')
        }}
      >
        <div className="main-wrapper">
          <div className="account-content">
            <div className="container">
              {/* Account Logo */}
              <div className="account-logo">
                <a href="index.php">
                  <img src={logo} alt="Company Logo" />
                </a>
              </div>
              <div className="account-box">
                <div className="account-wrapper">
                  <h3 className="account-title">User login</h3>
                  {/* Account Form */}
                  <Form>
                    <div
                      className="input_box"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    ></div>
                    <div
                      className="input_box"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <div className="form-group" style={{ width: "100%" }}>
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

                    <div className="form-group text-center">
                      <button
                        className="btn btn-primary account-btn"
                        name="login"
                        type="submit"
                      >
                        Login
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

export default Login;
