import React from "react";

function Vister() {
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
                  <h3 className="page-title">Vister</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.php">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Vister</li>
                  </ul>
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
                        <th>Vister name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th className="text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>sr</td>
                        <td>Vister name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Address</td>

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
          {/* <?php include_once("includes/modals/department/add_department.php");?> */}
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
  );
}

export default Vister;
