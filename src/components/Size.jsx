import { useState } from "react";

export default function Size(props) {
  const { changeHandler } = props;

  return (
    <div style={{ paddingTop: "1rem", display: "flex", flexDirection: "row" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h3>
          Boyut Seç <span style={{ color: "red" }}>*</span>
        </h3>
        <label htmlFor="small">
          <input
            type="radio"
            name="size"
            id="small"
            value="small"
            onChange={changeHandler}
          />
          Küçük
        </label>
        <label htmlFor="medium">
          <input
            type="radio"
            name="size"
            id="medium"
            value="medium"
            onChange={changeHandler}
          />
          Orta
        </label>
        <label htmlFor="large">
          <input
            type="radio"
            name="size"
            id="large"
            value="large"
            onChange={changeHandler}
          />
          Büyük
        </label>
      </div>
      <div>
        <h3>
          Hamur Seç <span style={{ color: "red" }}>*</span>
        </h3>
        <select
          name="pastrytype"
          style={{ marginTop: "1rem" }}
          onChange={changeHandler}
        >
          <option value="someOption">Hamur Kalınlığı</option>
          <option value="thick">Kalın Hamur</option>
          <option value="thin">İnce Hamur</option>
        </select>
      </div>
    </div>
  );
}
