import React from "react";
import Addroles from "./Addroles";
function Roles() {
  return (
    <>
      <div className="main-wrapper">
        {/* Header */}
        {/* <?php include_once("includes/header.php"); ?> */}
        {/* /Header */}
        {/* Sidebar */}
        {/* <?php include_once("includes/setting_sidebar.php");?> */}
        {/* /Sidebar */}
        {/* Page Wrapper */}
        <div className="page-wrapper">
          {/* Page Content */}
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Roles &amp; Permissions</h3>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-sm-4 col-md-4 col-lg-4 col-xl-3">
                <a
                  href="#"
                  className="btn btn-primary btn-block"
                  data-toggle="modal"
                  data-target="#add_role"
                >
                  <i className="fa fa-plus" /> Add Roles
                </a>
                <div className="roles-menu">
                  <ul>
                    <li className="active">
                      <a href="javascript:void(0);">
                        Administrator
                        <span className="role-action">
                          <span
                            className="action-circle large"
                            data-toggle="modal"
                            data-target="#edit_role"
                          >
                            <i className="material-icons">edit</i>
                          </span>
                          <span
                            className="action-circle large delete-btn"
                            data-toggle="modal"
                            data-target="#delete_role"
                          >
                            <i className="material-icons">delete</i>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        CEO
                        <span className="role-action">
                          <span
                            className="action-circle large"
                            data-toggle="modal"
                            data-target="#edit_role"
                          >
                            <i className="material-icons">edit</i>
                          </span>
                          <span
                            className="action-circle large delete-btn"
                            data-toggle="modal"
                            data-target="#delete_role"
                          >
                            <i className="material-icons">delete</i>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        Manager
                        <span className="role-action">
                          <span
                            className="action-circle large"
                            data-toggle="modal"
                            data-target="#edit_role"
                          >
                            <i className="material-icons">edit</i>
                          </span>
                          <span
                            className="action-circle large delete-btn"
                            data-toggle="modal"
                            data-target="#delete_role"
                          >
                            <i className="material-icons">delete</i>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        Team Leader
                        <span className="role-action">
                          <span
                            className="action-circle large"
                            data-toggle="modal"
                            data-target="#edit_role"
                          >
                            <i className="material-icons">edit</i>
                          </span>
                          <span
                            className="action-circle large delete-btn"
                            data-toggle="modal"
                            data-target="#delete_role"
                          >
                            <i className="material-icons">delete</i>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        Accountant
                        <span className="role-action">
                          <span
                            className="action-circle large"
                            data-toggle="modal"
                            data-target="#edit_role"
                          >
                            <i className="material-icons">edit</i>
                          </span>
                          <span
                            className="action-circle large delete-btn"
                            data-toggle="modal"
                            data-target="#delete_role"
                          >
                            <i className="material-icons">delete</i>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        Web Developer
                        <span className="role-action">
                          <span
                            className="action-circle large"
                            data-toggle="modal"
                            data-target="#edit_role"
                          >
                            <i className="material-icons">edit</i>
                          </span>
                          <span
                            className="action-circle large delete-btn"
                            data-toggle="modal"
                            data-target="#delete_role"
                          >
                            <i className="material-icons">delete</i>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        Web Designer
                        <span className="role-action">
                          <span
                            className="action-circle large"
                            data-toggle="modal"
                            data-target="#edit_role"
                          >
                            <i className="material-icons">edit</i>
                          </span>
                          <span
                            className="action-circle large delete-btn"
                            data-toggle="modal"
                            data-target="#delete_role"
                          >
                            <i className="material-icons">delete</i>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        HR
                        <span className="role-action">
                          <span
                            className="action-circle large"
                            data-toggle="modal"
                            data-target="#edit_role"
                          >
                            <i className="material-icons">edit</i>
                          </span>
                          <span
                            className="action-circle large delete-btn"
                            data-toggle="modal"
                            data-target="#delete_role"
                          >
                            <i className="material-icons">delete</i>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        UI/UX Developer
                        <span className="role-action">
                          <span
                            className="action-circle large"
                            data-toggle="modal"
                            data-target="#edit_role"
                          >
                            <i className="material-icons">edit</i>
                          </span>
                          <span
                            className="action-circle large delete-btn"
                            data-toggle="modal"
                            data-target="#delete_role"
                          >
                            <i className="material-icons">delete</i>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        SEO Analyst
                        <span className="role-action">
                          <span
                            className="action-circle large"
                            data-toggle="modal"
                            data-target="#edit_role"
                          >
                            <i className="material-icons">edit</i>
                          </span>
                          <span
                            className="action-circle large delete-btn"
                            data-toggle="modal"
                            data-target="#delete_role"
                          >
                            <i className="material-icons">delete</i>
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-8 col-md-8 col-lg-8 col-xl-9">
                <h6 className="card-title m-b-20">Module Access</h6>
                <div className="m-b-30">
                  <ul className="list-group notification-list">
                    <li className="list-group-item">
                      Employee
                      <div className="status-toggle">
                        <input
                          type="checkbox"
                          id="staff_module"
                          className="check"
                        />
                        <label htmlFor="staff_module" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </li>
                    <li className="list-group-item">
                      Holidays
                      <div className="status-toggle">
                        <input
                          type="checkbox"
                          id="holidays_module"
                          className="check"
                          defaultChecked=""
                        />
                        <label
                          htmlFor="holidays_module"
                          className="checktoggle"
                        >
                          checkbox
                        </label>
                      </div>
                    </li>
                    <li className="list-group-item">
                      Leaves
                      <div className="status-toggle">
                        <input
                          type="checkbox"
                          id="leave_module"
                          className="check"
                          defaultChecked=""
                        />
                        <label htmlFor="leave_module" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </li>
                    <li className="list-group-item">
                      Events
                      <div className="status-toggle">
                        <input
                          type="checkbox"
                          id="events_module"
                          className="check"
                          defaultChecked=""
                        />
                        <label htmlFor="events_module" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </li>
                    <li className="list-group-item">
                      Chat
                      <div className="status-toggle">
                        <input
                          type="checkbox"
                          id="chat_module"
                          className="check"
                          defaultChecked=""
                        />
                        <label htmlFor="chat_module" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </li>
                    <li className="list-group-item">
                      Jobs
                      <div className="status-toggle">
                        <input
                          type="checkbox"
                          id="job_module"
                          className="check"
                        />
                        <label htmlFor="job_module" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="table-responsive">
                  <table id="" className="table table-striped custom-table">
                    <thead>
                      <tr>
                        <th id="permission">Module Permission</th>
                        <th id="read" className="text-center">
                          Read
                        </th>
                        <th id="write" className="text-center">
                          Write
                        </th>
                        <th id="create" className="text-center">
                          Create
                        </th>
                        <th id="delete" className="text-center">
                          Delete
                        </th>
                        <th id="import" className="text-center">
                          Import
                        </th>
                        <th id="export" className="text-center">
                          Export
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Employee</td>
                        <td className="text-center">
                          <input type="checkbox" defaultChecked="" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" defaultChecked="" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" defaultChecked="" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" defaultChecked="" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" defaultChecked="" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" defaultChecked="" />
                        </td>
                      </tr>
                      <tr>
                        <td>Holidays</td>
                        <td className="text-center">
                          <input type="checkbox" defaultChecked="" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" defaultChecked="" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" defaultChecked="" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" defaultChecked="" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" defaultChecked="" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" defaultChecked="" />
                        </td>
                      </tr>
                      <tr>
                        <td>Leaves</td>
                        <td className="text-center">
                          <input type="checkbox" defaultChecked="" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" defaultChecked="" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" defaultChecked="" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" defaultChecked="" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" defaultChecked="" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" defaultChecked="" />
                        </td>
                      </tr>
                      <tr>
                        <td>Events</td>
                        <td className="text-center">
                          <input type="checkbox" defaultChecked="" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" defaultChecked="" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" defaultChecked="" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" defaultChecked="" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" defaultChecked="" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" defaultChecked="" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* /Page Content */}
          {/* Add Role Modal */}
          <Addroles />
          {/* /Add Role Modal */}
          {/* Edit Role Modal */}
          {/* <?php include_once("includes/modals/roles/edit.php"); ?> */}
          {/* /Edit Role Modal */}
          {/* Delete Role Modal */}
          {/* <?php include_once("includes/modals/roles/delete.php"); ?> */}
          {/* /Delete Role Modal */}
        </div>
        {/* /Page Wrapper */}
      </div>
    </>
  );
}

export default Roles;
