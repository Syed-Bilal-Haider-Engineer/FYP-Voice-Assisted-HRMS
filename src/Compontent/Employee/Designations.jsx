import React, { useState } from "react";
import { useSelector } from "react-redux";
import Adddesignation from "./Adddesignation";
import Updatedesignation from './Updatedesignation';
function Designations() {
  const [designationstate,setdesignationstate]=useState('');
  const designation=useSelector(state=>state.Designationreducer);
   var i=0;
  //  ....edite designation....
   const editedesignation=(id)=>{
    setdesignationstate(id)
   }
  return (
  
      <>
        {/* Main Wrapper */}
        <div className="main-wrapper">
          {/* Page Wrapper */}
          <div className="page-wrapper">
            {/* Page Content */}
            <div className="content container-fluid">
              {/* Page Header */}
              <div className="page-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h3 className="page-title">Designations</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.php">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">Designations</li>
                    </ul>
                  </div>
                  <div className="col-auto float-right ml-auto">
                    <a
                      href="#"
                      className="btn add-btn"
                      data-toggle="modal"
                      data-target="#add_designation"
                    >
                      <i className="fa fa-plus" /> Add Designation
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
                          <th style={{ width: 30 }}>#</th>
                          <th>Designation </th>
                          <th>Department </th>
                          <th className="text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          designation.length>0 && designation.map((items,index)=>{
                            i++;
                            return (
                              <>
                            <tr key={index}>
                            <td>{i}</td>
                            <td>{items.Designation}</td>
                            <td>{items.Department}</td>
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
                                    data-target="#edit_designation"
                                    onClick={()=>{
                                      editedesignation(items.id) 
                                    }}
                                  >
                                    <i className="fa fa-pencil m-r-5" /> Edit
                                  </a>
                                  {/* <a
                                    className="dropdown-item"
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#delete_designation"
                                  >
                                    <i className="fa fa-trash-o m-r-5" /> Delete
                                  </a> */}
                                </div>
                              </div>
                            </td>
                          </tr>
                              </>
                            )
                           })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* /Page Content */}
            {/* Add Designation Modal */}
            <Adddesignation />
           
          </div>
          {/* /Page Wrapper */}
        </div>
        {/* /Main Wrapper */}
        {designationstate && <Updatedesignation  values={designationstate}  Editefun={setdesignationstate}/>}
      </>
   
  );
}

export default Designations;
