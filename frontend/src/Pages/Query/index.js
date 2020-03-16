import React, { useState, useEffect } from "react";

import api from "../../services/api";

import "./index.css";

const Query = () => {
  const [data, setData] = useState([]);
  const [isLoading] = useState(false);

  const fetchData = async () => {
    const response = await api.get("/order");

    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="query">
      <h1>Consulta de OS</h1>
      <table>
        <tbody>
          <tr>
            <th>Nome:</th>
            <th>Setor:</th>
            <th>Prioridade:</th>
            <th>Descrição:</th>
          </tr>

          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              {data.map(datas => (
                <tr key={datas.id}>
                  <td>{datas.name}</td>
                  <td>{datas.sector}</td>
                  <td>{datas.level}</td>
                  <td>{datas.description}</td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Query;
