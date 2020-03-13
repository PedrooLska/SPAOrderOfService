import React from "react";
import "./App.css";

import { ToastContainer } from "react-toastify";

import Header from "../src/components/header/index";
import Routes from "../src/routes";
import Footer from "../src/components/footer/index";

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
