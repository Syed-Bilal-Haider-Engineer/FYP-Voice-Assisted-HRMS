import React from "react";
import { Formik, Field, Form } from "formik";
import Errorsg from "../Msgerror/Errormsg";
import { Noticeschema } from "../Yup/Yup";
import { POST } from "../API/PostAPI";
const url = "http://localhost/HRMS/Notice/Addnotice.php";
function Addnotice() {
  const [add, setAddState] = React.useState();
  const Initivalue = {
    subject: "",
    notice: "",
  };
  return (
    <>
      <Formik
        initialValues={Initivalue}
        validationSchema={Noticeschema}
        onSubmit={(values, { resetForm }) => {
          setAddState(values);
          resetForm();
        }}
      >
        <div id="add_notice" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Announcement</h5>
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
                <Form>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Subject</label>
                      <Field
                        name="subject"
                        className="form-control"
                        type="text"
                      />
                    </div>
                    <Errorsg name="subject" className="error" />
                  </div>
                  <div className="form-group">
                    <label>Notice</label>
                    <Field
                      as="textarea"
                      rows={4}
                      className="form-control summernote"
                      placeholder="Enter your message here"
                      name="notice"
                    />
                  </div>
                  <Errorsg name="notice" className="error" />
                  <div className="submit-section">
                    <button
                      type="submit"
                      className="btn btn-primary submit-btn"
                    >
                      Add notice
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Formik>
      {add && <POST values={add} url={url} Addstate={setAddState} />}
    </>
  );
}

export default Addnotice;
