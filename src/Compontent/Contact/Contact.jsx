import React, { useState } from "react";
import useGet from "../API/API";
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
function Contactus() {
  // .......Get user values from ReactRedux...........
  const url = "http://localhost/HRMS/Contact/Contact.php";
  const type = "contact";
  useGet(url, type);

  const userInfo = useSelector((state) => state.contactusreducer);
  console.log("conatct us", userInfo);
  //  ...pagination...
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangepage = (event, value) => {
    setCurrentPage(value);
  };
  const pageCount = Math.ceil(userInfo.length / postsPerPage);
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
                        <th>Username</th>
                        <th>Email </th>
                        <th>Subject </th>
                        <th>Messag</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userInfo.length > 0 &&
                        userInfo.map((items, index) => {
                          const { username, email, subject, msg, date } = items;
                          return (
                            <>
                              <tr key={index}>
                                <td>{username}</td>
                                <td>{email}</td>
                                <td>{subject}</td>
                                <td>{msg}</td>
                                <th>{date}</th>
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
        </div>
      </div>
      <Box m="15px">
        <Stack direction={"row"} alignItems="center" justifyContent="flex-end">
          <Pagination
            count={pageCount}
            page={currentPage}
            onChange={handleChangepage}
          />
        </Stack>
      </Box>
    </>
  );
}

export default Contactus;
