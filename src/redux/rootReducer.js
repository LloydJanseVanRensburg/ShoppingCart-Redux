import { combineReducers } from "redux";

import shoppingReducer from "./Shopping/shopping-reducer";

const rootReducer = combineReducers({
  shop: shoppingReducer,
});

export default rootReducer;
