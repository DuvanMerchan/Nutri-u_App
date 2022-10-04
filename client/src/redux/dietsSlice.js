import { createSlice } from "@reduxjs/toolkit";
import { batch } from 'react-redux';


export const dietSlice = createSlice({
    name: 'diets',
    initialState:{
        diets:[],
        dietsFiltered:[],
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
        // filterByDiet:  (state, action)=>{

        //     const allDiets = state.diets
        //     const dietsFil = action.payload === 'all' ? allDiets : allDiets.filter(d => {
        //         if(d.diets.length > 0){
        //             let dietsFilt = d.diets.map(di => di.name)
        //             return dietsFilt.includes(action.payload)
        //         }
        //         return true
        //     })
        //     state.dietsFiltered = dietsFil
        
        // },
    }
})

export const { getAllDiets, filterByDiet, getDietDetail, getDietByName } = dietSlice.actions

export default dietSlice.reducer