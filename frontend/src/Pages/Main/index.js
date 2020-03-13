import React from "react";

import "./index.css";

const Main = () => {
  return (
    <main className="main">
      <div className="main__text">
        <h1>CS System</h1>
        <h3>Sobre:</h3>
        <p>
          Na minha antiga empresa na qual eu trabalhei como Auxiliar de TI
          tínhamos um sistema interno chamado CS no que possibilitávamos criar
          Ordem de Serviço e visualiza-las por esse sistema, só que para efetuar
          a instalação do sistema em cada computador demorava em torno de 10 a
          15 minutos ou até mais do que isto, então tive a ideia de desenvolver
          o mesmo sistema só que em versão Web para otimizar o tempo de
          instalação do mesmo e até mesmo do processo de formatação das
          máquinas. Estarei procurando aperfeiçoar ele tanto visualmente e em
          questão de novas funcionalidades.
        </p>
      </div>
    </main>
  );
};

export default Main;
