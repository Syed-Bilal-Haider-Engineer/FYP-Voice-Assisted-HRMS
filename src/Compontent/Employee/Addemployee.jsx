import React from "react";
import { Formik, Field, Form } from "formik";
import Errorsg from "../Msgerror/Errormsg";
import { employeeshema } from "../Yup/Yup";
const selectinput = {
  width: "100%",
  height: "45px",
  border: "1px solid lightgray",
  borderRadius: "6px",
};
const Initivalue = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  confirm_pass: "",
  employee_id: "",
  phone: "",
  department: "",
  designation: "",
  picture: "",
};
function Addemployee() {
  return (
    <Formik
      initialValues={Initivalue}
      validationSchema={employeeshema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        alert("submit");
        resetForm();
        //  window.location.replace('Login','/')
      }}
    >
      <div id="add_employee" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Employee</h5>
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
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <Field
                        name="firstname"
                        required=""
                        className="form-control"
                        type="text"
                      />
                      <Errorsg name="firstname" className="error" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">Last Name</label>
                      <Field
                        name="lastname"
                        required=""
                        className="form-control"
                        type="text"
                      />
                      <Errorsg name="lastname" className="error" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Username <span className="text-danger">*</span>
                      </label>
                      <Field
                        name="username"
                        required=""
                        className="form-control"
                        type="text"
                      />
                      <Errorsg name="username" className="error" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <Field
                        name="email"
                        required=""
                        className="form-control"
                        type="email"
                      />
                      <Errorsg name="email" className="error" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">Password</label>
                      <Field
                        className="form-control"
                        required=""
                        name="password"
                        type="password"
                      />
                      <Errorsg name="password" className="error" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">Confirm Password</label>
                      <Field
                        className="form-control"
                        required=""
                        name="confirm_pass"
                        type="password"
                      />
                      <Errorsg name="confirm_pass" className="error" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Employee ID <span className="text-danger">*</span>
                      </label>
                      <Field
                        name="employee_id"
                        readOnly=""
                        type="text"
                        defaultValue=""
                        className="form-control"
                      />
                      <Errorsg name="employee_id" className="error" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">Phone </label>
                      <Field
                        name="phone"
                        required=""
                        className="form-control"
                        type="text"
                      />
                      <Errorsg name="phone" className="error" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Department <span className="text-danger">*</span>
                      </label>
                      <Field
                        as="select"
                        required=""
                        name="department"
                        className="select"
                        style={selectinput}
                      >
                        <option>Select Department</option>
                        <option>Developement</option>
                        <option>Networking</option>
                      </Field>
                      <Errorsg name="department" className="error" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Designation <span className="text-danger">*</span>
                      </label>
                      <Field
                        as="select"
                        required=""
                        name="designation"
                        className="select"
                        style={selectinput}
                      >
                        <option>Select Designation</option>
                        <option>Web developer</option>
                        <option>Graph designer</option>
                      </Field>
                      <Errorsg name="designation" className="error" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="col-form-label">Employee Picture</label>
                      <Field
                        className="form-control"
                        required=""
                        name="picture"
                        type="file"
                      />
                      <Errorsg name="picture" className="error" />
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button
                    type="submit"
                    name="add_employee"
                    className="btn btn-primary submit-btn"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Formik>
  );
}

export default Addemployee;
