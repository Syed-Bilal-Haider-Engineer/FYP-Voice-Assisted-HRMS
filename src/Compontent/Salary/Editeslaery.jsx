import React from "react";

function Editeslaery() {
  return (
    <div id="edit_addition" className="modal custom-modal fade" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Addition</h5>
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
                  Name <span className="text-danger">*</span>
                </label>
                <input className="form-control" type="text" />
              </div>
              <div className="form-group">
                <label>
                  Category <span className="text-danger">*</span>
                </label>
                <select className="select">
                  <option>Select a category</option>
                  <option>Monthly remuneration</option>
                  <option>Additional remuneration</option>
                </select>
              </div>
              <div className="form-group">
                <label className="d-block">Unit calculation</label>
                <div className="status-toggle">
                  <input
                    type="checkbox"
                    id="edit_unit_calculation"
                    className="check"
                  />
                  <label
                    htmlFor="edit_unit_calculation"
                    className="checktoggle"
                  >
                    checkbox
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label>Unit Amount</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input type="text" className="form-control" />
                  <div className="input-group-append">
                    <span className="input-group-text">.00</span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="d-block">Assignee</label>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="edit_addition_assignee"
                    id="edit_addition_no_emp"
                    defaultValue="option1"
                    defaultChecked=""
                  />
                  <label
                    className="form-check-label"
                    htmlFor="edit_addition_no_emp"
                  >
                    No assignee
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="edit_addition_assignee"
                    id="edit_addition_all_emp"
                    defaultValue="option2"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="edit_addition_all_emp"
                  >
                    All employees
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="edit_addition_assignee"
                    id="edit_addition_single_emp"
                    defaultValue="option3"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="edit_addition_single_emp"
                  >
                    Select Employee
                  </label>
                </div>
                <div className="form-group">
                  <select className="select">
                    <option>-</option>
                    <option>Select All</option>
                    <option>John Doe</option>
                    <option>Richard Miles</option>
                  </select>
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

export default Editeslaery;
