import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  NavLink,
  useHistory,
} from "react-router-dom";

import TopNav from "../components/TopNav";
import MyDrive from "../pages/MyDrive";

import Logo from "../components/Logo";

const DocumentsPage = (props) => {
  const history = useHistory();
  const [clicked, setClicked] = React.useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    history.push("/home");
  };

  const handleChange = (e) => {
    e.preventDefault();
  };

  return (
    <div className="documentspage">
      <TopNav />
      <div className="top-nav"></div>

      {/* <div className="page">
        <div className="title-div">
          {props.page === 1 && <h1>My Drive</h1>}
          {props.page === 2 && <h1>Recents</h1>}
          {props.page === 3 && <h1>Verified</h1>}
          {props.page === 4 && <h1>Pending</h1>}
          {props.page === 5 && <h1>Help</h1>}
        </div>

        <div className="page-container">
          {props.page === 1 && <MyDrive fileTitle={props.fileTitle} />}
        </div>
        <div></div>
      </div> */}
    </div>
  );
};

export default connect()(DocumentsPage);
