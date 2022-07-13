import React from "react";
import Addterminations from "./Addterminations";
function Terminations() {
  return (
    <>
        {/* Main Wrapper */}
        <div className="main-wrapper">
          {/* Page Wrapper */}
          <div className="page-wrapper">
            {/* Page Content */}
            <div className="content container-fluid">
              {/* Page Header */}
              <div className="page-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h3 className="page-title">Termination</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.php">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">Termination</li>
                    </ul>
                  </div>
                  <div className="col-auto float-right ml-auto">
                    <a
                      href="#"
                      className="btn add-btn"
                      data-toggle="modal"
                      data-target="#add_termination"
                    >
                      <i className="fa fa-plus" /> Add Termination
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
                          <th>#</th>
                          <th>Terminated Employee </th>
                          <th>Department</th>
                          <th>Termination Type </th>
                          <th>Termination Date </th>
                          <th>Reason</th>
                          <th>Notice Date </th>
                          <th className="text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <h2 className="table-avatar blue-link">
                              <a href="profile.php" className="avatar">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-02.jpg"
                                />
                              </a>
                              <a href="profile.php">John Doe</a>
                            </h2>
                          </td>
                          <td>Web Development</td>
                          <td>Misconduct</td>
                          <td>28 Feb 2019</td>
                          <td>Lorem Ipsum Dollar</td>
                          <td>28 Feb 2019</td>
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
                                  data-target="#edit_termination"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_termination"
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
            {/* Add Termination Modal */}
            <Addterminations />
            {/* /Add Termination Modal */}
            {/* Edit Termination Modal */}
            {/* <?php include_once("includes/modals/termination/edit.php"); ?> */}
            {/* /Edit Termination Modal */}
            {/* 				
				<!-- Delete Termination Modal
				 <?php include_once("includes/modals/termination/delete.php"); ?> */}
            {/* /Delete Termination Modal */}
          </div>
          {/* /Page Wrapper */}
        </div>
        {/* /Main Wrapper */}
      </>
  );
}

export default Terminations;
