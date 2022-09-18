import React,{ useState} from "react";
import { Formik, Field, Form } from "formik";
import Errorsg from "../Msgerror/Errormsg";
import { Loginschema } from "../Yup/Yup";
import {POST} from '../API/PostAPI';
import { useNavigate,Link } from "react-router-dom";

const url="http://localhost/HRMS/visters/Login.php";
function Login() {
  const navigate = useNavigate();
  const Initivalue = {
    email: "",
    password: "",
  };
  const [add,setAddState]=useState('');
  return (
    <>
    <div style={{marginTop:"7%"}}>
      <Formik
        initialValues={Initivalue}
        validationSchema={Loginschema}
        onSubmit={(values, { resetForm }) => {
          // console.log(values);
          setAddState(values);
          resetForm();
        }}
      >
        <div className="main-wrapper">
          <div className="account-content">
            <div className="container">
              <div className="account-box">
                <div className="account-wrapper">
                  <h3 className="account-title"> login Form</h3>
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
                      <Link
                            to="/"
                            className="text-muted float-left"
                            style={{ textDecoration: "none" }}
                          >
                            Home
                          </Link>
                        <Link
                          className="text-muted float-right"
                         to="/Signup"
                        >
                          Signup..
                        </Link>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Formik>
      {add && <POST values={add} url={url} Addstate={setAddState}/>}
      </div>
    </>
  );
}

export default Login;
