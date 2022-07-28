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
                                  <div className="pro-edit">
                                    <a
                                      data-target="#profile_info"
                                      data-toggle="modal"
                                      className="edit-icon"
                                      href="#"
                                    >
                                      <i className="fa fa-pencil" />
                                    </a>
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
            <div
              id="profile_info"
              className="modal custom-modal fade"
              role="dialog"
            >
              <div
                className="modal-dialog modal-dialog-centered modal-lg"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Profile Information</h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="profile-img-wrap edit-img">
                            <img
                              className="inline-block"
                              src="assets/img/profiles/avatar-02.jpg"
                              alt="user"
                            />
                            <div className="fileupload btn">
                              <span className="btn-text">edit</span>
                              <input className="upload" type="file" />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>First Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="John"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Last Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="Doe"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Birth Date</label>
                                <div className="cal-icon">
                                  <input
                                    className="form-control datetimepicker"
                                    type="text"
                                    defaultValue="05/06/1985"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Gender</label>
                                <select className="select form-control">
                                  <option value="male selected">Male</option>
                                  <option value="female">Female</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Address</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="4487 Snowbird Lane"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>State</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="New York"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Country</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="United States"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Pin Code</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={10523}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Phone Number</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="631-889-3206"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              Department <span className="text-danger">*</span>
                            </label>
                            <select className="select">
                              <option>Select Department</option>
                              <option>Web Development</option>
                              <option>IT Management</option>
                              <option>Marketing</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              Designation <span className="text-danger">*</span>
                            </label>
                            <select className="select">
                              <option>Select Designation</option>
                              <option>Web Designer</option>
                              <option>Web Developer</option>
                              <option>Android Developer</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              Reports To <span className="text-danger">*</span>
                            </label>
                            <select className="select">
                              <option>-</option>
                              <option>Wilmer Deluna</option>
                              <option>Lesley Grauer</option>
                              <option>Jeffery Lalor</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="submit-section">
                        <button className="btn btn-primary submit-btn">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Personal Info Modal */}

            {/* /Emergency Contact Modal */}
            {/* Education Modal */}
            <div
              id="education_info"
              className="modal custom-modal fade"
              role="dialog"
            >
              <div
                className="modal-dialog modal-dialog-centered modal-lg"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title"> Education Informations</h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-scroll">
                        <div className="card">
                          <div className="card-body">
                            <h3 className="card-title">
                              Education Informations{" "}
                              <a
                                href="javascript:void(0);"
                                className="delete-icon"
                              >
                                <i className="fa fa-trash-o" />
                              </a>
                            </h3>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group form-focus focused">
                                  <input
                                    type="text"
                                    defaultValue="Oxford University"
                                    className="form-control floating"
                                  />
                                  <label className="focus-label">
                                    Institution
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus focused">
                                  <input
                                    type="text"
                                    defaultValue="Computer Science"
                                    className="form-control floating"
                                  />
                                  <label className="focus-label">Subject</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus focused">
                                  <div className="cal-icon">
                                    <input
                                      type="text"
                                      defaultValue="01/06/2002"
                                      className="form-control floating datetimepicker"
                                    />
                                  </div>
                                  <label className="focus-label">
                                    Starting Date
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus focused">
                                  <div className="cal-icon">
                                    <input
                                      type="text"
                                      defaultValue="31/05/2006"
                                      className="form-control floating datetimepicker"
                                    />
                                  </div>
                                  <label className="focus-label">
                                    Complete Date
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus focused">
                                  <input
                                    type="text"
                                    defaultValue="BE Computer Science"
                                    className="form-control floating"
                                  />
                                  <label className="focus-label">Degree</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus focused">
                                  <input
                                    type="text"
                                    defaultValue="Grade A"
                                    className="form-control floating"
                                  />
                                  <label className="focus-label">Grade</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <h3 className="card-title">
                              Education Informations{" "}
                              <a
                                href="javascript:void(0);"
                                className="delete-icon"
                              >
                                <i className="fa fa-trash-o" />
                              </a>
                            </h3>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group form-focus focused">
                                  <input
                                    type="text"
                                    defaultValue="Oxford University"
                                    className="form-control floating"
                                  />
                                  <label className="focus-label">
                                    Institution
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus focused">
                                  <input
                                    type="text"
                                    defaultValue="Computer Science"
                                    className="form-control floating"
                                  />
                                  <label className="focus-label">Subject</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus focused">
                                  <div className="cal-icon">
                                    <input
                                      type="text"
                                      defaultValue="01/06/2002"
                                      className="form-control floating datetimepicker"
                                    />
                                  </div>
                                  <label className="focus-label">
                                    Starting Date
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus focused">
                                  <div className="cal-icon">
                                    <input
                                      type="text"
                                      defaultValue="31/05/2006"
                                      className="form-control floating datetimepicker"
                                    />
                                  </div>
                                  <label className="focus-label">
                                    Complete Date
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus focused">
                                  <input
                                    type="text"
                                    defaultValue="BE Computer Science"
                                    className="form-control floating"
                                  />
                                  <label className="focus-label">Degree</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus focused">
                                  <input
                                    type="text"
                                    defaultValue="Grade A"
                                    className="form-control floating"
                                  />
                                  <label className="focus-label">Grade</label>
                                </div>
                              </div>
                            </div>
                            <div className="add-more">
                              <a href="javascript:void(0);">
                                <i className="fa fa-plus-circle" /> Add More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="submit-section">
                        <button className="btn btn-primary submit-btn">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Education Modal */}
            {/* Experience Modal */}
            <div
              id="experience_info"
              className="modal custom-modal fade"
              role="dialog"
            >
              <div
                className="modal-dialog modal-dialog-centered modal-lg"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Experience Informations</h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-scroll">
                        <div className="card">
                          <div className="card-body">
                            <h3 className="card-title">
                              Experience Informations{" "}
                              <a
                                href="javascript:void(0);"
                                className="delete-icon"
                              >
                                <i className="fa fa-trash-o" />
                              </a>
                            </h3>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group form-focus">
                                  <input
                                    type="text"
                                    className="form-control floating"
                                    defaultValue="Digital Devlopment Inc"
                                  />
                                  <label className="focus-label">
                                    Company Name
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus">
                                  <input
                                    type="text"
                                    className="form-control floating"
                                    defaultValue="United States"
                                  />
                                  <label className="focus-label">
                                    Location
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus">
                                  <input
                                    type="text"
                                    className="form-control floating"
                                    defaultValue="Web Developer"
                                  />
                                  <label className="focus-label">
                                    Job Position
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus">
                                  <div className="cal-icon">
                                    <input
                                      type="text"
                                      className="form-control floating datetimepicker"
                                      defaultValue="01/07/2007"
                                    />
                                  </div>
                                  <label className="focus-label">
                                    Period From
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus">
                                  <div className="cal-icon">
                                    <input
                                      type="text"
                                      className="form-control floating datetimepicker"
                                      defaultValue="08/06/2018"
                                    />
                                  </div>
                                  <label className="focus-label">
                                    Period To
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <h3 className="card-title">
                              Experience Informations{" "}
                              <a
                                href="javascript:void(0);"
                                className="delete-icon"
                              >
                                <i className="fa fa-trash-o" />
                              </a>
                            </h3>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group form-focus">
                                  <input
                                    type="text"
                                    className="form-control floating"
                                    defaultValue="Digital Devlopment Inc"
                                  />
                                  <label className="focus-label">
                                    Company Name
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus">
                                  <input
                                    type="text"
                                    className="form-control floating"
                                    defaultValue="United States"
                                  />
                                  <label className="focus-label">
                                    Location
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus">
                                  <input
                                    type="text"
                                    className="form-control floating"
                                    defaultValue="Web Developer"
                                  />
                                  <label className="focus-label">
                                    Job Position
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus">
                                  <div className="cal-icon">
                                    <input
                                      type="text"
                                      className="form-control floating datetimepicker"
                                      defaultValue="01/07/2007"
                                    />
                                  </div>
                                  <label className="focus-label">
                                    Period From
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus">
                                  <div className="cal-icon">
                                    <input
                                      type="text"
                                      className="form-control floating datetimepicker"
                                      defaultValue="08/06/2018"
                                    />
                                  </div>
                                  <label className="focus-label">
                                    Period To
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="add-more">
                              <a href="javascript:void(0);">
                                <i className="fa fa-plus-circle" /> Add More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="submit-section">
                        <button className="btn btn-primary submit-btn">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
       
      </>
}

export default Profile;
