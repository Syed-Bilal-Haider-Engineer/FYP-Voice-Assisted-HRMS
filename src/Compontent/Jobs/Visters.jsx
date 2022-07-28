import React,{useState} from "react";
import useGet from '../API/API';
import { useSelector } from "react-redux";
import { POST } from "../API/PostAPI";
import {
  Container,
  Box,
  Typography,
  Button,
  Divider,
  Stack,
  Grid,
  Pagination
} from "@mui/material";
const url="http://localhost/HRMS/Visters/fetchVisters.php";
function Vister() {
  const visterinfo = useSelector(state => state.Visterreducer);
  console.log("visterinfo", visterinfo);
  const type="vister";
  useGet(url,type);

   //......paginations..........
   var i=0;
   const [postsPerPage, setPostsPerPage] = useState(5);
   const [currentPage, setCurrentPage] = useState(1);
   const handleChangepage = (event, value) => {
     setCurrentPage(value);
   };
 
   const pageCount = Math.ceil(visterinfo.length / postsPerPage);

  //  ..........Delete Visters.................
  const [remove,setAddState]=useState();
  const removeURL="http://localhost/HRMS/Visters/removevister.php";
  const RemoveVisterHandler=(id)=>{
    console.log("Id",id);
     const values={
      id
     }
     setAddState(values);
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
                  <h3 className="page-title">Vister</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.php">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Vister</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
                <div className="col-md-12">
                  <div>
                    <table className="table table-striped custom-table mb-0 datatable">
                      <thead>
                        <tr>
                          <th style={{ width: 30 }}>#</th>
                          <th>First name</th>
                          <th>last name</th>
                          <th>username</th>
                          <th>email</th>
                          <th>address</th>
                          <th>phone</th>
                          <th className="text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {visterinfo.length > 0 && visterinfo.slice(
                            currentPage * postsPerPage - postsPerPage,
                            currentPage * postsPerPage
                          ).map((Items)=>{
                            i++;
                            return <>
                            <tr>
                            <td>{i}</td>
                            <td>{Items.fname}</td>
                            <td>{Items.lname}</td>
                            <td>{Items.username}</td>
                            <td>{Items.email}</td>
                            <td>{Items.address}</td>
                            <td>{Items.phone}</td>
                            
                            <td>
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
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#edit_department"
                                  >
                                    <i className="fa fa-pencil m-r-5" /> Edit
                                  </span>
                                  <span
                                    className="dropdown-item"
                                   onClick={()=>{
                                      RemoveVisterHandler(Items.id)
                                    }
                                   }
                                   
                                  >
                                    <i className="fa fa-trash-o m-r-5" /> Delete
                                  </span>
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
          <Box  m="15px">
              <Stack
                direction={"row"}
                alignItems="center"
                justifyContent="flex-end">
                <Pagination
                  count={pageCount}
                  page={currentPage}
                  onChange={handleChangepage}
                />
              </Stack>
            </Box>
         
        </div>
        {/* /Page Wrapper */}
      </div>
      {remove && <POST values={remove} url={removeURL} Addstate={setAddState} />}
    </>
  );
}

export default Vister;
