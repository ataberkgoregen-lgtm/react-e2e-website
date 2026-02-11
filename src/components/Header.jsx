import { useState } from "react";

import Pizzaform from "./Pizzaform";

import "/src/App.css";
import logo from "/src/assets/iteration-1/logo.svg";

export default function Header(props) {
  const { changePage } = props;

  function clickHandler(event) {
    const { name, value } = event.target;
    changePage("pizzaform");
  }

  return (
    <body>
      <header>
        <div className="elements">
          <img src={logo} alt="" />

          <div className="letter">
            <p className="fonetik">fırsatı kaçırma</p>
            <h2>KOD ACIKTIRIR</h2>
            <h2>PIZZA, DOYURUR</h2>
          </div>
          <button className="btn-header bg-red-500" onClick={clickHandler}>
            ACIKTIM
          </button>
        </div>
      </header>
    </body>
  );
}
