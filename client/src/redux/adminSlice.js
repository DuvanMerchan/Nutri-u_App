import { createSlice } from "@reduxjs/toolkit";



export const adminSlice = createSlice({
    name: 'admin',
    initialState:{
        users:[],
        detailUsers:{},
        recipes:[],
        detailRecipes:{},
    },

    reducers:{
        getAllRecipes: (state, action)=>{
            state.recipes = action.payload
        },
        getAllUsers: (state, action)=>{
            state.users = action.payload
        },
        getRecipeById: (state, action)=>{
            state.detailRecipes = action.payload
        },
        getUserById: (state, action)=>{
            state.detailUsers = action.payload
        },
        banUser: (state, action)=>{
            state.detailUsers = action.payload
        },
        banRecipe: (state, action)=>{
            state.detailRecipes = action.payload
        },
        postAdmin: (state, action)=>{
            state.detailUsers = action.payload
        },
        updateUser: (state, action)=>{
            state.detailUsers = action.payload
        },
    }
}) 



export const {getAllRecipes, getAllUsers, getRecipeById, getUserById, banUser, banRecipe, postAdmin, updateUser} = adminSlice.actions

export default adminSlice.reducer