import React from "react";
import Addjobs from "./Addjobs";
function Jobslisting() {
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
                    <h3 className="page-title">Jobs</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.php">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">Jobs</li>
                    </ul>
                  </div>
                  <div className="col-auto float-right ml-auto">
                    <a
                      href="#"
                      className="btn add-btn"
                      data-toggle="modal"
                      data-target="#add_jobs"
                    >
                      <i className="fa fa-plus" /> Add Jobs
                    </a>
                  </div>
                </div>
              </div>
              {/* /Page Header */}
              <div className="row">
                <div className="col-md-12">
                  <div>
                    <table className="table table-striped custom-table mb-0 datatable">
                      <thead>
                        <tr>
                          <th style={{ width: 30 }}>#</th>
                          <th>Jobs title</th>
                          <th>Jobs description</th>
                          <th>Category</th>
                          <th>no_positions</th>
                          <th>locations</th>
                          <th>Opening date</th>
                          <th>close</th>
                          <th>Status</th>
                          <th className="text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ color: "black" }}>
                          <td>sr</td>
                          <td>website</td>
                          <td>website design</td>
                          <td>development</td>
                          <td>4</td>
                          <td>jhang</td>
                          <td>22-200</td>
                          <td>23-33-900</td>
                          <td>Active</td>
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
                                  data-target="#edit_department"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_department"
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
            {/* Add Department Modal */}
            <Addjobs />
            {/* /Add Department Modal */}
            {/* Edit Department Modal */}
            {/* <?php include_once("includes/modals/department/edit_department.php");?> */}
            {/* /Edit Department Modal */}
            {/* Delete Department Modal */}
            {/* <?php include_once("includes/modals/department/delete_department.php");?> */}
            {/* /Delete Department Modal */}
          </div>
          {/* /Page Wrapper */}
        </div>
        {/* /Main Wrapper */}
      </>
    </>
  );
}

export default Jobslisting;
