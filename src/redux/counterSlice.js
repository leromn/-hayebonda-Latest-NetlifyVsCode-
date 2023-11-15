import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    clothType: "all",
    value: 0,
    bookmarkList: [],
    detailId: "",
    productDetail: { name: "", description: "", price: 0 }
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    changeClothType: (state, action) => {
      state.clothType = action.payload;
      // alert("state changed in store to "+action.payload);
    },
    addToBookmark: (state, action) => {
      // fix it to append to the array
      state.bookmarkList += action.payload;
    },
    setProductDetail: (state, action) => {
      state.productDetail = action.payload;
    },
    setDetailId: (state, action) => {
      state.detailId = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  changeClothType,
  addToBookmark,
  setDetailId,
  setProductDetail
} = counterSlice.actions;

export default counterSlice.reducer;
