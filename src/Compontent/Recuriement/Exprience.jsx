import React,{useContext, useEffect,useRef,useState} from "react";
import { NavLink,useNavigate} from "react-router-dom";
import { Formik, Field, Form } from "formik";
import Errorsg from "../Msgerror/Errormsg";
import { toast } from "react-toastify";
import Loading from '../../Loading';
import axios from "axios";
import {emailAPI} from './url';
import useGet from '../API/API';
import {Applicationschema} from "../Yup/Yup";
import {useSelector} from 'react-redux';
function Apply() {
  const [emailstate,setemailstate]=useState();
  // call information visters
  const type="vister";
  useGet('http://localhost/HRMS/Visters/fetchVisters.php',type);
  // ...Fetch vister information...
  const visterinfo = useSelector(state => state.Visterreducer);
  // ......loading state.......
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();
  const url="http://localhost/HRMS/Application/Application.php";
  const formData = new FormData();
  // ......get user id and status.at...
  var Role, checkstatus,userid;
  if (localStorage.getItem("user")) {
    const Islogin = window.atob(localStorage.getItem("user"));
    Role = JSON.parse(Islogin);
    checkstatus = Role.token;
    userid=Role.id;
  }
const Initivalue={
   designation:"",
   companyname:'',
    des:"",
   degree:'',
   instituename:"",
   totalexp:"",
   cgpa:"",
    degreeyear:"",
  subject:""
}

  
useEffect(()=>{
  if(checkstatus==undefined)
  {
    navigate('/login');
  }
},[checkstatus]);

useEffect(()=>{
  const result=visterinfo.length > 0 && visterinfo.find((items) => {
    return items.id == userid;
  });
  setemailstate(result.email);
},[visterinfo]);
console.log("normal user",userid,"email",emailstate);

const inputRef = useRef(null);
const filehandler = async (values) => {
  const img = inputRef.current.files[0];
  formData.append("id",values.userid);
  console.log("userid",values.userid);
   formData.append("designation",values.designation);
   formData.append("degreeyear",values.degreeyear);
   formData.append("totalexp",values.totalexp);
   formData.append("companyname",values.companyname);
   formData.append("img",img);
   formData.append("description",values.des);
   formData.append("degree",values.degree);
   formData.append("totalexp",values.totalexp);
   formData.append("cgpa",values.cgpa);
   formData.append('subject',values.subject);
   formData.append("instituename",values.instituename);
   //........Application Educations form............
   try {
    setLoading(true)
    const response = await axios.post(url,formData,{headers:{ "Content-Type": "multipart/form-data" }});
    const msg=response.data.message;
    const status=response.data.status;
    if(status==true)
    {
      // ..send email of Users..
     let body = {
      email: 'bilalshahbscs@gmail.com'
     }
     axios
      .post(emailAPI + "/sendMail", body)
      .then((resp) => {
        // successFul("success");
        console.log("resp.data", resp.data);
      })
    setLoading(false);
      toast.success(`${msg}`);
    }
  } catch(error) {
    setLoading(false)
    toast.success(`${error}`);
  }
};
  return (
    <>
     <Formik
    initialValues={Initivalue}
    validationSchema={Applicationschema}
    onSubmit={(values, { resetForm }) => {
      const id={
        userid};
      const uservalues={...values, ...id};
      uservalues && filehandler(uservalues);
       console.log("values",uservalues);
      resetForm();
  
    }}>
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
                 
                    <span style={{fontWeight:'bold',color:'red'}}>Experience</span>
                    <hr/>
                     
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
                    <div className="form-group" style={{width:'100%'}}>
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
                    <div className="col-auto pt-2">
                      <a
                        className="text-muted float-right"
                        href="forgot-password.php"
                      >
                        Login..
                      </a>
                    </div>
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

export default Apply;
