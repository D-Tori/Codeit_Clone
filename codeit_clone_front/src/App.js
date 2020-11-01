import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import DefaultHomeFooter from "./components/default-home/default-home-footer/DefaultHomeFooter";
import DefaultHomeFeatureTwo from "./components/default-home/default-home-feature-two/DefaultHomeFeatureTwo";
import DefaultHomeFeatureOne from "./components/default-home/default-home-feature-one/DefaultHomeFeatureOne";
// import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <DefaultHomeFeatureOne />
      <DefaultHomeFeatureTwo />
      <DefaultHomeFooter></DefaultHomeFooter>
    </div>
  );
}

export default App;
