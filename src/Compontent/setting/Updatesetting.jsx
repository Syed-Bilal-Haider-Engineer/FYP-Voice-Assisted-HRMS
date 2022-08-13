import React, { useEffect, useState } from "react";
import { POST } from "../API/PostAPI";
import { useSelector } from "react-redux";
import useGet from "../API/API";
function Updatesetting() {

 const url="http://localhost/HRMS/setting/Updatesetting.php";
  const settingstate = useSelector((state) => state.settingreducer);
  const [cname, setcnamestate] = useState('');
  const [contactper, setcontactstate] = useState('');
  const [addressvalue, setaddressstate] = useState('');
  const [emailvalue, setemailstate] = useState('');
  const [phone, setphonestate] = useState('');
  const [websiteurl, seturlstate] = useState('');
  const [mobile, setmobilestate] = useState('');
  const [add, setAddState] = useState();
 const settinghandler=(e)=>{
 e.preventDefault();
 const settobj={
    cname,
    contactper,
    addressvalue,
    emailvalue,
    phone,
    websiteurl,
    mobile
 }
 setAddState(settobj);
 console.log("settobj",settobj);
 }
 useEffect(() => {
  const result=settingstate.find((items) => {
      return items.id == 1;
    });
    setcnamestate(result.cname);
    setcontactstate(result.conperson);
    setaddressstate(result.adddress);
    setemailstate(result.email);
    setphonestate(result.phonenum);
    seturlstate(result.websiteurl);
    setmobilestate(result.mobilenum);
}, []);


  return (
    <>
      {/*   
    {add && <POST values={add} url={url} Addstate={setAddState} />} */}
      <div className="modal custom-modal fade" id="updatesetting" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Company setting</h5>
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
              <form >
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>
                              Company Name{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="cname"
                              value={cname}
                              onChange={(e) => {
                                setcnamestate(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Contact Person</label>
                            <input
                              className="form-control "
                              name="conperson"
                              type="text"
                              value={contactper}
                              onChange={(e) => {
                                setcontactstate(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <label>Address</label>
                            <input
                              className="form-control "
                              name="address"
                              type="text"
                              value={addressvalue}
                              onChange={(e) => {
                                setaddressstate(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Email</label>
                            <input
                              className="form-control"
                              name="email"
                              type="email"
                              value={emailvalue}
                              onChange={(e) => {
                                setemailstate(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Phone Number</label>
                            <input
                              className="form-control"
                              type="text"
                              name="phone"
                              value={phone}
                              onChange={(e) => {
                                setphonestate(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Mobile Number</label>
                            <input
                              className="form-control"
                              name="mobile"
                              type="text"
                              value={mobile}
                              onChange={(e) => {
                                setmobilestate(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <label>Website Url</label>
                            <input
                              className="form-control"
                              name="weburl"
                              type="text"
                              value={websiteurl}
                              onChange={(e) => {
                                seturlstate(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="submit-section">
                        <button className="btn btn-primary submit-btn" onClick={settinghandler}>
                          Save
                        </button>
                      </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {add && (
          <POST values={add} url={url} Addstate={setAddState} />
        )}
    </>
  );
}

export default Updatesetting;
