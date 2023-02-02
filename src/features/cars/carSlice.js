import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import carService from "./carService";

const initialState = {
  cars: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// get cars
export const getCars = createAsyncThunk("car/getCars", async (_, thunkAPI) => {
  try {
    // const token = thunkAPI.getState().auth.user.token;
    return await carService.getCars();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    resetCars: (state) => initialState, //won't persist like user
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cars = action.payload;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        // state.reports = null;
      });
  },
});

export const { resetCars } = carSlice.actions;
export default carSlice.reducer;
