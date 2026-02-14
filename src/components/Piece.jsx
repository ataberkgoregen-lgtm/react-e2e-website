export default function Piece(props) {
  const { pizzaInfo, clickEvent, priceadded, pizzatotalpr, isvalid } = props;
  return (
    <div
      style={{
        paddingTop: "1.5rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        paddingBottom: "50px",
      }}
    >
      <div>
        <button
          name="reduce"
          style={{ backgroundColor: "#FDC913" }}
          onClick={clickEvent}
          type="button"
        >
          -
        </button>
        <span
          style={{
            padding: "0.5rem 1rem",
            border: "1px solid grey",
            borderRadius: "4px",
          }}
        >
          {pizzaInfo.piece}
        </span>
        <button
          name="increase"
          style={{ backgroundColor: "#FDC913" }}
          onClick={clickEvent}
          type="button"
        >
          +
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.3rem",
          border: "1px solid grey",
          borderRadius: "0.6rem",
        }}
      >
        <div style={{ padding: "20px" }}>
          <h3>Sipariş Toplamı </h3>
          <p
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              color: "grey",
            }}
          >
            Seçimler <span>{pizzaInfo.addedprice} tl</span>
          </p>
          <p
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              color: "red",
            }}
          >
            Toplam <span>{pizzaInfo.totalprice} tl</span>
          </p>
        </div>

        <div>
          <button
            type="submit"
            style={{ backgroundColor: "#FDC913", width: "100%" }}
            disabled={isvalid}
          >
            Sipariş Ver
          </button>
        </div>
      </div>
    </div>
  );
}
