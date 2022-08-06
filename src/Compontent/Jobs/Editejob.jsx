import React, { useRef, useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { fetchJob } from "../Redux/Actions/Actions"
const urlpost="http://localhost/HRMS/Job/Editejob.php";

function Editejob({value,editefun}) {
  // ....get job information of unique id....
  const [title,setjobtitle]=useState('');
const [city,setcity]=useState('');
const [Notice,setnotice]=useState('');
const [skills,setskills]=useState('');
const [position,setposition]=useState();
const [company,setcompany]=useState('');
const [companylogo,setstatelogo]=useState('');
console.log("title",title);
// ...fetch unique data of jobinfo...
  const jobinfo = useSelector((state) => state.Jobreducer);
useEffect(()=>{
    const result=jobinfo.length > 0 && jobinfo.find((items) => {
      return items.job_id == value;
    },[jobinfo]);
    console.log("result",result);
    setjobtitle(result.title);
    setcity(result.job_city);
    setnotice(result.description);
    setskills(result.skills);
    setposition(result.no_of_positons);
    setcompany(result.company_name);
    setstatelogo(result.logo);
  },[]);
  // ..job Information end....

 const usedispatch=useDispatch();
  const formData = new FormData();
  const inputRef = useRef(null);

  // .....Job edite handle........
  const filehandler = async (e) => {
    e.preventDefault();
    const img = inputRef.current.files[0];
    formData.append('id',value);
     formData.append("title",title);
     formData.append("city",city);
     formData.append("img",img);
     formData.append("Notice",Notice);
     formData.append('skills',skills);
     formData.append('position',position);
     formData.append('company',company);
     try {
      const response = await axios.post(urlpost,formData,{headers:{ "Content-Type": "multipart/form-data" }});
      console.log("response",response.data);
      const msg=response.data.message;
      // Updated data fetch from DB
      if(response.data.Jobdetails)
      {
       usedispatch(fetchJob(response.data.Jobdetails));
      }
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
    // editefun('');
  };  
  return (
    <>
        <div id="edite_job" className="modal custom-modal fade" role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edite JOB </h5>
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
                <form onSubmit={filehandler}>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>
                          Title <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          required=""
                          name="title"
                          type="text"
                          value={title}
                          onChange={(e)=>{
                            setjobtitle(e.target.value);
                          }}
                        />
                    
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>
                          Skills <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          required=""
                          name="skills"
                          type="text"
                          value={skills}
                          onChange={(e)=>{
                            setskills(e.target.value);
                          }}
                        />
                   
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>
                          position <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          required=""
                          name="position"
                          type="tel"
                          value={position}
                          onChange={(e)=>{
                            setposition(e.target.value);
                          }}
                        />
                     
                      </div>
                      <div className="form-group">
                        <label>
                          Company name: <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          required=""
                          name="company"
                          type="text"
                          value={company}
                       
                          onChange={(e)=>{
                            setcompany(e.target.value);
                          }}
                        />
                
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>
                          City <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          required=""
                          name="city"
                          type="text"
                          value={city}
                          onChange={(e)=>{
                            setcity(e.target.value);
                          }}
                        />
                     
                      </div>
                    </div>
                  
               
                    <div className="col-sm-6">
                      <div className="form-group">
                        <img  src={`http://localhost/HRMS/Uploads/${companylogo}`} width="30px" height="20px" alt=""/>
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
                        <input
                          as="textarea"
                          rows={4}
                          name="Notice"
                          className="form-control summernote"
                          value={Notice}
                          onChange={(e)=>{
                            setnotice(e.target.value);
                          }}
                        />
                
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
                </form>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Editejob;
