import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Box,
  Typography,
  Button,
  Divider,
  Stack,
  Grid,
  Pagination,
} from "@mui/material";
import { POST } from "../API/PostAPI";
import useGet from "../API/API";
import { useEffect } from "react";
function Applications() {
  const url = "http://localhost/HRMS/Application/Changestatus.php";
  const [setstatus, setstatusstate] = useState();
  const Applicationdetails = useSelector((state) => state.fetchuserAppliations);
  console.log("fetchuserAppliations", Applicationdetails);
  var i = 0;
  // .............Paginations...........
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangepage = (event, value) => {
    setCurrentPage(value);
  };
  const pageCount = Math.ceil(Applicationdetails.length / postsPerPage);
  // .......Fetch Applications Handler..........

    useGet("http://localhost/HRMS/Application/Fetchapplicationsuser.php", "Applications");
 
  // .............Decison making...........
  const DecisionHandler = (id, status) => {
    console.log("status",status);
    const value = {
      id,
      status,
    };
    setstatusstate(value);
  };
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
                        {Applicationdetails.length > 0 &&
                          Applicationdetails.slice(
                            currentPage * postsPerPage - postsPerPage,
                            currentPage * postsPerPage
                          ).map((items, index) => {
                            i++;
                            return (
                              <>
                                <tr style={{ color: "black" }} key={index}>
                                  <td>{i}</td>
                                  <td>{items.designation}</td>
                                  <td>{items.instituename}</td>
                                  <td>{items.description.substring(0, 50)}</td>
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
                                        <i className="material-icons">
                                          more_vert
                                        </i>
                                      </a>
                                      <div className="dropdown-menu dropdown-menu-right">
                                        <span className="dropdown-item">
                                          {items.Interview}
                                        </span>
                                        <hr/>
                                        <span
                                          className="dropdown-item"
                                          onClick={() => {
                                            DecisionHandler(items.id, "Reject");
                                          }}
                                        >
                                          Reject
                                        </span>
                                        <span
                                          className="dropdown-item"
                                          onClick={() => {
                                            DecisionHandler(
                                              items.id,
                                              "Interview"
                                            );
                                          }}
                                        >
                                          Interview
                                        </span>
                                        <span
                                          className="dropdown-item"
                                          onClick={() => {
                                            DecisionHandler(items.id, "Select");
                                          }}
                                        >
                                          Select
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <Box m="15px">
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
          </div>
        </div>
        {setstatus && (
          <POST values={setstatus} url={url} Addstate={setstatusstate} />
        )}
        {/* /Main Wrapper */}
      </>
    </>
  );
}

export default Applications;
