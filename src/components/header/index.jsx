import React from "react";
import "./header.css";

const Header = ({
  make,
  makes,
  model,
  models,
  handleMakeChange,
  handleModelChange,
  noModels,
}) => {
  return (
    <div className="header">
      <div className="inputs-wrapper">
        <div>
          <select
            value={make}
            name="makes"
            id="makes-select"
            onChange={handleMakeChange}
          >
            <option value="">Select make</option>
            {makes.map((make) => (
              <option kay={make} value={make}>
                {make}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select
            value={model}
            name="model"
            id="model-select"
            onChange={handleModelChange}
            disabled={noModels || !make}
          >
            <option value="">{noModels || !make ? "-" : "Select model"}</option>
            {models.map((model) => (
              <option kay={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
