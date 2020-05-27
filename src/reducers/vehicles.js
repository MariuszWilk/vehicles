import {
  SET_MAKES,
  SET_MODELS,
  SET_VEHICLES,
  SET_ERROR,
} from "../actions/constants";

const initState = {
  makes: [],
  models: [],
  vehicles: [],
  error: false,
};

const vehiclesReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_MAKES:
      return { ...initState, makes: action.payload.makes };
    case SET_MODELS:
      return {
        ...state,
        vehicles: initState.models,
        models: action.payload.models,
        error: false,
      };
    case SET_VEHICLES:
      return { ...state, vehicles: action.payload.vehicles, error: false };
    case SET_ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
};

export default vehiclesReducer;
