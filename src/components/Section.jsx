import React, { useEffect, useState } from "react";
import Widget from "./Widget";
import axios from "axios";

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
  const [searchData, setsearchData] = useState("");
  const [sort, setSort] = useState({ flag: false, sort: "1" });
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
  };

  useEffect(() => {
    sortinf(sort.sort);
  }, [sort.flag]);

  useEffect(() => {
    getData();
  }, []);

  const filterData = (searchData) => {
    const resultSearching = dataFilter.filter((e) => {
      if (e.name.toString().toLowerCase().includes(searchData)) {
        return e;
      }
      return null;
    });
    setData(resultSearching);
  };
  const handleChange = (e) => {
    setsearchData(e.target.value);
    filterData(e.target.value);
  };

  const resetSearch = (e) => {
    setsearchData("");
    setData(dataFilter);
  };

  const filterbyPrice = (e) => {
    let resultdata = dataFilter;
    if (e.target.value === "0") {
      setData(dataFilter);
    }
    if (e.target.value === "1")
      resultdata = dataFilter.filter((element) => Number(element.price) < 500);
    if (e.target.value === "2")
      resultdata = dataFilter.filter((element) => Number(element.price) > 500);
    setData(resultdata);
  };

  const filterbyCombo = (e) => {
    let resultdata = dataFilter;
    if (e.target.value === "0") {
      setData(dataFilter);
    }
    if (e.target.value === "1")
      resultdata = dataFilter.filter(
        (element) => Number(element.comboPrice) < 400
      );
    if (e.target.value === "2")
      resultdata = dataFilter.filter(
        (element) =>
          Number(element.comboPrice) > 400 && Number(element.comboPrice) < 600
      );
    if (e.target.value === "3")
      resultdata = dataFilter.filter(
        (element) => Number(element.comboPrice) > 600
      );
    setData(resultdata);
  };

  const filterbyTopping = (e) => {
    let resultdata = dataFilter;
    if (e.target.value === "0") {
      setData(dataFilter);
    }
    if (e.target.value === "1")
      resultdata = dataFilter.filter((element) => element.toppingType === "0");
    if (e.target.value === "2")
      resultdata = dataFilter.filter((element) => element.toppingType === "1");
    if (e.target.value === "3")
      resultdata = dataFilter.filter((element) => element.toppingType === "2");

    setData(resultdata);
  };
  const filterbySize = (e) => {
    let resultdata = dataFilter;
    if (e.target.value === "T") {
      setData(dataFilter);
    }
    if (e.target.value === "S")
      resultdata = dataFilter.filter((element) => element.size === "S");
    if (e.target.value === "M")
      resultdata = dataFilter.filter((element) => element.size === "M");
    if (e.target.value === "L")
      resultdata = dataFilter.filter((element) => element.size === "L");
    setData(resultdata);
  };

  const sortinf = (e) => {
    const sortvalue = e;
    let sortRes;
    if (sortvalue === "1") {
      sortRes = dataFilter.sort((a, b) => {
        return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
      });
    }
    if (sortvalue === "2") {
      sortRes = dataFilter.sort((a, b) => {
        return Number(a.price) > Number(b.price) ? 1 : -1;
      });
    }

    if (sortvalue === "3") {
      sortRes = dataFilter.sort((a, b) => {
        return Number(a.comboPrice) > Number(b.comboPrice) ? 1 : -1;
      });
    }

    if (sortvalue === "4") {
      sortRes = dataFilter.sort((a, b) => {
        return a.toppingType > b.toppingType ? 1 : -1;
      });
    }

    if (sortvalue === "5") {
      sortRes = dataFilter.sort((a, b) => {
        return a.size > b.size ? 1 : -1;
      });
    }
    setData((data) => (data = sortRes));
  };
  return (
    <div
      className="container mt-5 p-0 pb-2"
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
              value={searchData}
              onChange={handleChange}
              onBlur={resetSearch}
              style={{ fontFamily: "Arial, FontAwesome" }}
            ></input>
          </div>
          <div className="col">
            <select
              className="form-select"
              onBlur={resetSearch}
              onChange={filterbyPrice}
            >
              <option value="0" selected>
                Precio
              </option>
              <option value="1"> {"Menos de $ 500.00"}</option>
              <option value="2"> {"Más de $ 500.00"}</option>
            </select>
          </div>
          <div className="col">
            <select
              className="form-select"
              onBlur={resetSearch}
              onChange={filterbyCombo}
            >
              <option value="0" selected>
                Precio
              </option>
              <option value="1">{"Menos de $ 500.00"}</option>
              <option value="2">{"Entre $ 400.00 y $ 600.00"}</option>
              <option value="3">{"Más de $ 500.00"}</option>
            </select>
          </div>
          <div className="col">
            <select
              className="form-select"
              onBlur={resetSearch}
              onChange={filterbyTopping}
            >
              <option value="0" selected>
                TOPPING
              </option>
              <option value="1">Fondeau</option>
              <option value="2">Betun Italiano</option>
              <option value="3">Chantilly</option>
            </select>
          </div>
          <div className="col">
            <select
              className="form-select"
              onBlur={resetSearch}
              onChange={filterbySize}
            >
              <option value="T">Tamaño</option>
              <option value="S">Pequeño</option>
              <option value="M">Mediano</option>
              <option value="L">Grande</option>
            </select>
          </div>
          <div className="col">
            <select
              className="form-select"
              onChange={(e) =>
                setSort(
                  (sort) => (sort = { flag: !sort.flag, sort: e.target.value })
                )
              }
              onBlur={resetSearch}
            >
              <option value="1" selected>
                Ordenar Por
              </option>
              <option value="1">Nombre</option>
              <option value="2">Precio</option>
              <option value="3">Precio Combo</option>
              <option value="4">Topping</option>
              <option value="5">Tamaño</option>
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
