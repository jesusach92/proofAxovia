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
            <div className="col-2 cake">
              <span>PASTEL</span>
            </div>
            <div className="col-2 paq">
              <span>PAQUETE</span>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <img
                width={"70%"}
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
                <div className="row">
                  <span className="col-6">Tamaño:</span>
                  <span className="col-6">{cake.size}</span>
                </div>
                <div className="row">
                  <span className="col-6">Topping:</span>
                  <span className="col-6">{cake.toppingType}</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col-6">
                  <div className="row">
                    <span>
                      {cake.size === "S"
                        ? "8-10 Personas"
                        : cake.size === "M"
                        ? " 10-15 Personas"
                        : "15-25 Personas"}
                    </span>
                  </div>
                  <div className="row">{`$ ${Number(cake.price).toFixed(
                    2
                  )}`}</div>
                  <div className="row">*Solo Pastel</div>
                  <div className="row">
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
                  <div className="row">
                    <span>
                      {cake.size === "S"
                        ? "8-10 Personas"
                        : cake.size === "M"
                        ? " 10-15 Personas"
                        : "15-25 Personas"}
                    </span>
                  </div>
                  <div className="row">{`$ ${Number(cake.comboPrice).toFixed(
                    2
                  )}`}</div>
                  <div className="row">*Bebidas incluidas</div>
                  <div className="row">
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
