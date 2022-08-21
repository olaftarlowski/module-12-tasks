import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./users/users";

const store = configureStore({
  reducer: {
    users: usersSlice,
    // ui: uiSlice,
    // cart: cartSlice
  },
});

export default store;
