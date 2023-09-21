import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const locationReducer = (state, action) => {
  switch (action.type) {
    case "get_location":
      return action.payload;
    case "get_locationbyid":
      return action.payload;
    case "edit_location":
      return state.map((location) => {
        return location.id === action.payload.id ? action.payload : location;
      });
    case "delete_location":
      return state.filter((location) => location.id !== action.payload);
    default:
      return state;
  }
};

const getLocations = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/location");

    dispatch({ type: "get_location", payload: response.data.results });
  };
};
const getLocationById = (dispatch) => {
  return async (id) => {
    const response = await jsonServer.get("/location/" + id);

    dispatch({ type: "get_locationbyid", payload: response.data });
  };
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { getLocations, getLocationById },
  []
);
