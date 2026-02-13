import { useState } from "react";
import reactLogo from "./assets/react.svg";
import workintech from "/workintech.svg";
import "./App.css";
import logo from "./assets/iteration-1/logo.svg";
import homeBanner from "./assets/iteration-1/home-banner.png";
import Header from "./components/Header";
import Pizzaform from "./components/Pizzaform";
import Success from "./components/Success";

function App() {
  const [activepage, setactivePage] = useState("header");

  function changePage(page) {
    setactivePage(page);
  }

  function showePage() {
    switch (activepage) {
      case "header":
        return <Header changePage={changePage}></Header>;
      case "pizzaform":
        return <Pizzaform changePage={changePage}></Pizzaform>;
      case "success":
        return <Success changePage={changePage}></Success>;
    }
  }
  return <>{showePage()}</>;
}

export default App;
