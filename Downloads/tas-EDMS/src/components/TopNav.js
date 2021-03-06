import React from "react";

import {
  SearchOutlined,
  Apps,
  AccountCircleOutlined,
  NotificationsOutlined,
  Settings,
  HelpOutline,
} from "@material-ui/icons";

const TopNav = () => {
  // const history = useHistory();
  const [clicked, setClicked] = React.useState(false);

  return (
    <nav className="navi">
      <form className="search">
        <div className="ss">
          <i className="fas fa-search"></i>
        </div>
        <input
          required
          name="phone"
          // onChange={handleChange}
          placeholder="Search in drive"
        ></input>
      </form>

      <div className="header-right">
        <div className="header-icon-holder">
          <HelpOutline />
          <NotificationsOutlined />
          <AccountCircleOutlined />
          <Settings />
          <div>
            <Apps
              onClick={() => {
                setClicked(!clicked);
              }}
            />
            <div
              className="apps-dropdown"
              style={clicked ? undefined : { display: "none" }}
            >
              <div>
                <i className="fas fa-home"></i>
                <p>EDMS</p>
              </div>
              <div>
                <i className="fas fa-tools"></i>
                <p>Teacher Tools</p>
              </div>
              <div>
                <i className="fas fa-user-check"></i>
                <p>NIN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
