import { createSlice } from "@reduxjs/toolkit";
import { recetas } from "../components/recetas";

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState:{
        recipes:[],
        detail:{},
    },
    reducers:{
        getAllRecipes: (state, action)=>{
            state.recipes = recetas//action.payload
        },
        getRecipeById: (state, action)=>{
            state.detail = action.payload
        }
    }
})

export const {getAllRecipes, getRecipeById} = recipesSlice.actions

export default recipesSlice.reducer