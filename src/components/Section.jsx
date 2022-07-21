import React, { useEffect, useState } from "react";
import { FilterBar } from "./FilterBar";
import Widget from "./Widget";
import axios from "axios"
import stringifyObject from 'stringify-object';

const Section = () => {
  const [data, setData] = useState({});
  const [dataFilter, setDataFilter] = useState({});

  const getData = async() => {
 const dataob= await axios.get("/assets/AxoviaData.json",{
    headers:{
        'Content-type':'application/json'
    }
 }).then(result  => result.data.replace(/(\r\n|\n|\r|\t)/gm,'').split('},'))
dataob.map((e, index)=>{
    console.log(e.replace('"{',""))
  })
 console.log(dataob);


}



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
      <Widget>{console.log(data)}</Widget>
    </div>
  );
};

export default Section;


