import React from "react";
import { Formik, Field, Form } from "formik";
import Errorsg from "../Msgerror/Errormsg";
import { categoryschema } from "../Yup/Yup";
import {POST} from '../API/PostAPI';
const url="http://localhost/HRMS/Category/Category.php";
function Addcategory() {
  const [add,setAddState]=React.useState('');
  const Initivalue = {
    category: "",
  };
  return (
    <>
    <Formik
      initialValues={Initivalue}
      validationSchema={categoryschema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        setAddState(values);
        resetForm();
        
      }}
    >
      <div id="add_category" className="modal custom-modal fade" role="dialog">
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
              <Form method="POST">
                <div className="form-group">
                  <label>
                    Category Name <span className="text-danger">*</span>
                  </label>
                  <Field
                    name="category"
                    required=""
                    className="form-control"
                    type="text"
                  />
                  <Errorsg name="category" className="error" />
                </div>
                <div className="submit-section">
                  <button
                    name="add_department"
                    type="POST"
                    className="btn btn-primary submit-btn"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Formik>
    {add && <POST values={add} url={url} Addstate={setAddState}/>}

 </>
  )
}

export default Addcategory;
