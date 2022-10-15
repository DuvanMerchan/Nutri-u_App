import { configureStore } from '@reduxjs/toolkit';
import diets from '../redux/dietsSlice';
import ingredients from '../redux/ingredientSlice';
import recipes from '../redux/recipeSlice';
import user from '../redux/userSlice';
import admin from '../redux/adminSlice';


export const store = configureStore({
  reducer: {
    recipes: recipes,
    diets: diets,
    ingredients: ingredients,
    user:user,
    admin:admin,
  },
});
