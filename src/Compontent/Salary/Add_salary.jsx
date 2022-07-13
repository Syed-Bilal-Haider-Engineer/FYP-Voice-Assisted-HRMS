import React from "react";
import { Formik, Field, Form } from "formik";
import Errorsg from "../Msgerror/Errormsg";
import schema from "../Yup/Yup";
const Initivalue={
  staff:"",
  netsalary:'',
  conveyance:'',
  Allowance:'',
  medical:"",
  fixed:'',
  leave:'',
  tax:'',
  labour:"",
  others:''
}
const selectinput = {
  width: "100%",
  height: "45px",
  border: "1px solid lightgray",
  borderRadius: "6px",
};
function Add_salary() {
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
      <div id="add_salary" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Staff Salary</h5>
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
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Select Staff</label>
                      <Field as="select" name="staff" className="select" style={selectinput}>
                        <option>John Doe</option>
                        <option>Richard Miles</option>
                      </Field>
                      <Errorsg name="staff" className="error" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label>Net Salary</label>
                    <Field
                      className="form-control"
                      name="netsalary"
                      type="text"
                    />
                     <Errorsg name="netsalary" className="error" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Conveyance</label>
                      <Field
                        className="form-control"
                        type="text"
                        name="conveyance"
                      />
                       <Errorsg name="conveyance" className="error" />
                    </div>
                    <div className="form-group">
                      <label>Allowance</label>
                      <Field
                        className="form-control"
                        type="text"
                        name="Allowance"
                      />
                       <Errorsg name="Allowance" className="error" />
                    </div>
                    <div className="form-group">
                      <label>Medical Allowance</label>
                      <Field
                        className="form-control"
                        type="text"
                        name="medical"
                      />
                       <Errorsg name="medical" className="error" />
                    </div>
                    <div className="form-group">
                      <label>Fixed/Hourly</label>
                      <Field
                        className="form-control"
                        type="text"
                        name="fixed"
                      />
                       <Errorsg name="fixed" className="error" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Leave</label>
                      <Field
                        className="form-control"
                        type="text"
                        name="leave"
                      />
                       <Errorsg name="leave" className="error" />
                    </div>
                    <div className="form-group">
                      <label>Prof. Tax</label>
                      <Field className="form-control" type="text" name="tax" />
                      <Errorsg name="tax" className="error" />
                    </div>
                    <div className="form-group">
                      <label>Labour Welfare</label>
                      <Field className="form-control" type="text" name="labour" />
                      <Errorsg name="labour" className="error" />
                    </div>
                    <div className="form-group">
                      <label>Others</label>
                      <Field className="form-control" type="text" name="others" />
                      <Errorsg name="others" className="error" />
                    </div>
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

export default Add_salary;
