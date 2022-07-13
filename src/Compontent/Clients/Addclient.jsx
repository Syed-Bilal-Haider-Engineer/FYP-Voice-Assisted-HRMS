import React from "react";
import { Formik, Field, Form } from "formik";
import Errorsg from "../Msgerror/Errormsg";
import { Clientschema } from "../Yup/Yup";
function Addclient() {
  const Initivalue = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    clientid: "",
    phone: "",
    company: "",
    address: "",
    propic: "",
  };
  return (
    <Formik
      initialValues={Initivalue}
      validationSchema={Clientschema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        alert("submit");
        resetForm();
        //  window.location.replace('Login','/')
      }}
    >
      <div id="add_client" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Client</h5>
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
                  <div className="col-md-6">
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
                  <div className="col-md-6">
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
                  <div className="col-md-6">
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
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <Field
                        name="email"
                        required=""
                        className="form-control floating"
                        type="email"
                      />
                      <Errorsg name="email" className="error" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Client ID <span className="text-danger">*</span>
                      </label>
                      <Field
                        name="clientid"
                        defaultValue=""
                        readOnly=""
                        className="form-control floating"
                        type="text"
                      />
                      <Errorsg name="clientid" className="error" />
                    </div>
                  </div>
                  <div className="col-md-6">
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
                      <label className="col-form-label">Company Name</label>
                      <Field
                        name="company"
                        required=""
                        className="form-control"
                        type="text"
                      />
                      <Errorsg name="company" className="error" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Address</label>
                      <Field
                        className="form-control"
                        name="address"
                        required=""
                        type="text"
                      />
                      <Errorsg name="address" className="error" />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="custom-file">
                      <label htmlFor="">Client Picture</label>
                      <Field
                        name="propic"
                        type="file"
                        className="custom-file-input"
                        id="validatedCustomFile"
                        required=""
                      />
                      <Errorsg name="propic" className="error" />
                      <label
                        className="custom-file-label"
                        htmlFor="validatedCustomFile"
                      >
                        Choose Profile Picture...
                      </label>
                      <div className="invalid-feedback">
                        Example invalid custom file feedback
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button
                    type="submit"
                    name="add_client"
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

export default Addclient;
