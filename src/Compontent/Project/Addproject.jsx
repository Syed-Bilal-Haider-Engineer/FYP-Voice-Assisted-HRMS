import React, { useRef } from "react";
import { Formik, Field, Form } from "formik";
import { toast } from "react-toastify";
import axios from "axios";
import Errorsg from "../Msgerror/Errormsg";
import { projectschema } from "../Yup/Yup";
import { useSelector } from "react-redux";
const url = "http://localhost/HRMS/Project/Addproject.php";
const selectinput = {
  width: "100%",
  height: "45px",
  border: "1px solid lightgray",
  borderRadius: "6px",
};
const Initivalue = {
  pro_name: "",
  client: "",
  teammem: "",
  start_date: "",
  end_date: "",
  leader: "",
  department: "",
  description: "",
};

function Addproject() {
  const departmentinfo = useSelector((state) => state.Departmentreducer);
  const employees = useSelector((state) => state.Fetchemployeereducer);
  const Client = useSelector((state) => state.Clientreducer);

  const inputRef = useRef(null);
  const formData = new FormData();
  const filehandler = async (values) => {
    const img = inputRef.current.files[0];
    formData.append("pro_name", values.pro_name);
    formData.append("client", values.client);
    formData.append("teammem", values.teammem);
    formData.append("start_date", values.start_date);
    formData.append("end_date", values.end_date);
    formData.append("img", img);
    formData.append("leader", values.leader);
    formData.append("department", values.department);
    formData.append("description", values.description);
    try {
      const response = await axios.post(url, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const msg = response.data;
      if (response.status == 200) {
        toast.success(`${msg}`);
      }
    } catch (error) {
      toast.success(`${error}`);
    }
  };

  return (
    <Formik
      initialValues={Initivalue}
      validationSchema={projectschema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        filehandler(values);
        resetForm();
      }}
    >
      <div
        id="create_project"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create Project</h5>
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
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Project Name</label>
                      <Field
                        className="form-control"
                        type="text"
                        name="pro_name"
                      />
                      <Errorsg name="pro_name" className="error" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Client</label>
                      <br />
                      <Field
                        as="select"
                        name="client"
                        className="select"
                        style={selectinput}
                      >
                        <option disabled>Select client</option>
                        {Client.length > 0 &&
                          Client.map((items) => {
                            return (
                              <>
                                <option value={items.id}>
                                  {items.FirstName}-{items.LastName}{" "}
                                </option>
                              </>
                            );
                          })}
                      </Field>
                      <Errorsg name="client" className="error" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Start Date</label>
                      <Field
                        name="start_date"
                        className="form-control"
                        type="date"
                      />
                      <Errorsg name="start_date" className="error" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>End Date</label>
                      <Field
                        name="end_date"
                        className="form-control"
                        type="date"
                      />
                      <Errorsg name="end_date" className="error" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Add Project Leader</label>
                      <Field
                        as="select"
                        className="select"
                        style={selectinput}
                        name="leader"
                      >
                        {employees.length > 0 &&
                          employees.map((items, index) => {
                            const { EmployeeID, username } = items;
                            return (
                              <>
                                <option value={username}>{username}</option>
                              </>
                            );
                          })}
                      </Field>
                      <Errorsg name="leader" className="error" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Add team members</label>
                      <br />
                      <Field
                        as="select"
                        name="teammem"
                        className="select"
                        style={selectinput}
                      >
                        <option>Select team memebers</option>
                        {employees.length > 0 &&
                          employees.map((items, index) => {
                            const { EmployeeID, username } = items;
                            return (
                              <>
                                <option value={EmployeeID}>{username}</option>
                              </>
                            );
                          })}
                      </Field>
                      <Errorsg name="teammem" className="error" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Department</label>
                      <br />
                      <Field
                        as="select"
                        name="department"
                        className="select"
                        style={selectinput}
                      >
                        <option>Select department</option>
                        {departmentinfo.length > 0 &&
                          departmentinfo.map((items, index) => {
                            return (
                              <>
                                <option value={items.id}>
                                  {items.Department}
                                </option>
                              </>
                            );
                          })}
                      </Field>
                      <Errorsg name="department" className="error" />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <Field
                    as="textarea"
                    rows={4}
                    name="description"
                    className="form-control summernote"
                    placeholder="Enter your message here"
                  />
                  <Errorsg name="description" className="error" />
                </div>
                <div className="form-group">
                  <label>Upload Files</label>
                  <br />
                  <input
                    type="file"
                    className="form-control"
                    required=""
                    name="file"
                    ref={inputRef}
                  />
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

export default Addproject;
