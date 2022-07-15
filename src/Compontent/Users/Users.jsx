import React, { useEffect ,useState} from "react";
import Adduser from "./Adduser";
import useGet from '../API/API';
import {  useSelector } from "react-redux";
import {
  Container,
  Box,
  Typography,
  Button,
  Divider,
  Stack,
  Grid,
  Pagination
} from "@mui/material";

const url = "http://localhost/HRMS/Users/User.php";
function Users() {

   // .......Get user values from ReactRedux...........
   const userInfo = useSelector(state => state.Userregisteration);
   const type="user";
   useGet(url,type);
  // .............Page pagination............
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangepage = (event, value) => {
    setCurrentPage(value);
  };

  const pageCount = Math.ceil(userInfo.length / postsPerPage);
 
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
                  <h3 className="page-title">Users</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.php">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Users</li>
                  </ul>
                </div>
                <div className="col-auto float-right ml-auto">
                  <a
                    href="#"
                    className="btn add-btn"
                    data-toggle="modal"
                    data-target="#add_user"
                  >
                    <i className="fa fa-plus" /> Add User
                  </a>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* Search Filter */}
            <div className="row filter-row">
              <div className="col-sm-6 col-md-4">
                <div className="form-group form-focus">
                  <input type="text" className="form-control floating" />
                  <label className="focus-label">Name</label>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="form-group form-focus select-focus">
                  <select className="select floating selectinput">
                    <option>Select Roll</option>
                    <option>Admin</option>
                    <option>Employee</option>
                  </select>

                </div>
              </div>
              <div className="col-sm-12 col-md-4">
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
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Created Date</th>
                        <th>Role</th>
                        <th className="text-right">Action</th>
                      </tr>
                    </thead>
                     <tbody>
                        {userInfo.length > 0 && userInfo.slice(
                        currentPage * postsPerPage - postsPerPage,
                        currentPage * postsPerPage
                      ).map((items) => {
                         
                          return <>
                           <tr>
                            <td>
                              {items.UserName}
                            </td>
                            <td>
                              {items.Email}
                            </td>
                            <td>
                              {items.Phone}
                            </td>
                            <td>
                              {items.timeperiod}
                            </td>
                            <td>{
                              items.userstatus==1 ? "Admin":'Employee'
                              }</td>
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
                                data-target="#edit_user"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_user"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                            </tr>
                          </>
                        })
                        }
                    </tbody> 
                  </table>
                </div>
              </div>
            </div>
          </div>
          <Box  m="15px">
              
                <Stack
                  direction={"row"}
                  alignItems="center"
                  justifyContent="flex-end"

                >
                  <Pagination
                    count={pageCount}
                    page={currentPage}
                    onChange={handleChangepage}
                  />
                </Stack>
              </Box>
          {/* /Page Content */}
          {/* Add User Modal */}
          {/* <Getdata url={url}/> */}
          <Adduser />
          {/* /Add User Modal */}
          {/* Edit User Modal */}
          {/* <?php include_once("includes/modals/user/edit_user.php"); ?> */}
          {/* /Edit User Modal */}
          {/* Delete User Modal */}
          {/* <?php include_once("includes/modals/user/delete_user.php"); ?> */}
          {/* /Delete User Modal */}
        </div>
        {/* /Page Wrapper */}
      </div>
    </>
  );
}

export default Users;
