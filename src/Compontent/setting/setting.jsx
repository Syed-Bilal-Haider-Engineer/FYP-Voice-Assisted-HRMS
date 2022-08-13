import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { POST } from "../API/PostAPI";
import { useSelector } from "react-redux";
import Updatesetting from './Updatesetting';
import useGet from "../API/API";
function Setting() {
  const [editesetting,setditesettingstate]=useState(false);
  const url = "http://localhost/HRMS/setting/setting.php";
  useGet("http://localhost/HRMS/setting/getsetting.php", "getsetting");
  const settingstate = useSelector((state) => state.settingreducer);
  console.log("settingstate", settingstate);
  const Initivalue = {
    cname: "",
    conperson: "",
    address: "",
    email: "",
    mobile: "",
    phone: "",
    weburl: "",
  };
  const [add, setAddState] = useState();

  return (
    <>
      {/* // <!-- Main Wrapper --> */}
      <Formik
        initialValues={Initivalue}
        // validationSchema={jobschema}
        onSubmit={(values, { resetForm }) => {
          setAddState(values);
          console.log("Company setting values", values);
          resetForm();
        }}
      >
        <div className="main-wrappe">
          {/* <!-- Page Wrapper --> */}
          <div className="page-wrapper">
            <div className="content container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <button style={{float:'right'}}>
                    <a
                      href="#"
                      className="btn add-btn"
                      data-toggle="modal"
                      data-target="#updatesetting"
                     onClick={()=>{
                      setditesettingstate(true);
                     }}
                    >
                      <i className="fa fa-plus" /> Update setting
                    </a>
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  {/* <!-- Page Header --> */}
                  <div className="page-header">
                    <div className="row">
                      <div className="col-sm-12">
                        <h3 className="page-title">Company Settings</h3>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /Page Header --> */}

                  <Form>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>
                            Company Name <span className="text-danger">*</span>
                          </label>
                          <Field
                            className="form-control"
                            type="text"
                            name="cname"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Contact Person</label>
                          <Field
                            className="form-control "
                            name="conperson"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label>Address</label>
                          <Field
                            className="form-control "
                            name="address"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Email</label>
                          <Field
                            className="form-control"
                            name="email"
                            type="email"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Phone Number</label>
                          <Field
                            className="form-control"
                            type="text"
                            name="phone"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Mobile Number</label>
                          <Field
                            className="form-control"
                            name="mobile"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label>Website Url</label>
                          <Field
                            className="form-control"
                            name="weburl"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="submit-section">
                      {settingstate.length > 0 ? ( <button className="btn btn-primary submit-btn" disabled >
                        Save
                      </button>):(
                         <button className="btn btn-primary submit-btn" >
                         Save
                       </button>
                      )}
                     
                    
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Formik>
      {editesetting==true && <Updatesetting/>}
      {add && <POST values={add} url={url} Addstate={setAddState} />}

    </>
  );
}

export default Setting;
