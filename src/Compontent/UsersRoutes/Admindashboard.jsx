import React from 'react'
import { Route, Routes } from "react-router-dom";
import Header from "../Includes/Header";
import Sidebar from "../Includes/Sidebar";
import Employeedashboard from "../Employee/Employee_dashboard";
import Designations from "../Employee/Designations";
import Employee from "../Employee/Employee";
import Employee_leave from "../Employee/Employee_leave";
import Employee_list from "../Employee/Employee_list";
import Holiday from "../Holiday/Holiday";
import Department from "../Department/Department";
import Terminations from "../Terminations/Terminations.jsx";
import Projectlist from "../Project/Projectlist";
import Projects from "../Project/Projects";
import Projectsview from "../Project/Projectsview";
import Promotions from "../Promotions/Promotions";
import Notice from "../Anouncement/Notice.jsx";
import Salary from "../Salary/Salary";
import Salarysetting from "../Salary/Salarysetting";
import Salaryview from "../Salary/Salaryslip";
import Timesheet from "../Timesheet/Timesheet";
import Profile from "../Users/Profile";
import Resignations from "../Resignations/Resignations";
import Users from "../Users/Users";
import Jobslisting from "../Jobs/Jobslist";
import Category from "../Jobs/Category";
import Applications from "../Jobs/Applications";
import Vister from "../Jobs/Visters";
import Leads from "../Leads/Leads";
import Clientprofile from "../Users/Clientprofile";
import Client from "../Clients/Client";
import Dashboard from "../Dashboard/Dashboard";
import history from './Historycomponent';
import Attendance from '../Employee/Attendance.jsx';
import Contactus from '../Contact/Contact';
import Setting from '../setting/setting';
import HrDashboard from '../Dashboard/Hrdashboard';
function Routesuser() {
  return <>
       <Header />
       <div className="main-wrapper">
         <Sidebar />
         <Routes history={history}  refresh={true}>
           <Route path="/" element={<Dashboard />} />
           <Route path="/Employeedashboard" element={<Employeedashboard />} />
           <Route path="/Admindashboardhr" element={<HrDashboard/>}/>
           <Route path="/Designations" element={<Designations />} />
           <Route path="/Employee" element={<Employee />} />
           <Route path="/Employee_leave" element={<Employee_leave />} />
           <Route path="/Employee_list" element={<Employee_list />} />
           <Route path="/Holiday" element={<Holiday />} />
           <Route path="/Department" element={<Department />} />
           <Route path="/Terminations" element={<Terminations />} />
           <Route path="/Projectsview/:projectid" element={<Projectsview />} exact/>
           <Route path="/Projects" element={<Projects />} />
           <Route path="/Projectlist" element={<Projectlist />} />
           <Route path="/Promotions" element={<Promotions />} />
           <Route path="/Salary" element={<Salary />} />
           <Route path="/Salarysetting" element={<Salarysetting />} />
           <Route path="/Salaryview" element={<Salaryview />} />
           <Route path="/Timesheet" element={<Timesheet />} />
           <Route path="/Profile" element={<Profile />} />
           <Route path="/Resignations" element={<Resignations />} />
           <Route path="/Users" element={<Users />} />
           <Route path="/Category"  element={<Category />} exact/>
           <Route path="/Jobslisting" element={<Jobslisting />} />
           <Route path="/Vister" element={<Vister />} />
           <Route path="/Applications" element={<Applications />} />
           <Route path="/Leads" element={<Leads />} />
           <Route path="/Clientprofile" element={<Clientprofile />} />
           <Route path="/Client" element={<Client />} />
           <Route path="/Notice" element={<Notice />} />
           <Route path='/Attendance' element={<Attendance/>}/>
           <Route path="/Contactus" element={<Contactus/>}/>
           <Route path="/Setting" element={<Setting/>}/>
         </Routes>
     </div>
     </>
}

export default Routesuser