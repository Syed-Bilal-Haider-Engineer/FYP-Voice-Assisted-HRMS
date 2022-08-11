import React from "react";
import Addproject from "./Addproject";
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import { useState } from "react";
import Editeproject from './Editeproject';
function Projectlist() {
  const [eidtestate,seteditestate]=useState('');
  const projectinfo=useSelector(state=>state.Projectreducer);
  console.log("projectinfo",projectinfo);
// ........Project edite handler.......
const projecthandler=(id)=>{
  seteditestate(id);
}
  return (
    <>
      <div className="main-wrapper">
        <div className="page-wrapper">
          {/* Page Content */}
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="page-title">Projects</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <span>Dashboard</span>
                    </li>
                    <li className="breadcrumb-item active">Projects</li>
                  </ul>
                </div>
                <div className="col-auto float-right ml-auto">
                  <a
                    href="#"
                    className="btn add-btn"
                    data-toggle="modal"
                    data-target="#create_project"
                  >
                    <i className="fa fa-plus" /> Create Project
                  </a>
                  <div className="view-icons">
                    <Link to="/Admindashboard/Projects" className="grid-view btn btn-link">
                      <i className="fa fa-th" />
                    </Link>
                    <Link to="/Admindashboard/Projectlist"
                     
                     className="list-view btn btn-link active"
                   >
                     <i className="fa fa-bars" />
                   </Link>
                  
                  </div>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* Search Filter */}
            <div className="row filter-row">
              <div className="col-sm-6 col-md-3">
                <div className="form-group form-focus">
                  <input type="text" className="form-control floating" />
                  <label className="focus-label">Project Name</label>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group form-focus">
                  <input type="text" className="form-control floating" />
                  <label className="focus-label">Employee Name</label>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <a href="#" className="btn btn-success btn-block">
                  Search
                </a>
              </div>
            </div>
            {/* /Search Filter */}
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-striped custom-table datatable">
                    <thead>
                      <tr>
                        <th>Project</th>
                        <th>Leader</th>
                       <th>Description</th>
                        <th>Deadline</th>
                        {/* <th>Priority</th> */}
                        <th>Status</th>
                        <th>View</th>
                        <th className="text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    {projectinfo.length > 0 &&  projectinfo.map((element,index)=>{
                const {project_id,File,leader,project_name,end_date,description,status}=element;
                return <>
                      <tr>
                       
                        <td>{project_name}</td>
                        <td>{leader}</td>
                        <td>{description}</td>
                        <td>{end_date} </td>
                       
                        {/* <td>
                          <div className="dropdown action-label">
                            <a
                              href=""
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-dot-circle-o text-danger" />{" "}
                              High{" "}
                            </a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                <i className="fa fa-dot-circle-o text-danger" />{" "}
                                High
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="fa fa-dot-circle-o text-warning" />{" "}
                                Medium
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="fa fa-dot-circle-o text-success" />{" "}
                                Low
                              </a>
                            </div>
                          </div>
                        </td> */}
                       
                        <td style={{ color:'green',borderRadius:'5px'}}>
                         
                           <span className="badge bg-inverse-success">  {status}</span>
                        </td>
                       <Link to={`/Admindashboard/Projectsview/${project_id}`}> <td>View </td></Link>
                       
                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="material-icons">more_vert</i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#edit_project"
                                onClick={()=>{
                                  projecthandler(project_id);
                                }}
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                             
                            </div>
                          </div>
                        </td>
                      </tr>
                      </>})}
                    
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
    
          <Addproject />
          {eidtestate && <Editeproject value={eidtestate}/>}
        </div>
        {/* /Page Wrapper */}
      </div>
    </>
  );
}

export default Projectlist;
