import React from "react";
import Addproject from "./Addproject";
import {useSelector} from 'react-redux';
import {NavLink,Link} from 'react-router-dom';
function Projects() {

  const projectinfo=useSelector(state=>state.Projectreducer);
  var Role, checkstatus;
  if (localStorage.getItem("user")) {
    const Islogin = window.atob(localStorage.getItem("user"));
    Role = JSON.parse(Islogin);
    checkstatus = Role.token;
  }
  return (
    <>
      <>
        {/* Main Wrapper */}
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
                        <a href="index.php">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">Projects</li>
                    </ul>
                  </div>
                  <div className="col-auto float-right ml-auto">
                   {checkstatus ==2 || checkstatus ==3 ?(
                     <a
                     href="#"
                     className="btn add-btn"
                     data-toggle="modal"
                     data-target="#create_project"
                   >
                     <i className="fa fa-plus" /> Create Project
                   </a>
                   ):(null)}
                   
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
               
                <div className="col-sm-9">
                  <div className="form-group form-focus">
                    <input type="text" className="form-control floating" />
                    <label className="focus-label">Search proejct details</label>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <a href="#" className="btn btn-success btn-block">
                    {" "}
                    Search{" "}
                  </a>
                </div>
              </div>
              {/* Search Filter */}
              <div className="row">
              {projectinfo.length > 0 &&  projectinfo.map((element,index)=>{
                const {project_id,File,leader,project_name,end_date,description}=element;
                return <>
                
                 <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3" key={index}>
                  <div className="card">
                  <NavLink to={`/Admindashboard/Projectsview/${project_id}`}> 
                    <div className="card-body">
                      <div className="dropdown dropdown-action profile-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="material-icons">more_vert</i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <span
                            className="dropdown-item"
                           
                            data-toggle="modal"
                            data-target="#edit_project"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </span>
                          <span
                            className="dropdown-item"
                            data-toggle="modal"
                            data-target="#delete_project"
                           
                          >
                            <i className="fa fa-trash-o m-r-5" /> Delete
                          </span>
                        </div>
                      </div>
                      <h4 className="project-title">
                        <span> {project_name} </span>
                      </h4>
                
                      <p className="text-muted">
                       {description}
                      </p>
                      <div className="pro-deadline m-b-15">
                        <div className="sub-title">Deadline: <span className="text-muted">{end_date}</span></div>
                      
                      </div>
                      <div className="project-members m-b-15">
                        <div>Project Leader : <span>{leader}</span></div>
                        
                      </div>
                     
                      <p className="m-b-5">
                        Progress{" "}
                        <span className="text-success float-right">40%</span>
                      </p>
                      <div className="progress progress-xs mb-0">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          data-toggle="tooltip"
                          title="40%"
                          style={{ width: "40%" }}
                        />
                      </div>
                    </div>
                    </NavLink>
                  </div>
                </div>
               
                </>

})}
            
              
              </div>
            </div>
            {/* /Page Content */}
            {/* Create Project Modal */}
            <Addproject />
            
          </div>
          {/* /Page Wrapper */}
        </div>
        {/* /Main Wrapper */}
      </>
    </>
  );
}

export default Projects;
