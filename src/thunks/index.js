import { setMakes, setModels, setVehicles, setError } from "../actions";

export const getMakes = () => {
  return function (dispatch) {
    return fetch(`/api/makes`)
      .then((response) => response.json())
      .then((data) => dispatch(setMakes(data)))
      .catch((error) => dispatch(setError()));
  };
};

export const getModels = (make) => {
  if (!make) return setModels([]);

  return function (dispatch) {
    return fetch(`/api/models?make=${make}`)
      .then((response) => response.json())
      .then((data) => dispatch(setModels(data)))
      .catch((error) => dispatch(setError()));
  };
};

export const getVehicles = (make, model) => {
  if (!make || !model) return setVehicles([]);

  return function (dispatch) {
    return fetch(`/api/vehicles?make=${make}&model=${model}`)
      .then((response) => response.json())
      .then((data) => dispatch(setVehicles(data)))
      .catch((error) => dispatch(setError()));
  };
};
