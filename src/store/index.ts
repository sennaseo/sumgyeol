import { combineReducers } from "redux";
import cart from "./modules/cart";

const rootReducer = combineReducers({
  cart,
});


export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
