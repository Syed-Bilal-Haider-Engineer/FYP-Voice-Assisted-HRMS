import React,{useState} from "react";
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
function Applications() {
  const Applicationdetails=useSelector(state=>state.fetchuserAppliations);
  // const designation=useSelector(state=>state.Designationreducer);
  console.log("fetchuserAppliations",Applicationdetails);
  var i=0;
  // .............Paginations...........
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangepage = (event, value) => {
    setCurrentPage(value);
  };
  const pageCount = Math.ceil(Applicationdetails.length / postsPerPage);
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
                    <h3 className="page-title">Applications</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.php">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">Applications</li>
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
                          <th>Job title</th>
                          <th>Univeristy</th>
                          <th>Description</th>
                          <th>Degree</th>
                          <th>CGPA</th>
                          <th>Locations</th>
                          <th>Exprience</th>
                          <th>Company</th>
                          <th>email</th>
                          <th>Phone</th>
                          <th>Selections</th>
                          
                        </tr>
                      </thead>
                      <tbody>    
                          {Applicationdetails.length > 0 && Applicationdetails.slice(
                            currentPage * postsPerPage - postsPerPage,
                            currentPage * postsPerPage
                          ).map((items,index)=>{
                            i++;
                          return <>
                           <tr style={{ color: "black" }}>
                          <td>{i}</td>
                          <td>{items.description}</td>
                          <td>{items.instituename}</td>
                          <td>{items.description}</td>
                          <td>{items.degree}</td>
                          <td>{items.cgpa}</td>
                          <td>{items.address}</td>
                          <td>{items.totalexp}</td>
                          <td>{items.cname}</td>
                          <td>{items.email}</td>
                          <td>{items.phone}</td>
                          
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
                                   {items.Interview}
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_department"
                                >
                                   Reject
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_department"
                                >
                                   Interview
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_department"
                                >
                                  Select
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
    </>
  );
}

export default Applications;
