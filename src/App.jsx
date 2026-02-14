import { useState } from "react";
import reactLogo from "./assets/react.svg";
import workintech from "/workintech.svg";

import logo from "./assets/iteration-1/logo.svg";
import homeBanner from "./assets/iteration-1/home-banner.png";
import Header from "./components/Header";
import Pizzaform from "./components/Pizzaform";
import Success from "./components/Success";

const initialForm = {
  pizzaname: "Poisiton Absolute Acı Pizza",
  size: "",
  pastryType: "Hamur Kalınlığı",
  matterial: [],
  comment: "",
  piece: 1,
  price: 85,
  totalprice: 0,
  addedprice: 0,
};
function App() {
  const [activepage, setactivePage] = useState("header");
  const [pizzaInfo, setPizzaInfo] = useState(initialForm);

  function changePage(page) {
    setactivePage(page);
  }

  function showePage() {
    switch (activepage) {
      case "header":
        return <Header changePage={changePage}></Header>;
      case "pizzaform":
        return (
          <Pizzaform
            changePage={changePage}
            pizzaInfo={pizzaInfo}
            setPizzaInfo={setPizzaInfo}
          ></Pizzaform>
        );
      case "success":
        return (
          <Success
            changePage={changePage}
            pizzaInfo={pizzaInfo}
            setPizzaInfo={setPizzaInfo}
          ></Success>
        );
    }
  }
  return <>{showePage()}</>;
}

export default App;
