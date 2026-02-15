export default function Comment(props) {
  const { changeHandler } = props;

  return (
    <div style={{ paddingTop: "1rem" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        <label htmlFor="comment" style={{ fontWeight: "bold" }}>
          Sipariş Notu
        </label>
        <input
          onChange={changeHandler}
          name="commenttext"
          id="comment"
          type="textarea"
          style={{
            width: "100%",
            border: "0",
            borderRadius: "0.3rem",
            height: "45px",
            backgroundColor: "#FAF7F2",
          }}
          placeholder="   Siparişine eklemek istediğin bir not var mı?"
        />
      </div>
    </div>
  );
}
