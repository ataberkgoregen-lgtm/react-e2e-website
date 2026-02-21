import { useState } from "react";

export default function Size(props) {
  const { changeHandler, pizzaInfo } = props;

  return (
    <div style={{ paddingTop: "1rem", display: "flex", flexDirection: "row" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h3>
          Boyut Seç <span style={{ color: "red" }}>*</span>
        </h3>
        <div className="size-options">
          <label className="size-option" id="fS" htmlFor="small">
            <input
              type="radio"
              name="size"
              id="small"
              value="S"
              checked={pizzaInfo.size === "S"}
              onChange={changeHandler}
            />
            <span>S</span>
          </label>
          <label className="size-option" id="fM" htmlFor="medium">
            <input
              type="radio"
              name="size"
              id="medium"
              value="M"
              checked={pizzaInfo.size === "M"}
              onChange={changeHandler}
            />
            <span>M</span>
          </label>
          <label className="size-option" id="fL" htmlFor="large">
            <input
              type="radio"
              name="size"
              id="large"
              value="L"
              checked={pizzaInfo.size === "L"}
              onChange={changeHandler}
            />
            <span>L</span>
          </label>
        </div>

        {pizzaInfo.size === "" && (
          <p className="selective" style={{ color: "red" }}>
            Boyut seçmediniz*
          </p>
        )}
      </div>

      <div>
        <h3>
          Hamur Seç <span style={{ color: "red" }}>*</span>
        </h3>
        <select
          className="hamur"
          name="pastryType"
          style={{ marginTop: "1rem" }}
          onChange={changeHandler}
        >
          <option value="Hamur Kalınlığı">---Hamur Kalınlığı Seç---</option>
          <option value="thick">Kalın Hamur</option>
          <option value="thin">İnce Hamur</option>
        </select>
        {pizzaInfo.pastryType === "Hamur Kalınlığı" && (
          <p style={{ color: "red" }}>Hamur tipi seçmediniz*</p>
        )}
      </div>
    </div>
  );
}
