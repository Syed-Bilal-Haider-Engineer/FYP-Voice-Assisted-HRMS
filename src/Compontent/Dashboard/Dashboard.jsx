import React from "react";
function Dashboard() {
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
                <h3 className="page-title">Welcome username!</h3>
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
                    <h3>112</h3>
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
                    <h3>15</h3>
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
                    <h3>37</h3>
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
                    <h3>218</h3>
                    <span>Employees</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card-group m-b-30">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-3">
                      <div>
                        <span className="d-block">New Employees</span>
                      </div>
                      <div>
                        <span className="text-success">+10%</span>
                      </div>
                    </div>
                    <h3 className="mb-3">10</h3>
                    <div className="progress mb-2" style={{ height: 5 }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow={40}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <p className="mb-0">Overall Employees 218</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-3">
                      <div>
                        <span className="d-block">Earnings</span>
                      </div>
                      <div>
                        <span className="text-success">+12.5%</span>
                      </div>
                    </div>
                    <h3 className="mb-3">$1,42,300</h3>
                    <div className="progress mb-2" style={{ height: 5 }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow={40}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <p className="mb-0">
                      Previous Month{" "}
                      <span className="text-muted">$1,15,852</span>
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-3">
                      <div>
                        <span className="d-block">Expenses</span>
                      </div>
                      <div>
                        <span className="text-danger">-2.8%</span>
                      </div>
                    </div>
                    <h3 className="mb-3">$8,500</h3>
                    <div className="progress mb-2" style={{ height: 5 }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow={40}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <p className="mb-0">
                      Previous Month <span className="text-muted">$7,500</span>
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-3">
                      <div>
                        <span className="d-block">Profit</span>
                      </div>
                      <div>
                        <span className="text-danger">-75%</span>
                      </div>
                    </div>
                    <h3 className="mb-3">$1,12,000</h3>
                    <div className="progress mb-2" style={{ height: 5 }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow={40}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <p className="mb-0">
                      Previous Month{" "}
                      <span className="text-muted">$1,42,000</span>
                    </p>
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
                        <tr>
                          <td>
                            <h2>
                              <a href="project-view.php">Office Management</a>
                            </h2>
                            <small className="block text-ellipsis">
                              <span>1</span>{" "}
                              <span className="text-muted">open tasks, </span>
                              <span>9</span>{" "}
                              <span className="text-muted">
                                tasks completed
                              </span>
                            </small>
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
                                <i className="material-icons">more_vert</i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2>
                              <a href="project-view.php">Project Management</a>
                            </h2>
                            <small className="block text-ellipsis">
                              <span>2</span>{" "}
                              <span className="text-muted">open tasks, </span>
                              <span>5</span>{" "}
                              <span className="text-muted">
                                tasks completed
                              </span>
                            </small>
                          </td>
                          <td>
                            <div className="progress progress-xs progress-striped">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                data-toggle="tooltip"
                                title="15%"
                                style={{ width: "15%" }}
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
                                <i className="material-icons">more_vert</i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2>
                              <a href="project-view.php">Video Calling App</a>
                            </h2>
                            <small className="block text-ellipsis">
                              <span>3</span>{" "}
                              <span className="text-muted">open tasks, </span>
                              <span>3</span>{" "}
                              <span className="text-muted">
                                tasks completed
                              </span>
                            </small>
                          </td>
                          <td>
                            <div className="progress progress-xs progress-striped">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                data-toggle="tooltip"
                                title="49%"
                                style={{ width: "49%" }}
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
                                <i className="material-icons">more_vert</i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2>
                              <a href="project-view.php">
                                Hospital Administration
                              </a>
                            </h2>
                            <small className="block text-ellipsis">
                              <span>12</span>{" "}
                              <span className="text-muted">open tasks, </span>
                              <span>4</span>{" "}
                              <span className="text-muted">
                                tasks completed
                              </span>
                            </small>
                          </td>
                          <td>
                            <div className="progress progress-xs progress-striped">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                data-toggle="tooltip"
                                title="88%"
                                style={{ width: "88%" }}
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
                                <i className="material-icons">more_vert</i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2>
                              <a href="project-view.php">Digital Marketplace</a>
                            </h2>
                            <small className="block text-ellipsis">
                              <span>7</span>{" "}
                              <span className="text-muted">open tasks, </span>
                              <span>14</span>{" "}
                              <span className="text-muted">
                                tasks completed
                              </span>
                            </small>
                          </td>
                          <td>
                            <div className="progress progress-xs progress-striped">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                data-toggle="tooltip"
                                title="100%"
                                style={{ width: "100%" }}
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
                                <i className="material-icons">more_vert</i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-footer">
                  <a href="projects.php">View all projects</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
      {/* /Page Wrapper */}
    </>
  );
}

export default Dashboard;
