import React from "react";
import Addholiday from "./Addholiday";
import {useSelector} from 'react-redux';
function Holiday() {

  const holidaydetails=useSelector(state=>state.Fetchholidayreducer);
  console.log("holidaydetails",holidaydetails);
  var i=0;

  return (
    <>
      <div className="main-wrapper">
        {/* Page Wrapper */}
        <div className="page-wrapper">
          {/* Page Content */}
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="page-title">All Holidays </h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.php">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Holidays</li>
                  </ul>
                </div>
                <div className="col-auto float-right ml-auto">
                  <a
                    href="#"
                    className="btn add-btn"
                    data-toggle="modal"
                    data-target="#add_holiday"
                  >
                    <i className="fa fa-plus" /> Add Holiday
                  </a>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-striped custom-table mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Title </th>
                        <th>Holiday Date</th>
                        <th className="text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {holidaydetails.length>0 && holidaydetails.map((items,index)=>{
                        i++;
                        return <>
                         <tr className="holiday-upcoming" key={index}>
                        <td>{i}</td>
                        <td>{items.Holiday_Name}</td>
                        <td>{items.Holiday_Date}</td>
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
                                data-target="#edit_holiday"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_holiday"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                        </>
                      })}
                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* /Page Content */}
          {/* Add Holiday Modal */}
          <Addholiday />
          {/* /Add Holiday Modal */}
          {/* Edit Holiday Modal */}
          {/* <?php include_once("includes/modals/holidays/edit_holiday.php"); ?> */}
          {/* /Edit Holiday Modal */}
          {/* Delete Holiday Modal */}
          {/* <?php include_once("includes/modals/holidays/delete_holiday.php"); ?> */}
          {/* /Delete Holiday Modal */}
        </div>
        {/* /Page Wrapper */}
      </div>
    </>
  );
}

export default Holiday;
