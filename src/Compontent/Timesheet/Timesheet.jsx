import React from "react";
import Addtimesheet from "./Addtimesheet";
function Timesheet() {
  return (
    <>
      <>
        {/* Main Wrapper */}
        <div className="main-wrapper">
          {/* Header */}
          {/* Page Wrapper */}
          <div className="page-wrapper">
            {/* Page Content */}
            <div className="content container-fluid">
              {/* Page Header */}
              <div className="page-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h3 className="page-title">Timesheet</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.php">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">Timesheet</li>
                    </ul>
                  </div>
                  <div className="col-auto float-right ml-auto">
                    <a
                      href="#"
                      className="btn add-btn"
                      data-toggle="modal"
                      data-target="#add_todaywork"
                    >
                      <i className="fa fa-plus" /> Add Today Work
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
                          <th>Employee</th>
                          <th>Date</th>
                          <th>Projects</th>
                          <th className="text-center">Assigned Hours</th>
                          <th className="text-center">Hours</th>
                          <th className="d-none d-sm-table-cell">
                            Description
                          </th>
                          <th className="text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.php" className="avatar">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-02.jpg"
                                />
                              </a>
                              <a href="profile.php">
                                John Doe <span>Web Designer</span>
                              </a>
                            </h2>
                          </td>
                          <td>8 Mar 2019</td>
                          <td>
                            <h2>Office Management</h2>
                          </td>
                          <td className="text-center">20</td>
                          <td className="text-center">7</td>
                          <td className="d-none d-sm-table-cell col-md-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec vel elit neque.
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
                                  data-target="#edit_todaywork"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_workdetail"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.php" className="avatar">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-09.jpg"
                                />
                              </a>
                              <a href="profile.php">
                                Richard Miles <span>Web Developer</span>
                              </a>
                            </h2>
                          </td>
                          <td>8 Mar 2019</td>
                          <td>
                            <h2>Project Management</h2>
                          </td>
                          <td className="text-center">20</td>
                          <td className="text-center">12</td>
                          <td className="d-none d-sm-table-cell col-md-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec vel elit neque.
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
                                  data-target="#edit_todaywork"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_workdetail"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.php" className="avatar">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-10.jpg"
                                />
                              </a>
                              <a href="profile.php">
                                John Smith <span>Android Developer</span>
                              </a>
                            </h2>
                          </td>
                          <td>8 Mar 2019</td>
                          <td>
                            <h2>Video Calling App</h2>
                          </td>
                          <td className="text-center">20</td>
                          <td className="text-center">12</td>
                          <td className="d-none d-sm-table-cell col-md-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec vel elit neque.
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
                                  data-target="#edit_todaywork"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_workdetail"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.php" className="avatar">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-05.jpg"
                                />
                              </a>
                              <a href="profile.php">
                                Mike Litorus <span>IOS Developer</span>
                              </a>
                            </h2>
                          </td>
                          <td>8 Mar 2019</td>
                          <td>
                            <h2>Hospital Administration</h2>
                          </td>
                          <td className="text-center">20</td>
                          <td className="text-center">12</td>
                          <td className="d-none d-sm-table-cell col-md-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec vel elit neque.
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
                                  data-target="#edit_todaywork"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_workdetail"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.php" className="avatar">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-11.jpg"
                                />
                              </a>
                              <a href="profile.php">
                                Wilmer Deluna <span>Team Leader</span>
                              </a>
                            </h2>
                          </td>
                          <td>8 Mar 2019</td>
                          <td>
                            <h2>Office Management</h2>
                          </td>
                          <td className="text-center">20</td>
                          <td className="text-center">7</td>
                          <td className="d-none d-sm-table-cell col-md-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec vel elit neque.
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
                                  data-target="#edit_todaywork"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_workdetail"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.php" className="avatar">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-12.jpg"
                                />
                              </a>
                              <a href="profile.php">
                                Jeffrey Warden <span>Web Developer</span>
                              </a>
                            </h2>
                          </td>
                          <td>8 Mar 2019</td>
                          <td>
                            <h2>Project Management</h2>
                          </td>
                          <td className="text-center">20</td>
                          <td className="text-center">12</td>
                          <td className="d-none d-sm-table-cell col-md-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec vel elit neque.
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
                                  data-target="#edit_todaywork"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_workdetail"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.php" className="avatar">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-13.jpg"
                                />
                              </a>
                              <a href="profile.php">
                                Bernardo Galaviz <span>Web Developer</span>
                              </a>
                            </h2>
                          </td>
                          <td>8 Mar 2019</td>
                          <td>
                            <h2>Video Calling App</h2>
                          </td>
                          <td className="text-center">20</td>
                          <td className="text-center">12</td>
                          <td className="d-none d-sm-table-cell col-md-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec vel elit neque.
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
                                  data-target="#edit_todaywork"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_workdetail"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.php" className="avatar">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-01.jpg"
                                />
                              </a>
                              <a href="profile.php">
                                Lesley Grauer <span>Team Leader</span>
                              </a>
                            </h2>
                          </td>
                          <td>8 Mar 2019</td>
                          <td>
                            <h2>Hospital Administration</h2>
                          </td>
                          <td className="text-center">20</td>
                          <td className="text-center">12</td>
                          <td className="d-none d-sm-table-cell col-md-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec vel elit neque.
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
                                  data-target="#edit_todaywork"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_workdetail"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.php" className="avatar">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-16.jpg"
                                />
                              </a>
                              <a href="profile.php">
                                Jeffery Lalor <span>Team Leader</span>
                              </a>
                            </h2>
                          </td>
                          <td>8 Mar 2019</td>
                          <td>
                            <h2>Ware house developement</h2>
                          </td>
                          <td className="text-center">20</td>
                          <td className="text-center">9</td>
                          <td className="d-none d-sm-table-cell col-md-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec vel elit neque.
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
                                  data-target="#edit_todaywork"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_workdetail"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.php" className="avatar">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-04.jpg"
                                />
                              </a>
                              <a href="profile.php">
                                Loren Gatlin <span>Android Developer</span>
                              </a>
                            </h2>
                          </td>
                          <td>8 Mar 2019</td>
                          <td>
                            <h2>Office Management</h2>
                          </td>
                          <td className="text-center">20</td>
                          <td className="text-center">12</td>
                          <td className="d-none d-sm-table-cell col-md-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec vel elit neque.
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
                                  data-target="#edit_todaywork"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_workdetail"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.php" className="avatar">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-03.jpg"
                                />
                              </a>
                              <a href="profile.php">
                                Tarah Shropshire <span>Android Developer</span>
                              </a>
                            </h2>
                          </td>
                          <td>8 Mar 2019</td>
                          <td>
                            <h2>Project Management</h2>
                          </td>
                          <td className="text-center">20</td>
                          <td className="text-center">12</td>
                          <td className="d-none d-sm-table-cell col-md-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec vel elit neque.
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
                                  data-target="#edit_todaywork"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_workdetail"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.php" className="avatar">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-08.jpg"
                                />
                              </a>
                              <a href="profile.php">
                                Catherine Manseau <span>Android Developer</span>
                              </a>
                            </h2>
                          </td>
                          <td>8 Mar 2019</td>
                          <td>
                            <h2>Video Calling App</h2>
                          </td>
                          <td className="text-center">20</td>
                          <td className="text-center">12</td>
                          <td className="d-none d-sm-table-cell col-md-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec vel elit neque.
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
                                  data-target="#edit_todaywork"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_workdetail"
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
            {/* Add Today Work Modal */}
            <Addtimesheet />
            {/* /Add Today Work Modal */}
            {/* Edit Today Work Modal */}
            {/* <?php include_once("includes/modals/timesheet/edit_timesheet.php");?> */}
            {/* /Edit Today Work Modal */}
            {/* Delete Today Work Modal */}
            {/* <?php include_once("includes/modals/timesheet/delete_timesheet.php");?> */}
            {/* Delete Today Work Modal */}
          </div>
          {/* /Page Wrapper */}
        </div>
        {/* /Main Wrapper */}
      </>
    </>
  );
}

export default Timesheet;
