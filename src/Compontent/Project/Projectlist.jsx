import React from "react";
import Addproject from "./Addproject";
function Projectlist() {
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
                      <a href="index.php">Dashboard</a>
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
                    <a href="projects.php" className="grid-view btn btn-link">
                      <i className="fa fa-th" />
                    </a>
                    <a
                      href="project-list.php"
                      className="list-view btn btn-link active"
                    >
                      <i className="fa fa-bars" />
                    </a>
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
                <div className="form-group form-focus select-focus">
                  <select className="select floating">
                    <option>Select Roll</option>
                    <option>Web Developer</option>
                    <option>Web Designer</option>
                    <option>Android Developer</option>
                    <option>Ios Developer</option>
                  </select>
                  <label className="focus-label">Role</label>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <a href="#" className="btn btn-success btn-block">
                  {" "}
                  Search{" "}
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
                        <th>Project Id</th>
                        <th>Leader</th>
                        <th>Team</th>
                        <th>Deadline</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th className="text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a href="project-view.php">Office Management</a>
                        </td>
                        <td>PRO-0001</td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                title="Jeffery Lalor"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-16.jpg"
                                />
                              </a>
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul className="team-members text-nowrap">
                            <li>
                              <a
                                href="#"
                                title="John Doe"
                                data-toggle="tooltip"
                              >
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
                              <a
                                href="#"
                                title="John Smith"
                                data-toggle="tooltip"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-10.jpg"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title="Mike Litorus"
                                data-toggle="tooltip"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-05.jpg"
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
                                        <span className="sr-only">
                                          Previous
                                        </span>
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
                        <td>17 Apr 2019 </td>
                        <td>
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
                        </td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              href=""
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-dot-circle-o text-success" />{" "}
                              Active{" "}
                            </a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                <i className="fa fa-dot-circle-o text-success" />{" "}
                                Active
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="fa fa-dot-circle-o text-danger" />{" "}
                                Inactive
                              </a>
                            </div>
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
                                href="#"
                                data-toggle="modal"
                                data-target="#edit_project"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_project"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="project-view.php">Project Management</a>
                        </td>
                        <td>PRO-0002</td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                title="Jeffery Lalor"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-16.jpg"
                                />
                              </a>
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <a
                                href="#"
                                title="John Doe"
                                data-toggle="tooltip"
                              >
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
                              <a
                                href="#"
                                title="John Smith"
                                data-toggle="tooltip"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-10.jpg"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title="Mike Litorus"
                                data-toggle="tooltip"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-05.jpg"
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
                        <td>17 Apr 2019 </td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              href=""
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-dot-circle-o text-warning" />{" "}
                              Medium{" "}
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
                        </td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              href=""
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-dot-circle-o text-danger" />{" "}
                              Inactive{" "}
                            </a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                <i className="fa fa-dot-circle-o text-success" />{" "}
                                Active
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="fa fa-dot-circle-o text-danger" />{" "}
                                Inactive
                              </a>
                            </div>
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
                                href="#"
                                data-toggle="modal"
                                data-target="#edit_project"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_project"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="project-view.php">Video Calling App</a>
                        </td>
                        <td>PRO-0003</td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                title="Jeffery Lalor"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-16.jpg"
                                />
                              </a>
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <a
                                href="#"
                                title="John Doe"
                                data-toggle="tooltip"
                              >
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
                              <a
                                href="#"
                                title="John Smith"
                                data-toggle="tooltip"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-10.jpg"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title="Mike Litorus"
                                data-toggle="tooltip"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-05.jpg"
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
                        <td>17 Apr 2019 </td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              href=""
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-dot-circle-o text-success" />{" "}
                              Low{" "}
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
                        </td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              href=""
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-dot-circle-o text-success" />{" "}
                              Active{" "}
                            </a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                <i className="fa fa-dot-circle-o text-success" />{" "}
                                Active
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="fa fa-dot-circle-o text-danger" />{" "}
                                Inactive
                              </a>
                            </div>
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
                                href="#"
                                data-toggle="modal"
                                data-target="#edit_project"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_project"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="project-view.php">Hospital Administration</a>
                        </td>
                        <td>PRO-0004</td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                title="Jeffery Lalor"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-16.jpg"
                                />
                              </a>
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <a
                                href="#"
                                title="John Doe"
                                data-toggle="tooltip"
                              >
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
                              <a
                                href="#"
                                title="John Smith"
                                data-toggle="tooltip"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-10.jpg"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title="Mike Litorus"
                                data-toggle="tooltip"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-05.jpg"
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
                        <td>17 Apr 2019 </td>
                        <td>
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
                        </td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              href=""
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-dot-circle-o text-success" />{" "}
                              Active{" "}
                            </a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                <i className="fa fa-dot-circle-o text-success" />{" "}
                                Active
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="fa fa-dot-circle-o text-danger" />{" "}
                                Inactive
                              </a>
                            </div>
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
                                href="#"
                                data-toggle="modal"
                                data-target="#edit_project"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_project"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="project-view.php">Office Management</a>
                        </td>
                        <td>PRO-0005</td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                title="Jeffery Lalor"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-16.jpg"
                                />
                              </a>
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <a
                                href="#"
                                title="John Doe"
                                data-toggle="tooltip"
                              >
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
                              <a
                                href="#"
                                title="John Smith"
                                data-toggle="tooltip"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-10.jpg"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title="Mike Litorus"
                                data-toggle="tooltip"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-05.jpg"
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
                        <td>17 Apr 2019 </td>
                        <td>
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
                        </td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              href=""
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-dot-circle-o text-success" />{" "}
                              Active{" "}
                            </a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                <i className="fa fa-dot-circle-o text-success" />{" "}
                                Active
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="fa fa-dot-circle-o text-danger" />{" "}
                                Inactive
                              </a>
                            </div>
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
                                href="#"
                                data-toggle="modal"
                                data-target="#edit_project"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_project"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="project-view.php">Project Management</a>
                        </td>
                        <td>PRO-0006</td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                title="Jeffery Lalor"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-16.jpg"
                                />
                              </a>
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <a
                                href="#"
                                title="John Doe"
                                data-toggle="tooltip"
                              >
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
                              <a
                                href="#"
                                title="John Smith"
                                data-toggle="tooltip"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-10.jpg"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title="Mike Litorus"
                                data-toggle="tooltip"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-05.jpg"
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
                        <td>17 Apr 2019 </td>
                        <td>
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
                        </td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              href=""
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-dot-circle-o text-success" />{" "}
                              Active{" "}
                            </a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                <i className="fa fa-dot-circle-o text-success" />{" "}
                                Active
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="fa fa-dot-circle-o text-danger" />{" "}
                                Inactive
                              </a>
                            </div>
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
                                href="#"
                                data-toggle="modal"
                                data-target="#edit_project"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_project"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="project-view.php">Video Calling App</a>
                        </td>
                        <td>PRO-0007</td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                title="Jeffery Lalor"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-16.jpg"
                                />
                              </a>
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <a
                                href="#"
                                title="John Doe"
                                data-toggle="tooltip"
                              >
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
                              <a
                                href="#"
                                title="John Smith"
                                data-toggle="tooltip"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-10.jpg"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title="Mike Litorus"
                                data-toggle="tooltip"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-05.jpg"
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
                        <td>17 Apr 2019 </td>
                        <td>
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
                        </td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              href=""
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-dot-circle-o text-success" />{" "}
                              Active{" "}
                            </a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                <i className="fa fa-dot-circle-o text-success" />{" "}
                                Active
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="fa fa-dot-circle-o text-danger" />{" "}
                                Inactive
                              </a>
                            </div>
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
                                href="#"
                                data-toggle="modal"
                                data-target="#edit_project"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_project"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="project-view.php">Hospital Administration</a>
                        </td>
                        <td>PRO-0008</td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                title="Jeffery Lalor"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-16.jpg"
                                />
                              </a>
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <a
                                href="#"
                                title="John Doe"
                                data-toggle="tooltip"
                              >
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
                              <a
                                href="#"
                                title="John Smith"
                                data-toggle="tooltip"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-10.jpg"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title="Mike Litorus"
                                data-toggle="tooltip"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-05.jpg"
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
                        <td>17 Apr 2019 </td>
                        <td>
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
                        </td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              href=""
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-dot-circle-o text-success" />{" "}
                              Active{" "}
                            </a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                <i className="fa fa-dot-circle-o text-success" />{" "}
                                Active
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="fa fa-dot-circle-o text-danger" />{" "}
                                Inactive
                              </a>
                            </div>
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
                                href="#"
                                data-toggle="modal"
                                data-target="#edit_project"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_project"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="project-view.php">Office Management</a>
                        </td>
                        <td>PRO-0009</td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                title="Jeffery Lalor"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-16.jpg"
                                />
                              </a>
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <a
                                href="#"
                                title="John Doe"
                                data-toggle="tooltip"
                              >
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
                              <a
                                href="#"
                                title="John Smith"
                                data-toggle="tooltip"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-10.jpg"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title="Mike Litorus"
                                data-toggle="tooltip"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-05.jpg"
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
                        <td>17 Apr 2019 </td>
                        <td>
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
                        </td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              href=""
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-dot-circle-o text-success" />{" "}
                              Active{" "}
                            </a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                <i className="fa fa-dot-circle-o text-success" />{" "}
                                Active
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="fa fa-dot-circle-o text-danger" />{" "}
                                Inactive
                              </a>
                            </div>
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
                                href="#"
                                data-toggle="modal"
                                data-target="#edit_project"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_project"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="project-view.php">Project Management</a>
                        </td>
                        <td>PRO-0010</td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                title="Jeffery Lalor"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-16.jpg"
                                />
                              </a>
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <a
                                href="#"
                                title="John Doe"
                                data-toggle="tooltip"
                              >
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
                              <a
                                href="#"
                                title="John Smith"
                                data-toggle="tooltip"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-10.jpg"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title="Mike Litorus"
                                data-toggle="tooltip"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-05.jpg"
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
                        <td>17 Apr 2019 </td>
                        <td>
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
                        </td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              href=""
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-dot-circle-o text-success" />{" "}
                              Active{" "}
                            </a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                <i className="fa fa-dot-circle-o text-success" />{" "}
                                Active
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="fa fa-dot-circle-o text-danger" />{" "}
                                Inactive
                              </a>
                            </div>
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
                                href="#"
                                data-toggle="modal"
                                data-target="#edit_project"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_project"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="project-view.php">Video Calling App</a>
                        </td>
                        <td>PRO-0011</td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                title="Jeffery Lalor"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-16.jpg"
                                />
                              </a>
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <a
                                href="#"
                                title="John Doe"
                                data-toggle="tooltip"
                              >
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
                              <a
                                href="#"
                                title="John Smith"
                                data-toggle="tooltip"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-10.jpg"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title="Mike Litorus"
                                data-toggle="tooltip"
                              >
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-05.jpg"
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
                        <td>17 Apr 2019 </td>
                        <td>
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
                        </td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              href=""
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-dot-circle-o text-success" />{" "}
                              Active{" "}
                            </a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                <i className="fa fa-dot-circle-o text-success" />{" "}
                                Active
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="fa fa-dot-circle-o text-danger" />{" "}
                                Inactive
                              </a>
                            </div>
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
                                href="#"
                                data-toggle="modal"
                                data-target="#edit_project"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_project"
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
            </div>
          </div>
          {/* /Page Content */}
          {/* Create Project Modal */}
          <Addproject />
          {/* /Create Project Modal */}
          {/* Edit Project Modal */}
          {/* <?php include_once("includes/modals/projects/edit.php"); ?> */}
          {/* /Edit Project Modal */}
          {/* Delete Project Modal */}
          {/* <?php include_once("includes/modals/projects/delete.php"); ?> */}
          {/* /Delete Project Modal */}
        </div>
        {/* /Page Wrapper */}
      </div>
    </>
  );
}

export default Projectlist;
