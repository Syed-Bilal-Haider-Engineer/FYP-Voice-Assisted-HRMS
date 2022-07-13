import React from "react";

function Editholiday() {
  return (
    <div className="modal custom-modal fade" id="edit_holiday" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Holiday</h5>
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
                  Holiday Name <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  defaultValue="New Year"
                  type="text"
                />
              </div>
              <div className="form-group">
                <label>
                  Holiday Date <span className="text-danger">*</span>
                </label>
                <div className="cal-icon">
                  <input
                    className="form-control datetimepicker"
                    defaultValue="01-01-2019"
                    type="text"
                  />
                </div>
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

export default Editholiday;
