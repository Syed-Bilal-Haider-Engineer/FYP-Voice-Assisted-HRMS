import React,{useState} from "react";
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
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
function Employee_list() {
  const Employeestate=useSelector(state=>state.Fetchemployeereducer);
  console.log("Employeestate",Employeestate);
  const [postsPerPage, setPostsPerPage] = useState(5);
   const [currentPage, setCurrentPage] = useState(1);
   const handleChangepage = (event, value) => {
     setCurrentPage(value);
   };
 
   const pageCount = Math.ceil(Employeestate.length / postsPerPage);

   var Role,checkstatus;
   if(localStorage.getItem("user"))
   {
   const Islogin=window.atob(localStorage.getItem("user"));
    Role=JSON.parse(Islogin);
    checkstatus=Role.token;
   };
 
   console.log("checkstatus App.js",checkstatus)
  return (
    <>
      <>
        {/* Main Wrapper */}
        <div className="main-wrapper">
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
                  { checkstatus==2 ? (
                    <a
                      href="#"
                      className="btn add-btn"
                      data-toggle="modal"
                      data-target="#add_employee"
                    >
                      <i className="fa fa-plus" /> Add Employee
                    </a>):null }
                    <div className="view-icons">
                    <Link
                     to="/Admindashboard/Employee"
                      title="Grid View"
                      className="grid-view btn btn-link active"
                    >
                      <i className="fa fa-th" />
                    </Link>
                    <Link to="/Admindashboard/Employee_list"
                      title="Tabular View"
                      className="list-view btn btn-link"
                    >
                      <i className="fa fa-bars" />
                    </Link>
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
                    <select className="select floating selectinput">
                      <option>Select Designation</option>
                      <option>Web Developer</option>
                      <option>Web Designer</option>
                      <option>Android Developer</option>
                      <option>Ios Developer</option>
                    </select>
                    
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
                          <th>Email</th>
                          <th>Mobile</th>
                         <th>Designations</th>
                         <th>Address</th>
                          <th>Role</th>
                          <th className="text-right no-sort">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                      {Employeestate.length >0 && Employeestate.slice(
                            currentPage * postsPerPage - postsPerPage,
                            currentPage * postsPerPage
                          ).map((items,i)=>{
                            return <>
                            <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="#" className="avatar">
                                <img
                                  alt="picture"
                                  src={`http://localhost/HRMS/Uploads/${items.picture}`}
                                />
                              </a>
                             <span>
                             {items.fname} {items.lname}<span>{items.designation}</span>
                                </span>
                            </h2>
                          </td>
                          <td>{items.email}</td>
                          <td>{items.phone}</td>
                          <td>{items.designation}</td>
                          <td>{items.address}</td>
                          <td>{items.role==0 ? 'Employee':'Admin'}  </td>
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
                               
                              </div>
                            </div>
                          </td>
                        </tr>
                            </>
                        
                         })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* /Page Content */}
            <Box  m="15px">
              <Stack
                direction={"row"}
                alignItems="center"
                justifyContent="flex-end">
                <Pagination
                  count={pageCount}
                  page={currentPage}
                  onChange={handleChangepage}
                />
              </Stack>
            </Box>
          </div>
          {/* /Page Wrapper */}
        </div>
        {/* /Main Wrapper */}
      </>
    </>
  );
}

export default Employee_list;
