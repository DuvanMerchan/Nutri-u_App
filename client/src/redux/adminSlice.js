import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "admin",
  initialState:{
    usersList: [],
    detailUsers: {},
    recipesList: [],
    detailRecipes: {},
  },

  reducers: {
    getAllRecipes: (state, action) => {
      state.recipesList = action.payload;
    },
    getAllUsers: (state, action) => {
      state.usersList = action.payload;
    },
    getRecipeById: (state, action) => {
      state.detailRecipes = action.payload;
    },
    getUserById: (state, action) => {
      state.detailUsers = action.payload;
    },
    banUser: (state, action) => {
      state.detailUsers = action.payload;
    },
    banRecipe: (state, action) => {
      state.detailRecipes = action.payload;
    },
    postAdmin: (state, action) => {
      state.detailUsers = action.payload;
    },
    updateUser: (state, action) => {
      state.detailUsers = action.payload;
    },
  },
});

export const {
  getAllRecipes,
  getAllUsers,
  getRecipeById,
  getUserById,
  banUser,
  banRecipe,
  postAdmin,
  updateUser,
} = adminSlice.actions;

export default adminSlice.reducer;
