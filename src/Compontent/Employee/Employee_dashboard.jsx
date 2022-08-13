import React,{useEffect} from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Departmentimg from '../../Images/departments.png';
function Employeedashboard() {
  var totaltask=0;
  const navigate = useNavigate();
  var userdetials, checkstatus, userID;
  if (localStorage.getItem("user")) {
    const Islogin = window.atob(localStorage.getItem("user"));
    userdetials = JSON.parse(Islogin);
    checkstatus = userdetials.token;
    userID = userdetials.id;
  }
  useEffect(() => {
    if (checkstatus == 1) {
      navigate("/Admindashboard/Employeedashboard");
    }
  }, []);
  // ...........fetch all employee, project, department,task,clients and normal users data from database.....
  const projectinfo = useSelector((state) => state.Projectreducer);
  console.log("projectinfo", projectinfo);
  const Employeestate = useSelector((state) => state.Fetchemployeereducer);
  const client = useSelector((state) => state.Clientreducer);
  const tasks = useSelector((state) => state.Tasksreducer);
  const department = useSelector(state => state.Departmentreducer);
  return (
    <>
      <>
        {/* Main Wrapper */}
        <div className="main-wrapper">
          {/* Page Wrapper */}
          <div className="page-wrapper">
            {/* Page Content */}
            <div className="content container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="welcome-box">
                    <div className="welcome-img">
                      <img alt="" src="assets/img/profiles/avatar-02.jpg" />
                    </div>
                    <div className="welcome-det">
                      <h3>Welcome, Employee</h3>
                      <p>{}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                
                <div  className=" col-sm-12">
                  <div className="row">
              <div className="col-md-4 col-sm-6 col-lg-6 col-xl-4">
              <div className="card dash-widget">
                <div className="card-body">
                  <span className="dash-widget-icon">
                    <i className="fa fa-cubes" />
                  </span>
                  <div className="dash-widget-info">
                    <h3>{projectinfo.length}</h3>
                    <span>Projects</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-lg-6 col-xl-4">
              <div className="card dash-widget">
                <div className="card-body">
                  <span className="dash-widget-icon">
                    <i className="fa fa-user" />
                  </span>
                  <div className="dash-widget-info">
                    <h3>{Employeestate.length}</h3>
                    <span>Employees</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-lg-6 col-xl-4">
              <div className="card dash-widget">
                <div className="card-body">
                  <span className="dash-widget-icon">
                    <i className="fa fa-users" />
                  </span>
                  <div className="dash-widget-info">
                    {tasks.map((Items,index)=>{
                  if(Items.id==userID){
                        totaltask++;
                  }
                    })}
                   <h3>{totaltask}</h3>
                    <span>Total task</span>
                  </div>
                </div>
              </div>
            </div>
            </div>
            {/* ....second row..... */}
           <div className="row">
           <div className="col-md-4 col-sm-6 col-lg-6 col-xl-4">
              <div className="card dash-widget">
                <div className="card-body">
                  <span className="dash-widget-icon">
                  
<i class="fa fa-institution"></i>
                  </span>
                  <div className="dash-widget-info">
                    <h3>{department.length}</h3>
                    <span>Departments</span>
                  </div>
                
              </div>
            </div>
           </div>
           <div className="col-md-4 col-sm-6 col-lg-6 col-xl-4">
              <div className="card dash-widget">
                <div className="card-body">
                  <span className="dash-widget-icon">
                  <i class="fa fa-check-square"></i>
                    {/* <img src={Departmentimg} alt="Departmentimg" style={{position:'relative',width:'80px',height:'50px'}}/> */}
                  </span>
                  <div className="dash-widget-info">
                    <h3>3</h3>
                    <span>Montly allow leave</span>
                  </div>
                
              </div>
            </div>
           </div>
            </div>
            {/* ..........Project report..... */}
            <div className="row">
            <div className="col-md-12 d-flex">
              <div className="card card-table flex-fill">
                <div className="card-header">
                  <h3 className="card-title mb-0">Recent Projects</h3>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table custom-table mb-0">
                      <thead>
                        <tr>
                          <th>Project Name </th>
                          <th>Progress</th>
                          {checkstatus==2 || checkstatus==3 ?(
                              <th className="text-right">Action</th>
                          ):(null)}
                      
                        </tr>
                      </thead>
                      <tbody>
                        {projectinfo.length > 0 &&
                          projectinfo.map((items, index) => {
                            const {
                              project_id,
                              File,
                              leader,
                              project_name,
                              end_date,
                              description,
                              status,
                            } = items;
                            return (
                              <>
                                <tr key={index}>
                                  <td>
                                    <h2>
                                      <Link
                                        to={`/Admindashboard/Projectsview/${project_id}`}
                                      >
                                        {project_name}
                                      </Link>
                                    </h2>
                                    
                                  </td>

                                  <td>
                                    <div className="progress progress-xs progress-striped">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        data-toggle="tooltip"
                                        title="65%"
                                        style={{ width: "65%" }}
                                      />
                                    </div>
                                  </td>
                                  {checkstatus==2 || checkstatus==3 ?(
                                    <>
                                      <td className="text-right">
                                    <div className="dropdown dropdown-action">
                                      <a
                                        href="#"
                                        className="action-icon dropdown-toggle"
                                        data-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="material-icons">
                                          more_vert
                                        </i>
                                      </a>
                                      <div className="dropdown-menu dropdown-menu-right">
                                        <a
                                          className="dropdown-item"
                                          data-toggle="modal"
                                          data-target="#edit_project"
                                        >
                                          <i className="fa fa-pencil m-r-5" />{" "}
                                          Edit
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                    </>
                                  ):(null)}
                                
                                </tr>
                              </>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-footer">
                  <Link to="/Admindashboard/Projects">View all projects</Link>
                </div>
              </div>
            </div>
          </div>
            </div>
            
              </div>
            </div>
            {/* /Page Content */}
          </div>
          {/* /Page Wrapper */}
        </div>
        {/* /Main Wrapper */}
      </>
    </>
  );
}

export default Employeedashboard;
