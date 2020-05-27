import React, { useEffect } from "react";
import { connect } from "react-redux";

import { capitalize } from "./helpers";

import {
  getMakes as getMakesThunk,
  getModels as getModelsThunk,
  getVehicles as getVehiclesThunk,
} from "./thunks";

import Header from "./components/header";
import VehicleList from "./components/vehicle-list";

const App = (props) => {
  const {
    makes,
    models,
    vehicles,
    getMakes,
    getModels,
    getVehicles,
    error,
  } = props;

  const [make, setMake] = React.useState("");
  const [model, setModel] = React.useState("");
  const [selected, setSelected] = React.useState("");

  useEffect(() => {
    getMakes();
  }, [getMakes]);

  const handleMakeChange = (event) => {
    const value = event.target.value;

    setMake(value);
    getModels(capitalize(value));
    setModel("");
    setSelected("");
  };

  const handleModelChange = (event) => {
    const value = event.target.value;

    setModel(value);
    getVehicles(capitalize(make), capitalize(value));
    setSelected("");
  };

  const handleSelect = (index) => (event) => {
    setSelected(index);
  };

  const noModels = make && !models.length;
  const noVehicles = make && model && !vehicles.length;
  const vehiclesAvailable = make && model && !!vehicles.length;

  return (
    <div className="App">
      <Header
        make={make}
        makes={makes}
        model={model}
        models={models}
        handleMakeChange={handleMakeChange}
        handleModelChange={handleModelChange}
        noModels={noModels}
      />
      <VehicleList
        noModels={noModels}
        make={make}
        noVehicles={noVehicles}
        model={model}
        vehiclesAvailable={vehiclesAvailable}
        vehicles={vehicles}
        selected={selected}
        handleSelect={handleSelect}
        error={error}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    makes: state.vehicles.makes,
    models: state.vehicles.models,
    vehicles: state.vehicles.vehicles,
    error: state.vehicles.error,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getMakes: () => dispatch(getMakesThunk()),
  getModels: (make) => dispatch(getModelsThunk(make)),
  getVehicles: (make, model) => dispatch(getVehiclesThunk(make, model)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
