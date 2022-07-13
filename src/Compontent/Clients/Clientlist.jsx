import React from "react";

function Clientlist() {
  return <>
  {/* <!-- Page Wrapper --> */}
            <div className="page-wrapper">
			
				{/* <!-- Page Content --> */}
                <div className="content container-fluid">
				
					{/* <!-- Page Header --> */}
					<div className="page-header">
						<div className="row align-items-center">
							<div className="col">
								<h3 className="page-title">Clients</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><a href="index.php">Dashboard</a></li>
									<li className="breadcrumb-item active">Clients</li>
								</ul>
							</div>
							<div className="col-auto float-right ml-auto">
								<a href="#" className="btn add-btn" data-toggle="modal" data-target="#add_client"><i className="fa fa-plus"></i> Add Client</a>
								<div className="view-icons">
									<a href="clients.php" className="grid-view btn btn-link"><i className="fa fa-th"></i></a>
									<a href="clients-list.php" className="list-view btn btn-link active"><i className="fa fa-bars"></i></a>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- /Page Header -->
					
					<!-- Search Filter --> */}
					<div className="row filter-row">
						<div className="col-sm-6 col-md-3">  
							<div className="form-group form-focus">
								<input type="text" className="form-control floating"/>
								<label className="focus-label">Client ID</label>
							</div>
						</div>
						<div className="col-sm-6 col-md-3">  
							<div className="form-group form-focus">
								<input type="text" className="form-control floating"/>
								<label className="focus-label">Client Name</label>
							</div>
						</div>
						<div className="col-sm-6 col-md-3"> 
							<div className="form-group form-focus select-focus">
								<select className="select floating"> 
									<option>Select Company</option>
									<option>Global Technologies</option>
									<option>Delta Infotech</option>
								</select>
								<label className="focus-label">Company</label>
							</div>
						</div>
						<div className="col-sm-6 col-md-3">  
							<a href="#" className="btn btn-success btn-block"> Search </a>  
						</div>     
                    </div>
					{/* <!-- Search Filter --> */}

					<div className="row">
						<div className="col-md-12">
							<div className="table-responsive">
								<table className="table table-striped custom-table datatable">
									<thead>
										<tr>
											<th>Name</th>
											<th>Client ID</th>
											<th>Contact Person</th>
											<th>Email</th>
											<th>Mobile</th>
											<th>Status</th>
											<th className="text-right">Action</th>
										</tr>
									</thead>
								
									<tbody>
										<tr>
											<td>
												<h2 className="table-avatar">
													<a href="client-profile.php" className="avatar">
                                                        <img src="clients/Picture)" alt=""/></a>
													<a href="client-profile.php">Company</a>
												</h2>
											</td>
											<td>ClientId</td>
											<td>FirstName-LastName</td>
											<td>Email</td>
											<td>Phone</td>
											<td>
												<div className="dropdown action-label">
													<a href="#" className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-success"></i> Active </a>
													<div className="dropdown-menu">
														<a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success"></i> Active</a>
														<a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger"></i> Inactive</a>
													</div>
												</div>
											</td>
											<td className="text-right">
												<div className="dropdown dropdown-action">
													<a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
													<div className="dropdown-menu dropdown-menu-right">
														<a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i className="fa fa-pencil m-r-5"></i> Edit</a>
														<a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_client"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
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
				{/* <!-- /Page Content -->
			
				<!-- Add Client Modal -->
				<!-- <?php include_once("includes/modals/clients/add_client.php"); ?> -->
				<!-- /Add Client Modal -->
				
				<!-- Edit Client Modal -->
				<!-- <?php include_once("includes/modals/clients/edit_client.php"); ?> -->
				<!-- /Edit Client Modal -->
				
				<!-- Delete Client Modal -->
				<!-- <?php include_once("includes/modals/clients/delete_client.php"); ?> -->
				<!-- /Delete Client Modal --> */}
				
            </div>
			{/* <!-- /Page Wrapper --> */}
  </>;
}

export default Clientlist;
