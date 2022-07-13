import React from "react";

function Leads() {
  return (
    <div className="page-wrapper">
      {/* <!-- Page Content --> */}
      <div className="content container-fluid">
        {/* <!-- Page Header --> */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Leads</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.php">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Leads</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- /Page Header --> */}

        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped table-nowrap custom-table mb-0 datatable">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Lead Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Project</th>
                    <th>Assigned Staff</th>
                    <th>Status</th>
                    <th>Created</th>
                    <th className="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <h2 className="table-avatar">
                        <a href="#" className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-11.jpg" />
                        </a>
                        <a href="#">Wilmer Deluna</a>
                      </h2>
                    </td>
                    <td>wilmerdeluna@example.com</td>
                    <td>9876543210</td>
                    <td>
                      <a href="project-view.php">Hospital Administration</a>
                    </td>
                    <td>
                      <ul className="team-members">
                        <li>
                          <a href="#" title="John Doe" data-toggle="tooltip">
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-02.jpg"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title="Richard Miles"
                            data-toggle="tooltip"
                          >
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-09.jpg"
                            />
                          </a>
                        </li>
                        <li className="dropdown avatar-dropdown">
                          <a
                            href="#"
                            className="all-users dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            +15
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <div className="avatar-group">
                              <a className="avatar avatar-xs" href="#">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-02.jpg"
                                />
                              </a>
                              <a className="avatar avatar-xs" href="#">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-09.jpg"
                                />
                              </a>
                              <a className="avatar avatar-xs" href="#">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-10.jpg"
                                />
                              </a>
                              <a className="avatar avatar-xs" href="#">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-05.jpg"
                                />
                              </a>
                              <a className="avatar avatar-xs" href="#">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-11.jpg"
                                />
                              </a>
                              <a className="avatar avatar-xs" href="#">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-12.jpg"
                                />
                              </a>
                              <a className="avatar avatar-xs" href="#">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-13.jpg"
                                />
                              </a>
                              <a className="avatar avatar-xs" href="#">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-01.jpg"
                                />
                              </a>
                              <a className="avatar avatar-xs" href="#">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-16.jpg"
                                />
                              </a>
                            </div>
                            <div className="avatar-pagination">
                              <ul className="pagination">
                                <li className="page-item">
                                  <a
                                    className="page-link"
                                    href="#"
                                    aria-label="Previous"
                                  >
                                    <span aria-hidden="true">«</span>
                                    <span className="sr-only">Previous</span>
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    1
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    2
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a
                                    className="page-link"
                                    href="#"
                                    aria-label="Next"
                                  >
                                    <span aria-hidden="true">»</span>
                                    <span className="sr-only">Next</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <span className="badge bg-inverse-success">Working</span>
                    </td>
                    <td>10 hours ago</td>
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
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-pencil m-r-5"></i> Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-trash-o m-r-5"></i> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <h2 className="table-avatar">
                        <a href="#" className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-01.jpg" />
                        </a>
                        <a href="#">Lesley Grauer</a>
                      </h2>
                    </td>
                    <td>lesleygrauer@example.com</td>
                    <td>9876543210</td>
                    <td>
                      <a href="project-view.php">Video Calling App</a>
                    </td>
                    <td>
                      <ul className="team-members">
                        <li>
                          <a href="#" title="John Doe" data-toggle="tooltip">
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-02.jpg"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title="Richard Miles"
                            data-toggle="tooltip"
                          >
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-09.jpg"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="all-users">
                            +15
                          </a>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <span className="badge bg-inverse-success">Working</span>
                    </td>
                    <td>5 Mar 2019</td>
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
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-pencil m-r-5"></i> Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-trash-o m-r-5"></i> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <h2 className="table-avatar">
                        <a href="#" className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-16.jpg" />
                        </a>
                        <a href="#">Jeffery Lalor</a>
                      </h2>
                    </td>
                    <td>jefferylalor@example.com</td>
                    <td>9876543210</td>
                    <td>
                      <a href="project-view.php">Office Management</a>
                    </td>
                    <td>
                      <ul className="team-members">
                        <li>
                          <a href="#" title="John Doe" data-toggle="tooltip">
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-02.jpg"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title="Richard Miles"
                            data-toggle="tooltip"
                          >
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-09.jpg"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="all-users">
                            +15
                          </a>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <span className="badge bg-inverse-success">Working</span>
                    </td>
                    <td>27 Feb 2019</td>
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
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-pencil m-r-5"></i> Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-trash-o m-r-5"></i> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Page Content --> */}
    </div>
  );
}

export default Leads;
