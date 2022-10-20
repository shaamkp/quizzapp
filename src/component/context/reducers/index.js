import { combineReducers } from "redux";
import pointReducer from "./points";
import quistionReducer from "./quistion";

const allReducers = combineReducers({
    quistion: quistionReducer,
    point: pointReducer,
});
export default allReducers;
