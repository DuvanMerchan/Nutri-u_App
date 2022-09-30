import { configureStore } from '@reduxjs/toolkit';
import diets from '../redux/dietsSlice';
import ingredients from '../redux/ingredientSlice';
import recipes from '../redux/recipeSlice';


export const store = configureStore({
  reducer: {
    recipes: recipes,
    diets: diets,
    ingredients: ingredients,
    // users:users,
  },
});
