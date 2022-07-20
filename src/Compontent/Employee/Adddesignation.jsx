import React from "react";
import { Formik, Field, Form } from "formik";
import Errorsg from "../Msgerror/Errormsg";
import { designationschema } from "../Yup/Yup";
import { useSelector } from "react-redux";
import { POST } from "../API/PostAPI";
const selectinput = {
  width: "100%",
  height: "45px",
  border: "1px solid lightgray",
  borderRadius: "6px",
};
const url = "http://localhost/HRMS/Designations/Add_designation.php";
function Adddesignation() {
  const [add, setAddState] = React.useState();
  const Initivalue = {
    designation: "",
    department: "",
  };

  const department = useSelector((state) => state.Departmentreducer);
  console.log("department",department);
  return (
    <>
      <Formik
        initialValues={Initivalue}
        validationSchema={designationschema}
        onSubmit={(values, { resetForm }) => {
          setAddState(values);
          alert("submit");

          resetForm();
          //  window.location.replace('Login','/')
        }}
      >
        <div
          id="add_designation"
          className="modal custom-modal fade"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Designation</h5>
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
                  <div className="form-group">
                    <label>
                      Designation Name <span className="text-danger">*</span>
                    </label>
                    <Field
                      name="designation"
                      required=""
                      className="form-control"
                      type="text"
                    />
                    <Errorsg name="designation" className="error" />
                  </div>
                  <div className="form-group">
                    <label>
                      Department <span className="text-danger">*</span>
                    </label>
                    <Field
                      required=""
                      as="select"
                      name="department"
                      className="select"
                      style={selectinput}
                    >
                      <option value="" disabled>
                        Select department
                      </option>
                      {department.length > 0 &&
                        department.map((items, index) => {
                          const { id, Department } = items;
                          return (
                            <>
                              <option value={id}>{Department}</option>
                            </>
                          );
                        })}
                    </Field>
                    <Errorsg name="department" className="error" />
                  </div>
                  <div className="submit-section">
                    <button
                      name="add_designation"
                      type="submit"
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

export default Adddesignation;
