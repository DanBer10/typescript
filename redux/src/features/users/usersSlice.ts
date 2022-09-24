import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "BRo1" },
  { id: "1", name: "BRo2" },
  { id: "3", name: "BRo3" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state: any) => state.users;

export default userSlice.reducer;
