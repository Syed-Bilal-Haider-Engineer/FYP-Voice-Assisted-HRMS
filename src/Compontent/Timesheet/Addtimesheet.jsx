import React from "react";
import { Formik, Field, Form } from "formik";
import Errorsg from "../Msgerror/Errormsg";
import { taskschema } from "../Yup/Yup";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {POST} from '../API/PostAPI';
const url="http://localhost/HRMS/Tasks/Tasks.php";

const selectinput = {
  width: "100%",
  height: "45px",
  border: "1px solid lightgray",
  borderRadius: "6px",
};
const Initivalue = {
  project: '',
  description: '',
  status: ''
}

var Role, checkstatus, ID;
if (localStorage.getItem("user")) {
  const Islogin = window.atob(localStorage.getItem("user"));
  Role = JSON.parse(Islogin);
  checkstatus = Role.token;
  ID = Role.id;
};

function Addtimesheet() {
  const [add,setAddState]=React.useState(); 
  const projectinfo = useSelector(state => state.Projectreducer);
  console.log("projectinfo", projectinfo);
  return (
    <>
      <Formik
        initialValues={Initivalue}
        validationSchema={taskschema}
        onSubmit={(values, { resetForm }) => {
          const Taskvalues={...values,ID};
      
          setAddState(Taskvalues);
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
                        <option value="select project" disabled>Select Project</option>
                        {projectinfo.length > 0 && projectinfo.map((items) => {
                          return items.team_mem == ID ? <option value={items.project_id}>{items.project_name}</option> : ''

                        })}
                      </Field>
                      <Errorsg name="project" className="error" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-sm-12">
                      <label>
                        Status <span className="text-danger">*</span>
                      </label>
                      <br />
                      <Field as="select" name="status" className="select" style={selectinput}>
                        <option value="Select status" disabled >Select Task status</option>
                        <option value="Working">Working</option>
                        <option value="Complete">Complete</option>
                      </Field>
                      <Errorsg name="status" className="error" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>
                      Description <span className="text-danger">*</span>
                    </label>
                    <Field as="textarea" rows={4} className="form-control" name="description" />
                    <Errorsg name="description" className="error" />
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
      {add &&<POST values={add} url={url} Addstate={setAddState}/>}
    </>
  );
}

export default Addtimesheet;
