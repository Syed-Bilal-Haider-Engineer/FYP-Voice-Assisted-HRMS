import React from "react";
import { Formik, Field, Form } from "formik";
import Errorsg from "../Msgerror/Errormsg";
import schema from "../Yup/Yup";

const Initivalue={
  employee:'',
  noticedate:'',
  resignation_date:'',
  reason:''
}
function Addresignations() {
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
        id="add_resignation"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Resignation</h5>
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
              <div className="form-group">
                  <label>
                    Employee Resignations <span className="text-danger">*</span>
                    <br />
                  </label>
                  <Field
                    as="select"
                    className="select selectinput"
                    name="employee"
                   
                  >
                    <option>Hassan</option>
                    <option>Ali</option>
                    <option>SEO Analyst</option>
                  </Field>
                  <Errorsg name="employee" className="error" />
                </div>
                <div className="form-group">
                  <label>
                    Notice Date <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                    <Field
                      name="noticedate"
                      type="text"
                      className="form-control datetimepicker"
                    />
                    <Errorsg name="noticedate" className="error" />
                  </div>
                </div>
                <div className="form-group">
                  <label>
                    Resignation Date <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                    <Field
                      type="text"
                      className="form-control datetimepicker"
                      name="resignation_date"
                    />
                    <Errorsg name="resignation_date" className="error" />
                  </div>
                </div>
                <div className="form-group">
                  <label>
                    Reason <span className="text-danger">*</span>
                  </label>
                  <Field
                    as="textarea"
                    className="form-control"
                    rows={4}
                    defaultValue={""}
                    name="reason"
                  />
                  <Errorsg name="reason" className="error" />
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

export default Addresignations;
