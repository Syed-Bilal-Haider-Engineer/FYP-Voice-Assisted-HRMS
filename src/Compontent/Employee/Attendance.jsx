import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ipaddress } from "../Recuriement/url";
import { POST } from "../API/PostAPI";
import Loading from '../../Loading';
import axios from "axios";
function Attendance() {
  const [loading, setLoading] = useState(false);
  const [checkouts,setcheckout]=useState('');
  const attendancedetails = useSelector((state) => state.attendancereducer);
  console.log("attendancedetails",attendancedetails);
  const Employeestate = useSelector((state) => state.Fetchemployeereducer);
  console.log("attendancedetails", attendancedetails);
  const url = "http://localhost/HRMS/Attendance/attendance.php";
  const checkouturl="http://localhost/HRMS/Attendance/checkout.php";
  //   ...get user Id....
  var userdetials, checkstatus, userID;
  if (localStorage.getItem("user")) {
    const Islogin = window.atob(localStorage.getItem("user"));
    userdetials = JSON.parse(Islogin);
    checkstatus = userdetials.token;
    userID = userdetials.id;
  }
  console.log("userID",userID);
  const [checkIP,setcheckipstate]=useState(false);
  const [ipaddressvalue,setipaddress]=useState('');
  const [add, setaddstate] = useState();
  const [macaddress,setmacaddress]=useState();
  const [staticip, setstaticIPstate] = useState("192.168.10.3");
  // ...useEffct for IP address....
  useEffect(() => {
    setLoading(true);
    axios
      .get(ipaddress + "/getIpAddress")
      .then((resp) => {
        console.log("resp.data", resp.data);
        if(resp.data.IP==staticip){
          setipaddress(resp.data.IP);
          setmacaddress(resp.data.macline);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log("error", error);
      });
  }, []);

  // ...check In...
  const attendancemarks = (values) => {
    const id = {
      values,
      macaddress
    };
    setcheckipstate(true)
    setaddstate(id);
  };
  // ...check out....
  const checkouthandler=(values)=>{
    const id = {
      values,
    };
    console.log("id",id);
    setcheckout(id);
    setcheckipstate(false);
  }
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
                  <h3 className="page-title">Attendance</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.php">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Attendance</li>
                  </ul>
                </div>
                {checkstatus==1 ?(
                   <div className="col-auto float-right ml-auto">
                   <div
                     style={{
                       display: "flex",
                       justifyContent: "space-around",
                       alignItems: "center",
                     }}
                   >
                     {checkIP==false && ipaddressvalue!=''&&
                      (<button
                           className="btn add-btn"
                           style={{
                             marginLeft: "5px",
                             height: "50px",
                             width: "90px",
                           }}
                           onClick={() => {
                             attendancemarks(userID);
                           }}
                         >
                           Check in
                         </button>)}
                           {checkIP==true ? (<button
                           className="btn add-btn"
                           style={{
                             marginLeft: "5px",
                             height: "50px",
                             width: "90px",
                           }}
                           onClick={ ()=>{
                             checkouthandler(userID)
                           }
                           }
                         >
                           check out
                         </button>):null}
                   </div>
                 </div>
                ):null}
                 
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-striped custom-table mb-0 datatable">
                    <thead>
                      <tr>
                        <th style={{ width: 30 }}>#</th>
                        <th>Employee name </th>
                        <th>Check in </th>
                        <th>Check out </th>
                        <th>Working hour </th>
                        {/* <th className="text-right">Action</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {attendancedetails.map((items, index) => {
                        const { EmployeeID, checkin, checkout, workinghour } =
                          items;
                        return (
                          <>
                            <tr key={index}>
                              <td>1</td>
                              {Employeestate.map((element, i) => {
                                if (element.EmployeeID == EmployeeID) {
                                  return <td key={i}>{element.username}</td>;
                                }
                              })}
                             <td>{checkin}</td>
                              <td>{checkout}</td>
                              <td>{workinghour}</td>
                              {/* <td className="text-right">
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
                                      data-target="#edit_designation"
                                    >
                                      <i className="fa fa-pencil m-r-5" /> Edit
                                    </a>
                                  </div>
                                </div>
                              </td> */}
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
        {/* /Page Wrapper */}
      </div>
      <Loading loading={loading} />
      {add && <POST values={add} url={url} Addstate={setaddstate} />}
      {checkouts && <POST values={checkouts} url={checkouturl} Addstate={setcheckout}/>}
    </>
  );
}

export default Attendance;
