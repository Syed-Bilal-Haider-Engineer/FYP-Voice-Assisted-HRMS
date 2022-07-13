import React from "react";
import { Formik, Field, Form } from "formik";
import Errorsg from "../Msgerror/Errormsg";
import { jobschema } from "../Yup/Yup";
const selectinput = {
  width: "100%",
  height: "45px",
  border: "1px solid lightgray",
  borderRadius: "6px",
};
const Initivalue = {
  title: "",
  enddate: "",
  city: "",
  category: "",
  status: "",
  file: "",
  Notice: "",
};
function Addjobs() {
  return (
    <>
      <Formik
        initialValues={Initivalue}
        validationSchema={jobschema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          alert("submit");
          resetForm();
          //  window.location.replace('Login','/')
        }}
      >
        <div id="add_jobs" className="modal custom-modal fade" role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Job</h5>
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
                          Title <span className="text-danger">*</span>
                        </label>
                        <Field
                          className="form-control"
                          required=""
                          name="title"
                          type="text"
                        />
                        <Errorsg name="title" className="error" />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>
                          Closing date <span className="text-danger">*</span>
                        </label>
                        <Field
                          className="form-control"
                          required=""
                          name="enddate"
                          type="date"
                        />
                        <Errorsg name="enddate" className="error" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>
                          City <span className="text-danger">*</span>
                        </label>
                        <Field
                          className="form-control"
                          required=""
                          name="city"
                          type="text"
                        />
                        <Errorsg name="city" className="error" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Category</label>
                        <Field
                          as="select"
                          name="category"
                          className="select"
                          style={selectinput}
                        >
                          <option value={0}>website developer</option>
                          <option value={1}>Website designer</option>
                        </Field>
                        <Errorsg name="category" className="error" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Status </label>
                        <Field
                          as="select"
                          name="status"
                          className="select"
                          style={selectinput}
                        >
                          <option>Active</option>
                          <option>Inactive</option>
                        </Field>
                        <Errorsg name="status" className="error" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>
                          File <span className="text-danger">*</span>
                        </label>
                        <Field
                          type="file"
                          className="form-control"
                          required=""
                          name="file"
                        />
                        <Errorsg name="file" className="error" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>Notice</label>
                        <Field
                          as="textarea"
                          rows={4}
                          name="Notice"
                          className="form-control summernote"
                          placeholder="Enter your message here"
                          defaultValue={""}
                        />
                        <Errorsg name="Notice" className="error" />
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
    </>
  );
}

export default Addjobs;
