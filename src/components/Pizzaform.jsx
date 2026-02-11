import logo from "/src/assets/iteration-1/logo.svg";
import styled from "styled-components";

const Form = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 30%;
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
        <div style={{ padding: "1.4rem 0" }}>
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
            <h3>
              Boyut Seç <span style={{ color: "red" }}>*</span>
            </h3>
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
            <h3>
              Hamur Seç <span style={{ color: "red" }}>*</span>
            </h3>
            <select style={{ marginTop: "1rem" }}>
              <option value="someOption">Hamur Kalınlığı</option>
              <option value="otherOption">Kalın Hamur</option>
              <option value="otherOption">İnce Hamur</option>
            </select>
          </div>
        </div>
        <div style={{ paddingTop: "1rem" }}>
          <div>
            <h3>Ek Malzemeler</h3>
            <p style={{ paddingTop: "0.5rem" }}>
              En Fazla 10 malzeme seçebilirsiniz. 5₺
            </p>
          </div>
          <div
            style={{
              paddingTop: "0.6rem",
              display: "flex",
              flexDirection: "row",
              gap: "0.5rem",
              width: "100%",
            }}
          >
            <div
              style={{
                paddingTop: "0.6rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <div>
                <input type="checkbox" id="pepperoni" name="matterial" />
                <label style={{ paddingLeft: "0.6rem" }} htmlFor="pepperoni">
                  Pepperoni
                </label>
              </div>
              <div>
                <input type="checkbox" id="sosis" name="matterial" />
                <label style={{ paddingLeft: "0.6rem" }} htmlFor="sosis">
                  Sosis
                </label>
              </div>
              <div>
                <input type="checkbox" id="jambon" name="matterial" />
                <label style={{ paddingLeft: "0.6rem" }} htmlFor="jambon">
                  Kanada Jambonu
                </label>
              </div>
              <div>
                <input type="checkbox" id="tavuk" name="matterial" />
                <label style={{ paddingLeft: "0.6rem" }} htmlFor="tavuk">
                  Tavuk Izgara
                </label>
              </div>
              <div>
                <input type="checkbox" id="soğan" name="matterial" />
                <label style={{ paddingLeft: "0.6rem" }} htmlFor="soğan">
                  Soğan
                </label>
              </div>
            </div>
            <div
              style={{
                paddingTop: "0.6rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <div>
                <input type="checkbox" id="domates" name="matterial" />
                <label style={{ paddingLeft: "0.6rem" }} htmlFor="domates">
                  Domates
                </label>
              </div>
              <div>
                <input type="checkbox" id="mısır" name="matterial" />
                <label style={{ paddingLeft: "0.6rem" }} htmlFor="mısır">
                  Mısır
                </label>
              </div>
              <div>
                <input type="checkbox" id="sucuk" name="matterial" />
                <label style={{ paddingLeft: "0.6rem" }} htmlFor="sucuk">
                  Sucuk
                </label>
              </div>
              <div>
                <input type="checkbox" id="jalepeno" name="matterial" />
                <label style={{ paddingLeft: "0.6rem" }} htmlFor="jalepeno">
                  Jalepeno
                </label>
              </div>
              <div>
                <input type="checkbox" id="sarımsak" name="matterial" />
                <label style={{ paddingLeft: "0.6rem" }} htmlFor="sarımsak">
                  Sarımsak
                </label>
              </div>
            </div>
            <div
              style={{
                paddingTop: "0.6rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <div>
                <input type="checkbox" id="biber" name="matterial" />
                <label style={{ paddingLeft: "0.6rem" }} htmlFor="biber">
                  Biber
                </label>
              </div>
              <div>
                <input type="checkbox" id="pastırma" name="matterial" />
                <label style={{ paddingLeft: "0.6rem" }} htmlFor="pastırma">
                  Pastırma
                </label>
              </div>
              <div>
                <input type="checkbox" id="ananas" name="matterial" />
                <label style={{ paddingLeft: "0.6rem" }} htmlFor="ananas">
                  Ananas
                </label>
              </div>
              <div>
                <input type="checkbox" id="kabak" name="matterial" />
                <label style={{ paddingLeft: "0.6rem" }} htmlFor="kabak">
                  Kabak
                </label>
              </div>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: "1rem" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}
          >
            <label htmlFor="comment" style={{ fontWeight: "bold" }}>
              Sipariş Notu
            </label>
            <input
              id="comment"
              type="textarea"
              style={{
                width: "100%",
                border: "1px solid grey",
                borderRadius: "0.3rem",
                height: "45px",
              }}
              placeholder="   Siparişine eklemek istediğin bir not var mı?"
            />
          </div>
        </div>

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
        <div
          style={{
            paddingTop: "1.5rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            paddingBottom: "100px",
          }}
        >
          <div>
            <button style={{ backgroundColor: "#FDC913" }}>-</button>
            <span
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid grey",
                borderRadius: "4px",
              }}
            >
              1
            </span>
            <button style={{ backgroundColor: "#FDC913" }}>+</button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.3rem",
              border: "1px solid grey",
              borderRadius: "0.5rem",
            }}
          >
            <div style={{ padding: "20px" }}>
              <h3>Sipariş Toplamı </h3>
              <p
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                Seçimler <span>15 tl</span>
              </p>
              <p
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                Toplam <span>20 tl</span>
              </p>
            </div>

            <div>
              <button style={{ backgroundColor: "#FDC913", width: "100%" }}>
                Sipariş Ver
              </button>
            </div>
          </div>
        </div>
      </Form>
    </Wrap>
  );
}
