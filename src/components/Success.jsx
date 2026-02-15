import logo from "/src/assets/iteration-1/logo.svg";
import styled from "styled-components";

const Image = styled.div`
  margin: 0;
  padding-top: 4rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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
          margin: "2rem auto",
        }}
      >
        <p className="fonetik">Lezzetin Yolda</p>
        <h2 style={{ fontSize: "4rem" }}>SİPARİŞ ALINDI</h2>
      </div>
      <span
        style={{
          borderBottom: "1px solid white",
          width: "40%",
          margin: "0 auto",
        }}
      ></span>
      <h3
        style={{
          width: "20%",
          margin: "2rem auto",
          textAlign: "center",
          color: "white",
          fontFamily: "Roboto Condensed",
          fontSize: "1.5rem",
        }}
      >
        <p>{pizzaInfo.pizzaname}</p>
      </h3>
      <div
        style={{
          width: "15%",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",

          margin: "2rem auto",
          textAlign: "center",
          flexDirection: "column",
          textAlign: "start",
        }}
      >
        <p>
          <span style={{ color: "rgb(202, 207, 204)" }}>Boyut:</span>{" "}
          <span style={{ fontWeight: "bold" }}>{pizzaInfo.size}</span>
        </p>
        <p>
          <span style={{ color: "rgb(202, 207, 204)" }}>Hamur: </span>
          <span style={{ fontWeight: "bold" }}>{pizzaInfo.pastryType}</span>
        </p>
        <p>
          <span style={{ color: "rgb(202, 207, 204)" }}>Ek Malzemeler: </span>

          <span style={{ fontWeight: "bold" }}>
            {pizzaInfo.matterial.join(", ")}
          </span>
        </p>
      </div>

      <div
        style={{
          marginTop: "2rem",
          width: "15%",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          border: "1px solid white",
          margin: "0 auto 4rem",
          textAlign: "center",
          flexDirection: "column",
          borderRadius: "1rem",
        }}
      >
        <div
          style={{
            paddingLeft: "2rem",
            paddingBottom: "2rem",
            paddingTop: "2rem",
            display: "flex",

            flexDirection: "column",

            gap: "0.5rem",
            textAlign: "justify",
          }}
        >
          <h3>Sipariş Toplamı </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingRight: "2rem",
            }}
          >
            <p
              style={{
                display: "flex",
                flexDirection: "row",
                color: "white",
              }}
            >
              Seçimler:
            </p>
            <span style={{ fontWeight: "bold" }}>
              {pizzaInfo.addedprice} tl
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingRight: "2rem",
            }}
          >
            <p
              style={{
                display: "flex",
                flexDirection: "row",
                color: "white",
              }}
            >
              Toplam:
            </p>
            <span style={{ fontWeight: "bold" }}>
              {pizzaInfo.totalprice} tl
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
