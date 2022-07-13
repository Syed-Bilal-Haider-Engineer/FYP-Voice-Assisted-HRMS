import React from "react";

function Salarysetting() {
  return (
    <>
      {/* <!-- Main Wrapper --> */}
      <div className="main-wrapper">
        {/* <!-- Page Wrapper --> */}
        <div className="page-wrapper">
          {/* <!-- Page Content --> */}
          <div className="content container-fluid">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                {/* <!-- Page Header --> */}
                <div className="page-header">
                  <div className="row">
                    <div className="col-sm-12">
                      <h3 className="page-title">Salary Settings</h3>
                    </div>
                  </div>
                </div>
                {/* <!-- /Page Header --> */}

                <form>
                  {/* <!-- DA and HRA Settings --> */}
                  <div className="settings-widget">
                    <div className="h3 card-title with-switch">
                      DA and HRA
                      <div className="onoffswitch">
                        <input
                          type="checkbox"
                          name="onoffswitch"
                          className="onoffswitch-checkbox"
                          id="switch_hra"
                          checked=""
                        />
                        <label className="onoffswitch-label" for="switch_hra">
                          <span className="onoffswitch-inner"></span>
                          <span className="onoffswitch-switch"></span>
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>DA (%)</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>HRA (%)</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /DA and HRA Settings -->
								
								<!-- Provident Fund Settings --> */}
                  <div className="settings-widget">
                    <div className="h3 card-title with-switch">
                      Provident Fund Settings
                      <div className="onoffswitch">
                        <input
                          type="checkbox"
                          name="onoffswitch"
                          className="onoffswitch-checkbox"
                          id="switch_pf"
                          checked=""
                        />
                        <label className="onoffswitch-label" for="switch_pf">
                          <span className="onoffswitch-inner"></span>
                          <span className="onoffswitch-switch"></span>
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Employee Share (%)</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Organization Share (%)</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /Provident Fund Settings -->
								
								<!-- ESI Settings --> */}
                  <div className="settings-widget">
                    <div className="h3 card-title with-switch">
                      ESI Settings
                      <div className="onoffswitch">
                        <input
                          type="checkbox"
                          name="onoffswitch"
                          className="onoffswitch-checkbox"
                          id="switch_esi"
                        />
                        <label className="onoffswitch-label" for="switch_esi">
                          <span className="onoffswitch-inner"></span>
                          <span className="onoffswitch-switch"></span>
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Employee Share (%)</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Organization Share (%)</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /ESI Settings -->
								
								<!-- TDS Settings --> */}
                  <div className="settings-widget">
                    <div className="h3 card-title with-switch">
                      TDS&nbsp;{" "}
                      <small className="form-text text-muted">
                        Annual Salary
                      </small>
                      <div className="onoffswitch">
                        <input
                          type="checkbox"
                          name="onoffswitch"
                          className="onoffswitch-checkbox"
                          id="switch_tds"
                        />
                        <label className="onoffswitch-label" for="switch_tds">
                          <span className="onoffswitch-inner"></span>
                          <span className="onoffswitch-switch"></span>
                        </label>
                      </div>
                    </div>
                    <div className="row row-sm">
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label>Salary From</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label>Salary To</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-sm-2">
                        <div className="form-group">
                          <label>%</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-sm-2">
                        <div className="form-group">
                          <label className="d-none d-sm-block">&nbsp;</label>
                          <button
                            className="btn btn-danger btn-block set-btn"
                            type="button"
                          >
                            <i className="fa fa-trash-o"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="row row-sm">
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label>Salary From</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label>Salary To</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-sm-2">
                        <div className="form-group">
                          <label>%</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-sm-2">
                        <div className="form-group">
                          <label className="d-none d-sm-block">&nbsp;</label>
                          <button
                            className="btn btn-danger btn-block set-btn"
                            type="button"
                          >
                            <i className="fa fa-trash-o"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="row row-sm">
                      <div className="col-sm-2 ml-auto">
                        <div className="form-group">
                          <button
                            className="btn btn-primary btn-block"
                            type="button"
                          >
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="submit-section">
                    <button
                      name="submit"
                      className="btn btn-primary submit-btn"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Salarysetting;
