import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "./features/customer/customerSlice";
import accountSlice from "./features/account/accountSlice";

const store = configureStore({
  reducer: {
    customer: customerSlice,
    account: accountSlice,
  },
});

export default store;
