import React from "react";
import Addpromotion from "./Addpromotion";
function Promotions() {
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
                  <h3 className="page-title">Promotion</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.php">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Promotion</li>
                  </ul>
                </div>
                <div className="col-auto float-right ml-auto">
                  <a
                    href="#"
                    className="btn add-btn"
                    data-toggle="modal"
                    data-target="#add_promotion"
                  >
                    <i className="fa fa-plus" /> Add Promotion
                  </a>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  {/* Promotion Table */}
                  <table className="table table-striped custom-table mb-0 datatable">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Promoted Employee </th>
                        <th>Department</th>
                        <th>Promotion Designation From </th>
                        <th>Promotion Designation To </th>
                        <th>Promotion Date </th>
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
                        <td>Web Developer</td>
                        <td>Sr Web Developer</td>
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
                                data-target="#edit_promotion"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_promotion"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* /Promotion Table */}
                </div>
              </div>
            </div>
          </div>
          {/* /Page Content */}
          {/* Add Promotion Modal */}
          <Addpromotion />
          {/* /Add Promotion Modal */}
          {/* Edit Promotion Modal */}
          {/* <?php include_once("includes/modals/promotion/edit.php"); ?> */}
          {/* /Edit Promotion Modal */}
          {/* Delete Promotion Modal */}
          {/* <?php include_once("includes/modals/promotion/delete.php"); ?> */}
          {/* /Delete Promotion Modal */}
        </div>
        {/* /Page Wrapper */}
      </div>
    </>
  );
}

export default Promotions;
