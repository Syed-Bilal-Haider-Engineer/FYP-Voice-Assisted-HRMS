import React from "react";
import Addnotice from "./Addnotice";
function Notice() {
  return (
    <>
      <div className="main-wrapper">
        {/* Page Wrapper */}
        <div className="page-wrapper">
          {/* Page Content */}
          <div className="content container-fluid">
            {/* Page Header */}
            <div class="page-header">
              <div class="row align-items-center">
                <div class="col">
                  <h3 class="page-title">Notice</h3>
                  <ul class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="index.php">Dashboard</a>
                    </li>
                    <li class="breadcrumb-item active">Notice</li>
                  </ul>
                </div>
                <div class="col-auto float-right ml-auto">
                  <a
                    href="#"
                    class="btn add-btn"
                    data-toggle="modal"
                    data-target="#add_notice"
                  >
                    <i class="fa fa-plus"></i> Add Notice
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

            {/* /Page Header */}
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="payslip-title">Subjects</h4>
                    <div className="row">
                      <div className="col-sm-12 m-b-20">
                        <p
                          sx={{
                            width: "100%",
                            margin: "auto",
                            fontSize: "14px",
                            fontSize: "bold",
                          }}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Id laboriosam facere doloribus animi facilis
                          optio, magnam fugit obcaecati natus omnis quam
                          officiis. Eius alias tempore dicta sed odit
                          aspernatur. Totam!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Page Content */}
        </div>
        {/* /Page Wrapper */}
      </div>
      {/* /Main Wrapper */}
      <Addnotice />
    </>
  );
}

export default Notice;
