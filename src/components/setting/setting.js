import React from "react";
import MainNavBar from '../mainNavBar/mainNavBar'
import "./settingStyle.css";
const Setting = () => {
  return (
    <div className="settingcont">
    <MainNavBar/>
      <h1 className="mb-5">Account Settings</h1>
    <div className="row">
      <div className="col l1 m1 s1 offset-s4 left">
      <div className="img-circle text-center mb-3">
              <img
                src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="picture not found"
                className="shadow"
              />
            </div>
      </div>
      <div className="col l11 m11 s11 offset-s3"> <h4 className="text-center" style={{marginTop:"5%"}}>Faizan Anwar</h4></div>
    </div>
    <div className="container">
    <div className="tab-content p-4 p-md-5" id="v-pills-tabContent">
          {/* Personal Section Start */}

          <div
            className="tab-pane fade show active"
            id="account"
            role="tabpanel"
            aria-labelledby="account-tab"
          >
            <h3 className="mb-4">Personal</h3>
            <form action="">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control"  />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control"  />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Phone number</label>
                    <input type="text" className="form-control"  />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Data of Birth</label>
                    <input type="date" className="form-control"  />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Bio</label>
                    <textarea className="form-control" rows="4"></textarea>
                  </div>
                </div>
               
                  <div className="col l3 s5 ">
                  <button
                    style={{width:"80%" , marginRight:"20px"}}
                    className="btn btn-primary"
                  >
                    Update
                  </button>
                  </div>
                  <div className="col l3 s5 ">
                  <button style={{width:"80%"}} className="btn btn-light">Cancel</button>
                  </div>
                
              </div>
            </form>
          </div>

          {/* Personal Section Ends*/}

          <hr />
          {/* Password Section Start */}
          <div
            className="tab-pane fade show active"
            id="password"
            role="tabpanel"
            aria-labelledby="password-tab"
          >
            <h3 className="mb-4">Password Settings</h3>
            <form action="">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Old password</label>
                    <input type="password" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>New password</label>
                    <input type="password" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Confirm new password</label>
                    <input type="password" className="form-control" />
                  </div>
                </div>
                <div className="col l3 s5 ">
                  <button
                    style={{width:"80%" , marginRight:"20px"}}
                    className="btn btn-primary"
                  >
                    Update
                  </button>
                  </div>
                  <div className="col l3 s5 ">
                  <button style={{width:"80%"}} className="btn btn-light">Cancel</button>
                  </div>
              </div>
            </form>
          </div>
          {/* Password Settings Ends */}
          <hr />
          {/* Privacy Setting Starts */}
          <div
            className="tab-pane fade show active"
            id="privacy"
            role="tabpanel"
            aria-labelledby="privacy-tab"
          >
            <h3 className="mb-4">Privacy Settings</h3>
            <form action="">
              <div className="row">
                <div className="col">
                  <label className="form-check-label" for="privacy1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="privacy1"
                    />
                    <span>Who can send you friend request</span>
                  </label>
                </div>
                </div>
                <div className="row">
                <div className="col">
                  <label className="form-check-label" for="privacy2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="privacy2"
                    />
                    <span>Comments</span>
                  </label>
                </div>
                </div>
                <div className="row">
                <div className="col">
                  <label className="form-check-label" for="privacy3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="privacy3"
                    />
                    <span>Likes</span>
                  </label>
                </div>
                </div>
                <div className="row">
                <div className="col">
                  <label className="form-check-label" for="privacy4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="privacy4"
                    />
                    <span>Chat</span>
                  </label>
                </div>
                </div>
                <div className="row">
                <div className="col l3 s5 ">
                  <button
                    style={{width:"80%" , marginRight:"20px"}}
                    className="btn btn-primary"
                  >
                    Update
                  </button>
                  </div>
                  <div className="col l3 s5 ">
                  <button style={{width:"80%"}} className="btn btn-light">Cancel</button>
                  </div>
                </div>
              
            </form>
          </div>
          {/* Privacy Settings Ends */}
          <hr />
          {/* Notification Settings Starts */}
          <div
            className="tab-pane fade show active"
            id="notification"
            role="tabpanel"
            aria-labelledby="notification-tab"
          >
            <h3 className="mb-4">Notification Settings</h3>
            <p>What Notifications You Receive</p>
            <form action="">
              <div className="form-group">
                <div className="form-check">
                  <div className="row">
                    <div className="col">
                    <label className="form-check-label" for="notification1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="notification1"
                    />
                    <span>Friend Requests</span>
                  </label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                    <label className="form-check-label" for="notification2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="notification2"
                    />
                    <span>Comments</span>
                  </label>
                    </div>
                  </div>
                 
                  <div className="row">
                    <div className="col">
                    <label className="form-check-label" for="notification3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="notification3"
                    />
                    <span>Likes</span>
                  </label>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col">
                    <label className="form-check-label" for="notification4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="notification4"
                    />
                    <span>Chat</span>
                  </label>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="row">
              <div className="col l3 s5 ">
                  <button
                    style={{width:"80%" , marginRight:"20px"}}
                    className="btn btn-primary"
                  >
                    Update
                  </button>
                  </div>
                  <div className="col l3 s5 ">
                  <button style={{width:"80%"}} className="btn btn-light">Cancel</button>
                  </div>
              </div>
            </form>
          </div>
          {/* Notification Settings Ends */}
</div>
    </div>
    </div>
  );
};

export default Setting;
