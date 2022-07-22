import React, { useState } from "react";

const Widget = ({ cake }) => {
  return (
    <div className="container">
      <div
        className="card mt-4"
        style={{
          backgroundColor: "#ffffff",
          width: "90%",
          margin: "auto",
          borderRadius: "20px",
        }}
      >
        <div
          className="card-header"
          style={{
            backgroundColor: "#fff",
            borderRadius: "20px 20px 0 0",
            margin: "0",
            padding: "0",
            width: "100%",
          }}
        >
          <div
            className="row "
            style={{ width: "100%", margin: "0", flexWrap: "nowrap" }}
          >
            <div className="col-7 m-3 " style={{ flexGrow: 1 }}>
              <span className="name">
                {cake.name.toLowerCase().replace(/^\w/, (c) => c.toUpperCase())}
              </span>
            </div>
            <div className="col-2 cake p-3">
              <span>PASTEL</span>
            </div>
            <div className="col-2 paq p-3 ">
              <span>PAQUETE</span>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <img
                width={"70%"}
                height={"200px"}
                src={cake.imageUrl}
                alt={cake.name}
                className="rounded mx-auto d-block"
              />
            </div>
            <div className="col">
              <div className="row">
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Iure, quisquam voluptatibus laudantium vitae recusandae
                  aspernatur commodi enim maiores eum ab cupiditate sint ea
                  inventore quasi? A expedita eius assumenda aliquam.
                </span>
              </div>
              <div className="col">
                <div className="row pt-4">
                  <span className="col-3" style={{ fontWeight: 700 }}>
                    Tamaño:
                  </span>
                  <span className="col-9" style={{ textAlign: "left" }}>
                    {cake.size === "S"
                      ? "Pequeño"
                      : cake.size === "M"
                      ? "Mediano"
                      : "Grande"}
                  </span>
                </div>
                <div className="row">
                  <span className="col-3" style={{ fontWeight: 700 }}>
                    Topping:
                  </span>
                  <span className="col-9" style={{ textAlign: "left" }}>
                    {cake.toppingType === "0"
                      ? "Fondeau"
                      : cake.toppingType === "1"
                      ? "Betun Italiano"
                      : "Chantilly"}
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col-6 ">
                  <div className="row justify-content-center bold">
                    {cake.size === "S"
                      ? "8-10 Personas"
                      : cake.size === "M"
                      ? " 10-15 Personas"
                      : "15-25 Personas"}
                  </div>
                  <div className="row justify-content-center bold price">{`$${Number(
                    cake.price
                  ).toFixed(2)}`}</div>
                  <div className="row justify-content-center tip pb-3">
                    *Solo Pastel
                  </div>
                  <div className="row justify-content-center">
                    <button
                      className="btn btn-success"
                      style={{
                        width: "80%",
                        margin: "auto",
                        borderRadius: "25px",
                        backgroundColor: "#299798",
                      }}
                    >
                      Seleccionar
                    </button>
                  </div>
                </div>
                <div className="col-6">
                  <div className="row justify-content-center bold">
                    Combo Fiesta
                  </div>
                  <div className="row justify-content-center bold price">{`$${Number(
                    cake.comboPrice
                  ).toFixed(2)}`}</div>
                  <div className="row justify-content-center tip pb-3">
                    *Bebidas incluidas
                  </div>
                  <div className="row justify-content-center">
                    <button
                      className="btn btn-outline-success"
                      style={{
                        width: "80%",
                        margin: "auto",
                        borderRadius: "25px",
                        borderColor: "#299798",
                      }}
                    >
                      Seleccionar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
