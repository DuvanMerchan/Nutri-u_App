import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    favList: [],
    list: {},
  },
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
    getUserById: (state, action) => {
      state.user = action.payload;
    },
    getAllList: (state, action) => {
      state.favList = action.payload;
    },
    getListById: (state, action) => {
      state.list = action.payload;
    },
    // getUserStatus: (state, action)=>{
    //     state.logged = action.payload
    // },
    // createUser: (state, action)=>{
    //     state.user = [...state.user, action.payload]
    // },
    // deleteUser: (state, action)=>{
    //     state.user = action.payload
    // },
  },
});

export const {
  getUser,
  getUserById,
  getAllList,
  getListById,
  getUserStatus,
  createUser,
  deleteUser,
} = userSlice.actions;

export default userSlice.reducer;
