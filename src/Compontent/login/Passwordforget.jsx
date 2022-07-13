import React from "react";
import { Formik, Field, Form } from "formik";
import Errorsg from "../Msgerror/Errormsg";
import schema from "../Yup/Yup";
function Passwordforget() {
  return (
    <>
      <div className="main-wrapper">
        {/* Header */}
        {/* /Header */}
        {/* Sidebar */}
        {/* /Sidebar */}
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                {/* Page Header */}
                <div className="page-header">
                  <div className="row">
                    <div className="col-sm-12">
                      <h3 className="page-title">Change Password</h3>
                    </div>
                  </div>
                </div>
                {/* /Page Header */}
                <form method="POST" encType="multipart/form-data">
                  <div className="form-group">
                    <label>Current password</label>
                    <input
                      required=""
                      name="password"
                      type="password"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>New password</label>
                    <input
                      required=""
                      name="newpassword"
                      type="password"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Confirm password</label>
                    <input
                      required=""
                      name="confirmpassword"
                      type="password"
                      className="form-control"
                    />
                  </div>
                  <div className="submit-section">
                    <button
                      type="submit"
                      name="change_pass"
                      className="btn btn-primary submit-btn"
                    >
                      Update Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* /Page Content */}
        </div>
        {/* /Page Wrapper */}
      </div>
    </>
  );
}

export default Passwordforget;
