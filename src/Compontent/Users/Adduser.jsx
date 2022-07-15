import React,{useEffect, useState} from "react";
import { Formik, Field, Form } from "formik";
import Errorsg from "../Msgerror/Errormsg";
import {userschema} from "../Yup/Yup";
import {POST} from '../API/PostAPI';
const url="http://localhost/HRMS/Users/Adduser.php";
const Initivalue={
  username:'',
  email:'',
  password:'',
  confirm_pass:'',
  phone:"",
}

function Adduser() {
  const [add,setAddState]=useState(); 
  return (
    <>
    <Formik
    initialValues={Initivalue}
    validationSchema={userschema}
    onSubmit={(values, { resetForm }) => {
      setAddState(values)
      alert("submit");
      resetForm();
      //  window.location.replace('Login','/')
    }}>
    <div id="add_user" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add User</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <Form>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>
                      Username <span className="text-danger">*</span>
                    </label>
                    <Field
                    
                    as="select"
                      className="form-control selectinput"
                      name="username"
                      required=""
                      type="text"
                    >
                         <option>Select username</option>
                         <option>Hassan</option>
                      </Field>
                     <Errorsg name="username" className="error" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>
                      Email <span className="text-danger">*</span>
                    </label>
                    <Field
                      className="form-control"
                      required=""
                      name="email"
                      type="email"
                    />
                    <Errorsg name="email" className="error" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Password</label>
                    <Field
                      className="form-control"
                      name="password"
                      required=""
                      type="password"
                    />
                      <Errorsg name="password" className="error" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <Field
                      className="form-control"
                      name="confirm_pass"
                      required=""
                      type="password"
                    />
                     <Errorsg name="confirm_pass" className="error" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Phone </label>
                    <Field
                      className="form-control"
                      name="phone"
                      required=""
                      type="number"
                    />
                     <Errorsg name="phone" className="error" />
                  </div>
                </div>

                <div className="submit-section">
                  <button
                    type="submit"
                    name="add_user"
                    className="btn btn-primary submit-btn"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
    </Formik>
    {add &&<POST values={add} url={url} Addstate={setAddState}/>}
    </>
  );
}

export default React.memo(Adduser);
