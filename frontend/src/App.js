import React from "react";
import "./App.css";

import Header from "../src/components/header/index";
import Main from "../src/components/main/index";
import Footer from "../src/components/footer/index";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
