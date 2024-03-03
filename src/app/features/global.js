import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenCartDrawer: false,
  onOpenCartDrawer: false,
  onCloseCartDrawer: false,
};
const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    onOpenCartDrawerAction: (state) => {
      state.isOpenCartDrawer = true;
      state.onOpenCartDrawer = true;
    },
    onCloseCartDrawerAction: (state) => {
      state.onCloseCartDrawer = false;
      state.isOpenCartDrawer = false;
    },
  },
});

export const { onOpenCartDrawerAction, onCloseCartDrawerAction } =
  globalSlice.actions;

export default globalSlice.reducer;
