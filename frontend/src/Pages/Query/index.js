import React, { useState, useEffect } from "react";

import api from "../../services/api";

import "./index.css";

const Query = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await api.get("/order");

    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="query">
      <h1>Consulta de OS</h1>
      <table>
        <tr>
          <th>Nome:</th>
          <th>Setor:</th>
          <th>Prioridade:</th>
          <th>Descrição:</th>
        </tr>
        {data.map(datas => (
          <tr>
            <td>{datas.name}</td>
            <td>{datas.sector}</td>
            <td>{datas.level}</td>
            <td>{datas.description}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Query;
