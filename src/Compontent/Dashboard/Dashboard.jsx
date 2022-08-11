import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Editeproject from "../Project/Editeproject";
function Dashboard() {
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
  console.log("tasks", tasks);
  const department = useSelector((state) => state.Departmentreducer);
  const jobinfo = useSelector((state) => state.Jobreducer);
  const Applicationdetails = useSelector((state) => state.fetchuserAppliations);
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Welcome Admin!</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item active">Dashboard</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-4 col-sm-6 col-lg-6 col-xl-3">
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
            <div className="col-md-4 col-sm-6 col-lg-6 col-xl-3">
              <div className="card dash-widget">
                <div className="card-body">
                  <span className="dash-widget-icon">
                    <i className="fa fa-users" />
                  </span>
                  <div className="dash-widget-info">
                    <h3>{client.length}</h3>
                    <span>Clients</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-lg-6 col-xl-3">
              <div className="card dash-widget">
                <div className="card-body">
                  <span className="dash-widget-icon">
                    <i className="fa fa-diamond" />
                  </span>
                  <div className="dash-widget-info">
                    <h3>{tasks.length}</h3>
                    <span>Tasks</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-lg-6 col-xl-3">
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
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-lg-6 col-xl-3">
              <div className="card dash-widget">
                <div className="card-body">
                  <span className="dash-widget-icon">
                    <i className="fa fa-cubes" />
                  </span>
                  <div className="dash-widget-info">
                    <h3>{department.length}</h3>
                    <span>Department</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-lg-6 col-xl-3">
              <div className="card dash-widget">
                <div className="card-body">
                  <span className="dash-widget-icon">
                    <i className="fa fa-users" />
                  </span>
                  <div className="dash-widget-info">
                    <h3>{jobinfo.length}</h3>
                    <span>Total Jobs</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-lg-6 col-xl-3">
              <div className="card dash-widget">
                <div className="card-body">
                  <span className="dash-widget-icon">
                    <i className="fa fa-diamond" />
                  </span>
                  <div className="dash-widget-info">
                    <h3>{Applicationdetails.length}</h3>
                    <span>Applications</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-lg-6 col-xl-3">
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
          </div>

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
                          <th className="text-right">Action</th>
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
        {/* /Page Content */}
      </div>
      {/* /Page Wrapper */}
      <Editeproject />
    </>
  );
}

export default Dashboard;
