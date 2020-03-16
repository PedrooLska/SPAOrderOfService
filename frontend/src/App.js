import React from "react";
import "./App.css";

import Header from "../src/layout/header/index";
import Routes from "../src/routes";
import Footer from "../src/layout/footer/index";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
