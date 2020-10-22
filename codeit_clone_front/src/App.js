import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import DefaultHomeFooter from "./components/default-home/default-home-footer/DefaultHomeFooter";
import DefaultHomeFeature from "./components/default-home/default-home-feature/DefaultHomeFeature";
// import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <DefaultHomeFeature />
      <DefaultHomeFooter></DefaultHomeFooter>
    </div>
  );
}

export default App;
