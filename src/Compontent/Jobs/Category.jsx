import React, { useState } from "react";
import Add_category from "./Addcategory";
import useGet from "../API/API";
import { POST } from "../API/PostAPI";
import { useSelector } from "react-redux";
import Editecategory from './Editecategory';
import {Link} from 'react-router-dom';
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
import { ServerStyleSheets } from "@mui/styles";
const url = "http://localhost/HRMS/Category/deletecategory.php";
function Category() {
  const [add, setAddState] = React.useState();
  const [setupdate, setUpdatestate] = React.useState();
  const Action = {
    cursor: "pointer",
  };
  var i = 0;
  const CategoryInfo = useSelector((state) => state.categoryreducer);
  console.log("userInfo", CategoryInfo);
  //......paginations..........
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangepage = (event, value) => { setCurrentPage(value); }
  const pageCount = Math.ceil(CategoryInfo.length / postsPerPage);
  // ............Delete Hanlder..............
  const CategoryDelete = (id) => {
    const values = { id};
    setAddState(values);
  };

  const Updatecategory=(id)=>{
    setUpdatestate(id);
  }
  // ........Category Request send of Server............
  useGet("http://localhost/HRMS/Category/getcategory.php", "category");
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
                    <h3 className="page-title">Category</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/Admindashboard">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">Category</li>
                    </ul>
                  </div>
                  <div className="col-auto float-right ml-auto">
                    <a
                      href="#"
                      className="btn add-btn"
                      data-toggle="modal"
                      data-target="#add_category"
                    >
                      <i className="fa fa-plus" /> Add Category
                    </a>
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
                          <th>Category Name</th>
                          <th className="text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {CategoryInfo.length > 0 &&
                          CategoryInfo.slice(
                            currentPage * postsPerPage - postsPerPage,
                            currentPage * postsPerPage
                          ).map((Items) => {
                            i++;
                            return (
                              <>
                                <tr>
                                  <td>{i}</td>
                                  <td>{Items.catname}</td>
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
                                        <span
                                          className="dropdown-item"
                                          data-toggle="modal"
                                          data-target="#Update_category"
                                          style={Action}
                                          onClick={()=>{
                                            Updatecategory(Items.Catid);
                                          }}
                                        >
                                          <i className="fa fa-pencil m-r-5" />{" "}
                                          Edit
                                        </span>
                                        <span
                                          onClick={() => {
                                            CategoryDelete(Items.Catid);
                                          }}
                                          className="dropdown-item"
                                          style={Action}
                                        >
                                          <i className="fa fa-trash-o m-r-5" />{" "}
                                          Delete
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
            <Add_category />
          </div>
        </div>
        {add && <POST values={add} url={url} Addstate={setAddState} />}
        {setupdate && <Editecategory values={setupdate} Editefun={setUpdatestate} />}
      </>
    </>
  );
}

export default Category;
