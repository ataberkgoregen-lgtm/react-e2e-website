export default function Matterial() {
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
  );
}
