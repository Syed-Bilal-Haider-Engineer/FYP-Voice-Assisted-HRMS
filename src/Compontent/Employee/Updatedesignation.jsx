import React from "react";

function Updatedesignation() {
  return (
    <div
      id="edit_designation"
      className="modal custom-modal fade"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Designation</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label>
                  Designation Name <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  value="Web Developer"
                  type="text"
                />
              </div>
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
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Updatedesignation;
