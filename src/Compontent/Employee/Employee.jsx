import React from "react";
import Addemployee from "./Addemployee";
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
function Employee() {
   const Employeestate=useSelector(state=>state.Fetchemployeereducer);
   console.log("Employeestate",Employeestate);

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
                   </a>
                  ) :null}
                 
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
                    <option value="0">Select Designation</option>
                    <option value="1">Web Developer</option>
                    <option value="2">Web Designer</option>
                    <option value="3">Android Developer</option>
                    <option value="4">Ios Developer</option>
                  </select>
                
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <a href="#" className="btn btn-success btn-block">
                  Search
                </a>
              </div>
            </div>
            {/* Search Filter */}
            {/* user profiles list starts her */}
            <div className="row staff-grid-row">
            {Employeestate.map((items,i)=>{

              return <>
        
              <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3" key={i}>
                <div className="profile-widget">
                  <div className="profile-img">
                    <a href="#" className="avatar">
                      <img src={`http://localhost/HRMS/Uploads/${items.picture}`}  alt="picture" />
                    
                    </a>
                  </div>
                  <div className="dropdown profile-action">
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
                  <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                    <span>{items.fname} {items.lname}</span>
                                      </h4>
                  <div className="small text-muted">{items.designation}</div>
                </div>
              </div>
            
              </>
            })}
            </div>
           
          </div>
          {/* /Page Content */}
          <Addemployee />
          {/* /Add Employee Modal */}
          {/* Edit Employee Modal */}
          {/* <?php include_once("includes/modals/employee/edit_employee.php"); ?> */}
          {/* /Edit Employee Modal */}
          {/* Delete Employee Modal */}
          {/* <?php include_once("includes/modals/employee/delete_employee.php"); ?> */}
          {/* /Delete Employee Modal */}
        </div>
        {/* /Page Wrapper */}
      </div>
      {/* /Main Wrapper */}
    </>
  );
}

export default Employee;
