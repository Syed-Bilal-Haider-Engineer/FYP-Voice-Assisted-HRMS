import React from "react";
import { Formik, Field, Form } from "formik";
import Errorsg from "../Msgerror/Errormsg";
import schema from "../Yup/Yup";

const selectinput = {
  width: "100%",
  height: "45px",
  border: "1px solid lightgray",
  borderRadius: "6px",
};
const Initivalue = {
  pro_name: "",
  client: "",
  teammem: "",
  start_date: "",
  end_date: "",
  leader: "",
  department: "",
  description: "",
  file: "",
};
function Addproject() {
  return (
    <Formik
      initialValues={Initivalue}
      validationSchema={schema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        alert("submit");
        resetForm();
        //  window.location.replace('Login','/')
      }}
    >
      <div
        id="create_project"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create Project</h5>
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
                      <label>Project Name</label>
                      <Field
                        className="form-control"
                        type="text"
                        name="pro_name"
                      />
                      <Errorsg name="pro_name" className="error" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Client</label>
                      <br />
                      <Field
                        as="select"
                        name="client"
                        className="select"
                        style={selectinput}
                      >
                        <option>Select Clients</option>
                        <option value=""></option>
                      </Field>
                      <Errorsg name="client" className="error" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Start Date</label>
                      <Field
                        name="start_date"
                        className="form-control"
                        type="date"
                      />
                      <Errorsg name="start_date" className="error" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>End Date</label>
                      <Field
                        name="end_date"
                        className="form-control"
                        type="date"
                      />
                      <Errorsg name="end_date" className="error" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Add Project Leader</label>
                      <Field
                        className="form-control"
                        type="text"
                        name="leader"
                      />
                      <Errorsg name="leader" className="error" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Add team members</label>
                      <br />
                      <Field
                        as="select"
                        name="teammem"
                        className="select"
                        style={selectinput}
                      >
                        <option>Select Employee</option>
                        <option value="">Hassan</option>
                      </Field>
                      <Errorsg name="teammem" className="error" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Department</label>
                      <br />
                      <Field
                        as="select"
                        name="department"
                        className="select"
                        style={selectinput}
                      >
                        <option>Select department</option>
                        <option value="">Development</option>
                      </Field>
                      <Errorsg name="department" className="error" />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <Field
                    as="textarea"
                    rows={4}
                    name="description"
                    className="form-control summernote"
                    placeholder="Enter your message here"
                    defaultValue={""}
                  />
                  <Errorsg name="description" className="error" />
                </div>
                <div className="form-group">
                  <label>Upload Files</label>
                  <Field className="form-control" type="file" name="file" />
                  <Errorsg name="file" className="error" />
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Formik>
  );
}

export default Addproject;
