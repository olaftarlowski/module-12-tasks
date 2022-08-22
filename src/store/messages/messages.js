import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
  name: "message",
  initialState: { message: "success", type: "success", isActive: false },
  reducers: {
    addMessage(state, action) {
      state.message = action.payload.message;
      state.type = action.payload.type;
      state.isActive = action.payload.isActive;
    },
  },
});

export const messageActions = messagesSlice.actions;
export default messagesSlice.reducer;
