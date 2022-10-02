import { createSlice } from "@reduxjs/toolkit";


export const dietSlice = createSlice({
    name: 'diets',
    initialState:{
        diets:[],
        diet:'',
        detail: {},
    },
    reducers:{
        getAllDiets: (state, action)=>{
            state.diets = action.payload
        },
        getDietDetail: (state, action)=>{
            state.detail = action.payload
        },
        getDietByName:  (state, action)=>{
            state.diets = action.payload
        },
        filterByDiet:  (state, action)=>{
            state.diet = action.payload
        },
    }
})

export const { getAllDiets, filterByDiet, getDietDetail, getDietByName } = dietSlice.actions

export default dietSlice.reducer