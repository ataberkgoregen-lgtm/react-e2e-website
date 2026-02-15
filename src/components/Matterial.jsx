export default function Matterial(props) {
  const { pizzaInfo, changeHandler } = props;

  return (
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
          <div className="matDiv">
            <input
              className="malzeme"
              type="checkbox"
              id="pepperoni"
              name="matterial"
              value="pepperoni"
              checked={pizzaInfo.matterial.includes("pepperoni")}
              onChange={changeHandler}
            />

            <label style={{ paddingLeft: "0.6rem" }} htmlFor="pepperoni">
              Pepperoni
            </label>
          </div>
          <div className="matDiv">
            <input
              className="malzeme"
              type="checkbox"
              id="sosis"
              name="matterial"
              value="sosis"
              checked={pizzaInfo.matterial.includes("sosis")}
              onChange={changeHandler}
            />
            <label style={{ paddingLeft: "0.6rem" }} htmlFor="sosis">
              Sosis
            </label>
          </div>
          <div className="matDiv">
            <input
              className="malzeme"
              type="checkbox"
              id="jambon"
              name="matterial"
              value="jambon"
              checked={pizzaInfo.matterial.includes("jambon")}
              onChange={changeHandler}
            />
            <label style={{ paddingLeft: "0.6rem" }} htmlFor="jambon">
              Kanada Jambonu
            </label>
          </div>
          <div className="matDiv">
            <input
              className="malzeme"
              type="checkbox"
              id="tavuk"
              name="matterial"
              value="tavuk"
              checked={pizzaInfo.matterial.includes("tavuk")}
              onChange={changeHandler}
            />
            <label style={{ paddingLeft: "0.6rem" }} htmlFor="tavuk">
              Tavuk Izgara
            </label>
          </div>
          <div className="matDiv">
            <input
              className="malzeme"
              type="checkbox"
              id="soğan"
              name="matterial"
              value="soğan"
              checked={pizzaInfo.matterial.includes("soğan")}
              onChange={changeHandler}
            />
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
          <div className="matDiv">
            <input
              className="malzeme"
              type="checkbox"
              id="domates"
              name="matterial"
              value="domates"
              checked={pizzaInfo.matterial.includes("domates")}
              onChange={changeHandler}
            />
            <label style={{ paddingLeft: "0.6rem" }} htmlFor="domates">
              Domates
            </label>
          </div>
          <div className="matDiv">
            <input
              className="malzeme"
              type="checkbox"
              id="mısır"
              name="matterial"
              value="mısır"
              checked={pizzaInfo.matterial.includes("mısır")}
              onChange={changeHandler}
            />
            <label style={{ paddingLeft: "0.6rem" }} htmlFor="mısır">
              Mısır
            </label>
          </div>
          <div className="matDiv">
            <input
              className="malzeme"
              type="checkbox"
              id="sucuk"
              name="matterial"
              value="sucuk"
              checked={pizzaInfo.matterial.includes("sucuk")}
              onChange={changeHandler}
            />

            <label style={{ paddingLeft: "0.6rem" }} htmlFor="sucuk">
              Sucuk
            </label>
          </div>
          <div className="matDiv">
            <input
              className="malzeme"
              type="checkbox"
              id="jalepeno"
              name="matterial"
              value="jalepeno"
              checked={pizzaInfo.matterial.includes("jalepeno")}
              onChange={changeHandler}
            />
            <label
              style={{ paddingLeft: "0.6rem" }}
              htmlFor="jalepeno"
              value="jalepeno"
            >
              Jalepeno
            </label>
          </div>
          <div className="matDiv">
            <input
              className="malzeme"
              type="checkbox"
              id="sarımsak"
              name="matterial"
              value="sarımsak"
              checked={pizzaInfo.matterial.includes("sarımsak")}
              onChange={changeHandler}
            />
            <label
              style={{ paddingLeft: "0.6rem" }}
              htmlFor="sarımsak"
              value="sarımsak"
            >
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
          <div className="matDiv">
            <input
              className="malzeme"
              type="checkbox"
              id="biber"
              name="matterial"
              value="biber"
              checked={pizzaInfo.matterial.includes("biber")}
              onChange={changeHandler}
            />
            <label style={{ paddingLeft: "0.6rem" }} htmlFor="biber">
              Biber
            </label>
          </div>
          <div className="matDiv">
            <input
              className="malzeme"
              type="checkbox"
              id="pastırma"
              name="matterial"
              value="pastırma"
              checked={pizzaInfo.matterial.includes("pastırma")}
              onChange={changeHandler}
            />
            <label style={{ paddingLeft: "0.6rem" }} htmlFor="pastırma">
              Pastırma
            </label>
          </div>
          <div className="matDiv">
            <input
              className="malzeme"
              type="checkbox"
              id="ananas"
              name="matterial"
              value="ananas"
              checked={pizzaInfo.matterial.includes("ananas")}
              onChange={changeHandler}
            />
            <label style={{ paddingLeft: "0.6rem" }} htmlFor="ananas">
              Ananas
            </label>
          </div>
          <div className="matDiv">
            <input
              className="malzeme"
              type="checkbox"
              id="kabak"
              name="matterial"
              value="kabak"
              checked={pizzaInfo.matterial.includes("kabak")}
              onChange={changeHandler}
            />
            <label style={{ paddingLeft: "0.6rem" }} htmlFor="kabak">
              Kabak
            </label>
          </div>
        </div>
      </div>
      {(pizzaInfo.matterial.length < 4 || pizzaInfo.matterial.length > 10) && (
        <span style={{ color: "red" }}>
          * 4'ten fazla ve 10'az malzeme seçimi yapmalısınız.
        </span>
      )}
    </div>
  );
}
