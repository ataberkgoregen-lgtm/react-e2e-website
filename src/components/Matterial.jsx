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
          <div>
            <input
              type="checkbox"
              id="pepperoni"
              name="matterial"
              value="pepperoni"
              onChange={changeHandler}
            />
            <label style={{ paddingLeft: "0.6rem" }} htmlFor="pepperoni">
              Pepperoni
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="sosis"
              name="matterial"
              value="sosis"
              onChange={changeHandler}
            />
            <label style={{ paddingLeft: "0.6rem" }} htmlFor="sosis">
              Sosis
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="jambon"
              name="matterial"
              value="jambon"
              onChange={changeHandler}
            />
            <label style={{ paddingLeft: "0.6rem" }} htmlFor="jambon">
              Kanada Jambonu
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="tavuk"
              name="matterial"
              value="tavuk"
              onChange={changeHandler}
            />
            <label style={{ paddingLeft: "0.6rem" }} htmlFor="tavuk">
              Tavuk Izgara
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="soğan"
              name="matterial"
              value="soğan"
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
          <div>
            <input
              type="checkbox"
              id="domates"
              name="matterial"
              value="domates"
              onChange={changeHandler}
            />
            <label style={{ paddingLeft: "0.6rem" }} htmlFor="domates">
              Domates
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="mısır"
              name="matterial"
              value="mısır"
              onChange={changeHandler}
            />
            <label style={{ paddingLeft: "0.6rem" }} htmlFor="mısır">
              Mısır
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="sucuk"
              name="matterial"
              value="sucuk"
              onChange={changeHandler}
            />
            <label style={{ paddingLeft: "0.6rem" }} htmlFor="sucuk">
              Sucuk
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="jalepeno"
              name="matterial"
              value="jalepeno"
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
          <div>
            <input
              type="checkbox"
              id="sarımsak"
              name="matterial"
              value="sarımsak"
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
          <div>
            <input
              type="checkbox"
              id="biber"
              name="matterial"
              value="biber"
              onChange={changeHandler}
            />
            <label style={{ paddingLeft: "0.6rem" }} htmlFor="biber">
              Biber
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="pastırma"
              name="matterial"
              value="pastırma"
              onChange={changeHandler}
            />
            <label style={{ paddingLeft: "0.6rem" }} htmlFor="pastırma">
              Pastırma
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="ananas"
              name="matterial"
              value="ananas"
              onChange={changeHandler}
            />
            <label style={{ paddingLeft: "0.6rem" }} htmlFor="ananas">
              Ananas
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="kabak"
              name="matterial"
              value="kabak"
              onChange={changeHandler}
            />
            <label style={{ paddingLeft: "0.6rem" }} htmlFor="kabak">
              Kabak
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
