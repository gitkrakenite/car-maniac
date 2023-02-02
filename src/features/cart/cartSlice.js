import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// add to cart
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (cartDetails, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token;
      return await cartDetails;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCart: (state) => initialState, //won't persist like user
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cart.push(action.payload);
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        // state.reports = null;
      });
  },
});

export const { resetCart } = cartSlice.actions;
export default cartSlice.reducer;
