import { combineReducers } from "redux";
import taskReucer from "./TaskReducer";
import cartReducer from "./CartReducer";

const rootReducer = combineReducers({
  task: taskReucer,
  cart: cartReducer
});

export default rootReducer;