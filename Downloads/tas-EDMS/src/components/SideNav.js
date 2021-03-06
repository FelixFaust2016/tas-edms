import React, { useState } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  NavLink,
  useHistory,
} from "react-router-dom";

import Logo from "../components/Logo";

const SideNav = (props) => {
  const [navs, setNavs] = useState([
    { nav: "my drive", prop: 1, icon: "fas fa-hdd" },
    { nav: "recent", prop: 2, icon: "fas fa-concierge-bell" },
    { nav: "verified", prop: 3, icon: "fas fa-user-check" },
    { nav: "pending", prop: 4, icon: "fas fa-box-open" },
    { nav: "help", prop: 5, icon: "fas fa-hands-helping" },
  ]);

  const history = useHistory();

  const handleSignIn = (e) => {
    e.preventDefault();
    history.push("/home");
  };

  const highlight = (e, page) => {
    e.preventDefault();
    props.pageSetter(page);
  };
  // Modal.setAppElement('#app');
  return (
    <div className="sidenav">
      <div className="menus-div">
        <div className="side-nav-link side-nav-disabled">
          <span>
            <i class="fas fa-tachometer-alt"></i>
          </span>
          <span>Dashboard</span>
        </div>
        <div className="pages-navs">
          {navs.map((nav, i) => (
            <div
              key={i}
              className={
                props.page == nav.prop ? "on side-nav-link" : "side-nav-link"
              }
              onClick={(e) => {
                // props.navigate(e, "/home");
                highlight(e, nav.prop);
              }}
            >
              <span>
                <i className={nav.icon}></i>
              </span>
              <span>{nav.nav}</span>
            </div>
          ))}
          {/* <li
            className={props.page == 1 ? "on" : undefined}
            onClick={(e) => {
              // props.navigate(e, "/home");
              highlight(e, 1);
            }}
          >
            My Drive
          </li> */}
        </div>
        <button
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            props.openModal();
          }}
        >
          <span>
          <i class="far fa-folder"></i>
          </span>
          <span>Add Document</span>
        </button>
      </div>
    </div>
  );
};

export default connect()(SideNav);
