import React from "react";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";
import useGet from "../API/API";
import { useSelector } from "react-redux";
import { useState } from "react";
function Header() {
  const [counterstate, setcounterstate] = useState(2);
  var increment = 0;
  const [timestate, settimestate] = useState("");
  const url = "http://localhost/HRMS/Notice/Notice.php";
  useGet(url, "notice");
  const noticevalue = useSelector((state) => state.noticereducer);
  console.log("noticevalue", noticevalue);
  const [noticelength, setLengthstate] = useState(noticevalue.length);
  console.log("notice length", noticelength);
  // /  ......Timer Method........
  function myfunction() {
    var date = new Date().toLocaleTimeString();
    settimestate(date);
  }
  // setInterval(myfunction,1000);

  const Clearhandler=()=>{
    noticevalue.length=0;
    console.log(noticevalue.length);
  }
  return (
    <>
      <div className="header">
        {/* Logo */}
        <div className="header-left">
          <a href="index.php" className="logo">
            <img src={logo} width={40} height={40} alt="" />
          </a>
        </div>
        {/* /Logo */}
        <a id="toggle_btn" href="#">
          <span className="bar-icon">
            <span />
            <span />
            <span />
          </span>
        </a>
        {/* Header Title */}
        <div
          className="page-title-box"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <h3>Smart HRM</h3>
          <h3 style={{ marginLeft: "20px" }}> Time tracking:{timestate}</h3>
        </div>
        {/* /Header Title */}
        <a id="mobile_btn" className="mobile_btn" href="#sidebar">
          <i className="fa fa-bars" />
        </a>
        {/* Header Menu */}
        <ul className="nav user-menu">
          {/* /Search */}
          {/* Notifications */}
          <li className="nav-item dropdown">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
            >
              <i className="fa fa-bell-o" />{" "}
              <span className="badge badge-pill">{noticelength}</span>
            </a>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                <span className="clear-noti" onClick={Clearhandler} style={{cursor:'pointer'}}>
                  
                  Clear All
                </span>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <a href="#">
                      {noticevalue.length > 0 &&
                        noticevalue.map((items, index) => {
                          increment++;
                          if (counterstate >= increment) {
                            return (
                              <div className="media" key={index}>
                                {" "}
                                <div className="media-body">
                                  <p className="noti-details">
                                    <span
                                      className="noti-title"
                                      style={{ fontWeight: "bold" }}
                                    >
                                      {items.title}
                                    </span>
                                    <br />

                                    <span className="noti-title">
                                      {items.notice_desc}
                                    </span>
                                  </p>
                                  <br />
                                  <p className="noti-time">
                                    <span className="notification-time">
                                      Date: {items.date}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            );
                          
                          }
                        
                         })}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <Link to="/Admindashboard/Notice">
                  {" "}
                  View all Notifications{" "}
                </Link>
              </div>
            </div>
          </li>

          <li className="nav-item dropdown has-arrow main-drop">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
            >
              <span className="user-img">
                <span className="status online" />
              </span>
              <span>Profile</span>
            </a>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/Admindashboard/Profile">
                My Profile
              </Link>
              <a className="dropdown-item" href="settings.php">
                Settings
              </a>
              <Link className="dropdown-item" to="/Logout">
                Logout
              </Link>
            </div>
          </li>
        </ul>

        <div className="dropdown mobile-user-menu">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa fa-ellipsis-v" />
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" to="/Admindashboard/Profile">
              My Profile
            </Link>
            <a className="dropdown-item" href="settings.php">
              Settings
            </a>
            <Link className="dropdown-item" to="/logout">
              Logout
            </Link>
          </div>
        </div>
        {/* /Mobile Menu */}
      </div>
    </>
  );
}

export default Header;
