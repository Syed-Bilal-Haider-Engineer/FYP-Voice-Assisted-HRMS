import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {POST} from '../API/PostAPI';
function Leads() {
  const url="http://localhost/HRMS/Project/Projectstatus.php";
  const projectteamLead = useSelector((state) => state.Projectreducer);
  const [statusadd,setstatustate]=useState();
  const projectstatus=(e)=>{
   const value=e.target.value;
   const status=value.slice(0,8).trim();
   const id=value.slice(8);
   const projectid=id.trim();
   const statusvalues={
    projectid,
    status
   }
   setstatustate(statusvalues);
  }
  // console.log("statusaddproject",statusadd)
  return <>
    <div className="page-wrapper">
      {/* <!-- Page Content --> */}
      <div className="content container-fluid">
        {/* <!-- Page Header --> */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Leads</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.php">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Leads</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- /Page Header --> */}

        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped table-nowrap custom-table mb-0 datatable">
                <thead>
                  <tr>
                    <th>Lead Name</th>
                    <th>Project</th>
                    <th>Status</th>
                    <th className="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projectteamLead.length > 0 &&
                    projectteamLead.map((items, index) => {
                      return (
                        <>
                          <tr key={index}>
                            <td>
                              <h2 className="table-avatar">
                                <a href="#">{items.leader}</a>
                              </h2>
                            </td>
                            <td>
                              <a href="project-view.php">
                                {items.project_name}
                              </a>
                            </td>
                            {items.status == "Working" ? (
                              <td>
                                <span
                                  className="badge "
                                  style={{ color: "red" }}
                                >
                                  {items.status}
                                </span>
                              </td>
                            ) : (
                              <td>
                                <span className="badge bg-inverse-success">
                                  {items.status}
                                </span>
                              </td>
                            )}
                            <td>
                              <select
                                style={{
                                  border: "none",
                                  borderRadius: "4px",
                                  padding: "5px",
                                  float: "right",
                                }}
                                onChange={projectstatus}
                              >
                                <option value={`Working ${items.project_id}`}  >Working</option>
                                <option value={`complete ${items.project_id}`}>complete</option>
                              </select>
                            </td>
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
    {statusadd && <POST values={statusadd} url={url} Addstate={setstatustate} />}
  </>
}

export default Leads;
