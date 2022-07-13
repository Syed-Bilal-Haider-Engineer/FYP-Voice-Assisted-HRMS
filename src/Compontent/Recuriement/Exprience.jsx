import React from "react";
import logo from "../../Images/logo2.png";
import { NavLink } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import Errorsg from "../Msgerror/Errormsg";
import schema from "../Yup/Yup";
function Exprience() {
const Initivalue={
  designation:"",
  cname:'',
  sdate:'',
  enddate:'',
  cname:"",
  des:"",
  currently:''
}

  return (
    <>
     <Formik
    initialValues={Initivalue}
    validationSchema={schema}
    onSubmit={(values, { resetForm }) => {
      console.log(values);
      alert("submit");
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
                      <label>Designations</label>
                      <Field
                        className="form-control"
                        name="designation"
                        required=""
                        type="text"
                      />
                       <Errorsg name="designation" className="error" />
                    </div>
                    <div className="form-group">
                      <label>Company</label>
                      <Field
                        className="form-control"
                        name="cname"
                        required=""
                        type="text"
                      />
                        <Errorsg name="cname" className="error" />
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
                      <label>Start</label>
                      <Field
                        className="form-control"
                        name="sdate"
                        required=""
                        type="date"
                      />
                        <Errorsg name="sdate" className="error" />
                    </div>
                    <div className="form-group">
                      <label>End date</label>
                      <Field
                        className="form-control"
                        name="enddate"
                        required=""
                        type="date"
                      />
                        <Errorsg name="enddate" className="error" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col">
                        <label>City</label>
                      </div>
                    </div>
                    <Field
                      className="form-control"
                      name="cname"
                      required=""
                      type="text"
                    />
                      <Errorsg name="cname" className="error" />
                  </div>

                  <div className="form-group">
                    <label>Descriptions</label>
                    <Field
                      className="form-control"
                      name="des"
                      required=""
                      type="text"
                    />
                      <Errorsg name="des" className="error" />
                  </div>
                  <div
                    className="form-group"
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <label>Currently</label>
                    <Field
                      style={{
                        width: "20px",
                        height: "20px",
                        marginLeft: "10px",
                      }}
                      className="form-control"
                      name="currently"
                      required=""
                      type="checkbox"
                    />
                      <Errorsg name="currently" className="error" />
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

export default Exprience;
