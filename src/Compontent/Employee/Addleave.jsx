import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import Errorsg from "../Msgerror/Errormsg";
import { Leaveschema } from "../Yup/Yup";
import { POST } from "../API/PostAPI";
import { useSelector } from "react-redux";
var userdetials, checkstatus, userID;
if (localStorage.getItem("user")) {
  const Islogin = window.atob(localStorage.getItem("user"));
  userdetials = JSON.parse(Islogin);
  checkstatus = userdetials.token;
  userID = userdetials.id;
}
console.log("userID", userID);
const Initivalue = {
  employee: "",
  starting_at: "",
  ends_on: "",
  reason: "",
  hremail:'',
};
const selectinput = {
  width: "100%",
  height: "45px",
  border: "1px solid lightgray",
  borderRadius: "6px",
};
// .....get email for leave....

function Addleave() {

  const url = "http://localhost/HRMS/Employee/Addleave.php";
  const [add, setAddState] = React.useState();
  const [id, setId] = React.useState({ userID });
  //  fetch employee leave clientInformation.canShare........
  const Employeestate = useSelector((state) => state.Fetchemployeereducer);
  console.log("Employeestate add leave:",Employeestate)
  useEffect(() => {
    const result =
      Employeestate.length > 0 &&
      Employeestate.find(
        (items) => {
          return items.id == userID;
        },
        [Employeestate]
      );
  }, []);
  return (
    <>
      <Formik
        initialValues={Initivalue}
        validationSchema={Leaveschema}
        onSubmit={(values, { resetForm }) => {
          console.log("values",values);
          setAddState({ ...values, ...id });
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
                      <option value="annual">annual </option>
                      <option value="casual">casual </option>
                      <option value="sick">sick </option>
                      <option value="urgent work">urgent work </option>
                       <option value="other">other</option>
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
                    <Field
                      name="ends_on"
                      className="form-control"
                      type="date"
                    />
                    <Errorsg name="ends_on" className="error" />
                  </div>
                  
                  <div className="form-group">
                    <label>
                      Select HR <span className="text-danger">*</span>
                    </label><br/>
                    <Field
                    as="select"
                    className="select selectinput"
                      name="hremail"
                    >
                      <option value="">Select </option>
                      {Employeestate.length >0 && Employeestate.map((items,index)=>{
                      
                      
                      if(items.role==3){
                        return <option  value={items.email}>{items.username}</option>
                      }
                      })}
                      
                    </Field>
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
  );
}

export default Addleave;
