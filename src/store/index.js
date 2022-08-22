import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./users/users";
import messagesSlice from "./messages/messages";

const store = configureStore({
  reducer: {
    users: usersSlice,
    message: messagesSlice,
    // ui: uiSlice,
    // cart: cartSlice
  },
});

export default store;
