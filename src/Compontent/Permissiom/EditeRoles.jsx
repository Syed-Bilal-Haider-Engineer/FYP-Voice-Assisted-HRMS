import React from "react";

function EditeRoles() {
  return (
    <div id="edit_role" className="modal custom-modal fade" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content modal-md">
          <div className="modal-header">
            <h5 className="modal-title">Edit Role</h5>
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
              <div className="form-group">
                <label>
                  Role Name <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  defaultValue="Team Leader"
                  type="text"
                />
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

export default EditeRoles;
