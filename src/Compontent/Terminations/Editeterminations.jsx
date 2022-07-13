import React from "react";

function Editeterminations() {
  return (
    <div
      id="edit_termination"
      className="modal custom-modal fade"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Termination</h5>
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
                  Terminated Employee <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  defaultValue="John Doe"
                />
              </div>
              <div className="form-group">
                <label>
                  Termination Type <span className="text-danger">*</span>
                </label>
                <div className="add-group-btn">
                  <select className="select">
                    <option>Misconduct</option>
                    <option>Others</option>
                  </select>
                  <a className="btn btn-primary" href="javascript:void(0);">
                    <i className="fa fa-plus" /> Add
                  </a>
                </div>
              </div>
              <div className="form-group">
                <label>
                  Termination Date <span className="text-danger">*</span>
                </label>
                <div className="cal-icon">
                  <input
                    type="text"
                    className="form-control datetimepicker"
                    defaultValue="28/02/2019"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>
                  Reason <span className="text-danger">*</span>
                </label>
                <textarea className="form-control" rows={4} defaultValue={""} />
              </div>
              <div className="form-group">
                <label>
                  Notice Date <span className="text-danger">*</span>
                </label>
                <div className="cal-icon">
                  <input
                    type="text"
                    className="form-control datetimepicker"
                    defaultValue="28/02/2019"
                  />
                </div>
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editeterminations;
