import React from "react";
import { Formik, Field, Form } from "formik";
import Errorsg from "../Msgerror/Errormsg";
import { Leaveschema } from "../Yup/Yup";
import { POST } from "../API/PostAPI";
var userdetials,checkstatus,userID;
if(localStorage.getItem("user"))
{
const Islogin=window.atob(localStorage.getItem("user"));
 userdetials=JSON.parse(Islogin);
 checkstatus=userdetials.token;
 userID=userdetials.id;
};
const Initivalue = {
 
  employee: "",
  starting_at: "",
  ends_on: "",
  days_count: "",
  reason: "",
};
const selectinput = {
  width: "100%",
  height: "45px",
  border: "1px solid lightgray",
  borderRadius: "6px",
};

function Addleave() {
  const url="http://localhost/HRMS/Employee/Addleave.php";
  const [add, setAddState] = React.useState();
  const [id,setId]=React.useState({userID});

  console.log("add",add);
  return <>
    <Formik
      initialValues={Initivalue}
      validationSchema={Leaveschema}
      onSubmit={(values, { resetForm }) => {
        setAddState({...values,...id});
        resetForm();
        //  window.location.replace('Login','/')
      }}
    >
      <div id="add_leave" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Leave</h5>
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
                    Employee Leaving <span className="text-danger">*</span>
                  </label>
                  <br />
                  <Field
                    as="select"
                    name="employee"
                    className="select"
                    style={selectinput}
                  >
                    <option>Leave type</option>
                    <option value="fewer">Fewer </option>
                  </Field>
                  <Errorsg name="employee" className="error" />
                </div>
              
                <div className="form-group">
                  <label>
                    From <span className="text-danger">*</span>
                  </label>
                  <Field
                    name="starting_at"
                    className="form-control"
                    type="date"
                  />
                  <Errorsg name="starting_at" className="error" />
                </div>
                <div className="form-group">
                  <label>
                    To <span className="text-danger">*</span>
                  </label>
                  <Field name="ends_on" className="form-control" type="date" />
                  <Errorsg name="ends_on" className="error" />
                </div>
                <div className="form-group">
                  <label>
                    Number of days <span className="text-danger">*</span>
                  </label>
                  <Field
                    name="days_count"
                    className="form-control"
                    type="number"
                  />
                  <Errorsg name="days_count" className="error" />
                </div>
                <div className="form-group">
                  <label>
                    Leave Reason <span className="text-danger">*</span>
                  </label>
                  <Field
                    as="textarea"
                    name="reason"
                    rows={4}
                    className="form-control"
                    defaultValue={""}
                  />
                  <Errorsg name="reason" className="error" />
                </div>
                <div className="submit-section">
                  <button
                    type="submit"
                    name="add_leave"
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
    {add && <POST values={add} url={url} Addstate={setAddState} />}
  </>
}

export default Addleave;
