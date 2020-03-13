import React, { useState } from "react";
import "./style.css";

import api from "../../../src/services/api";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Create = () => {
  const [name, setName] = useState();
  const [sector, setSector] = useState();
  const [level, setLevel] = useState();
  const [description, setDescription] = useState();

  const createOs = async () => {
    await api.post("/order", {
      name,
      sector,
      level,
      description
    });
    toast.success("🦄 Ordem de Serviço Criada com Sucesso!!!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true
    });
  };

  return (
    <div className="create">
      <ToastContainer />
      <h1>Criar Ordem de Serviço</h1>
      <form className="create__form">
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <select value={sector} onChange={e => setSector(e.target.value)}>
          <option value="Selecione o seu setor." hidden>
            Selecione o seu setor
          </option>
          <option value="Administrativo">Administrativo</option>
          <option value="Almoxarifado">Almoxarifado</option>
          <option value="Arquivos">Arquivos</option>
          <option value="Atendimento Especial">Atendimento Especial</option>
          <option value="Atesp">Atesp</option>
          <option value="Cadastro">Cadastro</option>
          <option value="Call Center">Call Center</option>
          <option value="Compras">Compras</option>
          <option value="Diretoria">Diretoria</option>
          <option value="Faturamento">Faturamento</option>
          <option value="Financeiro">Financeiro</option>
          <option value="Informática">Informática</option>
          <option value="Instalação CFTV">Instalação CFTV</option>
          <option value="Manunteção CFTV">Manuntenção CFTV</option>
          <option value="Marketing">Marketing</option>
          <option value="Monitoramento">Monitoramento</option>
          <option value="RH Comercial">RH Comercial</option>
          <option value="RH Interno">RH Interno</option>
          <option value="Telefonia">Telefonia</option>
        </select>
        <select value={level} onChange={e => setLevel(e.target.value)}>
          <option value="Selecione o nível de urgência." hidden>
            Selecione o nível de urgência.
          </option>
          <option value="Urgente">Urgente</option>
          <option value="Pouco Urgente">Pouco Urgente</option>
          <option value="Não Urgente">Não Urgente</option>
        </select>
        <textarea
          placeholder="Descrição sobre a OS"
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></textarea>

        <button type="button" onClick={createOs}>
          Criar OS
        </button>
      </form>
    </div>
  );
};

export default Create;
