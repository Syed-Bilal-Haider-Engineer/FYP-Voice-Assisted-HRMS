import React from "react";
import { Formik, Field, Form } from "formik";
import Errorsg from "../Msgerror/Errormsg";
import { Holidayschema } from "../Yup/Yup";
function Addholiday() {
  const Initivalue = {
    holiday: "",
    date: "",
  };
  return (
    <>
      <Formik
        initialValues={Initivalue}
        validationSchema={Holidayschema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          alert("submit");
          resetForm();
          //  window.location.replace('Login','/')
        }}
      >
        <div className="modal custom-modal fade" id="add_holiday" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Holiday</h5>
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
                      Holiday Name <span className="text-danger">*</span>
                    </label>
                    <Field
                      name="holiday"
                      className="form-control"
                      required=""
                      type="text"
                    />
                    <Errorsg name="holiday" className="error" />
                  </div>
                  <div className="form-group">
                    <label>
                      Holiday Date <span className="text-danger">*</span>
                    </label>
                    <Field
                      className="form-control"
                      name="date"
                      required=""
                      type="date"
                    />
                    <Errorsg name="date" className="error" />
                  </div>
                  <div className="submit-section">
                    <button
                      name="add_holiday"
                      type="submit"
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
    </>
  );
}

export default Addholiday;
