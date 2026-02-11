import logo from "/src/assets/iteration-1/logo.svg";
import styled from "styled-components";

const Form = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: auto;
  background-color: grey;
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
  height: 100vh;
  width: 100%;
`;
export default function Pizzaform(props) {
  const { changePage } = props;

  function clickHandler() {
    changePage("header");
  }

  return (
    <Wrap>
      <Image>
        <div
          style={{
            height: "70%",
            width: "30%",
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
            width: "30%",
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
      <Form>
        <div style={{ padding: "1.4rem 0", backgroundColor: "bisque" }}>
          <h3>Position Absolute Acı Pizza </h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "1rem",
          }}
        >
          <h3 style={{ fontSize: "2rem" }}>85.50 ₺</h3>
          <span style={{ display: "flex", gap: "5rem" }}>
            <p>4.9</p>
            <p>(200)</p>
          </span>
        </div>
        <div style={{ paddingTop: "1rem", textAlign: "start" }}>
          <p>
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </div>
        <div
          style={{ paddingTop: "1rem", display: "flex", flexDirection: "row" }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <h3>Boyut Seç</h3>
            <label htmlFor="small">
              <input type="radio" name="size" id="small" />
              Küçük
            </label>
            <label htmlFor="medium">
              <input type="radio" name="size" id="medium" />
              Orta
            </label>
            <label htmlFor="large">
              <input type="radio" name="size" id="large" />
              Büyük
            </label>
          </div>
          <div>
            <h3>Hamur Kalınlığı</h3>
            <select style={{ marginTop: "1rem" }}>
              <option value="someOption">Hamur Kalınlığı</option>
              <option value="otherOption">Kalın Hamur</option>
              <option value="otherOption">İnce Hamur</option>
            </select>
          </div>
        </div>
      </Form>
    </Wrap>
  );
}
