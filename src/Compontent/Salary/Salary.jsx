import React from "react";
import Add_salary from "./Add_salary";
import Calculater from '../Calculator/Calculter';
function Salary() {
  return (
    <>
      <div className="main-wrapper">
        {/* Page Wrapper */}
        <div className="page-wrapper">
          {/* Page Content */}
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="page-title">Employee Salary</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.php">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Salary</li>
                  </ul>
                </div>
                <div className="col-auto float-right ml-auto">
                  <a
                    href="#"
                    className="btn add-btn"
                    data-toggle="modal"
                    data-target="#add_salary"
                  >
                    <i className="fa fa-plus" /> Add Salary
                  </a>
                  <a
                  style={{marginRight:'5px'}}
                    href="#"
                    className="btn add-btn"
                    data-toggle="modal"
                    data-target="#use_calculater"
                  >
                    <i className="fa fa-plus" /> Calculator
                  </a>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* Search Filter */}
            <div className="row filter-row">
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                <div className="form-group form-focus">
                  <input type="text" className="form-control floating" />
                  <label className="focus-label">Employee Name</label>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                <div className="form-group form-focus select-focus">
                  <select className="select floating selectinput">
                    <option value=""> -- Select -- </option>
                    <option value="">Employee</option>
                    <option value={1}>Manager</option>
                  </select>
                  
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                <div className="form-group form-focus select-focus">
                  <select className="select floating selectinput">
                    <option> -- Select -- </option>
                    <option> Pending </option>
                    <option> Approved </option>
                    <option> Rejected </option>
                  </select>
                 
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                <div className="form-group form-focus">
                  <div className="cal-icon">
                    <input
                      className="form-control floating datetimepicker"
                      type="text"
                    />
                  </div>
                  <label className="focus-label">From</label>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                <div className="form-group form-focus">
                  <div className="cal-icon">
                    <input
                      className="form-control floating datetimepicker"
                      type="text"
                    />
                  </div>
                  <label className="focus-label">To</label>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
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
                        <th>Employee</th>
                        <th>Employee ID</th>
                        <th>Email</th>
                        <th>Join Date</th>
                        <th>Role</th>
                        <th>Salary</th>
                        <th>Payslip</th>
                        <th className="text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a href="profile.php" className="avatar">
                              <img
                                alt=""
                                src="assets/img/profiles/avatar-02.jpg"
                              />
                            </a>
                            <a href="profile.php">
                              John Doe <span>Web Designer</span>
                            </a>
                          </h2>
                        </td>
                        <td>FT-0001</td>
                        <td>johndoe@example.com</td>
                        <td>1 Jan 2013</td>
                        <td>
                          <div className="dropdown">
                            <a
                              href=""
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Web Designer{" "}
                            </a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                Software Engineer
                              </a>
                              <a className="dropdown-item" href="#">
                                Software Tester
                              </a>
                              <a className="dropdown-item" href="#">
                                Frontend Developer
                              </a>
                              <a className="dropdown-item" href="#">
                                UI/UX Developer
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>$59698</td>
                        <td>
                          <a
                            className="btn btn-sm btn-primary"
                            href="salary-view.php"
                          >
                            Generate Slip
                          </a>
                        </td>
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
                                data-target="#edit_salary"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_salary"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a href="profile.php" className="avatar">
                              <img
                                src="assets/img/profiles/avatar-09.jpg"
                                alt=""
                              />
                            </a>
                            <a href="profile.php">
                              Richard Miles <span>Web Developer</span>
                            </a>
                          </h2>
                        </td>
                        <td>FT-0002</td>
                        <td>richardmiles@example.com</td>
                        <td>1 Jan 2013</td>
                        <td>
                          <div className="dropdown">
                            <a
                              href=""
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Web Developer{" "}
                            </a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                Software Engineer
                              </a>
                              <a className="dropdown-item" href="#">
                                Software Tester
                              </a>
                              <a className="dropdown-item" href="#">
                                Frontend Developer
                              </a>
                              <a className="dropdown-item" href="#">
                                UI/UX Developer
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>$72000</td>
                        <td>
                          <a
                            className="btn btn-sm btn-primary"
                            href="salary-view.php"
                          >
                            Generate Slip
                          </a>
                        </td>
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
                                data-target="#edit_salary"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_salary"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a href="profile.php" className="avatar">
                              <img
                                src="assets/img/profiles/avatar-10.jpg"
                                alt=""
                              />
                            </a>
                            <a href="profile.php">
                              John Smith <span>Android Developer</span>
                            </a>
                          </h2>
                        </td>
                        <td>FT-0003</td>
                        <td>johnsmith@example.com</td>
                        <td>1 Jan 2013</td>
                        <td>
                          <div className="dropdown">
                            <a
                              href=""
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Android Developer{" "}
                            </a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                Software Engineer
                              </a>
                              <a className="dropdown-item" href="#">
                                Software Tester
                              </a>
                              <a className="dropdown-item" href="#">
                                Frontend Developer
                              </a>
                              <a className="dropdown-item" href="#">
                                UI/UX Developer
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>$48200</td>
                        <td>
                          <a
                            className="btn btn-sm btn-primary"
                            href="salary-view.php"
                          >
                            Generate Slip
                          </a>
                        </td>
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
                                data-target="#edit_salary"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_salary"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a href="profile.php" className="avatar">
                              <img
                                src="assets/img/profiles/avatar-05.jpg"
                                alt=""
                              />
                            </a>
                            <a href="profile.php">
                              Mike Litorus <span>IOS Developer</span>
                            </a>
                          </h2>
                        </td>
                        <td>FT-0004</td>
                        <td>mikelitorus@example.com</td>
                        <td>1 Jan 2013</td>
                        <td>
                          <div className="dropdown">
                            <a
                              href=""
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              IOS Developer{" "}
                            </a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                Software Engineer
                              </a>
                              <a className="dropdown-item" href="#">
                                Software Tester
                              </a>
                              <a className="dropdown-item" href="#">
                                Frontend Developer
                              </a>
                              <a className="dropdown-item" href="#">
                                UI/UX Developer
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>$59698</td>
                        <td>
                          <a
                            className="btn btn-sm btn-primary"
                            href="salary-view.php"
                          >
                            Generate Slip
                          </a>
                        </td>
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
                                data-target="#edit_salary"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_salary"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a href="profile.php" className="avatar">
                              <img
                                src="assets/img/profiles/avatar-11.jpg"
                                alt=""
                              />
                            </a>
                            <a href="profile.php">
                              Wilmer Deluna <span>Team Leader</span>
                            </a>
                          </h2>
                        </td>
                        <td>FT-0005</td>
                        <td>wilmerdeluna@example.com</td>
                        <td>1 Jan 2013</td>
                        <td>
                          <div className="dropdown">
                            <a
                              href=""
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Team Leader{" "}
                            </a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                Software Engineer
                              </a>
                              <a className="dropdown-item" href="#">
                                Software Tester
                              </a>
                              <a className="dropdown-item" href="#">
                                Frontend Developer
                              </a>
                              <a className="dropdown-item" href="#">
                                UI/UX Developer
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>$43000</td>
                        <td>
                          <a
                            className="btn btn-sm btn-primary"
                            href="salary-view.php"
                          >
                            Generate Slip
                          </a>
                        </td>
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
                                data-target="#edit_salary"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_salary"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a href="profile.php" className="avatar">
                              <img
                                src="assets/img/profiles/avatar-12.jpg"
                                alt=""
                              />
                            </a>
                            <a href="profile.php">
                              Jeffrey Warden <span>Web Developer</span>
                            </a>
                          </h2>
                        </td>
                        <td>FT-0006</td>
                        <td>jeffreywarden@example.com</td>
                        <td>1 Jan 2013</td>
                        <td>
                          <div className="dropdown">
                            <a
                              href=""
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Web Developer
                            </a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                Software Engineer
                              </a>
                              <a className="dropdown-item" href="#">
                                Software Tester
                              </a>
                              <a className="dropdown-item" href="#">
                                Frontend Developer
                              </a>
                              <a className="dropdown-item" href="#">
                                UI/UX Developer
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>$45000</td>
                        <td>
                          <a
                            className="btn btn-sm btn-primary"
                            href="salary-view.php"
                          >
                            Generate Slip
                          </a>
                        </td>
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
                                data-target="#edit_salary"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_salary"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a href="profile.php" className="avatar">
                              <img
                                src="assets/img/profiles/avatar-13.jpg"
                                alt=""
                              />
                            </a>
                            <a href="profile.php">
                              Bernardo Galaviz <span>Web Developer</span>
                            </a>
                          </h2>
                        </td>
                        <td>FT-0007</td>
                        <td>bernardogalaviz@example.com</td>
                        <td>1 Jan 2014</td>
                        <td>
                          <div className="dropdown">
                            <a
                              href=""
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Web Developer{" "}
                            </a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                Software Engineer
                              </a>
                              <a className="dropdown-item" href="#">
                                Software Tester
                              </a>
                              <a className="dropdown-item" href="#">
                                Frontend Developer
                              </a>
                              <a className="dropdown-item" href="#">
                                UI/UX Developer
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>$38400</td>
                        <td>
                          <a
                            className="btn btn-sm btn-primary"
                            href="salary-view.php"
                          >
                            Generate Slip
                          </a>
                        </td>
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
                                data-target="#edit_salary"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_salary"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a href="profile.php" className="avatar">
                              <img
                                src="assets/img/profiles/avatar-01.jpg"
                                alt=""
                              />
                            </a>
                            <a href="profile.php">
                              Lesley Grauer <span>Team Leader</span>
                            </a>
                          </h2>
                        </td>
                        <td>FT-0008</td>
                        <td>lesleygrauer@example.com</td>
                        <td>1 Jun 2015</td>
                        <td>
                          <div className="dropdown">
                            <a
                              href=""
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Team Leader{" "}
                            </a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                Software Engineer
                              </a>
                              <a className="dropdown-item" href="#">
                                Software Tester
                              </a>
                              <a className="dropdown-item" href="#">
                                Frontend Developer
                              </a>
                              <a className="dropdown-item" href="#">
                                UI/UX Developer
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>$75500</td>
                        <td>
                          <a
                            className="btn btn-sm btn-primary"
                            href="salary-view.php"
                          >
                            Generate Slip
                          </a>
                        </td>
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
                                data-target="#edit_salary"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_salary"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a href="profile.php" className="avatar">
                              <img
                                src="assets/img/profiles/avatar-16.jpg"
                                alt=""
                              />
                            </a>
                            <a href="profile.php">
                              Jeffery Lalor <span>Team Leader</span>
                            </a>
                          </h2>
                        </td>
                        <td>FT-0009</td>
                        <td>jefferylalor@example.com</td>
                        <td>1 Jan 2013</td>
                        <td>
                          <div className="dropdown">
                            <a
                              href=""
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Team Leader{" "}
                            </a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                Software Engineer
                              </a>
                              <a className="dropdown-item" href="#">
                                Software Tester
                              </a>
                              <a className="dropdown-item" href="#">
                                Frontend Developer
                              </a>
                              <a className="dropdown-item" href="#">
                                UI/UX Developer
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>$73550</td>
                        <td>
                          <a
                            className="btn btn-sm btn-primary"
                            href="salary-view.php"
                          >
                            Generate Slip
                          </a>
                        </td>
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
                                data-target="#edit_salary"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_salary"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a href="profile.php" className="avatar">
                              <img
                                src="assets/img/profiles/avatar-04.jpg"
                                alt=""
                              />
                            </a>
                            <a href="profile.php">
                              Loren Gatlin <span>Android Developer</span>
                            </a>
                          </h2>
                        </td>
                        <td>FT-0010</td>
                        <td>lorengatlin@example.com</td>
                        <td>1 Jan 2013</td>
                        <td>
                          <div className="dropdown">
                            <a
                              href=""
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Android Developer{" "}
                            </a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                Software Engineer
                              </a>
                              <a className="dropdown-item" href="#">
                                Software Tester
                              </a>
                              <a className="dropdown-item" href="#">
                                Frontend Developer
                              </a>
                              <a className="dropdown-item" href="#">
                                UI/UX Developer
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>$55000</td>
                        <td>
                          <a
                            className="btn btn-sm btn-primary"
                            href="salary-view.php"
                          >
                            Generate Slip
                          </a>
                        </td>
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
                                data-target="#edit_salary"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_salary"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a href="profile.php" className="avatar">
                              <img
                                src="assets/img/profiles/avatar-03.jpg"
                                alt=""
                              />
                            </a>
                            <a href="profile.php">
                              Tarah Shropshire <span>Android Developer</span>
                            </a>
                          </h2>
                        </td>
                        <td>FT-0011</td>
                        <td>tarahshropshire@example.com</td>
                        <td>1 Jan 2013</td>
                        <td>
                          <div className="dropdown">
                            <a
                              href=""
                              className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Android Developer{" "}
                            </a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                Software Engineer
                              </a>
                              <a className="dropdown-item" href="#">
                                Software Tester
                              </a>
                              <a className="dropdown-item" href="#">
                                Frontend Developer
                              </a>
                              <a className="dropdown-item" href="#">
                                UI/UX Developer
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>$92400</td>
                        <td>
                          <a
                            className="btn btn-sm btn-primary"
                            href="salary-view.php"
                          >
                            Generate Slip
                          </a>
                        </td>
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
                                data-target="#edit_salary"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_salary"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* /Page Content */}
          {/* Add Salary Modal */}
          <Calculater/>
          <Add_salary />
          {/* /Add Salary Modal */}
          {/* Edit Salary Modal */}
          {/* <?php include_once("includes/modals/salary/edit.php"); ?> */}
          {/* /Edit Salary Modal */}
          {/* Delete Salary Modal */}
          {/* <?php include_once("includes/modals/salary/delete.php"); ?> */}
          {/* /Delete Salary Modal */}
        </div>
        {/* /Page Wrapper */}
      </div>
    </>
  );
}

export default Salary;
