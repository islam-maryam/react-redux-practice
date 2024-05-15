import { combineReducers } from "redux";
import taskReucer from "./TaskReducer";
 const rootReducer = combineReducers({
  task: taskReucer,
});

export default rootReducer;