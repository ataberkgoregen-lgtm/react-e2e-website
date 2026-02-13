import { useState, useEffect } from "react";

import logo from "/src/assets/iteration-1/logo.svg";
import styled from "styled-components";
import Size from "./Size";
import Matterial from "./Matterial";

import Comment from "./Comment";
import Piece from "./Piece";
import Title from "./Title";

const Form = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: auto;
`;

const Image = styled.div`
  height: 20vh;
  background-color: #ce2829;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrap = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;

const initialForm = {
  size: "",
  pastryType: "Hamur Kalınlığı",
  matterial: [],
  comment: "",
  piece: 1,
  price: 85,
  totalprice: 0,
};

export default function Pizzaform(props) {
  const { changePage } = props;
  const [isvalid, setIsValid] = useState(true);
  const [pizzaInfo, setPizzaInfo] = useState(initialForm);

  useEffect(() => {
    const isMaterialValid =
      pizzaInfo.matterial.length > 3 && pizzaInfo.matterial.length <= 10;
    const isSizeSelected = pizzaInfo.size !== "";
    const isPastrySelected = pizzaInfo.pastryType !== "Hamur Kalınlığı";
    if (isMaterialValid && isSizeSelected && isPastrySelected) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [pizzaInfo.matterial]);

  const pricewilladd = pizzaInfo.matterial.length;
  console.log(pricewilladd);
  function changeHandler(event) {
    const { value, name, type, checked } = event.target;

    if (name == "size" && value) {
      setPizzaInfo({ ...pizzaInfo, [name]: value });
    }

    if (name == "pastryType" && value) {
      setPizzaInfo({ ...pizzaInfo, [name]: value });
    }

    if (type == "checkbox" && value) {
      setPizzaInfo((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value] // ekleme
          : prev[name].filter((item) => item !== value), // çıkarma işlemi
      }));
    }

    // fonksiyon içerisinde kullanmak, verinin sıfırlanmasını önler. Kullanım şekli bu. !!
    // fonksiyon olmadan, çıkarma işlemi filtre ile yapılabilir.
    //    if (checked) {
    //   setPizzaInfo({
    //     ...pizzaInfo,
    //     [name]: [...pizzaInfo[name], value]
    //   });
    // } else {
    //   setPizzaInfo({
    //     ...pizzaInfo,
    //     [name]: pizzaInfo[name].filter(item => item !== value)
    //   });

    if (name == "commenttext") {
      setPizzaInfo({ ...pizzaInfo, [name]: value });
    }
  }

  function submitHandler(event) {
    event.preventDefault();
    changePage("success");
  }

  function clickEvent(event) {
    const { name } = event.target;
    let newVal = 0;
    if (name == "reduce" && pizzaInfo.piece > 0) {
      newVal = pizzaInfo.piece - 1;
      setPizzaInfo({ ...pizzaInfo, ["piece"]: newVal });
    } else if (name == "increase") {
      newVal = pizzaInfo.piece + 1;
      setPizzaInfo({ ...pizzaInfo, ["piece"]: newVal });
    }
  }

  console.log(pizzaInfo);
  function clickHandler() {
    changePage("header");
  }

  return (
    <Wrap>
      <Image>
        <div
          style={{
            height: "70%",
            width: "350px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "1rem",
          }}
        >
          <img src={logo} alt="" />
        </div>
        <div
          style={{
            display: "flex",
            textDecoration: "none",
            color: "#5F5F5F",
            height: "30%",
            width: "350px",
            paddingBottom: "1rem",
            paddingLeft: "0",
          }}
        >
          <a
            style={{
              textDecoration: "none",
              color: "#5F5F5F",
              marginTop: "auto",
            }}
            href=""
            onClick={clickHandler}
          >
            Anasayfa-
          </a>

          <a
            style={{
              textDecoration: "none",
              color: "#5F5F5F",
              marginTop: "auto",
            }}
            href=""
            onClick={clickHandler}
          >
            Seçenekler
          </a>
          <a
            style={{
              textDecoration: "none",
              color: "white",
              marginTop: "auto",
            }}
            href=""
            onClick={clickHandler}
          >
            - Sipariş Oluştur
          </a>
        </div>
      </Image>
      <Form name="size" onSubmit={submitHandler}>
        <Title></Title>

        <Size changeHandler={changeHandler} pizzaInfo={pizzaInfo}></Size>

        <Matterial
          changeHandler={changeHandler}
          pizzaInfo={pizzaInfo}
        ></Matterial>

        <Comment changeHandler={changeHandler}></Comment>

        <div
          style={{
            width: "350px",
          }}
        >
          <span
            style={{
              borderBottom: "0.6px solid grey",
              width: "350px",
              display: "block",
              marginTop: "1rem",
            }}
          ></span>
        </div>

        <Piece
          pizzaInfo={pizzaInfo}
          clickEvent={clickEvent}
          pricewilladd={pricewilladd}
          pizzatotalpr={pizzaInfo.price}
          isvalid={isvalid}
        ></Piece>
      </Form>
    </Wrap>
  );
}
