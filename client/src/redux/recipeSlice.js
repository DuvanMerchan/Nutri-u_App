import { createSlice } from "@reduxjs/toolkit";
//import { recetas } from "../components/recetas";


export const recipesSlice = createSlice({
    name: 'recipes',
    initialState:{
        recipes:[],
        allrecipes:[],
        detail:{},
        recipeshall:[],
    },
    
    reducers:{
        getAllRecipes: (state, action)=>{
            state.recipes = action.payload
            state.allrecipes = action.payload
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
            
            action.payload === "MENOR"? state.recipes.sort((a, b)=>{
                
                if (a.healthScore < b.healthScore) {
                    return 1;
                }
                if(a.healthScore > b.healthScore) {
                    return -1;
                }

            }) :
                state.recipes.sort((a, b) => {

                    if (a.healthScore < b.healthScore) {
                        return -1;
                    }
                    if (a.healthScore > b.healthScore) {
                        return 1;
                    }
                    return 0;
                })
            
        },

    }
})

export const {getAllRecipes, getRecipeById, getRecipesByName, createRecipe, deleteRecipe, orderByRating} = recipesSlice.actions

export default recipesSlice.reducer