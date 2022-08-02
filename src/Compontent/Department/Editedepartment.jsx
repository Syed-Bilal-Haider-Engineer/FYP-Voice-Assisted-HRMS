import React,{useEffect,useState} from "react";
import {useSelector} from 'react-redux';
import {POST} from '../API/PostAPI';
function Editedepartment({ values, Editefun }) {
  const url="http://localhost/HRMS/Department/editedepart.php";
  const [add, setAddState] = React.useState("");
  const [namestate, setnamestate] = useState();
  const department = useSelector(state => state.Departmentreducer);
  useEffect(() => {
    const result=department.length > 0 && department.find((items) => {
        return items.id == values;
      });
      setnamestate(result.Department)
  }, [values]);
 
 const SubmitHandler=(e)=>{
  e.preventDefault();
 const updatevalue={
  namestate,
  values
 }
 setAddState(updatevalue);
 }
 const CloseHandler=()=>{
  Editefun('');
 }
  return <>
    <div id="edit_department" className="modal custom-modal fade" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Department</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={CloseHandler}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={SubmitHandler}>
              <div className="form-group">
                <label>
                  Department Name <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  value={namestate}
                  type="text"
                  onChange={(e)=>{
                    setnamestate(e.target.value)
                  }}
                />
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
      {add && <POST values={add} url={url} Addstate={setAddState} />}
  </>
}

export default Editedepartment;
