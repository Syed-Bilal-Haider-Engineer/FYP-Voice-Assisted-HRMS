import React from "react";

function Employee_list() {
  return (
    <>
      <>
        {/* Main Wrapper */}
        <div className="main-wrapper">
          {/* Header */}
          {/* <?php include_once("includes/header.php");?> */}
          {/* /Header */}
          {/* Sidebar */}
          {/* <?php include_once("includes/sidebar.php");?> */}
          {/* /Sidebar */}
          {/* Page Wrapper */}
          <div className="page-wrapper">
            {/* Page Content */}
            <div className="content container-fluid">
              {/* Page Header */}
              <div className="page-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h3 className="page-title">Employee</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.php">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">Employee</li>
                    </ul>
                  </div>
                  <div className="col-auto float-right ml-auto">
                    <a
                      href="#"
                      className="btn add-btn"
                      data-toggle="modal"
                      data-target="#add_employee"
                    >
                      <i className="fa fa-plus" /> Add Employee
                    </a>
                    <div className="view-icons">
                      <a
                        href="employees.php"
                        title="Grid View"
                        className="grid-view btn btn-link active"
                      >
                        <i className="fa fa-th" />
                      </a>
                      <a
                        href="employees-list.php"
                        title="Tabular View"
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
                    <label className="focus-label">Employee ID</label>
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
                    <select className="select floating">
                      <option>Select Designation</option>
                      <option>Web Developer</option>
                      <option>Web Designer</option>
                      <option>Android Developer</option>
                      <option>Ios Developer</option>
                    </select>
                    <label className="focus-label">Designation</label>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <a href="#" className="btn btn-success btn-block">
                    {" "}
                    Search{" "}
                  </a>
                </div>
              </div>
              {/* /Search Filter */}
              <div className="row">
                <div className="col-md-12">
                  <div className="table-responsive">
                    <table className="table table-striped custom-table datatable">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Employee ID</th>
                          <th>Email</th>
                          <th>Mobile</th>
                          <th className="text-nowrap">Join Date</th>
                          <th>Role</th>
                          <th className="text-right no-sort">Action</th>
                        </tr>
                      </thead>
                      {/* <?php
										$sql = "SELECT * FROM employees";
										$query = $dbh->prepare($sql);
										$query->execute();
										$results=$query->fetchAll(PDO::FETCH_OBJ);
										$cnt=1;
										if($query->rowCount() > 0)
										{
										foreach($results as $row)
										{	
									?> */}
                      <tbody>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.php" className="avatar">
                                <img
                                  alt="picture"
                                  src="employees/<?php echo htmlentities($row->Picture);?>"
                                />
                              </a>
                              <a href="profile.php">
                                FirstName-LastName<span>Designation</span>
                              </a>
                            </h2>
                          </td>
                          <td>Employee_Id</td>
                          <td>Email</td>
                          <td>Phone</td>
                          <td>Joining_Date</td>
                          <td>Designation</td>
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
                                  data-target="#edit_employee"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_employee"
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
            {/* Add Employee Modal */}
            {/* <?php include_once("includes/modals/employee/add_employee.php"); ?> */}
            {/* /Add Employee Modal */}
            {/* Edit Employee Modal */}
            {/* <?php include_once("includes/modals/employee/edit_employee.php"); ?> */}
            {/* /Edit Employee Modal */}
            {/* Delete Employee Modal */}
            {/* <?php include_once("includes/modals/employee/delete_employee.php"); ?> */}
            {/* /Delete Employee Modal */}
          </div>
          {/* /Page Wrapper */}
        </div>
        {/* /Main Wrapper */}
      </>
    </>
  );
}

export default Employee_list;
