import React from "react";
import Addresignations from "./Addresignations";
function Resignations() {
  return (
    <>
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
                    <h3 className="page-title">Resignation</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.php">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">Resignation</li>
                    </ul>
                  </div>
                  <div className="col-auto float-right ml-auto">
                    <a
                      href="#"
                      className="btn add-btn"
                      data-toggle="modal"
                      data-target="#add_resignation"
                    >
                      <i className="fa fa-plus" /> Add Resignation
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
                          <th>Resigning Employee </th>
                          <th>Department </th>
                          <th>Reason </th>
                          <th>Notice Date </th>
                          <th>Resignation Date </th>
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
                          <td>Lorem ipsum dollar</td>
                          <td>28 Feb 2019</td>
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
                                  data-target="#edit_resignation"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_resignation"
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
            {/* Add Resignation Modal */}
            <Addresignations />
            {/* /Add Resignation Modal */}
            {/* Edit Resignation Modal */}
            {/* <?php include_once("includes/modals/resignation/edit.php"); ?> */}
            {/* /Edit Resignation Modal */}
            {/* Delete Resignation Modal */}
            {/* <?php include_once("includes/modals/resignation/delete.php"); ?> */}
            {/* /Delete Resignation Modal */}
          </div>
          {/* /Page Wrapper */}
        </div>
        {/* /Main Wrapper */}
      </>
    </>
  );
}

export default Resignations;
