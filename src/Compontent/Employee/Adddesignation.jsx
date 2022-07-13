import React from "react";
import { Formik, Field, Form } from "formik";
import Errorsg from "../Msgerror/Errormsg";
import { designationschema } from "../Yup/Yup";
const selectinput = {
  width: "100%",
  height: "45px",
  border: "1px solid lightgray",
  borderRadius: "6px",
};
function Adddesignation() {
  const Initivalue = {
    designation: "",
    department: "",
  };
  return (
    <Formik
      initialValues={Initivalue}
      validationSchema={designationschema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        alert("submit");
        resetForm();
        //  window.location.replace('Login','/')
      }}
    >
      <div
        id="add_designation"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Designation</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <Form>
                <div className="form-group">
                  <label>
                    Designation Name <span className="text-danger">*</span>
                  </label>
                  <Field
                    name="designation"
                    required=""
                    className="form-control"
                    type="text"
                  />
                  <Errorsg name="designation" className="error" />
                </div>
                <div className="form-group">
                  <label>
                    Department <span className="text-danger">*</span>
                  </label>
                  <Field
                    required=""
                    as="select"
                    name="department"
                    className="select"
                    style={selectinput}
                  >
                    <option>Select Department</option>
                    <option value="Department" disabled>
                      Department
                    </option>
                    <option value="Department">Development</option>
                  </Field>
                  <Errorsg name="department" className="error" />
                </div>
                <div className="submit-section">
                  <button
                    name="add_designation"
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
  );
}

export default Adddesignation;
