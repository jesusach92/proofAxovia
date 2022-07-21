import React, { useEffect, useState } from "react";
import { FilterBar } from "./FilterBar";
import axios from "axios";

const Section = () => {
  const [data, setData] = useState({});
  const [dataFilter, setDataFilter] = useState({});

  const getData = () => {
    fetch("../assets/AxoviaData.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setDataFilter(data);
        console.log("data:", data);
      });
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
    </div>
  );
};

export default Section;
