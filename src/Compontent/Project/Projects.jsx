import React from "react";
import Addproject from "./Addproject";
function Projects() {
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
                    <a
                      href="#"
                      className="btn add-btn"
                      data-toggle="modal"
                      data-target="#create_project"
                    >
                      <i className="fa fa-plus" /> Create Project
                    </a>
                    <div className="view-icons">
                      <a
                        href="projects.php"
                        className="grid-view btn btn-link active"
                      >
                        <i className="fa fa-th" />
                      </a>
                      <a
                        href="project-list.php"
                        className="list-view btn btn-link"
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
                    <select className="select floating selectinput">
                      <option>Select Project</option>
                      <option>Web Developer</option>
                      <option>Web Designer</option>
                      <option>Android Developer</option>
                      <option>Ios Developer</option>
                    </select>
                   
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
                <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                  <div className="card">
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
                      <h4 className="project-title">
                        <a href="project-view.php">Office Management</a>
                      </h4>
                      <small className="block text-ellipsis m-b-15">
                        <span className="text-xs">1</span>{" "}
                        <span className="text-muted">open tasks, </span>
                        <span className="text-xs">9</span>{" "}
                        <span className="text-muted">tasks completed</span>
                      </small>
                      <p className="text-muted">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. When an unknown printer took a
                        galley of type and scrambled it...
                      </p>
                      <div className="pro-deadline m-b-15">
                        <div className="sub-title">Deadline:</div>
                        <div className="text-muted">17 Apr 2019</div>
                      </div>
                      <div className="project-members m-b-15">
                        <div>Project Leader :</div>
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
                      </div>
                      <div className="project-members m-b-15">
                        <div>Team :</div>
                        <ul className="team-members">
                          <li>
                            <a href="#" data-toggle="tooltip" title="John Doe">
                              <img
                                alt=""
                                src="assets/img/profiles/avatar-02.jpg"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              title="Richard Miles"
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
                              data-toggle="tooltip"
                              title="John Smith"
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
                              data-toggle="tooltip"
                              title="Mike Litorus"
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
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                  <div className="card">
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
                      <h4 className="project-title">
                        <a href="project-view.php">Project Management</a>
                      </h4>
                      <small className="block text-ellipsis m-b-15">
                        <span className="text-xs">2</span>{" "}
                        <span className="text-muted">open tasks, </span>
                        <span className="text-xs">5</span>{" "}
                        <span className="text-muted">tasks completed</span>
                      </small>
                      <p className="text-muted">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. When an unknown printer took a
                        galley of type and scrambled it...
                      </p>
                      <div className="pro-deadline m-b-15">
                        <div className="sub-title">Deadline:</div>
                        <div className="text-muted">17 Apr 2019</div>
                      </div>
                      <div className="project-members m-b-15">
                        <div>Project Leader :</div>
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
                      </div>
                      <div className="project-members m-b-15">
                        <div>Team :</div>
                        <ul className="team-members">
                          <li>
                            <a href="#" data-toggle="tooltip" title="John Doe">
                              <img
                                alt=""
                                src="assets/img/profiles/avatar-02.jpg"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              title="Richard Miles"
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
                              data-toggle="tooltip"
                              title="John Smith"
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
                              data-toggle="tooltip"
                              title="Mike Litorus"
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
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                  <div className="card">
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
                      <h4 className="project-title">
                        <a href="project-view.php">Video Calling App</a>
                      </h4>
                      <small className="block text-ellipsis m-b-15">
                        <span className="text-xs">3</span>{" "}
                        <span className="text-muted">open tasks, </span>
                        <span className="text-xs">3</span>{" "}
                        <span className="text-muted">tasks completed</span>
                      </small>
                      <p className="text-muted">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. When an unknown printer took a
                        galley of type and scrambled it...
                      </p>
                      <div className="pro-deadline m-b-15">
                        <div className="sub-title">Deadline:</div>
                        <div className="text-muted">17 Apr 2019</div>
                      </div>
                      <div className="project-members m-b-15">
                        <div>Project Leader :</div>
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
                      </div>
                      <div className="project-members m-b-15">
                        <div>Team :</div>
                        <ul className="team-members">
                          <li>
                            <a href="#" data-toggle="tooltip" title="John Doe">
                              <img
                                alt=""
                                src="assets/img/profiles/avatar-02.jpg"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              title="Richard Miles"
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
                              data-toggle="tooltip"
                              title="John Smith"
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
                              data-toggle="tooltip"
                              title="Mike Litorus"
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
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                  <div className="card">
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
                      <h4 className="project-title">
                        <a href="project-view.php">Hospital Administration</a>
                      </h4>
                      <small className="block text-ellipsis m-b-15">
                        <span className="text-xs">12</span>{" "}
                        <span className="text-muted">open tasks, </span>
                        <span className="text-xs">4</span>{" "}
                        <span className="text-muted">tasks completed</span>
                      </small>
                      <p className="text-muted">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. When an unknown printer took a
                        galley of type and scrambled it...
                      </p>
                      <div className="pro-deadline m-b-15">
                        <div className="sub-title">Deadline:</div>
                        <div className="text-muted">17 Apr 2019</div>
                      </div>
                      <div className="project-members m-b-15">
                        <div>Project Leader :</div>
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
                      </div>
                      <div className="project-members m-b-15">
                        <div>Team :</div>
                        <ul className="team-members">
                          <li>
                            <a href="#" data-toggle="tooltip" title="John Doe">
                              <img
                                alt=""
                                src="assets/img/profiles/avatar-02.jpg"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              title="Richard Miles"
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
                              data-toggle="tooltip"
                              title="John Smith"
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
                              data-toggle="tooltip"
                              title="Mike Litorus"
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
        {/* /Main Wrapper */}
      </>
    </>
  );
}

export default Projects;
