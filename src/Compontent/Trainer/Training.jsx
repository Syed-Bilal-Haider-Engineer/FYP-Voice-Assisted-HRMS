import React from "react";

function Training() {
  return (
    <>
      <div className="main-wrapper">
        {/* Page Wrapper */}
        <div className="page-wrapper">
          {/* Page Content */}
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="page-title">Training</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.php">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Training</li>
                  </ul>
                </div>
                <div className="col-auto float-right ml-auto">
                  <a
                    href="#"
                    className="btn add-btn"
                    data-toggle="modal"
                    data-target="#add_training"
                  >
                    <i className="fa fa-plus" /> Add New{" "}
                  </a>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-striped custom-table mb-0 datatable">
                    <thead>
                      <tr>
                        <th style={{ width: 30 }}>#</th>
                        <th>Training Type</th>
                        <th>Trainer</th>
                        <th>Employee</th>
                        <th>Time Duration</th>
                        <th>Description </th>
                        <th>Cost </th>
                        <th>Status </th>
                        <th className="text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Git Training</td>
                        <td>
                          <h2 className="table-avatar">
                            <a href="profile.php" className="avatar">
                              <img
                                alt=""
                                src="assets/img/profiles/avatar-02.jpg"
                              />
                            </a>
                            <a href="profile.php">John Doe </a>
                          </h2>
                        </td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <a
                                href="#"
                                title="Bernardo Galaviz"
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
                        <td>7 May 2019 - 10 May 2019</td>
                        <td>Lorem ipsum dollar</td>
                        <td>$400</td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              href="#"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-dot-circle-o text-success" />{" "}
                              Active
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
                                data-target="#edit_training"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_training"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Swift Training</td>
                        <td>
                          <h2 className="table-avatar">
                            <a href="profile.php" className="avatar">
                              <img
                                alt=""
                                src="assets/img/profiles/avatar-09.jpg"
                              />
                            </a>
                            <a href="profile.php">Richard Miles</a>
                          </h2>
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
                        <td>7 May 2019 - 10 May 2019</td>
                        <td>Lorem ipsum dollar</td>
                        <td>$800</td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              href="#"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-dot-circle-o text-danger" />{" "}
                              Inactive
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
                                data-target="#edit_training"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_training"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Node Training</td>
                        <td>
                          <h2 className="table-avatar">
                            <a href="profile.php" className="avatar">
                              <img
                                alt=""
                                src="assets/img/profiles/avatar-02.jpg"
                              />
                            </a>
                            <a href="profile.php">John Doe </a>
                          </h2>
                        </td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <a
                                href="#"
                                title="Bernardo Galaviz"
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
                        <td>7 May 2019 - 10 May 2019</td>
                        <td>Lorem ipsum dollar</td>
                        <td>$400</td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              href="#"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-dot-circle-o text-success" />{" "}
                              Active
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
                                data-target="#edit_training"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_training"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Angular Training</td>
                        <td>
                          <h2 className="table-avatar">
                            <a href="profile.php" className="avatar">
                              <img
                                alt=""
                                src="assets/img/profiles/avatar-05.jpg"
                              />
                            </a>
                            <a href="profile.php">Mike Litorus </a>
                          </h2>
                        </td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <a
                                href="#"
                                title="Bernardo Galaviz"
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
                        <td>7 May 2019 - 10 May 2019</td>
                        <td>Lorem ipsum dollar</td>
                        <td>$400</td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              href="#"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-dot-circle-o text-success" />{" "}
                              Active
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
                                data-target="#edit_training"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_training"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Git Training</td>
                        <td>
                          <h2 className="table-avatar">
                            <a href="profile.php" className="avatar">
                              <img
                                alt=""
                                src="assets/img/profiles/avatar-11.jpg"
                              />
                            </a>
                            <a href="profile.php">Wilmer Deluna </a>
                          </h2>
                        </td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <a
                                href="#"
                                title="Bernardo Galaviz"
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
                        <td>7 May 2019 - 10 May 2019</td>
                        <td>Lorem ipsum dollar</td>
                        <td>$400</td>
                        <td>
                          <div className="dropdown action-label">
                            <a
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              href="#"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-dot-circle-o text-success" />{" "}
                              Active
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
                                data-target="#edit_training"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_training"
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
          {/* Add Training List Modal */}
          {/* <?php include_once("includes/modals/training/add.php"); ?> */}
          {/* /Add Training List Modal */}
          {/* Edit Training List Modal */}
          {/* <?php include_once("includes/modals/training/edit.php"); ?> */}
          {/* /Edit Training List Modal */}
          {/* Delete Training List Modal */}
          {/* <?php include_once("includes/modals/training/delete.php"); ?> */}
          {/* /Delete Training List Modal */}
        </div>
        {/* /Page Wrapper */}
      </div>
    </>
  );
}

export default Training;
