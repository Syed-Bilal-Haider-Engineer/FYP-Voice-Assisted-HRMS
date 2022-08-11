
import React,{useEffect, useState} from "react";
import {useSelector} from 'react-redux';
import {POST} from '../API/PostAPI';
function Editetimesheet({value}) {
  const url="http://localhost/HRMS/Tasks/Editetask.php";
  const [teskdes,settaskdesstate]=useState();
  const [projectid,setprojectidstate]=useState();
  const [taskupdate,settaskstate]=useState();
  const tasks=useSelector(state=>state.Tasksreducer);
  const projectinfo=useSelector(state=>state.Projectreducer);
  useEffect(() => {
    const result =
    tasks.length > 0 &&
    tasks.find((items) => {
        return items.task_id == value;
      });
      console.log("result",result);
      settaskdesstate(result.task_desc);
      setprojectidstate(result.pro_id);
  }, [value]);

  const Taskshandler=(e)=>{
    e.preventDefault();
   const obj={
    teskdes,
    projectid
   }
   settaskstate(obj);
   console.log("obj",obj);
  }
  return <>
    <div id="edit_todaywork" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Work Details</h5>
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
            <form onSubmit={Taskshandler}>
              <div className="row">
                <div className="form-group col-sm-12">
                  <label>
                    Project <span className="text-danger">*</span>
                  </label>
                  <select className="select"
                  onChange={(e)=>{
                    setprojectidstate(e.target.value);
                  }}
                   style={{
                    width:'100%', height:"40px",borderRadius:'4px',border:'1px solid lightgray'
                  }}>
                  {
                          
                                projectinfo.length>0 && projectinfo.map((element)=>{
                                  if(element.project_id==projectid){
                                    return <>   <option value={element.project_id}>{element.project_name}</option>  </>
                                  }
                                  else {
                                    return <>  <option value={element.project_id}>{element.project_name}</option>  </>
                                  }
                                })
                         
                  }
                  </select>
                </div>
              </div>
         
              <div className="form-group">
                <label>
                  Description <span className="text-danger">*</span>
                </label>
                <textarea
                  rows={4}
                  className="form-control"
                  value={teskdes}
                  onChange={(e)=>{
                    settaskdesstate(e.target.value);
                  }}
                />
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {taskupdate &&  <POST values={taskupdate} url={url} Addstate={settaskstate}/>}
  </>
}

export default Editetimesheet;
