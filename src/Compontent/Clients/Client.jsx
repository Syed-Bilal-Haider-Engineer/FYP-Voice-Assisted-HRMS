import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { POST } from "../API/PostAPI";
import Addclient from './Addclient';
function Client() {

  const statusurl="http://localhost/HRMS/Client/Changestatus.php";
  const [changestatus,setchagestate]=useState();
  const client = useSelector((state) => state.Clientreducer);
  console.log("client", client);
  
  // ............Remove client.............
  const url="http://localhost/HRMS/Client/Removeclient.php";
  const [add, setAddState] = React.useState();
  const ClientRemoveHandler=(id)=>{
  const values={
    id
  }
  setAddState(values);
  }

  const statushandler=(e)=>{
    const value=e.target.value;
    const status=value.slice(0,1);
    const id=value.slice(1).trim();
   const clientstatus={
    status,
    id
   }
   setchagestate(clientstatus);
  }

  console.log("changestatus",changestatus);

  return (
    <>
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
                  <li className="breadcrumb-item">
                    <a href="index.php">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Clients</li>
                </ul>
              </div>
              <div className="col-auto float-right ml-auto">
                <a
                  href="#"
                  className="btn add-btn"
                  data-toggle="modal"
                  data-target="#add_client"
                >
                  <i className="fa fa-plus"></i> Add Client
                </a>
              </div>
            </div>
          </div>
          {/* <!-- /Page Header -->
					
					<!-- Search Filter --> */}
          <div className="row filter-row">
            <div className="col-sm-6 col-md-9">
              <div className="form-group form-focus">
                <input type="text" className="form-control floating" />
                <label className="focus-label">Client ID</label>
              </div>
            </div>
            
            <div className="col-sm-6 col-md-3">
              <a href="#" className="btn btn-success btn-block">
                {" "}
                Search{" "}
              </a>
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
                      <th>Client name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Status</th>
                      {/* <th className="text-right">Action</th> */}
                    </tr>
                  </thead>

                  <tbody>
                    {client.length > 0 &&
                      client.map((items, i) => {
                        const {
                          id,
                          ClientId,
                          Phone,
                          Company,
                          Email,
                          UserName,
                          Picture,
                          Status,
                        } = items;
                        return (
                          <>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <a
                                    href="client-profile.php"
                                    className="avatar"
                                  >
                                    <img src={`http://localhost/HRMS/Uploads/${Picture}`} alt="" />
                                  </a>
                                  <span>{Company}</span>
                                </h2>
                              </td>
                              <td>{ClientId}</td>
                              <td>{UserName}</td>
                              <td>{Email}</td>
                              <td>{Phone}</td>
                              <td>
                                <select onChange={statushandler} style={{ width:'80px',height:'30px',border:'none',borderRadius:'4px'}}>
                                 {Status==1 ? (<option disabled>Active</option>):(<option disabled>Inactive</option>)}
                                  
                                  <option value={`1 ${id}`}>Active</option>
                                  <option value={`0 ${id}`}>Inactive</option>
                                </select>
                              </td>
                              {/* <td className="text-right">
                                <div className="dropdown dropdown-action" style={{cursor:'pointer'}}>
                                  <a
                                    href="#"
                                    className="action-icon dropdown-toggle"
                                    data-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="material-icons">more_vert</i>
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <span
                                      className="dropdown-item"
                                      
                                      data-toggle="modal"
                                      data-target="#edit_client"
                                    >
                                      <i className="fa fa-pencil m-r-5"></i>
                                      Edit
                                    </span>
                                    <span
                                      className="dropdown-item"
                                      
                                      data-toggle="modal"
                                      data-target="#delete_client"
                                      onClick={()=>{
                                        ClientRemoveHandler(id)
                                      }}
                                    >
                                      <i className="fa fa-trash-o m-r-5"></i>{" "}
                                      Delete
                                    </span>
                                  </div>
                                </div>
                              </td> */}
                            </tr>
                          </>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <Addclient/>
      {add && <POST values={add} url={url} Addstate={setAddState} />}
      {changestatus && <POST values={changestatus} url={statusurl} Addstate={setchagestate} />}
   
    </>
  );
}

export default Client;
