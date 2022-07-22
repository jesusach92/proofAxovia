import React, { useEffect, useState } from "react";

import Widget from "./Widget";
import axios from "axios";
import { CurrencyDollar } from "react-bootstrap-icons";

const Section = () => {
  const [data, setData] = useState([
    {
      name: "pastel de 3 leches",
      imageUrl: "https://axovia.mx/challenge/3leches.jpeg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a dictum lacus. Quisque in aliquet dui. Pellentesque mauris turpis, imperdiet ut viverra ut, porttitor sit amet felis. Ut viverra auctor quam in consectetur.",
      price: "400.65232",
      comboPrice: "500.2141",
      toppingType: "0",
      size: "M",
    },
    {
      name: "pastel de queso con zarzamora",
      imageUrl: "https://axovia.mx/challenge/pastel de zarzamora.jpeg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a dictum lacus. Quisque in aliquet dui. Pellentesque mauris turpis, imperdiet ut viverra ut, porttitor sit amet felis. Ut auctor quam in consectetur.",
      price: "400.65232",
      comboPrice: "500.43335",
      toppingType: "1",
      size: "S",
    },
    {
      name: "pay de limon",
      imageUrl: "https://axovia.mx/challenge/paydelimon.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a dictum lacus. Quisque in aliquet dui. Pellentesque mauris turpis, imperdiet ut viverra ut, porttitor sit amet felis. Ut viverra auctor quam in consectetur.",
      price: "400.65232",
      comboPrice: "400.11143214",
      toppingType: "2",
      size: "S",
    },
    {
      name: "pastel que dice uwu",
      imageUrl: "https://axovia.mx/challenge/uwu.jpeg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a lacus. Quisque in aliquet dui. Pellentesque mauris turpis, imperdiet ut viverra ut, porttitor sit amet felis. Ut viverra auctor quam in consectetur.",
      price: "400.65232",
      comboPrice: "100.50",
      toppingType: "0",
      size: "M",
    },
    {
      name: "pastel de zanahoria",
      imageUrl: "https://axovia.mx/challenge/pastelzanahoria.jpeg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a dictum lacus. Quisque in aliquet dui. Pellentesque mauris turpis, imperdiet ut viverra ut, porttitor sit amet felis. Ut viverra auctor quam in consectetur.",
      price: "400.65232",
      comboPrice: "1300.555",
      toppingType: "1",
      size: "L",
    },
    {
      name: "PASTEL DE CHOCOLATE",
      imageUrl: "https://axovia.mx/challenge/pasteldechocolate.jpeg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a lacus. Quisque in aliquet dui. Pellentesque mauris turpis, imperdiet ut viverra ut, porttitor sit amet felis. Ut viverra auctor quam in consectetur.",
      price: "400.65232",
      comboPrice: "1200.1",
      toppingType: "2",
      size: "L",
    },
    {
      name: "PASTEL DE FRESAS",
      imageUrl: "https://axovia.mx/challenge/fresas.jpeg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a dictum lacus. Quisque in aliquet dui. Pellentesque mauris turpis, imperdiet ut viverra ut, porttitor sit amet felis. Ut viverra auctor quam in consectetur.",
      price: "400.65232",
      comboPrice: "1000",
      toppingType: "2",
      size: "M",
    },
    {
      name: "Pastel de princesas",
      imageUrl: "https://axovia.mx/challenge/princesas.jpeg",
      description:
        "Lorem ipsum dolor sit amet, adipiscing elit. Aenean a dictum lacus. Quisque in aliquet dui. Pellentesque mauris turpis, imperdiet ut viverra ut, porttitor sit amet felis. Ut viverra auctor quam in consectetur.",
      price: "600.6",
      comboPrice: "1500",
      toppingType: "1",
      size: "L",
    },
  ]);
  const [dataFilter, setDataFilter] = useState([
    {
      name: "pastel de 3 leches",
      imageUrl: "https://axovia.mx/challenge/3leches.jpeg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a dictum lacus. Quisque in aliquet dui. Pellentesque mauris turpis, imperdiet ut viverra ut, porttitor sit amet felis. Ut viverra auctor quam in consectetur.",
      price: "400.65232",
      comboPrice: "500.2141",
      toppingType: "0",
      size: "M",
    },
    {
      name: "pastel de queso con zarzamora",
      imageUrl: "https://axovia.mx/challenge/pastel de zarzamora.jpeg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a dictum lacus. Quisque in aliquet dui. Pellentesque mauris turpis, imperdiet ut viverra ut, porttitor sit amet felis. Ut auctor quam in consectetur.",
      price: "400.65232",
      comboPrice: "500.43335",
      toppingType: "1",
      size: "S",
    },
    {
      name: "pay de limon",
      imageUrl: "https://axovia.mx/challenge/paydelimon.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a dictum lacus. Quisque in aliquet dui. Pellentesque mauris turpis, imperdiet ut viverra ut, porttitor sit amet felis. Ut viverra auctor quam in consectetur.",
      price: "400.65232",
      comboPrice: "400.11143214",
      toppingType: "2",
      size: "S",
    },
    {
      name: "pastel que dice uwu",
      imageUrl: "https://axovia.mx/challenge/uwu.jpeg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a lacus. Quisque in aliquet dui. Pellentesque mauris turpis, imperdiet ut viverra ut, porttitor sit amet felis. Ut viverra auctor quam in consectetur.",
      price: "400.65232",
      comboPrice: "100.50",
      toppingType: "0",
      size: "M",
    },
    {
      name: "pastel de zanahoria",
      imageUrl: "https://axovia.mx/challenge/pastelzanahoria.jpeg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a dictum lacus. Quisque in aliquet dui. Pellentesque mauris turpis, imperdiet ut viverra ut, porttitor sit amet felis. Ut viverra auctor quam in consectetur.",
      price: "400.65232",
      comboPrice: "1300.555",
      toppingType: "1",
      size: "L",
    },
    {
      name: "PASTEL DE CHOCOLATE",
      imageUrl: "https://axovia.mx/challenge/pasteldechocolate.jpeg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a lacus. Quisque in aliquet dui. Pellentesque mauris turpis, imperdiet ut viverra ut, porttitor sit amet felis. Ut viverra auctor quam in consectetur.",
      price: "400.65232",
      comboPrice: "1200.1",
      toppingType: "2",
      size: "L",
    },
    {
      name: "PASTEL DE FRESAS",
      imageUrl: "https://axovia.mx/challenge/fresas.jpeg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a dictum lacus. Quisque in aliquet dui. Pellentesque mauris turpis, imperdiet ut viverra ut, porttitor sit amet felis. Ut viverra auctor quam in consectetur.",
      price: "400.65232",
      comboPrice: "1000",
      toppingType: "2",
      size: "M",
    },
    {
      name: "Pastel de princesas",
      imageUrl: "https://axovia.mx/challenge/princesas.jpeg",
      description:
        "Lorem ipsum dolor sit amet, adipiscing elit. Aenean a dictum lacus. Quisque in aliquet dui. Pellentesque mauris turpis, imperdiet ut viverra ut, porttitor sit amet felis. Ut viverra auctor quam in consectetur.",
      price: "600.6",
      comboPrice: "1500",
      toppingType: "1",
      size: "L",
    },
  ]);

  const getData = async () => {
    const dataob = await axios
      .get("/assets/AxoviaData.json", {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((result) =>
        result.data.replace(/(\r\n|\n|\r|\t)/gm, "").split("},")
      );
    dataob.map((e, index) => console.log(e.replace('"{', "")));
    console.log(dataob);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className="container mt-5 p-0"
      style={{
        backgroundColor: "#fcf7fc",
        borderRadius: "10px 10px 0 0",
        border: "1px solid rgba(231,228,230,255)",
      }}
    >
      <div
        className="container p-3"
        style={{
          backgroundColor: "#f9ecf7",
          width: "100%",
          borderRadius: "10px 10px 0 0",
        }}
      >
        <div className="row">
          <div className="col .placeholder">
            <input
              className="form-control"
              placeholder=" Buscar"
              style={{ fontFamily: "Arial, FontAwesome" }}
            ></input>
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
              <option selected>
                <CurrencyDollar></CurrencyDollar>Precio
              </option>
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
      </div>
      {data.map((e, index) => (
        <Widget key={index} cake={e}></Widget>
      ))}
    </div>
  );
};

export default Section;
