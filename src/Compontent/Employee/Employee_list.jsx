import React,{useState} from "react";
import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {employeesearch} from '../Redux/Actions/Actions';
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
import Editeemp from './Editeemp';
function Employee_list() {
  const usedispatch=useDispatch();
  const [employeeid,setstateid]=useState('');
  const Employeestate=useSelector(state=>state.Fetchemployeereducer);
  const designation=useSelector(state=>state.Designationreducer);
  console.log("Employeestate",Employeestate,"designation:",designation);
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
 const [empsearch,setemployeestate]=useState('');

 const searchhandler=()=>{
  usedispatch(employeesearch(empsearch));
  setemployeestate('');
 }

//  .....update employeeid.....
const Updateemployee=(id)=>{
  setstateid(id);
   }
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
              
                <div className="col-sm-6 col-md-9">
                  <div className="form-group form-focus">
                    <input type="text" className="form-control floating"  onChange={(e)=>{
                      setemployeestate(e.target.value)
                    }}/>
                    <label className="focus-label">Search employee</label>
                  </div>
                </div>
              
                <div className="col-sm-6 col-md-3" onClick={searchhandler}>
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
                          <td> {items.role==2 || items.role==3 ? ('Admin'):('Employee')}  </td>
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
                                 onClick={()=>{
                                  Updateemployee(items.EmployeeID)
                                }}
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
        {employeeid && <Editeemp id={employeeid}/>}
      </>
    </>
  );
}

export default Employee_list;
