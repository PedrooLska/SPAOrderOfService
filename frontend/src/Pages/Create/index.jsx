import React, { useEffect, useState } from "react";
import "./style.css";

import api from "../../services/api";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Create = () => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [level, setLevel] = useState("");
  const [description, setDescription] = useState("");

  const [listDepartments, setListDepartaments] = useState([]);
  const [listPriority, setListPriority] = useState([]);

  useEffect(() => {
    getDepartaments();
    getPriority();
  }, []);

  const getDepartaments = () => {
    api.get("/departments").then(({ data }) => setListDepartaments(data));
  };

  const getPriority = () => {
    api.get("/priority").then(({ data }) => setListPriority(data));
  };

  const createOs = async () => {
    if (!name || !department || !level || !description) {
      toast.warn("Preencha todos os campos", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
      });
    } else {
      await api.post("/order", {
        name,
        department,
        level,
        description,
      });
      toast.success("🦄 Ordem de Serviço Criada com Sucesso!!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
    }
  };

  return (
    <div className="create">
      <ToastContainer />
      <h1>Criar Ordem de Serviço</h1>
      <form className="create__form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option hidden>Selecione o seu setor</option>

          {listDepartments.map((department) => {
            return (
              <option value={department.name} key={department.id}>
                {department.name}
              </option>
            );
          })}
        </select>

        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option hidden>Selecione o nível de prioridade</option>

          {listPriority.map((priority) => {
            return (
              <option value={priority} key={priority}>
                {priority}
              </option>
            );
          })}
        </select>

        <textarea
          placeholder="Descrição sobre a OS"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button type="button" onClick={createOs}>
          Criar OS
        </button>
      </form>
    </div>
  );
};

export default Create;
