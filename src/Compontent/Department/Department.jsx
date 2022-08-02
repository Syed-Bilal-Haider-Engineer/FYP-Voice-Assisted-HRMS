import React,{useState} from "react";
import Adddepart from "./Adddepart";
import {useSelector} from 'react-redux';
import Editedepartment from './Editedepartment';
import {
  Container,
  Box,
  Stack,
  Grid,
  Pagination
} from "@mui/material";
function Department() {
 
  const [editestate,editedepartstate]=useState();

  const department = useSelector(state => state.Departmentreducer);
  // ...Paginations...
  const [postsPerPage, setPostsPerPage] = useState(5);
   const [currentPage, setCurrentPage] = useState(1);
   const handleChangepage = (event, value) => {
     setCurrentPage(value);
   };
   const pageCount = Math.ceil(department.length / postsPerPage);

  //  ...department edite...
   const editedepart=(id)=>{
    editedepartstate(id)
   }
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
                    <h3 className="page-title">Department</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.php">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">Department</li>
                    </ul>
                  </div>
                  <div className="col-auto float-right ml-auto">
                    <a
                      href="#"
                      className="btn add-btn"
                      data-toggle="modal"
                      data-target="#add_department"
                    >
                      <i className="fa fa-plus" /> Add Department
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
                          <th>Department Name</th>
                          <th className="text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                      {department.length > 0 && department.slice(
                            currentPage * postsPerPage - postsPerPage,
                            currentPage * postsPerPage).map((items,i)=>{
                          i++;
                         return <>
                          <tr>
                          <td>{i}</td>
                          <td>{items.Department} </td>
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
                                  onClick={()=>{
                                    editedepart(items.id)
                                  }}
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
            {/* /Page Content */}
            {/* Add Department Modal */}
            <Adddepart />
           
          </div>
          {/* /Page Wrapper */}
        </div>
        {editestate && <Editedepartment values={editestate}  Editefun={editedepartstate} />}
      </>
    </>
  );
}

export default Department;
