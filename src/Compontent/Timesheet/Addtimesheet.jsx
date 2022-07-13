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
const Initivalue={
  project:'',
  file:"",
  description:''

}
function Addtimesheet() {
  return (
    <>
    <Formik
    initialValues={Initivalue}
    validationSchema={schema}
    onSubmit={(values, { resetForm }) => {
      console.log(values);
      alert("submit");
      resetForm();
      //  window.location.replace('Login','/')
    }}>
    <div id="add_todaywork" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Today Work details</h5>
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
                <div className="form-group col-sm-12">
                  <label>
                    Project <span className="text-danger">*</span>
                  </label>
                  <br />
                  <Field as="select" name="project" className="select" style={selectinput}>
                    <option>Office Management</option>
                    <option>Project Management</option>
                    <option>Video Calling App</option>
                    <option>Hospital Administration</option>
                  </Field>
                  <Errorsg name="project" className="error" />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-sm-4">
                  <label>
                    Deadline <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                    <Field
                      className="form-control"
                      type="text"
                      defaultValue="5 May 2019"
                      readOnly=""
                     
                    />

                  </div>
                </div>
                <div className="form-group col-sm-4">
                  <label>
                    Total Hours <span className="text-danger">*</span>
                  </label>
                  <Field
                    className="form-control"
                    type="text"
                    defaultValue={100}
                    readOnly=""
                  />
                </div>
                <div className="form-group col-sm-4">
                  <label>
                    Remaining Hours <span className="text-danger">*</span>
                  </label>
                  <Field
                    className="form-control"
                    type="text"
                    defaultValue={60}
                    readOnly=""
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-sm-12">
                  <label>
                    File <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                    <Field className="form-control" type="file" name="file"/>
                    <Errorsg name="file" className="error"  />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>
                  Description <span className="text-danger">*</span>
                </label>
                <Field as="textarea" rows={4} className="form-control" name="description" defaultValue={""} />
                <Errorsg name="description" className="error"  />
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
    </>
  );
}

export default Addtimesheet;
