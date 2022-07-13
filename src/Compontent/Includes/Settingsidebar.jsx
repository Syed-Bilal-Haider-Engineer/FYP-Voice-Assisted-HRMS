import React from "react";

function Settingsidebar() {
  return (
    <>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div className="sidebar-menu">
            <ul>
              <li>
                <a href="index.php">
                  <i className="la la-home" /> <span>Back to Home</span>
                </a>
              </li>
              <li className="menu-title">Settings</li>
              <li>
                <a href="settings.php">
                  <i className="la la-building" /> <span>Company Settings</span>
                </a>
              </li>
              <li>
                <a href="theme-settings.php">
                  <i className="la la-photo" /> <span>Theme Settings</span>
                </a>
              </li>
              <li>
                <a href="roles-permissions.php">
                  <i className="la la-key" />{" "}
                  <span>Roles &amp; Permissions</span>
                </a>
              </li>
              <li>
                <a href="roles-permissions.php">
                  <i className="la la-key" />{" "}
                  <span>Roles &amp; Permissions</span>
                </a>
              </li>
              <li>
                <a href="invoice-settings.php">
                  <i className="la la-pencil-square" />{" "}
                  <span>Invoice Settings</span>
                </a>
              </li>
              <li>
                <a href="salary-settings.php">
                  <i className="la la-money" /> <span>Salary Settings</span>
                </a>
              </li>
              <li>
                <a href="change-password.php">
                  <i className="la la-lock" /> <span>Change Password</span>
                </a>
              </li>
              <li>
                <a href="leave-type.php">
                  <i className="la la-cogs" /> <span>Leave Type</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settingsidebar;
