import { createSlice } from "@reduxjs/toolkit";



export const ingredientSlice = createSlice({
    name: 'ingredients',
    initialState: {
        ingredients: [],
        detail: {},
        ingredient: '',
    },
    reducers:{
        getAllIngredients: (state, action)=>{
            state.ingredients = action.payload
        },
        getIngredientDetail: (state, action)=>{
            state.detail = action.payload
        },
        filterByIngredient:  (state, action)=>{
            state.ingredient = action.payload
        },
    }
})

export const {getAllIngredients, getIngredientDetail,filterByIngredient} = ingredientSlice.actions

export default ingredientSlice.reducer