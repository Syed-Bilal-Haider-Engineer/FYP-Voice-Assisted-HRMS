import React, { useRef, useState } from "react";
import { Formik, Field, Form } from "formik";
import Errorsg from "../Msgerror/Errormsg";
import { jobschema } from "../Yup/Yup";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
const urlpost="http://localhost/HRMS/Job/Addjob.php";
const selectinput = {
  width: "100%",
  height: "45px",
  border: "1px solid lightgray",
  borderRadius: "6px",
};
const Initivalue = {
  title: "",
  enddate: "",
  city: "",
  category: "",
  status: "",
  Notice: "",
  skills:"",
  position:'',
  company:''
};
const Status=[
  {
    id:0,
    value:"InActive"
  },
  {
    id:1,
    value:"Active"
  }
]
function Addjobs() {
  const [add,setAddState]=React.useState(false);
  var jobform;
  const formData = new FormData();
  const CategoryInfo = useSelector((state) => state.categoryreducer);
  const inputRef = useRef(null);
  const filehandler = async (values) => {
    console.log("Job values",values);
    const img = inputRef.current.files[0];
     formData.append("title",values.title);
     formData.append("enddate",values.enddate);
     formData.append("city",values.city);
     formData.append("status",values.status);
     formData.append("category",values.category);
     formData.append("img",img);
     formData.append("Notice",values.Notice);
     formData.append('skills',values.skills);
     formData.append('position',values.position);
     formData.append('company',values.company);
     try {
      const response = await axios.post(urlpost,formData,{headers:{ "Content-Type": "multipart/form-data" }});
      const msg=response.data.message;
      console.log("Job responsece",response.data);
      if(response.data.status==true)
      {
        toast.success(`${msg}`);
      }
      else if(response.data.status==false)
      {
        toast.error(`${msg}`);
      }
    } catch(error) {
      toast.error(`${error}`);
    }
  };
  // console.log(CategoryInfo,"CategoryInfo------<>")
  return (
    <>
      <Formik
        initialValues={Initivalue}
        // validationSchema={jobschema}
        onSubmit={(values, { resetForm }) => {
          filehandler(values);
          console.log("Job values",values);
          resetForm();
        }}
      >
        <div id="add_jobs" className="modal custom-modal fade" role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Job</h5>
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
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>
                          Title <span className="text-danger">*</span>
                        </label>
                        <Field
                          className="form-control"
                          required=""
                          name="title"
                          type="text"
                        />
                        <Errorsg name="title" className="error" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>
                          Skills <span className="text-danger">*</span>
                        </label>
                        <Field
                          className="form-control"
                          required=""
                          name="skills"
                          type="text"
                        />
                        <Errorsg name="title" className="error" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>
                          position <span className="text-danger">*</span>
                        </label>
                        <Field
                          className="form-control"
                          required=""
                          name="position"
                          type="tel"
                        />
                        <Errorsg name="title" className="error" />
                      </div>
                      <div className="form-group">
                        <label>
                          Company name: <span className="text-danger">*</span>
                        </label>
                        <Field
                          className="form-control"
                          required=""
                          name="company"
                          type="text"
                        />
                        <Errorsg name="company" className="error" />
                      </div>
                    </div>
                 
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>
                          Closing date <span className="text-danger">*</span>
                        </label>
                        <Field
                          className="form-control"
                          required=""
                          name="enddate"
                          type="date"
                        />
                        <Errorsg name="enddate" className="error" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>
                          City <span className="text-danger">*</span>
                        </label>
                        <Field
                          className="form-control"
                          required=""
                          name="city"
                          type="text"
                        />
                        <Errorsg name="city" className="error" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Category</label>
                        <Field
                          as="select"
                          name="category"
                          className="select"
                          style={selectinput}
                        >
                          {CategoryInfo.length >0 && CategoryInfo.map((items) => {
                            return (
                              <>
                                <option value={items.Catid}>
                                  {items.catname}
                                </option>
                              </>
                            );
                          })}
                        </Field>
                        <Errorsg name="category" className="error" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Status </label>
                        <Field
                          as="select"
                          name="status"
                          className="select"
                          style={selectinput}
                        > {
                          Status.map((items,index)=>{
                           return <>
                            <option value={items.id}>{items.value}</option>
                        
                           </>
                          })
                        }
                         
                        </Field>
                        <Errorsg name="status" className="error" />
                      </div>
                    </div>
                    <div className="col-sm-12">
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
                       
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>Notice</label>
                        <Field
                          as="textarea"
                          rows={4}
                          name="Notice"
                          className="form-control summernote"
                        />
                        <Errorsg name="Notice" className="error" />
                      </div>
                    </div>
                    <div className="submit-section">
                      <button
                        type="submit"
                        name="add_user"
                        className="btn btn-primary submit-btn"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Formik>
    </>
  );
}

export default Addjobs;
