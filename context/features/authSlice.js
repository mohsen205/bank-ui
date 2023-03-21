import { createSlice } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";

const initialState = {
  id: "",
  isLogged: false,
  passcode: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.id = faker.datatype.uuid();
      state.isLogged = true;
      state.passcode = action.payload;
    },
    logout: (state) => {
      state.isLogged = false;
      state.id = "";
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
