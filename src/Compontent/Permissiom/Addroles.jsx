import React from "react";
import { Formik, Field, Form } from "formik";
import Errorsg from "../Msgerror/Errormsg";
import schema from "../Yup/Yup";
const Initivalue = {
  role: "",
};
function Addroles() {
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
      <div id="add_role" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Role</h5>
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
                    Role Name <span className="text-danger">*</span>
                  </label>
                  <Field className="form-control" type="text" name="role" />
                  <Errorsg name="role" className="error" />
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

export default Addroles;
