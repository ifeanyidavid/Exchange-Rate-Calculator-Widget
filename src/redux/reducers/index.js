import { combineReducers } from "redux";
import ratesReducer from "./ratesReducer";
import pocketsReducer from "./pocketReducer";

const rootReducer = combineReducers({
  ratesReducer,
  pocketsReducer
});

export default rootReducer;
