import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'user',
    initialState:{
        user:{},
    },
    reducers:{
        getUser: (state, action) =>{
            state.user = action.payload
        },
        getUserById: (state, action)=>{
            state.user = action.payload
        },
        // getUserStatus: (state, action)=>{
        //     state.logged = action.payload
        // },
        // createUser: (state, action)=>{
        //     state.user = [...state.user, action.payload]
        // },
        // deleteUser: (state, action)=>{
        //     state.user = action.payload
        // },
     }
})



 export const { getUser, getUserById, getUserStatus, createUser, deleteUser} = userSlice.actions

 export default userSlice.reducer