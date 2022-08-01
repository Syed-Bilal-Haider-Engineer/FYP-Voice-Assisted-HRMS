import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { POST } from "../API/PostAPI";
const url = "http://localhost/HRMS/Category/Category.php";
function Editecategory({ values, Editefun }) {
    
  const [add, setAddState] = React.useState("");
  const [categoryname, setnamestate] = useState();
  const CategoryInfo = useSelector((state) => state.categoryreducer);
  useEffect(() => {
    const result=CategoryInfo.length > 0 && CategoryInfo.find((items, index) => {
        return items.Catid == values;
      });
      setnamestate(result.catname)
    
  }, [values]);
 
 const SubmitHandler=(e)=>{
  e.preventDefault();
 }
 console.log("categoryname",categoryname);
  return (
    <>
   
        <div
          id="add_category"
          className="modal custom-modal fade"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Category</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={SubmitHandler}>
                  <div className="form-group">
                    <label>
                      Category Name <span className="text-danger">*</span>
                    </label>

                    <input
                      name="category"
                      required=""
                      className="form-control"
                      type="text"
                      value={categoryname}
                      onChange={(e)=>{
                        setnamestate(e.target.value)
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

export default Editecategory;
