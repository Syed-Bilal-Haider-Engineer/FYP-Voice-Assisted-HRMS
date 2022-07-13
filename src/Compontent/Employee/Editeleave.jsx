import React from "react";

function Editeleave() {
  return (
    <div id="edit_leave" className="modal custom-modal fade" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Leave</h5>
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
                  Leave Type <span className="text-danger">*</span>
                </label>
                <select className="select">
                  <option>Select Leave Type</option>
                  <option>Casual Leave 12 Days</option>
                </select>
              </div>
              <div className="form-group">
                <label>
                  From <span className="text-danger">*</span>
                </label>
                <div className="cal-icon">
                  <input
                    className="form-control datetimepicker"
                    defaultValue="01-01-2019"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>
                  To <span className="text-danger">*</span>
                </label>
                <div className="cal-icon">
                  <input
                    className="form-control datetimepicker"
                    defaultValue="01-01-2019"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>
                  Number of days <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  readOnly=""
                  type="text"
                  defaultValue={2}
                />
              </div>
              <div className="form-group">
                <label>
                  Remaining Leaves <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  readOnly=""
                  defaultValue={12}
                  type="text"
                />
              </div>
              <div className="form-group">
                <label>
                  Leave Reason <span className="text-danger">*</span>
                </label>
                <textarea
                  rows={4}
                  className="form-control"
                  defaultValue={"Going to hospital"}
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

export default Editeleave;
