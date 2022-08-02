import { exists } from "i18next";
import React from "react";
import { useSelector } from "react-redux";
function Profile() {
  const Employeestate = useSelector((state) => state.Fetchemployeereducer);
  console.log("Employeestate", Employeestate);

  var Role, checkstatus, id;
  if (localStorage.getItem("user")) {
    const Islogin = window.atob(localStorage.getItem("user"));
    Role = JSON.parse(Islogin);
    checkstatus = Role.token;
    id = Role.id;
  }
  console.log("id", id);
  return <>
        {/* Main Wrapper */}
        <div className="main-wrapper">
          {/* Page Wrapper */}
          <div className="page-wrapper">
            {/* Page Content */}
            <div className="content container-fluid">
              {/* Page Header */}
              <div className="page-header">
                <div className="row">
                  <div className="col-sm-12">
                    <h3 className="page-title">Profile</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.php">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">Profile</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /Page Header */}
              <div className="card mb-0">
                <div className="card-body">
                  <div className="row">
                    {Employeestate.length > 0 &&
                      Employeestate.map((element, index) => {
                        if (element.EmployeeID == id) {
                          return (
                            <>
                              <div className="col-md-12">
                                <div className="profile-view">
                                  <div className="profile-img-wrap">
                                    <div className="profile-img">
                                      <a href="#">
                                        <img
                                          alt=""
                                          src={`http://localhost/HRMS/Uploads/${element.picture}`}
                                        />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="profile-basic">
                                    <div className="row">
                                      <div className="col-md-5">
                                        <div className="profile-info-left">
                                          <h3 className="user-name m-t-0 mb-0">
                                            {element.username}
                                          </h3>

                                          <small className="text-muted">
                                            {element.designation}
                                          </small>

                                          <div className="small doj text-muted">
                                            Date of Join :{element.DateTime}
                                          </div>
                                          {/* <div className="staff-msg">
                                        <a className="btn btn-custom" href="chat.php">
                                          Send Message
                                        </a>
                                      </div> */}
                                        </div>
                                      </div>
                                      <div className="col-md-7">
                                        <ul className="personal-info">
                                          <li>
                                            <div className="title">Phone:</div>
                                            <div className="text">
                                              <a href="">{element.phone}</a>
                                            </div>
                                          </li>
                                          <li>
                                            <div className="title">Email:</div>
                                            <div className="text">
                                              <a href="">{element.email}</a>
                                            </div>
                                          </li>

                                          <li>
                                            <div className="title">
                                              Address:
                                            </div>
                                            <div className="text">
                                              {element.address}
                                            </div>
                                            <div className="title">
                                              Degree:
                                            </div>
                                            <div className="text">
                                              {element.degree}
                                            </div>
                                            <div className="title" style={{fontSize:'12px'}}>
                                              Univeristy:
                                            </div>
                                            <div className="text">
                                              {element.instituename}
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                    
                        }
                      })}
                  </div>
                </div>
              </div>
           
             
                  </div>
                </div>
              </div>
         
       
      </>
}

export default Profile;
