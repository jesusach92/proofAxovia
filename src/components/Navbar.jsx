import React from "react";
import logo from "../assets/Mi_Pasteleria.svg";

const Navbar = () => {
  return (
    <nav className="navbar" style={{ backgroundColor: "#9f7fb1" }}>
      <div className="row">
        <div className="col">
          <div>
            <a href="#">
              <img src={logo} href="#"></img>
            </a>
          </div>
          <ul style={{ listStyle: "none" }}>
            <li>
              <a href="#">Pasteles</a>
            </li>
            <li>
              <a href="#">Helados</a>
            </li>
            <li>
              <a href="#">Galletas</a>
            </li>
            <li>
              <a href="#">Nosotros</a>
            </li>
            <li>
              <a href="#">Sucursales</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
