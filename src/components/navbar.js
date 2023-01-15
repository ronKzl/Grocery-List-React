import React from "react";

//stateless functional component when it has no state or functions -> can't use lifeCycle hooks
//shortcut: sfc [TAB] to make it
//can't use this use args to function
                // {} destructure the props to only work with the values
const NavBar = ({totalCounters}) => {
    console.log("navBar rendered");
        return (
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="http://localhost:3000/">
                Total Items: <span className = "badge rounded-pill bg-secondary">{totalCounters}</span>
              </a>
            </div>
          </nav>
        );
};


export default NavBar;
