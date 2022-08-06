import React,{useState} from "react";
import Addnotice from "./Addnotice";
import {useSelector} from 'react-redux';
import { Container, Box, Stack, Pagination } from "@mui/material";
function Notice() {
  const noticevalue=useSelector(state=>state.noticereducer);

  // ...pagination start.....
  const [postsPerPage, setPostsPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangepage = (event, value) => {
    setCurrentPage(value);
  };
  const pageCount = Math.ceil(noticevalue.length / postsPerPage);
  return (
    <>
      <div className="main-wrapper">
        {/* Page Wrapper */}
        <div className="page-wrapper">
          {/* Page Content */}
          <div className="content container-fluid">
            {/* Page Header */}
            <div class="page-header">
              <div class="row align-items-center">
                <div class="col">
                  <h3 class="page-title">Notice</h3>
                  <ul class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="index.php">Dashboard</a>
                    </li>
                    <li class="breadcrumb-item active">Notice</li>
                  </ul>
                </div>
                <div class="col-auto float-right ml-auto">
                  <a
                    href="#"
                    class="btn add-btn"
                    data-toggle="modal"
                    data-target="#add_notice"
                  >
                    <i class="fa fa-plus"></i> Add Notice
                  </a>
                
                </div>
              </div>
            </div>

            {/* /Page Header */}
            <div className="row">
              {
              noticevalue.length > 0 &&
              noticevalue
                  .slice(
                    currentPage * postsPerPage - postsPerPage,
                    currentPage * postsPerPage
                  ).map((items,index)=>{
                const {title,notice_desc,date}=items;
                  return <>
                  <div className="col-md-12" key={index}>
                <div className="card">
                  <div className="card-body">
                    <h4 className="payslip-title">{title}</h4>
                    <div className="row">
                      <div className="col-sm-12 m-b-20">
                        <p
                          sx={{
                            width: "100%",
                            margin: "auto",
                            fontSize: "14px",
                            fontSize: "bold",
                          }}
                        >
                        {notice_desc}
                        </p>
                        <span>Date:{date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                   </>
                })
              }
              
            </div>
          </div>
          {/* /Page Content */}
        </div>
        {noticevalue.length > 0 && (
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
            )}
      </div>
      {/* /Main Wrapper */}
      <Addnotice />
    </>
  );
}

export default Notice;
