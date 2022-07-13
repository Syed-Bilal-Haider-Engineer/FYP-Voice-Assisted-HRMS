import React from "react";

function Approveleave() {
  return (
    <div className="modal custom-modal fade" id="approve_leave" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="form-header">
              <h3>Leave Approve</h3>
              <p>Are you sure want to approve for this leave?</p>
            </div>
            <div className="modal-btn delete-action">
              <div className="row">
                <div className="col-6">
                  <a
                    href="javascript:void(0);"
                    className="btn btn-primary continue-btn"
                  >
                    Approve
                  </a>
                </div>
                <div className="col-6">
                  <a
                    href="javascript:void(0);"
                    data-dismiss="modal"
                    className="btn btn-primary cancel-btn"
                  >
                    Decline
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Approveleave;
