import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { items: [], isLoading: false, isError: false };

const usersSlice = createSlice({
  name: "users",
  initialState: INITIAL_STATE,
  reducers: {
    replaceData(state, action) {
      state.items = state.items.concat(action.payload.items);
      // state.items = action.payload.items;
      state.isLoading = action.payload.isLoading;
      state.isError = action.payload.isError;
    },
    resetData(state, action) {
      state.items = action.payload.items;
    },
  },
});

export const usersActions = usersSlice.actions;
export default usersSlice.reducer;
