import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers/RootReducer";
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(
    rootReducer,
    composeWithDevTools()
);

export default store;