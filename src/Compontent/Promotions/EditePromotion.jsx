import React from "react";

function EditePromotion() {
  return (
    <div id="edit_promotion" className="modal custom-modal fade" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Promotion</h5>
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
                  Promotion For <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  defaultValue="John Doe"
                />
              </div>
              <div className="form-group">
                <label>
                  Promotion From <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  defaultValue="Web Developer"
                  readOnly=""
                />
              </div>
              <div className="form-group">
                <label>
                  Promotion To <span className="text-danger">*</span>
                </label>
                <select className="select">
                  <option>Web Developer</option>
                  <option>Web Designer</option>
                  <option>SEO Analyst</option>
                </select>
              </div>
              <div className="form-group">
                <label>
                  Promotion Date <span className="text-danger">*</span>
                </label>
                <div className="cal-icon">
                  <input type="text" className="form-control datetimepicker" />
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

export default EditePromotion;
