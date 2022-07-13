import React, { useState } from "react";
import Add from "./Add";
function Assests() {
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
                  <h3 className="page-title">Assets</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.php">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Assets</li>
                  </ul>
                </div>
                <div className="col-auto float-right ml-auto">
                  <button
                    href="#"
                    className="btn add-btn"
                    data-toggle="modal"
                    data-target="#add_asset"
                  >
                    <i className="fa fa-plus" /> Add Asset
                  </button>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* Search Filter */}
            <div className="row filter-row">
              <div className="col-sm-6 col-md-3">
                <div className="form-group form-focus">
                  <input type="text" className="form-control floating" />
                  <label className="focus-label">Employee Name</label>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group form-focus select-focus">
                  <select className="select floating selectinput ">
                    <option value=""> -- Select -- </option>
                    <option value={0}> Pending </option>
                    <option value={1}> Approved </option>
                    <option value={2}> Returned </option>
                  </select>
                 
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <div className="form-group form-focus">
                      <div className="cal-icon">
                        <input
                          className="form-control floating datetimepicker"
                          type="text"
                        />
                      </div>
                      <label className="focus-label">From</label>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="form-group form-focus">
                      <div className="cal-icon">
                        <input
                          className="form-control floating datetimepicker"
                          type="text"
                        />
                      </div>
                      <label className="focus-label">To</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-2">
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
                  <table className="table table-striped custom-table mb-0 datatable">
                    <thead>
                      <tr>
                        <th>Asset User</th>
                        <th>Asset Name</th>
                        <th>Asset Id</th>
                        <th>Purchase Date</th>
                        <th>Warrenty</th>
                        <th>Amount</th>
                        <th className="text-center">Status</th>
                        <th className="text-right" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>AssetUser</td>
                        <td>
                          <strong>assetName</strong>
                        </td>
                        <td>assetId</td>
                        <td>PurchaseDate</td>
                        <td>Warranty</td>
                        <td>Price</td>
                        <td className="text-center">
                          <div className="dropdown action-label">
                            <a
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              href="#"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-dot-circle-o text-danger" />{" "}
                              Pending
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#">
                                <i className="fa fa-dot-circle-o text-danger" />{" "}
                                Pending
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="fa fa-dot-circle-o text-success" />{" "}
                                Approved
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="fa fa-dot-circle-o text-info" />{" "}
                                Returned
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
                                data-target="#edit_asset"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_asset"
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
          {/* Add Asset Modal */}
          <Add />
          {/* /Add Asset Modal */}
          {/* Edit Asset Modal */}
          {/* <?php include_once("includes/modals/assets/edit.php"); ?> */}
          {/* Edit Asset Modal */}
          {/* Delete Asset Modal */}
          {/* <?php include_once("includes/modals/assets/delete.php"); ?> */}
          {/* /Delete Asset Modal */}
        </div>
        {/* /Page Wrapper */}
      </div>
    </>
  );
}

export default Assests;
