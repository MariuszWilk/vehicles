import React from "react";
import "./vehicle-list.css";

const VehicleList = ({
  noModels,
  make,
  noVehicles,
  model,
  vehiclesAvailable,
  vehicles,
  selected,
  handleSelect,
  error,
}) => {
  if (error) {
    const errorMsg = make
      ? "Oops! Something went wrong. Please try again."
      : "Oops! Something went wrong. Please refresh the page.";
    return <div className="list-container">{errorMsg}</div>;
  }

  return (
    <div className="list-container">
      {noModels && `No models available for ${make}`}
      {noVehicles && `No vehicles available for ${make} ${model}`}
      {vehiclesAvailable && (
        <div className="vehicles-container">
          {vehicles.map((vehicle, index) => {
            const {
              bodyType,
              fuelType,
              engineCapacity,
              enginePowerPS,
              enginePowerKW,
            } = vehicle;
            const isSelected = index === selected;
            const itemSelectedClass = isSelected ? "item-selected" : "";
            const sectionSelectedClass = isSelected ? "section-selected" : "";

            return (
              <div
                onClick={handleSelect(index)}
                className={`item ${itemSelectedClass}`}
              >
                <div className="left-section">
                  <div className="body-type">{bodyType}</div>
                  <div className="fuel-type">{fuelType}</div>
                </div>
                <div className={`right-section ${sectionSelectedClass}`}>
                  <div className="engine-label">engine</div>
                  <div className="engine-stat">
                    <div className="label">capacity</div> {engineCapacity}
                  </div>
                  <div className="engine-stat">
                    <div className="label">horsepower</div> {enginePowerPS}
                  </div>
                  <div className="engine-stat">
                    <div className="label">kilowatts</div> {enginePowerKW}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default VehicleList;
