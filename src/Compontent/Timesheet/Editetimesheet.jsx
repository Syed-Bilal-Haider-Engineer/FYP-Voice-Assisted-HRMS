import React from "react";

function Editetimesheet() {
  return (
    <div id="edit_todaywork" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Work Details</h5>
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
                <div className="form-group col-sm-6">
                  <label>
                    Project <span className="text-danger">*</span>
                  </label>
                  <select className="select">
                    <option>Office Management</option>
                    <option>Project Management</option>
                    <option>Video Calling App</option>
                    <option>Hospital Administration</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-sm-4">
                  <label>
                    Deadline <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="5 May 2019"
                      readOnly=""
                    />
                  </div>
                </div>
                <div className="form-group col-sm-4">
                  <label>
                    Total Hours <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue={100}
                    readOnly=""
                  />
                </div>
                <div className="form-group col-sm-4">
                  <label>
                    Remaining Hours <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue={60}
                    readOnly=""
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-sm-6">
                  <label>
                    Date <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                    <input
                      className="form-control datetimepicker"
                      defaultValue="03/03/2019"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group col-sm-6">
                  <label>
                    Hours <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue={9}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>
                  Description <span className="text-danger">*</span>
                </label>
                <textarea
                  rows={4}
                  className="form-control"
                  defaultValue={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque."
                  }
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

export default Editetimesheet;
