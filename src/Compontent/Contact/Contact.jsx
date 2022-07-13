import React from "react";
import useGet from '../API/API';
import {  useSelector } from "react-redux";
function Contactus() {
    // .......Get user values from ReactRedux...........
//    const userInfo = useSelector(state => state.Userregisteration);
//    console.log("userInfo", userInfo);
  // const url="http://localhost/HRMS/Contact/Contact.php";
  //  useGet(url);
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
                    <h3 className="page-title">Contact us</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.php">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">Contact us</li>
                    </ul>
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
                          <th>Username</th>
                          <th>Email </th>
                          <th>Subject </th>
                          <th>Messag</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                           
                          </td>
                          <td>Web Development</td>
                          <td>Lorem ipsum dollar</td>
                          <td>28 Feb 2019</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* /Page Content */}
            {/* Add Resignation Modal */}
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

export default Contactus;
