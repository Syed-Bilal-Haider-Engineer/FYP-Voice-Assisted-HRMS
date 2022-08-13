import React,{useState,useEffect,useRef} from "react";
import {useSelector,useDispatch} from 'react-redux';
import { toast } from "react-toastify";
import {
  FetchEmployee,
} from "../Redux/Actions/Actions";
import axios from "axios";
function Editeemp({id}) {
  const usedispatch=useDispatch();
  const url="http://localhost/HRMS/Employee/Updateemployee.php";
  const [fname,setfname]=useState('');
  const [lname,setlname]=useState('');
  const [username,setusername]=useState('');
  const [visterid,setvisterid]=useState('');
  const [phone,setphonestate]=useState('');
  const [rolevalue,setrole]=useState('');
  // ...fetch employee details...
  const Employeestate=useSelector(state=>state.Fetchemployeereducer);
  useEffect(() => {
    const result=Employeestate.length > 0 && Employeestate.find((items) => {
        return items.EmployeeID == id;
      });
     console.log("result",result);
     setfname(result.fname);
     setlname(result.lname);
     setusername(result.username);
     setvisterid(result.visterid);
     setrole(result.role);
     setphonestate(result.phone);
  }, [id]);

  const inputRef = useRef(null);
  const formData = new FormData();
  const updatehandler=async(e)=>{
    e.preventDefault();
    const img = inputRef.current.files[0];
    formData.append('employeeid',id);
     formData.append('visterid',visterid)
     formData.append("img",img);
     formData.append("fname",fname);
     formData.append("lname",lname);
     formData.append("username",username);
     formData.append("role",rolevalue);
     formData.append("phone",phone);
     try {
      const response = await axios.post(url,formData,{headers:{ "Content-Type": "multipart/form-data" }});
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
  }
  return (
    <div id="edit_employee" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Employee</h5>
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
            <form onSubmit={updatehandler} >
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">
                      First Name <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      value={fname}
                      type="text"
                      onChange={(e)=>
                        setfname(e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">Last Name</label>
                    <input
                      className="form-control"
                      value={lname}
                      type="text"
                      onChange={(e)=>
                        lname(e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">
                      Username <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                     value={username}
                      type="text"
                      onChange={(e)=>
                        setusername(e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">
                      Role <span className="text-danger">*</span>
                    </label>
                    <select  className="form-control" onChange={(e)=>{
                      setrole(e.target.value)
                    }}>
                     
                     <option disabled>Select role</option>
                     <option value="3">HR </option>
                       <option value="2">Admin</option>
                    </select>
                     
                   </div>
                </div>
                
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">Phone </label>
                    <input
                      className="form-control"
                      value={phone}
                      onChange={(e)=>{
                        setphonestate(e.target.value)
                      }}
                      type="tel"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">Profile pic </label>
                    <input
                      className="form-control"
                      type="file"
                      name="file"
                      ref={inputRef}
                    />
                  </div>
                </div>
              </div>
           
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editeemp;
