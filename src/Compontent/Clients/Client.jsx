import React from "react";
import Addclient from "./Addclient";
const selectinput = {
  width: "100%",
  height: "45px",
  border: "1px solid lightgray",
  marginLeft: "10px",
  borderRadius: "6px",
};
function Client() {
  return (
    <>
      {/* <!-- Page Wrapper --> */}
      <div class="page-wrapper">
        {/* <!-- Page Content --> */}
        <div class="content container-fluid">
          {/* <!-- Page Header --> */}
          <div class="page-header">
            <div class="row align-items-center">
              <div class="col">
                <h3 class="page-title">Clients</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index.php">Dashboard</a>
                  </li>
                  <li class="breadcrumb-item active">Clients</li>
                </ul>
              </div>
              <div class="col-auto float-right ml-auto">
                <a
                  href="#"
                  class="btn add-btn"
                  data-toggle="modal"
                  data-target="#add_client"
                >
                  <i class="fa fa-plus"></i> Add Client
                </a>
                <div class="view-icons">
                  <a href="clients.php" class="grid-view btn btn-link">
                    <i class="fa fa-th"></i>
                  </a>
                  <a
                    href="clients-list.php"
                    class="list-view btn btn-link active"
                  >
                    <i class="fa fa-bars"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /Page Header --> */}

          {/* <!-- Search Filter --> */}
          <div class="row filter-row">
            <div class="col-sm-6 col-md-3">
              <div class="form-group form-focus">
                <input type="text" class="form-control floating" />
                <label class="focus-label">Client ID</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">
              <div class="form-group form-focus">
                <input type="text" class="form-control floating" />
                <label class="focus-label">Client Name</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">
              <div class="form-group form-focus select-focus">
                <select class="select floating" style={selectinput}>
                  <option>Select Company</option>
                  <option>Global Technologies</option>
                  <option>Delta Infotech</option>
                </select>
               
              </div>
            </div>
            <div class="col-sm-6 col-md-3">
              <a href="#" class="btn btn-success btn-block">
                {" "}
                Search{" "}
              </a>
            </div>
          </div>
          {/* <!-- Search Filter --> */}

          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table datatable">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Client ID</th>
                      <th>Contact Person</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Status</th>
                      <th class="text-right">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <a href="client-profile.php" class="avatar">
                            <img src="clients/Picture)" alt="" />
                          </a>
                          <a href="client-profile.php">Company</a>
                        </h2>
                      </td>
                      <td>ClientId</td>
                      <td>FirstName-LastName</td>
                      <td>Email</td>
                      <td>Phone</td>
                      <td>
                        <div class="dropdown action-label">
                          <a
                            href="#"
                            class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="fa fa-dot-circle-o text-success"></i>{" "}
                            Active{" "}
                          </a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">
                              <i class="fa fa-dot-circle-o text-success"></i>{" "}
                              Active
                            </a>
                            <a class="dropdown-item" href="#">
                              <i class="fa fa-dot-circle-o text-danger"></i>{" "}
                              Inactive
                            </a>
                          </div>
                        </div>
                      </td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a
                            href="#"
                            class="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="material-icons">more_vert</i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a
                              class="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#edit_client"
                            >
                              <i class="fa fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              class="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_client"
                            >
                              <i class="fa fa-trash-o m-r-5"></i> Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Addclient />
        {/* <!-- /Page Content -->
			
				<!-- Add Client Modal -->
			
				<!-- /Add Client Modal -->
				
				<!-- Edit Client Modal -->
				<!-- <?php include_once("includes/modals/clients/edit_client.php"); ?> -->
				<!-- /Edit Client Modal -->
				
				<!-- Delete Client Modal -->
				<!-- <?php include_once("includes/modals/clients/delete_client.php"); ?> -->
				<!-- /Delete Client Modal --> */}
      </div>
      {/* <!-- /Page Wrapper --> */}
    </>
  );
}

export default Client;
