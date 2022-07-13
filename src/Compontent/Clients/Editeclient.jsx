import React from "react";

function Editeclient() {
  return (
    <>
      div id="edit_client" class="modal custom-modal fade" role="dialog"&gt;
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Client</h5>
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
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="col-form-label">
                      First Name <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      defaultValue="Barry"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="col-form-label">Last Name</label>
                    <input
                      className="form-control"
                      defaultValue="Cuda"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="col-form-label">
                      Username <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      defaultValue="barrycuda"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="col-form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control floating"
                      defaultValue="barrycuda@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="col-form-label">Password</label>
                    <input
                      className="form-control"
                      defaultValue="barrycuda"
                      type="password"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="col-form-label">Confirm Password</label>
                    <input
                      className="form-control"
                      defaultValue="barrycuda"
                      type="password"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="col-form-label">
                      Client ID <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control floating"
                      defaultValue="CLT-0001"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="col-form-label">Phone </label>
                    <input
                      className="form-control"
                      defaultValue={9876543210}
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="col-form-label">Company Name</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="Global Technologies"
                    />
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
                      <td>Projects</td>
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
                        <input defaultChecked="" type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input defaultChecked="" type="checkbox" />
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
                        <input defaultChecked="" type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input defaultChecked="" type="checkbox" />
                      </td>
                    </tr>
                    <tr>
                      <td>Chat</td>
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
                        <input defaultChecked="" type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input defaultChecked="" type="checkbox" />
                      </td>
                    </tr>
                    <tr>
                      <td>Estimates</td>
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
                        <input defaultChecked="" type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input defaultChecked="" type="checkbox" />
                      </td>
                    </tr>
                    <tr>
                      <td>Invoices</td>
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
                        <input defaultChecked="" type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input defaultChecked="" type="checkbox" />
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
                        <input defaultChecked="" type="checkbox" />
                      </td>
                      <td className="text-center">
                        <input defaultChecked="" type="checkbox" />
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
    </>
  );
}

export default Editeclient;
