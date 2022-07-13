import React from "react";
import { Formik, Field, Form, FieldArray } from "formik";
import Errorsg from "../Msgerror/Errormsg";
import { Assestschema } from "../Yup/Yup";
const selectinput = {
  width: "100%",
  height: "45px",
  border: "1px solid lightgray",
  borderRadius: "6px",
};
const Initivalue = {
  asset_name: "",
  asset_id: "",
  purchase_date: "",
  purchase_from: "",
  manufacturer: "",
  model: "",
  status: "",
  supplier: "",
  condition: "",
  Warranty: "",
  value: "",
  asset_user: "",
  description: "",
};
function Add() {
  return (
    <Formik
      initialValues={Initivalue}
      validationSchema={Assestschema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        alert("submit");
        resetForm();
        //  window.location.replace('Login','/')
      }}
    >
      <div id="add_asset" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-md" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Asset</h5>
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
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Asset Name</label>
                      <Field
                        name="asset_name"
                        className="form-control"
                        type="text"
                      />
                      <Errorsg name="asset_name" className="error" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Asset Id</label>
                      <Field
                        readOnly=""
                        name="asset_id"
                        defaultValue="id"
                        className="form-control"
                        type="text"
                      />
                      <Errorsg name="asset_id" className="error" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Purchase Date</label>
                      <Field
                        name="purchase_date"
                        readOnly=""
                        defaultValue=" dd/mm/yy"
                        className="form-control datetimepicker"
                        type="text"
                      />
                      <Errorsg name="purchase_date" className="error" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Purchase From</label>
                      <Field
                        name="purchase_from"
                        className="form-control"
                        type="text"
                      />
                      <Errorsg name="purchase_from" className="error" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Manufacturer</label>
                      <Field
                        name="manufacturer"
                        className="form-control"
                        type="text"
                      />
                      <Errorsg name="manufacturer" className="error" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Model</label>
                      <Field
                        name="model"
                        className="form-control"
                        type="text"
                      />
                      <Errorsg name="model" className="error" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Status</label>
                      <br />
                      <Field
                        name="status"
                        as="select"
                        className="select"
                        style={selectinput}
                      >
                        <option value="0">Pending</option>
                        <option value="1">Approved</option>
                        <option value="2">Deployed</option>
                        <option value="3">Damaged</option>
                      </Field>
                      <Errorsg name="status" className="error" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Supplier</label>
                      <Field
                        name="supplier"
                        className="form-control"
                        type="text"
                      />
                      <Errorsg name="supplier" className="error" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Condition</label>
                      <Field
                        name="condition"
                        className="form-control"
                        type="text"
                      />
                      <Errorsg name="condition" className="error" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Warranty</label>
                      <Field
                        name="Warranty"
                        className="form-control"
                        type="text"
                        placeholder="In Months"
                      />
                      <Errorsg name="Warranty" className="error" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Value/Price</label>
                      <Field
                        placeholder={1800}
                        name="value"
                        className="form-control"
                        type="number"
                      />
                      <Errorsg name="value" className="error" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Asset User</label>
                      <Field
                        name="asset_user"
                        className="select"
                        style={selectinput}
                        as="select"
                      >
                        <option value="1">John Doe</option>
                        <option value="2">Richard Miles</option>
                      </Field>
                      <Errorsg name="asset_user" className="error" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Description</label>
                      <Field
                        rows={4}
                        name="description"
                        className="form-control"
                        defaultValue={""}
                        as="textarea"
                      />
                      <Errorsg name="description" className="error" />
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button
                    type="submit"
                    name="add_asset"
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
  );
}

export default Add;
