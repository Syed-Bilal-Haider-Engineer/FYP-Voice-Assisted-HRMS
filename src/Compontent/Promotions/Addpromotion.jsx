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
  promotion_from: "",
  promotion_to: "",
  employee: "",
};
function Addpromotion() {
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
      <div id="add_promotion" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Promotion</h5>
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
                    Promotion From <span className="text-danger">*</span>
                  </label>
                  <Field
                    className="form-control"
                    type="text"
                    defaultValue="Web Developer"
                    readOnly=""
                    name="promotion_to"
                  />
                  <Errorsg name="promotion_from" className="error" />
                </div>
                <div className="form-group">
                  <label>
                    Promotion To <span className="text-danger">*</span>
                    <br />
                  </label>
                  <Field
                    as="select"
                    className="select"
                    name="promotion_to"
                    style={selectinput}
                  >
                    <option>Web Developer</option>
                    <option>Web Designer</option>
                    <option>SEO Analyst</option>
                  </Field>
                  <Errorsg name="promotion_to" className="error" />
                </div>
                <div className="form-group">
                  <label>
                    Employee<span className="text-danger">*</span>
                    <br />
                  </label>
                  <Field
                    as="select"
                    className="select"
                    name="employee"
                    style={selectinput}
                  >
                    <option>Hassan</option>
                  </Field>
                  <Errorsg name="employee" className="error" />
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

export default Addpromotion;
