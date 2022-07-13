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
  employee:'',
  termination_type:'',
  termidate:'',
  reason:'',
  noticedate:''

} 
function Addterminations() {
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
   
    <div id="add_termination" className="modal custom-modal fade" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Termination</h5>
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
                  Terminated Employee <span className="text-danger">*</span>
                </label>
                <Field className="select" name="employee" style={selectinput}>
                    <option>Hassan</option>
                    <option>Bilal</option>
                  </Field>
                <Errorsg name="employee" className="error" />
              </div>
              <div className="form-group">
                <label>
                  Termination Type <span className="text-danger">*</span>
                </label>
                <div className="add-group-btn">
                  <Field className="select" name="termination_type" style={selectinput}>
                    <option>Misconduct</option>
                    <option>Others</option>
                  </Field>
                  <Errorsg name="termination_type" className="error" />
                </div>
              </div>
              <div className="form-group">
                <label>
                  Termination Date <span className="text-danger">*</span>
                </label>
                <div className="cal-icon">
                  <Field type="text" className="form-control datetimepicker" name="termidate"/>
                  <Errorsg name="termidate" className="error" />
                </div>
              </div>
              <div className="form-group">
                <label>
                  Reason <span className="text-danger">*</span>
                </label>
                <Field as="textarea" className="form-control" name="reason" rows={4}  />
                <Errorsg name="reason" className="error" />
              </div>
              <div className="form-group">
                <label>
                  Notice Date <span className="text-danger">*</span>
                </label>
                <div className="cal-icon">
                  <Field type="text" className="form-control datetimepicker" name="noticedate" />
                  <Errorsg name="noticedate" className="error" />
                </div>
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

export default Addterminations;
