import { SET_MAKES, SET_MODELS, SET_VEHICLES, SET_ERROR } from "./constants.js";

export const setMakes = (makes) => ({
  type: SET_MAKES,
  payload: { makes },
});

export const setModels = (models) => ({
  type: SET_MODELS,
  payload: { models },
});

export const setVehicles = (vehicles) => ({
  type: SET_VEHICLES,
  payload: { vehicles },
});

export const setError = () => ({
  type: SET_ERROR,
});
