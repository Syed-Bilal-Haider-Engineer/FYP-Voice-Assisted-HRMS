import React from "react";
import { NavLink, Link } from "react-router-dom";
function Sidebar() {
     //.........Private and Protected route.........
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
    <div className="sidebar" id="sidebar" >
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">
                <span>Main</span>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-dashboard" /> <span> Dashboard</span>{" "}
                </a>
              </li>
              <li className="menu-title">
                <span>Employees</span>
              </li>
              <li className="submenu">
                <a href="#" className="noti-dot">
                  <i className="la la-user" /> <span> Employees</span>{" "}
                  <span className="menu-arrow" />
                </a>
               
                <ul>
                  <li>
                    <Link to="/Admindashboard/Employee_leave">Employee Leave </Link>
                  </li>
                 
                  <li>
                    <Link to="/Admindashboard/Timesheet">Timesheet</Link>
                  </li>
                  {checkstatus==2 ? ( <>
                    <li>
                    <Link to="/Admindashboard/Employee">All Employees </Link>
                  </li>
                  <li>
                    <Link to="/Admindashboard/Holiday">Holidays</Link>
                  </li>
                  <li>
                    <Link to="/Admindashboard/Department">Departments</Link>
                  </li>
                  <li>
                    <Link to="/Admindashboard/Designations">Designations</Link>
                  </li> </>): (null )}
                </ul>
                </li>
              {  checkstatus==2 ? ( <>
                 <li className="submenu">
                 <a href="#">
                   <i className="la la-user" /> <span> Recuriements</span>
                   <span className="menu-arrow" />
                 </a>
                 <ul style={{ display: "none" }}>
                   <li>
                     <Link to="/Admindashboard/Jobslisting">Jobs </Link>
                   </li>
                   <li>
                     <Link to="/Admindashboard/Category">Category </Link>
                   </li>
                   <li>
                     <Link to="/Admindashboard/Applications">Applications </Link>
                   </li>
                   <li>
                     <Link to="/Admindashboard/Vister">Vister </Link>
                   </li>
                 </ul>
               </li>
               <li>
                 <Link to="/Admindashboard/Client">
                   <i className="la la-users" /> <span>Clients</span>
                 </Link>
               </li>
               <li>
                    <Link to="/Admindashboard/Timesheet">Timesheet</Link>
                  </li>
               <li>
               <Link to="/Admindashboard/Leads">
                 <i className="la la-user-secret" /> <span>Leads</span>
               </Link>
             </li>
             <li>
                <Link to="/Admindashboard/Terminations">
                  <i className="la la-times-circle" />
                  <span>Termination</span>
                </Link>
              </li>
              <li>
                <Link to="/Admindashboard/Notice">
                  <i className="la la-times-circle" />
                  <span>Notice</span>
                </Link>
              </li>
              <li>
                <Link to="/Admindashboard/Promotions">
                  <i className="la la-bullhorn" /> <span>Promotion</span>
                </Link>
              </li>
             </>
              ):null}
             

                 
              <li className="submenu">
                <a href="#">
                  <i className="la la-rocket" /> <span> Projects</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <Link to="/Admindashboard/Projects">Projects</Link>
                  </li>
                </ul>
              </li>
              
              <li className="menu-title">
                <span>HR</span>
              </li>
              <li>
                    <Link to="/Admindashboard/Projects">Projects</Link>
                  </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-money" /> <span> Payroll </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <Link to="/Admindashboard/Salary"> Employee Salary </Link>
                  </li>
                  <li>
                    <Link to="/Admindashboard/Salarysetting">Salary setting</Link>
                  </li>
                  <li>
                    <Link to="/Admindashboard/Salaryview"> Payslip </Link>
                  </li>
                </ul>
              </li>

              
              <li>
                <Link to="/Admindashboard/Resignations">
                  <i className="la la-external-link-square" />{" "}
                  <span>Resignations</span>
                </Link>
              </li>
             
              <li>
                <Link to="/Admindashboard/Contactus">
                <i className="la la-times-circle" />
                  <span>Contact</span>
                </Link>
              </li>
              <li className="menu-title">
                <span>Pages</span>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-user" /> <span> Profile </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <Link to="/Admindashboard/Profile">Employee Profile</Link>
                  </li>
                 
                </ul>
              </li>
              <li>
                <a href="settings.php">
                  <i className="la la-cogs" /> <span>Settings</span>
                </a>
              </li>
              <li>
                <Link to="/Admindashboard/Logout">
                  <i className="la la-power-off" /> <span>Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
