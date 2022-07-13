import React from "react";

function Editeemp() {
  return (
    <div id="edit_employee" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Employee</h5>
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
                    <label className="col-form-label">
                      First Name <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      defaultValue="John"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">Last Name</label>
                    <input
                      className="form-control"
                      defaultValue="Doe"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">
                      Username <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      defaultValue="johndoe"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      defaultValue="johndoe@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">Password</label>
                    <input
                      className="form-control"
                      defaultValue="johndoe"
                      type="password"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">Confirm Password</label>
                    <input
                      className="form-control"
                      defaultValue="johndoe"
                      type="password"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">
                      Employee ID <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue="FT-0001"
                      readOnly=""
                      className="form-control floating"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">
                      Joining Date <span className="text-danger">*</span>
                    </label>
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
                    <label className="col-form-label">Phone </label>
                    <input
                      className="form-control"
                      defaultValue={9876543210}
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">Company</label>
                    <select className="select">
                      <option>Global Technologies</option>
                      <option>Delta Infotech</option>
                      <option selected="">International Software Inc</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
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
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>
                      Designation <span className="text-danger">*</span>
                    </label>
                    <select className="select">
                      <option>Select Designation</option>
                      <option>Web Designer</option>
                      <option>Web Developer</option>
                      <option>Android Developer</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="table-responsive m-t-15">
                <table className="table table-striped custom-table">
                  <thead>
                    <tr>
                      <th>Module Permission</th>
                      <th className="text-center">Read</th>
                      <th className="text-center">Write</th>
                      <th className="text-center">Create</th>
                      <th className="text-center">Delete</th>
                      <th className="text-center">Import</th>
                      <th className="text-center">Export</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Holidays</td>
                      <td className="text-center">
                        <input defaultChecked="" type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input type="checkbox" />
                      </td>
                    </tr>
                    <tr>
                      <td>Leaves</td>
                      <td className="text-center">
                        <input defaultChecked="" type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input defaultChecked="" type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input defaultChecked="" type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input type="checkbox" />
                      </td>
                    </tr>
                    <tr>
                      <td>Clients</td>
                      <td className="text-center">
                        <input defaultChecked="" type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input defaultChecked="" type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input defaultChecked="" type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input type="checkbox" />
                      </td>
                    </tr>
                    <tr>
                      <td>Projects</td>
                      <td className="text-center">
                        <input defaultChecked="" type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input type="checkbox" />
                      </td>
                    </tr>
                    <tr>
                      <td>Tasks</td>
                      <td className="text-center">
                        <input defaultChecked="" type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input defaultChecked="" type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input defaultChecked="" type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input defaultChecked="" type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input type="checkbox" />
                      </td>
                    </tr>
                    <tr>
                      <td>Chats</td>
                      <td className="text-center">
                        <input defaultChecked="" type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input defaultChecked="" type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input defaultChecked="" type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input defaultChecked="" type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input type="checkbox" />
                      </td>
                    </tr>
                    <tr>
                      <td>Assets</td>
                      <td className="text-center">
                        <input defaultChecked="" type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input defaultChecked="" type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input defaultChecked="" type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input defaultChecked="" type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input type="checkbox" />
                      </td>
                    </tr>
                    <tr>
                      <td>Timing Sheets</td>
                      <td className="text-center">
                        <input defaultChecked="" type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input defaultChecked="" type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input defaultChecked="" type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input defaultChecked="" type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input type="checkbox" />
                      </td>
                    </tr>
                  </tbody>
                </table>
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

export default Editeemp;
