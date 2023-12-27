import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const Register = createAsyncThunk(
  "Register",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "http://localhost:8081/api/user/register",
        data
      );
      return res.data;
    } catch (error) {
      rejectWithValue(error.response.data.msg);
    }
  }
);

const UserSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    token: localStorage.getItem("token") || null,
    error: false,
    isAuth: Boolean(localStorage.getItem("isAuth")) || false,
  },
  extraReducers: {
    [Register.pending]: (state) => {
      state.isLoading = true;
    },
    [Register.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.error = null;
      state.isAuth = true;
    },
    [Register.rejected]: (state, action) => {
      state.error = action.payload.error;
      state.isAuth = false;
    },
  },
});

export default UserSlice.reducer;
