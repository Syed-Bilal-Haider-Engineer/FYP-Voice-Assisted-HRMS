import React from "react";
import { Formik, Field, Form } from "formik";
import Errorsg from "../Msgerror/Errormsg";
import { Resignationsschema } from "../Yup/Yup";
import { useSelector } from "react-redux";
const Initivalue = {
  employee: "",
  noticedate: "",
  resignation_date: "",
  reason: "",
  department: "",
};

var userid, checkstatus, ID;
if (localStorage.getItem("user")) {
  const Islogin = window.atob(localStorage.getItem("user"));
  userid = JSON.parse(Islogin);
  ID = userid.id;
}

console.log("ID=", ID);
function Addresignations() {
  // ...............Department..............
  const department = useSelector((state) => state.Departmentreducer);
  console.log("department", department);

// .....................Designations....................
const Employeesvalues=useSelector(state=>state.Fetchemployeereducer);

console.log("Employeestate",Employeesvalues);
  return (
    <Formik
      initialValues={Initivalue}
      validationSchema={Resignationsschema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        alert("submit");
        resetForm();
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
                     {Employeesvalues.length > 0 &&
                      Employeesvalues.map((items, index) =>
                        items.EmployeeID == ID ? (
                          <option value={items.EmployeeID}>{items.designation}</option>
                        ) : null
                      )}
                  </Field>
                  <Errorsg name="employee" className="error" />
                </div>
                <div className="form-group">
                  <label>
                    Department <span className="text-danger">*</span>
                    <br />
                  </label>
                  <Field
                    as="select"
                    className="select selectinput"
                    name="department"
                  >
                    {department.length > 0 &&
                      department.map((items, index) =>
                        items.id == ID ? (
                          <option value={items.id}>{items.Department}</option>
                        ) : null
                      )}
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
                      type="date"
                      className="form-control"
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
                      type="date"
                      className="form-control"
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
                   
                    name="reason"
                  />
                  <Errorsg name="reason" className="error" />
                </div>
                <div className="submit-section">
                  <button type="submit" className="btn btn-primary submit-btn">Submit</button>
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
