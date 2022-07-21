import React from "react";

export const FilterBar = () => {
  return (
    <div
      className="container p-3"
      style={{ backgroundColor: "#f9ecf7", width: "100%" }}
    >
      <div className="row">
        <div className="col">
          <input className="form-control"></input>
        </div>
        <div className="col">
          <select className="form-select">
            <option selected>Precio</option>
            <option> {"Entre 400"}</option>
            <option> {"Más de 400"}</option>
          </select>
        </div>
        <div className="col">
          <select className="form-select">
            <option value="1">{"Menos de 500"}</option>
            <option value="2">{"Entre 400 y 500"}</option>
            <option value="3">{"Más de 500"}</option>
          </select>
        </div>
        <div className="col">
          <select className="form-select">
            <option value="0">Fondeau</option>
            <option value="1">Betun Italiano</option>
            <option value="2">Chantilly</option>
          </select>
        </div>
        <div className="col">
          <select className="form-select">
            <option value="S">Pequeño</option>
            <option value="M">Mediano</option>
            <option value="L">Grande</option>
          </select>
        </div>
      </div>
      <div className="col">
        <select className="form-select">
          <option selected>Ordenar Por</option>
          <option value="0">Nombre</option>
          <option value="1">Precio</option>
          <option value="2">Precio Combo</option>
          <option value="3">Topping</option>
          <option value="4">Tamaño</option>
        </select>
      </div>
    </div>
  );
};
