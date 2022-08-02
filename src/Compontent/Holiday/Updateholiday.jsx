import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { POST } from "../API/PostAPI";
const url = "http://localhost/HRMS/Holiday/Editeholiday.php";
function Updatehoilday({ values, Editefun }) {

  const [add, setAddState] = React.useState("");
  const [holdayname, setnamestate] = useState();
  const [holidaydatestate,setholidaystate]=useState();
  const holidaydetails = useSelector((state) => state.Fetchholidayreducer);
  useEffect(() => {
    const result=holidaydetails.length > 0 && holidaydetails.find((items) => {
        return items.id == values;
      });
      setnamestate(result.Holiday_Name);
      setholidaystate(result.Holiday_Date);
  }, [values]);
 
 const SubmitHandler=(e)=>{
  e.preventDefault();
  const Updatecategory={
    holdayname,
    holidaydatestate,
    values
  }
  setAddState(Updatecategory);
 }
 const CloseHandler=()=>{
  Editefun('');
 }

  return (
    <>
   
        <div
          id="update_holiday"
          className="modal custom-modal fade"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update Holiday</h5>
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
                      Holiday Name <span className="text-danger">*</span>
                    </label>

                    <input
                      name="category"
                      className="form-control"
                      type="text" 
                      value={holdayname}
                      onChange={(e)=>{
                        setnamestate(e.target.value)
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Holiday date <span className="text-danger">*</span>
                    </label>

                    <input
                      name="category"
                      className="form-control"
                      type="text" 
                      value={holidaydatestate}
                      onChange={(e)=>{
                        setholidaystate(e.target.value)
                      }}
                    />

                   
                  </div>
                  <div className="submit-section">
                    <button
                      name="Editecategory"
                      type="submit"
                      className="btn btn-primary submit-btn"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
     
      {add && <POST values={add} url={url} Addstate={setAddState} />}
    </>
  );
}

export default Updatehoilday;
