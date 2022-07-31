import React from "react";
import Addtimesheet from "./Addtimesheet";
import useGet from "../API/API";
import {useSelector} from 'react-redux';
function Timesheet() {
  const url="http://localhost/HRMS/Tasks/Fetchtask.php";
  useGet(url,"Tasks");
  const tasks=useSelector(state=>state.Tasksreducer);
  console.log("tasks",tasks);
  return (
    <>
      <>
        {/* Main Wrapper */}
        <div className="main-wrapper">
          {/* Header */}
          {/* Page Wrapper */}
          <div className="page-wrapper">
            {/* Page Content */}
            <div className="content container-fluid">
              {/* Page Header */}
              <div className="page-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h3 className="page-title">Timesheet</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.php">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">Timesheet</li>
                    </ul>
                  </div>
                  <div className="col-auto float-right ml-auto">
                    <a
                      href="#"
                      className="btn add-btn"
                      data-toggle="modal"
                      data-target="#add_todaywork"
                    >
                      <i className="fa fa-plus" /> Add Today Work
                    </a>
                  </div>
                </div>
              </div>
              {/* /Page Header */}
              <div className="row">
                <div className="col-md-12">
                  <div className="table-responsive">
                    <table className="table table-striped custom-table mb-0 datatable">
                      <thead>
                        <tr>
                          <th>Project</th>
                          <th>Deadline</th>
                          <th className="d-none d-sm-table-cell">
                            Description
                          </th>
                          <th>status</th>
                          <th className="text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          tasks.length >0 && tasks.map(( items,index)=>{
                            return <>
                               <tr key={index}>
                          <td>
                           {items.project_name}
                          </td>
                          <td>{items.end_date}</td>
                          <td className="d-none d-sm-table-cell col-md-4">
                           {items.task_desc}
                          </td>
                          <td style={{color:'red'}}>
                           {items.status}
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#edit_todaywork"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                               
                              </div>
                            </div>
                          </td>
                        </tr>
                            </>
                          })
                        }
                     
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* /Page Content */}
            {/* Add Today Work Modal */}
            <Addtimesheet />
           
          </div>
          {/* /Page Wrapper */}
        </div>
        {/* /Main Wrapper */}
      </>
    </>
  );
}

export default Timesheet;
