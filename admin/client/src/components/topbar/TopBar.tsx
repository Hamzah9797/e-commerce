// dependencies
import React from "react";
import "./TopBar.css";
import { Language, NotificationsNone, Settings } from "@material-ui/icons";

const TopBar = () => {
  return (
    <div>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">Admin Board</span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Language />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Settings />
            </div>
            <img
              className="topAvatar"
              alt="profile pic"
              src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
