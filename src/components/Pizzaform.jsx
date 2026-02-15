import { useState, useEffect } from "react";
import axios from "axios";
import logo from "/src/assets/iteration-1/logo.svg";
import styled from "styled-components";
import Size from "./Size";
import Matterial from "./Matterial";
import Picture from "./Picture";
import Comment from "./Comment";
import Piece from "./Piece";
import Title from "./Title";

const Form = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  background-color: white;
`;

const Image = styled.div`
  background-color: #ce2829;
  margin: 0;
  padding: 1rem 0;
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

export default function Pizzaform(props) {
  const { changePage, pizzaInfo, setPizzaInfo } = props;
  const [isvalid, setIsValid] = useState(true);
  const pricewilladd = pizzaInfo.matterial.length;

  useEffect(() => {
    setPizzaInfo((prev) => ({
      ...prev,
      addedprice: pricewilladd * 5,
      totalprice: (prev.price + pricewilladd * 5) * pizzaInfo.piece,
    }));

    const isMaterialValid =
      pizzaInfo.matterial.length > 3 && pizzaInfo.matterial.length <= 10;
    const isSizeSelected = pizzaInfo.size !== "";
    const isPastrySelected = pizzaInfo.pastryType !== "Hamur Kalınlığı";
    if (isMaterialValid && isSizeSelected && isPastrySelected) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [pizzaInfo.matterial, pizzaInfo.piece]);

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
    const { value, name } = event.target;
    event.preventDefault();
    axios
      .get("https://reqres.in/api/users?page=2", {
        headers: {
          "x-api-key": import.meta.env.VITE_REQRES_API_KEY,
        },
      })
      .then((response) => {
        console.log(response.data);
        changePage("success");
      })
      .catch((error) => {
        console.error(error.response?.data || error.message);
      });
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
            width: "40%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src={logo} alt="" />
        </div>
      </Image>

      <Form name="size" onSubmit={submitHandler}>
        <div style={{ backgroundColor: "#FAF7F2", margin: "auto" }}>
          <Picture></Picture>

          <div
            style={{
              display: "flex",
              textDecoration: "none",
              color: "#5F5F5F",
              height: "20%",
              width: "40%",
              paddingBottom: "1rem",
              paddingLeft: "0",
              paddingTop: "1rem",
              margin: "auto",
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
                color: "red",
                marginTop: "auto",
                whiteSpace: "nowrap",
              }}
              href=""
              onClick={clickHandler}
            >
              - Sipariş Oluştur
            </a>
          </div>

          <Title></Title>
        </div>

        <div style={{ backgroundColor: "white", width: "40%", margin: "auto" }}>
          <Size changeHandler={changeHandler} pizzaInfo={pizzaInfo}></Size>

          <Matterial
            changeHandler={changeHandler}
            pizzaInfo={pizzaInfo}
          ></Matterial>

          <Comment changeHandler={changeHandler}></Comment>

          <div
            style={{
              width: "100%",
            }}
          >
            <span
              style={{
                borderBottom: "0.6px solid grey",
                width: "100%",
                display: "block",
                marginTop: "1rem",
              }}
            ></span>
          </div>

          <Piece
            pizzaInfo={pizzaInfo}
            clickEvent={clickEvent}
            priceadded={pizzaInfo.addedprice}
            pizzatotalpr={pizzaInfo.totalprice}
            isvalid={isvalid}
          ></Piece>
        </div>
      </Form>
      <footer>
        <div className="foot">
          <div className="iletisim">
            <ul className="iletisim-bilgileri">
              <img
                src="/images/iteration-2-images/footer/logo-footer.svg"
                alt=""
              />
              <li>
                <img
                  src="/images/iteration-2-images/footer/icons/icon-1.png"
                  alt=""
                />
                341 Londonderry Road, <br />
                Istanbul Türkiye
              </li>
              <li>
                <img
                  src="/images/iteration-2-images/footer/icons/icon-2.png"
                  alt=""
                />
                aciktim@teknolojikyemekler.com
              </li>
              <li>
                <img
                  src="/images/iteration-2-images/footer/icons/icon-3.png"
                  alt=""
                />
                +90 216 123 45 67
              </li>
            </ul>
          </div>
          <div className="sonunda">
            <div className="menu">
              <h3>Hot Menu</h3>
              <ul>
                <li>Terminal Pizza</li>
                <li>5 kişilik Hackathlon Pizza</li>
                <li>useEffect Tavuklu Pizza</li>
                <li>Beyaz Console Frosty</li>
                <li>Testler Geçti Mutlu Burger</li>
                <li>Position Absolute Acı Burger</li>
              </ul>
            </div>
            <div className="instagram">
              <h3>Instagram</h3>
              <div className="img-par">
                <img
                  src="/images/iteration-2-images/footer/insta/li-0.png"
                  alt=""
                />
                <img
                  src="/images/iteration-2-images/footer/insta/li-1.png"
                  alt=""
                />

                <img
                  src="/images/iteration-2-images/footer/insta/li-2.png"
                  alt=""
                />

                <img
                  src="/images/iteration-2-images/footer/insta/li-3.png"
                  alt=""
                />

                <img
                  src="/images/iteration-2-images/footer/insta/li-4.png"
                  alt=""
                />

                <img
                  src="/images/iteration-2-images/footer/insta/li-5.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div>
            <p>© 2023 Teknolojik Yemekler.</p>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
      </footer>
    </Wrap>
  );
}
