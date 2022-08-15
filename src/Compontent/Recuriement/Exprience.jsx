
import React, { useRef, useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import Errorsg from "../Msgerror/Errormsg";
import { emailAPI } from "./url";
import { jobschema } from "../Yup/Yup";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import useGet from "../API/API";
import axios from "axios";
import Loading from "../../Loading";
const urlpost = "http://localhost/HRMS/Application/Application.php";

const Initivalue = {
  designation: "",
  companyname: "",
  des: "",
  degree: "",
  instituename: "",
  totalexp: "",
  cgpa: "",
  degreeyear: "",
  subject: "",
};
const Status = [
  {
    id: 0,
    value: "InActive",
  },
  {
    id: 1,
    value: "Active",
  },
];

function Exprience() {
  const [loading, setLoading] = useState(false);
  var Role, checkstatus, userid;
if (localStorage.getItem("user")) {
  const Islogin = window.atob(localStorage.getItem("user"));
  Role = JSON.parse(Islogin);
  checkstatus = Role.token;
  userid = Role.id;
}
console.log("userid",userid);
  const navigate=useNavigate();
  const type = "vister";
  useGet("http://localhost/HRMS/Visters/fetchVisters.php", type);
  const [emailstate, setemailstate] = useState();
  const visterinfo = useSelector((state) => state.Visterreducer);
  useEffect(() => {
    const result =
      visterinfo.length > 0 &&
      visterinfo.find((items) => {
        return items.id == userid;
      });
    setemailstate(result.email);
    console.log("result", result);
  }, [visterinfo]);

   console.log("email",emailstate);
  const formData = new FormData();
  const inputRef = useRef(null);
  const filehandler = async (values) => {
    console.log("Job values", values);
    const img = inputRef.current.files[0];
    formData.append("id", values.userid);
    console.log("userid", values.userid);
    formData.append("designation", values.designation);
    formData.append("degreeyear", values.degreeyear);
    formData.append("totalexp", values.totalexp);
    formData.append("companyname", values.companyname);
    formData.append("img", img);
    formData.append("description", values.des);
    formData.append("degree", values.degree);
    formData.append("totalexp", values.totalexp);
    formData.append("cgpa", values.cgpa);
    formData.append("subject", values.subject);
    formData.append("instituename", values.instituename);
    setLoading(true);
    await axios
      .post(urlpost, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response.data);
        const msg = response.data.message;
        if (response.data.status == true) {
          // ..send email of Users..
          let body = {
            email: emailstate,
          };
          axios.post(emailAPI + "/sendMail", body).then((resp) => {
            // successFul("success");
            console.log("resp.data", resp.data);
          });
          setLoading(false);
          console.log("msg", msg);
          toast.success(`${msg}`);
        } else if (response.data.status == false) {
          toast.error(`${msg}`);
        }
      })
      .catch((error) => {
        toast.error(`${error}`);
      });
  };


  useEffect(()=>{
    if(checkstatus==undefined)
    {
      navigate('/login');
    }
  },[]);
  return (
    <>
      <Formik
        initialValues={Initivalue}
        // validationSchema={jobschema}
        onSubmit={(values, { resetForm }) => {
          const id = { userid };
          const uservalues = { ...values, ...id };
          console.log("uservalues", uservalues);
          filehandler(uservalues);
          // console.log("Job values",values);
          resetForm();
        }}
      >
        <div className="main-wrapper">
          <div className="account-content">
            <div className="container">
              <div className="account-box">
                <div className="account-wrapper">
                  <h3 className="account-title">Applications Form</h3>
                  {/* Account Form */}
                  <Form>
                    <div
                      className="input_box"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div className="form-group">
                        <label>Univeristy name</label>
                        <Field
                          className="form-control"
                          name="instituename"
                          required=""
                          type="text"
                        />
                        <Errorsg name="instituename" className="error" />
                      </div>
                      <div className="form-group">
                        <label>Degree</label>
                        <Field
                          className="form-control"
                          name="degree"
                          required=""
                          type="text"
                        />
                        <Errorsg name="degree" className="error" />
                      </div>
                    </div>
                    <div
                      className="input_box"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div className="form-group">
                        <label>Degree year</label>
                        <Field
                          className="form-control"
                          name="degreeyear"
                          required=""
                          type="text"
                        />
                        <Errorsg name="degreeyear" className="error" />
                      </div>
                      <div className="form-group">
                        <label>CPGA / Marks</label>
                        <Field
                          className="form-control"
                          name="cgpa"
                          required=""
                          type="number"
                        />
                        <Errorsg name="cgpa" className="error" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Major subjects</label>
                      <Field
                        className="form-control"
                        name="subject"
                        required=""
                        type="text"
                      />
                      <Errorsg name="subject" className="error" />
                    </div>

                    <span style={{ fontWeight: "bold", color: "red" }}>
                      Experience
                    </span>
                    <hr />

                    <div className="form-group">
                      <label>Company</label>
                      <Field
                        className="form-control"
                        name="companyname"
                        required=""
                        type="text"
                      />
                      <Errorsg name="companyname" className="error" />
                    </div>
                    <div className="form-group">
                      <label>Designations</label>
                      <Field
                        className="form-control"
                        name="designation"
                        required=""
                        type="text"
                      />
                      <Errorsg name="designation" className="error" />
                    </div>
                    <div
                      className="input_box"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div className="form-group" style={{ width: "100%" }}>
                        <label>Experience</label>
                        <Field
                          className="form-control"
                          name="totalexp"
                          required=""
                          type="text"
                        />
                        <Errorsg name="totalexp" className="error" />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Descriptions</label>
                      <Field
                        className="form-control"
                        as="textarea"
                        rows="5"
                        name="des"
                        required=""
                        type="text"
                      />
                      <Errorsg name="des" className="error" />
                    </div>

                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>
                          Resume <span className="text-danger">*</span>
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
                    <div className="form-group text-center">
                      <button
                        className="btn btn-primary account-btn"
                        name="login"
                        type="submit"
                      >
                        Apply
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Formik>
      <Loading loading={loading} />
    </>
  );
}

export default Exprience;
