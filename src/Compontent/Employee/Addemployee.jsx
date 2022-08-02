import React,{useRef} from "react";
import { Formik, Field, Form} from "formik";
import Errorsg from "../Msgerror/Errormsg";
import { employeeshema } from "../Yup/Yup";
import {useSelector,useDispatch} from "react-redux";
import { toast } from "react-toastify";
import {
  FetchEmployee,
} from "../Redux/Actions/Actions";
import axios from "axios";
const selectinput = {
  width: "100%",
  height: "45px",
  border: "1px solid lightgray",
  borderRadius: "6px",
};
const Initivalue = {
  username: "",
  email: "",
  password: "",
  confirm_pass: "",
  department: "",
  designation: "",
};

const urlpost="http://localhost/HRMS/Employee/AddEmployee.php";
function Addemployee() {
  const usedispatch=useDispatch();
  const department = useSelector((state) => state.Departmentreducer);
  const designation=useSelector(state=>state.Designationreducer);
  const Applicationdetails=useSelector(state=>state.fetchuserAppliations);
  console.log("Applicationdetails:",Applicationdetails);
  const inputRef = useRef(null);
  const formData = new FormData();
  const filehandler = async (values) => {
    const img = inputRef.current.files[0];
     formData.append("username",values.username);
     formData.append("email",values.email);
     formData.append("password",values.password);
     formData.append("department",values.department);
     formData.append("designation",values.designation)
     formData.append("img",img);
     try {
      const response = await axios.post(urlpost,formData,{headers:{ "Content-Type": "multipart/form-data" }});
      console.log("response.data",response.data);
      const msg=response.data.message;
      if(response.data.employeeinfo)
      {
        usedispatch(FetchEmployee(response.data.employeeinfo));
      }
      if(response.data.status==true)
      {
        toast.success(`${msg}`);
      }
      else {
        toast.error(`${msg}`);
      }
    } catch(error) {
      toast.error(`${error}`);
    }
  };
  return (
    <Formik
      initialValues={Initivalue}
      validationSchema={employeeshema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        filehandler(values);
        resetForm();
        //  window.location.replace('Login','/')
      }}
    >
      <div id="add_employee" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Employee</h5>
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
                <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Username <span className="text-danger">*</span>
                      </label>
                      <Field
                        as="select"
                        required=""
                        name="username"
                        className="select"
                        style={selectinput}
                      >
                         <option value="" disabled>
                        selected  user
                      </option>
                      {Applicationdetails.length > 0 &&
                        Applicationdetails.map((items, index) => (
                          items.Interview=='Select'?(
                            
                            <option value={items.id}>{items.username}</option>
                          
                          ):null
                        
                        ))}
                      </Field>
                      <Errorsg name="username" className="error" />
                    </div>
                  </div>
                 
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <Field
                        name="email"
                        required=""
                        className="form-control"
                        type="email"
                      />
                      <Errorsg name="email" className="error" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">Password</label>
                      <Field
                        className="form-control"
                        required=""
                        name="password"
                        type="password"
                      />
                      <Errorsg name="password" className="error" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">Confirm Password</label>
                      <Field
                        className="form-control"
                        required=""
                        name="confirm_pass"
                        type="password"
                      />
                      <Errorsg name="confirm_pass" className="error" />
                    </div>
                  </div>
                 
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Department <span className="text-danger">*</span>
                      </label>
                      <Field
                        as="select"
                        required=""
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
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Designations <span className="text-danger">*</span>
                      </label>
                      <Field
                        as="select"
                        required=""
                        name="designation"
                        className="select"
                        style={selectinput}
                      >
                         <option value="" disabled>
                        Select Designations
                      </option>
                      {designation.length > 0 &&
                        designation.map((items, index) => {
                          const { id, Designation } = items;
                          return (
                            <>
                              <option value={id}>{Designation}</option>
                            </>
                          );
                        })}
                      </Field>
                      <Errorsg name="designation" className="error" />
                    </div>
                  </div>
                  
                  <div className="col-sm-6">
                      <div className="form-group">
                        <label>
                          File <span className="text-danger">*</span>
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          required=""
                          name="file"
                          ref={inputRef}
                        />
                        {/* <Errorsg name="file" className="error" /> */}
                      </div>
                    </div>
                </div>
                <div className="submit-section">
                  <button
                    type="submit"
                    name="add_employee"
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
  );
}

export default Addemployee;
