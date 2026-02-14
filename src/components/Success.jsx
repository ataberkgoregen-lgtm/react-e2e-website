import logo from "/src/assets/iteration-1/logo.svg";
import styled from "styled-components";

const Image = styled.div`
  margin: 0;
  padding-top: 6rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  height: 100vh;
  background-color: #ce2829;
  display: flex;
  flex-direction: column;
`;

export default function Success(props) {
  const { pizzaInfo, setPizzaInfo } = props;
  const name = pizzaInfo.pizzaname;
  return (
    <Wrapper>
      <Image>
        <div
          style={{
            height: "70%",
            width: "350px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src={logo} alt="" />
        </div>
      </Image>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
          width: "50%",
          margin: "3rem auto",
        }}
      >
        <p>Lezzetin Yolda</p>
        <h1>SİPARİŞ ALINDI</h1>
      </div>
      <span
        style={{
          borderBottom: "1px solid white",
          width: "50%",
          margin: "0 auto",
        }}
      ></span>
      <div
        style={{
          width: "50%",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          border: "1px solid black",
          margin: "0 auto",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <p>{pizzaInfo.pizzaname}</p>

        <p>Boyut: {pizzaInfo.size}</p>
        <p>Hamur: {pizzaInfo.pastryType}</p>
        <p>Ek Malzemeler: {pizzaInfo.matterial.join(", ")}</p>
      </div>

      <div
        style={{
          marginTop: "3rem",
          width: "25%",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          border: "1px solid black",
          margin: "0 auto",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.6rem",
          }}
        >
          <h3>Sipariş Toplamı </h3>
          <p
            style={{
              display: "flex",
              flexDirection: "row",
              color: "white",
            }}
          >
            Seçimler: {pizzaInfo.addedprice} tl
          </p>
          <p
            style={{
              display: "flex",
              flexDirection: "row",
              color: "white",
            }}
          >
            Toplam {pizzaInfo.totalprice} tl
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
