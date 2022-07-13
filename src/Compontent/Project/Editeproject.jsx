import React from "react";

function Editeproject() {
  return (
    <div id="edit_project" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Project</h5>
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
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Project Name</label>
                    <input
                      className="form-control"
                      defaultValue="Project Management"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Client</label>
                    <select className="select">
                      <option>Global Technologies</option>
                      <option>Delta Infotech</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Start Date</label>
                    <div className="cal-icon">
                      <input
                        className="form-control datetimepicker"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>End Date</label>
                    <div className="cal-icon">
                      <input
                        className="form-control datetimepicker"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <div className="form-group">
                    <label>Rate</label>
                    <input
                      placeholder="$50"
                      className="form-control"
                      defaultValue="$5000"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="form-group">
                    <label>&nbsp;</label>
                    <select className="select">
                      <option>Hourly</option>
                      <option selected="">Fixed</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Priority</label>
                    <select className="select">
                      <option selected="">High</option>
                      <option>Medium</option>
                      <option>Low</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Add Project Leader</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Team Leader</label>
                    <div className="project-members">
                      <a
                        href="#"
                        data-toggle="tooltip"
                        title="Jeffery Lalor"
                        className="avatar"
                      >
                        <img src="assets/img/profiles/avatar-16.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Add Team</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Team Members</label>
                    <div className="project-members">
                      <a
                        href="#"
                        data-toggle="tooltip"
                        title="John Doe"
                        className="avatar"
                      >
                        <img src="assets/img/profiles/avatar-16.jpg" alt="" />
                      </a>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        title="Richard Miles"
                        className="avatar"
                      >
                        <img src="assets/img/profiles/avatar-09.jpg" alt="" />
                      </a>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        title="John Smith"
                        className="avatar"
                      >
                        <img src="assets/img/profiles/avatar-10.jpg" alt="" />
                      </a>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        title="Mike Litorus"
                        className="avatar"
                      >
                        <img src="assets/img/profiles/avatar-05.jpg" alt="" />
                      </a>
                      <span className="all-team">+2</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  rows={4}
                  className="form-control"
                  placeholder="Enter your message here"
                  defaultValue={""}
                />
              </div>
              <div className="form-group">
                <label>Upload Files</label>
                <input className="form-control" type="file" />
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

export default Editeproject;
