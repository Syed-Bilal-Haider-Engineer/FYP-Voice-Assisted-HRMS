import React from "react";
import Addleave from "./Addleave";
function Employee_leave() {
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
                  <h3 className="page-title">Leaves</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.php">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Leaves</li>
                  </ul>
                </div>
                <div className="col-auto float-right ml-auto">
                  <a
                    href="#"
                    className="btn add-btn"
                    data-toggle="modal"
                    data-target="#add_leave"
                  >
                    <i className="fa fa-plus" /> Add Leave
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
                        <th>From</th>
                        <th>To</th>
                        <th>No of Days</th>
                        <th>Reason</th>
                        <th className="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Employee&gt;</td>
                        <td>Starting_At</td>
                        <td>Ending_On</td>
                        <td>Days</td>
                        <td>Reason</td>
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
                                data-target="#edit_leave"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_approve"
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
          {/* Add Leave Modal */}
          <Addleave />
          {/* /Add Leave Modal */}
          {/* Edit Leave Modal */}
          {/* <?php include_once 'includes/modals/leave/edit_leave.php'; ?> */}
          {/* /Edit Leave Modal */}
          {/* Delete Leave Modal */}
          {/* <?php include_once 'includes/modals/leave/delete_leave.php'; ?> */}
          {/* /Delete Leave Modal */}
        </div>
        {/* /Page Wrapper */}
      </div>
    </>
  );
}

export default Employee_leave;
