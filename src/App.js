import Main from "./Compontent/Recuriement/Main.jsx";
import Contact from "./Compontent/Recuriement/Contact.jsx";
import Footer from "./Compontent/Recuriement/Footer.jsx";
// import Header from "./Compontent/Recuriement/Header.jsx";
import Signup from "./Compontent/Recuriement/Signup";
import Pagenotfound from './Compontent/Notfound/Pagenotfound';
import { Route, Routes } from "react-router-dom";
import Login from "./Compontent/Recuriement/Loging";
import Exprience from "./Compontent/Recuriement/Exprience";
import Apply from "./Compontent/Recuriement/Applications";
import Logout from './Compontent/Recuriement/Logout';
import Dashboard from "./Compontent/Dashboard/Dashboard";
import Contactus from './Compontent/Contact/Contact';
import Header from "./Compontent/Includes/Header";
import Sidebar from "./Compontent/Includes/Sidebar";
import Employeedashboard from "./Compontent/Employee/Employee_dashboard";
import Designations from "./Compontent/Employee/Designations";
import Employee from "./Compontent/Employee/Employee";
import Employee_leave from "./Compontent/Employee/Employee_leave";
import Employee_list from "./Compontent/Employee/Employee_list";
import Assests from "./Compontent/Assests/Assests";
import Holiday from "./Compontent/Holiday/Holiday";
import Department from "./Compontent/Department/Department";
import Terminations from "./Compontent/Terminations/Terminations.jsx";
import Roles from "./Compontent/Permissiom/Roles";
import Projectlist from "./Compontent/Project/Projectlist";
import Projects from "./Compontent/Project/Projects";
import Projectsview from "./Compontent/Project/Projectsview";
import Promotions from "./Compontent/Promotions/Promotions";
import Notice from "./Compontent/Anouncement/Notice.jsx";
import Salary from "./Compontent/Salary/Salary";
import Salarysetting from "./Compontent/Salary/Salarysetting";
import Salaryview from "./Compontent/Salary/Salaryslip";
import Timesheet from "./Compontent/Timesheet/Timesheet";
import Profile from "./Compontent/Users/Profile";
import Resignations from "./Compontent/Resignations/Resignations";
import Users from "./Compontent/Users/Users";
import Jobslisting from "./Compontent/Jobs/Jobslist";
import Category from "./Compontent/Jobs/Category";
import Applications from "./Compontent/Jobs/Applications";
import Vister from "./Compontent/Jobs/Visters";
import Leads from "./Compontent/Leads/Leads";
import Clientprofile from "./Compontent/Users/Clientprofile";
import Client from "./Compontent/Clients/Client";
import Clientlist from "./Compontent/Clients/Clientlist";
function App() {
  return (
    <>
           <Header />
      <div className="main-wrapper">
        <Sidebar />
       <Routes>
         <Route path="/" element={<Dashboard />} />
          <Route path="/Employeedashboard" element={<Employeedashboard />} />
          <Route path="/Designations" element={<Designations />} />
          <Route path="/Employee" element={<Employee />} />
          <Route path="/Employee_leave" element={<Employee_leave />} />
          <Route path="/Employee_list" element={<Employee_list />} />
          <Route path="/Assests" element={<Assests />} />
          <Route path="/Holiday" element={<Holiday />} />
          <Route path="/Department" element={<Department />} />
          <Route path="/Terminations" element={<Terminations />} />
         <Route path="/Roles" element={<Roles />} />
         <Route path="/Projectlist" element={<Projectlist />} />
         <Route path="/Projects" element={<Projects />} />
         <Route path="/Projectsview" element={<Projectsview />} />
         <Route path="/Promotions" element={<Promotions />} />
       <Route path="/Salary" element={<Salary />} />
          <Route path="/Salarysetting" element={<Salarysetting />} />
         <Route path="/Salaryview" element={<Salaryview />} />
         <Route path="/Timesheet" element={<Timesheet />} />
         <Route path="/Profile" element={<Profile />} />
        <Route path="/Resignations" element={<Resignations />} />
         <Route path="/Users" element={<Users />} />
         <Route path="/Category" element={<Category />} />
         <Route path="/Jobslisting" element={<Jobslisting />} />
         <Route path="/Vister" element={<Vister />} />
          <Route path="/Applications" element={<Applications />} />
          <Route path="/Leads" element={<Leads />} />
         <Route path="/Clientprofile" element={<Clientprofile />} />
         <Route path="/Client" element={<Client />} />
          <Route path="/Clientlist" element={<Clientlist />} />
         <Route path="/Notice" element={<Notice />} />
          <Route path="/Contactus" element={<Contactus/>}/>
        </Routes>
          </div>   

          {/* <Header />
        <Routes>
         <Route path="/" element={<Main />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/login" element={<Login />} />
           <Route path="/Apply" element={<Apply />} />
          <Route path="/Exprience" element={<Exprience />} />
          <Route path="/Logout" element={<Logout/>}/>
          <Route path="*" element={<Pagenotfound/>}/>
      </Routes>
       <Footer />      */}
    </>
  );
}

export default App;
