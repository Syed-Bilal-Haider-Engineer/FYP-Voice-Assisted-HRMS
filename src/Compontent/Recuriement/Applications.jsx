import React,{useEffect} from "react";
import logo from "../../Images/logo2.png";
import { NavLink } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import Errorsg from "../Msgerror/Errormsg";
import schema from "../Yup/Yup";
import { useNavigate } from "react-router-dom";
const Initivalue={
  instituename:'',
  degree:'',
  startdate:'',
  Enddate:'',
  address:'',
  cgpa:'',
  phone:"",
  des:'',
  attend:"",
  subject:'',
  resume:''
}
function Apply() {
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
            {/* Account Logo */}

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
                      <label>Institute name</label>
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
                      <label>start date</label>
                      <Field
                        className="form-control"
                        name="startdate"
                        required=""
                        type="date"
                      />
                      <Errorsg name="startdate" className="error" />
                    </div>
                    <div className="form-group">
                      <label>end date</label>
                      <Field
                        className="form-control"
                        name="Enddate"
                        required=""
                        type="date"
                      />
                      <Errorsg name="Enddate" className="error" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col">
                        <label>Address</label>
                      </div>
                    </div>
                    <Field
                      className="form-control"
                      name="address"
                      required=""
                      type="text"
                    />
                    <Errorsg name="address" className="error" />
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col">
                        <label>CPGA</label>
                      </div>
                    </div>
                    <Field
                      className="form-control"
                      name="cgpa"
                      required=""
                      type="number"
                    />
                    <Errorsg name="cgpa" className="error" />
                  </div>
                  <div className="form-group">
                    <label>Phone#</label>
                    <Field
                      className="form-control"
                      name="phone"
                      required=""
                      type="text"
                    />
                    <Errorsg name="phone" className="error" />
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
                  <div className="form-group">
                    <label>resume</label>
                    <Field
                      className="form-control"
                      name="resume"
                      required=""
                      type="file"
                    />
                    <Errorsg name="resume" className="error" />
                  </div>
                  <div className="form-group text-center">
                    <button
                      className="btn btn-primary account-btn"
                      name="login"
                      type="submit"
                    >
                      <NavLink to="/Exprience" style={{ color: "white" }}>
                        Next
                      </NavLink>
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
