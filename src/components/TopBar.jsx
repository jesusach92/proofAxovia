import React from "react";

const TopBar = () => {
  return (
    <nav
      className="navbar py-1"
      style={{
        backgroundColor: "#e892bf",
        margin: 0,
        padding: 0,
        width: "100%",
      }}
    >
      <div className="row justify-content-around flex-grow-1">
        <div className="col-4 mx-6">
          <button
            className="navbar-brand "
            style={{
              border: "none",
              backgroundColor: "transparent",
              color: "#fff",
            }}
          >
            ENG |
          </button>
        </div>
        <div className="col-1">
          <a className="navbar-brand" style={{ color: "#fff" }} href="#">
            Blog
          </a>
          <a className="navbar-brand" style={{ color: "#fff" }} href="#">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
