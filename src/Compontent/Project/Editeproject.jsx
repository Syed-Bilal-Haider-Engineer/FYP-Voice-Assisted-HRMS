import React,{useEffect} from "react";
import { useState,useRef } from "react";
import {useSelector,useDispatch} from 'react-redux';
import axios from "axios";
import { toast } from "react-toastify";
import {
  project,
} from "../Redux/Actions/Actions";
function Editeproject({value}) {
  const usedispatch=useDispatch();
  const url='http://localhost/HRMS/Project/updateproject.php';
  const [projectname,setprojectstate]=useState('');
  const [projectid,setprojectidstate]=useState('');
  const [projectdescription,setprodescstate]=useState('');
  const [clientinfo,setclientstate]=useState('');
  const [enddate,setenddatestate]=useState('');
  const [teamleader,setteamleader]=useState('');
  const [teammem,setteammem]=useState('');
  const projectinfo=useSelector(state=>state.Projectreducer);
  const client = useSelector((state) => state.Clientreducer);
  const Employeestate=useSelector(state=>state.Fetchemployeereducer);
  useEffect(() => {
    const result=projectinfo.length > 0 && projectinfo.find((items) => {
        return items.project_id == value;
      });
      setprojectidstate(result.project_id);
      setprodescstate(result.description);
      setclientstate(result.client);
      setenddatestate(result.end_date);
      setteamleader(result.leader);
      setteammem(result.team_mem);
      setprojectstate(result.project_name);
  }, [value]);
  const inputRef = useRef(null);
  const formData = new FormData();
  console.log(projectname,":",projectdescription,":",clientinfo,":",teamleader,":",teammem,":",enddate);
  // .........Project edite handler...........
  const updatehandler=async(e)=>{
    alert("update handler");
    e.preventDefault();
    const img = inputRef.current.files[0];
    formData.append('id',projectid);
     formData.append('prodesc',projectdescription)
    //  formData.append("img",img);
     formData.append("proname",projectname);
     formData.append("client",clientinfo);
     formData.append("teamleader",teamleader);
     formData.append("teammem",teammem);
     formData.append("deadline",enddate);
     try {
      const response = await axios.post(url,formData,{headers:{ "Content-Type": "multipart/form-data" }});
      console.log("response.data",response.data);
      const msg=response.data.message;
     
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
    <div id="edit_project" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Project</h5>
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
            <form onSubmit={updatehandler}>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Project Name</label>
                    <input
                      className="form-control"
                      type="text"
                      value={projectname}
                      onChange={(e)=>{
                        setprojectstate(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Client</label>
                    <select className="select"  onChange={(e)=>{
                        setclientstate(e.target.value);
                      }} style={{width:'100%',height:"42px",
                     borderRadius:'4px',border:'1px solid lightgray'}}>
                    
                    {client.length>0 && client?.map((element)=>{
                            if(element.id==clientinfo){
                              return <>   <option value={element.id}>{element.UserName}</option>  </>
                            }
                            else {
                              return <>  <option value={element.id}>{element.UserName}</option>  </>
                            }
                          })}
            </select>
                  </div>
                </div>
              </div>
              <div className="row">
                
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>End Date</label>
                    <div className="cal-icon">
                      <input
                        className="form-control datetimepicker"
                        type="text"
                        value={enddate}
                        onChange={(e)=>{
                          setenddatestate(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="row">
              <div className="col-sm-6">
                  <div className="form-group">
                    <label>Team leader</label>
                    <select className="select"  onChange={(e)=>{
                         setteamleader(e.target.value);
                      }} style={{width:'100%',height:"42px",
                     borderRadius:'4px',border:'1px solid lightgray'}}>
                    
                    {Employeestate.length>0 && Employeestate?.map((element)=>{
                            if(element.username==teamleader){
                              return <>   <option value={element.username}>{element.username}</option>  </>
                            }
                            else {
                              return <>  <option value={element.username}>{element.username}</option>  </>
                            }
                          })}
            </select>
                  </div>
                </div>
              

                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Add Team</label>

                      <select className="select"  onChange={(e)=>{
                         setteammem(e.target.value);
                      }} style={{width:'100%',height:"42px",
                     borderRadius:'4px',border:'1px solid lightgray'}}>
                    
                    {Employeestate.length>0 && Employeestate?.map((element)=>{
                            if(element.EmployeeID==teammem){
                              return <>   <option value={element.EmployeeID}>{element.username}</option>  </>
                            }
                            else {
                              return <>  <option value={element.EmployeeID}>{element.username}</option>  </>
                            }
                          })}
            </select>
                  </div>
                </div>
               
              </div>
            
              <div className="form-group">
                <label>Description</label>
                <textarea
                  rows={4}
                  className="form-control"
                  placeholder="Enter your message here"
                   value={projectdescription}
                   onChange={(e)=>{
                    setprodescstate(e.target.value);
                  }}
                />
              </div>
              {/* <div className="form-group">
                <label>Upload Files</label>
                <input className="form-control" type="file"  ref={inputRef} name="file" />
              </div> */}
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

export default Editeproject;
