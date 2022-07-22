import React, { useState } from "react";
import logo from "../assets/Mi_Pasteleria.svg";

const Navbar = () => {
  return (
    <div className="row" style={{ backgroundColor: "#9f7fb1" }}>
      <div className="col py-4 px-5">
        <a href="#">
          <img src={logo} className="mx-auto d-block" href="#"></img>
        </a>
      </div>
      <div className="col py-4 px-5">
        <ul className="nav menuNavbar">
          <li className="nav-item ">
            <a className="nav-link" href="#">
              Pasteles
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Helados
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Galletas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Nosotros
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Sucursales
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
