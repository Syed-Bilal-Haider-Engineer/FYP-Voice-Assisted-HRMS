import React,{useRef} from "react";
import { Formik, Field, Form } from "formik";
import Errorsg from "../Msgerror/Errormsg";
import { Clientschema } from "../Yup/Yup";
import { toast } from "react-toastify";
import axios from "axios";
function Addclient() {
  const formData = new FormData();
  const inputRef = useRef(null);
  const urlpost="http://localhost/HRMS/Client/Addclient.php";
  const Initivalue = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    clientid: "",
    phone: "",
    company: "",
    address: "",
   
  };

  const filehandler = async (values) => {
    const img = inputRef.current.files[0];
     formData.append("firstname",values.firstname);
     formData.append("lastname",values.lastname);
     formData.append("username",values.username);
     formData.append("email",values.email);
     formData.append("clientid",values.clientid);
     formData.append("img",img);
     formData.append("phone",values.phone);
     formData.append('company',values.company);
     formData.append('address',values.address);
     try {
      const response = await axios.post(urlpost,formData,{headers:{ "Content-Type": "multipart/form-data" }});
      const msg=response.data;
      if(response.status==200)
      {
        toast.success(`${msg}`);
      }
    } catch(error) {
      toast.success(`${error}`);
    }
  };

  return (
    <Formik
      initialValues={Initivalue}
      validationSchema={Clientschema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        filehandler(values);
        resetForm();
     
      }}
    >
      <div id="add_client" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Client</h5>
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
                      <label className="col-form-label">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <Field
                        name="firstname"
                        required=""
                        className="form-control"
                        type="text"
                      />
                      <Errorsg name="firstname" className="error" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Last Name</label>
                      <Field
                        name="lastname"
                        required=""
                        className="form-control"
                        type="text"
                      />
                      <Errorsg name="lastname" className="error" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Username <span className="text-danger">*</span>
                      </label>
                      <Field
                        name="username"
                        required=""
                        className="form-control"
                        type="text"
                      />
                      <Errorsg name="username" className="error" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <Field
                        name="email"
                        required=""
                        className="form-control floating"
                        type="email"
                      />
                      <Errorsg name="email" className="error" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Client ID <span className="text-danger">*</span>
                      </label>
                      <Field
                        name="clientid"
                      
                        
                        readOnly=""
                        className="form-control floating"
                        type="text"
                      />
                      <Errorsg name="clientid" className="error" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Phone </label>
                      <Field
                        name="phone"
                        required=""
                        className="form-control"
                        type="text"
                      />
                      <Errorsg name="phone" className="error" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Company Name</label>
                      <Field
                        name="company"
                        required=""
                        className="form-control"
                        type="text"
                      />
                      <Errorsg name="company" className="error" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Address</label>
                      <Field
                        className="form-control"
                        name="address"
                        required=""
                        type="text"
                      />
                      <Errorsg name="address" className="error" />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="custom-file">
                      
                        <input
                          type="file"
                          name="file"
                          ref={inputRef}
                        />
                    
                      <div className="invalid-feedback">
                        Example invalid custom file feedback
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button
                    type="submit"
                    name="add_client"
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

export default Addclient;
