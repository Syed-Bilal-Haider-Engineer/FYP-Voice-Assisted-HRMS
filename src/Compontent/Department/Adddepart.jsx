import React from "react";
import { Formik, Field, Form } from "formik";
import Errorsg from "../Msgerror/Errormsg";
import { departmentschema } from "../Yup/Yup";
import {POST} from '../API/PostAPI';
function Adddepart() {
  const url="http://localhost/HRMS/Department/Adddepartment.php";
  const Initivalue = {
    department: "",
  };
  const [add,setAddState]=React.useState(); 
  return ( <>
    <Formik
      initialValues={Initivalue}
      validationSchema={departmentschema}
      onSubmit={(values, { resetForm }) => {
        setAddState(values)
        alert("submit");
        resetForm();
        //  window.location.replace('Login','/')
      }}
    >
      <div
        id="add_department"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Department</h5>
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
                    Department Name <span className="text-danger">*</span>
                  </label>
                  <Field
                    name="department"
                    required=""
                    className="form-control"
                    type="text"
                  />
                  <Errorsg name="department" className="error" />
                </div>
                <div className="submit-section">
                  <button
                    name="add_department"
                    type="POST"
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
     {add &&<POST values={add} url={url} Addstate={setAddState}/>}
     </>
  );
}

export default Adddepart;
