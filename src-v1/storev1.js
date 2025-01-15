import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import accountReducer from "./features/accounts/AccountSlice";
import customerReducer from "./features/customers/CustomerSlice";

import { thunk } from "redux-thunk";
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
