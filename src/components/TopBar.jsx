import React from "react";

const TopBar = () => {
  return (
    <nav
      className="navbar py-1"
      style={{ backgroundColor: "#e892bf", margin: 0, padding: 0 }}
    >
      <div className="row">
        <div className="col-2 mx-6">
          <button
            className="navbar-brand"
            style={{ border: "none", backgroundColor: "transparent" }}
          >
            EN|
          </button>
        </div>
        <div className="col-9">
          <a className="navbar-brand" href="#">
            Blog
          </a>
          <a className="navbar-brand" href="#">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
