import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart } from "../../../utils/functions";

const initialState = {
  cartItem: JSON.parse(localStorage.getItem("cartIems")) || [],
  favItem: JSON.parse(localStorage.getItem("favIems")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actionPayload) => {
      state.cartItem = addItemToCart(state.cartItem, actionPayload.payload);
      localStorage.setItem("cartIems", JSON.stringify(state.cartItem));
    },
    addFav: (state, actionPayload) => {
      const newItem = actionPayload.payload;
      // تحقق مما إذا كان العنصر موجودًا في favItem
      const itemIndex = state.favItem.findIndex(
        (item) => item.id === newItem.id
      );
      if (itemIndex !== -1) {
        // إذا كان العنصر موجودًا، قم بحذفه
        state.favItem = state.favItem.filter((item) => item.id !== newItem.id);
      } else {
        // إذا لم يكن العنصر موجودًا، قم بإضافته
        state.favItem = [...state.favItem, newItem];
      }
      localStorage.setItem("favIems", JSON.stringify(state.favItem));

    },
    // removeItemFav: (state, actionPayload) => {
    //   state.favItem = removeItemFromFav(state.favItem, actionPayload.payload);
    //   localStorage.setItem("favIems", JSON.stringify(state.favItem));
    // },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, addFav } = cartSlice.actions;

export default cartSlice.reducer;
