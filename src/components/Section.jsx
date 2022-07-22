import React, { useEffect, useState } from "react";
import { FilterBar } from "./FilterBar";
import Widget from "./Widget";
import axios from "axios";
import stringifyObject from "stringify-object";

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
  const [dataFilter, setDataFilter] = useState({});

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
    dataob.map((e, index) => {
      console.log(e.replace('"{', ""));
    });
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
      <FilterBar></FilterBar>
      {data.map((e, index) => (
        <Widget key={index} cake={e}></Widget>
      ))}
    </div>
  );
};

export default Section;
