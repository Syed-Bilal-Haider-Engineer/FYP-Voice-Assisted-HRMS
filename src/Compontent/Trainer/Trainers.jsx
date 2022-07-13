import React from "react";

function Trainers() {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Trainers</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.php">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Trainers</li>
                </ul>
              </div>
              <div className="col-auto float-right ml-auto">
                <a
                  href="#"
                  className="btn add-btn"
                  data-toggle="modal"
                  data-target="#add_trainer"
                >
                  <i className="fa fa-plus" /> Add New
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
                      <th>Name </th>
                      <th>Contact Number </th>
                      <th>Email </th>
                      <th>Description </th>
                      <th>Status </th>
                      <th className="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
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
                      <td>9876543210</td>
                      <td>johndoe@example.com</td>
                      <td>Lorem ipsum dollar</td>
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
                              data-target="#edit_type"
                            >
                              <i className="fa fa-pencil m-r-5" /> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_type"
                            >
                              <i className="fa fa-trash-o m-r-5" /> Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
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
                      <td>9876543120</td>
                      <td>mikelitorus@example.com</td>
                      <td>Lorem ipsum dollar</td>
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
                              data-target="#edit_type"
                            >
                              <i className="fa fa-pencil m-r-5" /> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_type"
                            >
                              <i className="fa fa-trash-o m-r-5" /> Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
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
                      <td>9876543210</td>
                      <td>wilmerdeluna@example.com</td>
                      <td>Lorem ipsum dollar</td>
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
                              data-target="#edit_type"
                            >
                              <i className="fa fa-pencil m-r-5" /> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_type"
                            >
                              <i className="fa fa-trash-o m-r-5" /> Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <h2 className="table-avatar">
                          <a href="profile.php" className="avatar">
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-10.jpg"
                            />
                          </a>
                          <a href="profile.php">John Smith </a>
                        </h2>
                      </td>
                      <td>9876543210</td>
                      <td>johnsmith@example.com</td>
                      <td>Lorem ipsum dollar</td>
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
                              data-target="#edit_type"
                            >
                              <i className="fa fa-pencil m-r-5" /> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_type"
                            >
                              <i className="fa fa-trash-o m-r-5" /> Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        <h2 className="table-avatar">
                          <a href="profile.php" className="avatar">
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-09.jpg"
                            />
                          </a>
                          <a href="profile.php">Richard Miles </a>
                        </h2>
                      </td>
                      <td>9876543210</td>
                      <td>richardmiles@example.com</td>
                      <td>Lorem ipsum dollar</td>
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
                              data-target="#edit_type"
                            >
                              <i className="fa fa-pencil m-r-5" /> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_type"
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
        {/* Add Trainers List Modal */}
        {/* <?php include_once("includes/modals/trainers/add.php"); ?> */}
        {/* /Add Trainers List Modal */}
        {/* Edit Trainers List Modal */}
        {/* <?php include_once("includes/modals/trainers/edit.php"); ?> */}
        {/* /Edit Trainers List Modal */}
        {/* Delete Trainers List Modal */}
        {/* <?php include_once("includes/modals/trainers/delete.php"); ?> */}
        {/* /Delete Trainers List Modal */}
      </div>
    </>
  );
}

export default Trainers;
