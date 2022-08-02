import React,{useEffect,useState} from "react";
import {useSelector} from 'react-redux';
import {POST} from '../API/PostAPI';
function Updatedesignation({ values, Editefun }) {
  const url="http://localhost/HRMS/Designations/editedesignation.php";
  const [add, setAddState] = React.useState("");
  const [namestate, setnamestate] = useState();
  const designation=useSelector(state=>state.Designationreducer);
  useEffect(() => {
    const result=designation.length > 0 && designation.find((items) => {
        return items.id == values;
      });
      setnamestate(result.Designation)
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
    <div
      id="edit_designation"
      className="modal custom-modal fade"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Designation</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={CloseHandler}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={SubmitHandler}>
              <div className="form-group">
                <label>
                  Designation Name <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  value={namestate}
                  onChange={(e)=>{
                    setnamestate(e.target.value);
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

export default Updatedesignation;
