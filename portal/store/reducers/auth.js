import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../../api";
const initialState = {
  user: null,
  isAuthenticated: false,
  error: "",
  usersList: []
};

export const signup = createAsyncThunk("signup", async (query) => {
  console.log(query)
  return auth.signup(query);
});

export const login = createAsyncThunk("login", async (query) => {
  return auth.login(query);
});

export const getUsers = createAsyncThunk("getUsers", async () => {
  return auth.getUsers();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      auth.logout();
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.fulfilled, (state, action) => {
        if (action.payload.user) {
          state.usersList = [...state.usersList, action.payload.user];
        }
        if (action.payload.message) {
          state.error = action.payload.message;
        }
      })
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload.user) {
          state.user = action.payload.user;
          state.isAuthenticated = true;
        }
        if (action.payload.message) {
          state.error = action.payload.message;
        }
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        if (action.payload.users) {
          state.usersList = action.payload.users;
        }
        if (action.payload.message) {
          state.error = action.payload.message;
        }
      });
  },
});

export const { logOut } = authSlice.actions;

export const state = (state) => state.auth;

export default authSlice.reducer;
