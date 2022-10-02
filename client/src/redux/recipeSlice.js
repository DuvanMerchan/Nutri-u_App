import { createSlice } from "@reduxjs/toolkit";
//import { recetas } from "../components/recetas";

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState:{
        recipes:[],
        detail:{},
    },
    reducers:{
        getAllRecipes: (state, action)=>{
            state.recipes = action.payload
        },
        getRecipeById: (state, action)=>{
            state.detail = action.payload
        },
        getRecipesByName: (state, action)=>{
            state.recipes = action.payload
        },
        createRecipe: (state, action)=>{
            state.recipes = [...state.recipes, action.payload]
        },
        deleteRecipe: (state, action)=>{
            state.recipes = action.payload
        },
        orderByRating: (state, action)=>{
            state.recipes = state.recipes.sort((a,b)=> b.rating - a.rating)
        }
    }
})

export const {getAllRecipes, getRecipeById, getRecipesByName, createRecipe, deleteRecipe, orderByRating} = recipesSlice.actions

export default recipesSlice.reducer