import axios from 'axios'
import { getUserPost, getUserPosts } from '../userSlice'


//-------------------- RUTAS --------------------------

//import {REACT_APP_HOST} from process.env
require('dotenv').config()
const url = process.env.REACT_APP_HOST || 'http://localhost:5001'

//-------------------- ACTIONS ------------------------

export const getPosts = () => async (dispatch)=>{
    try {
        let user = JSON.parse(sessionStorage.getItem('user'))
        let token = JSON.parse(sessionStorage.getItem('token'))
        let res = await axios.get(`${url}/user/users/post/${user.id}`,{
            headers:{
                'Authorization': `Bearer ${token}`,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
        })
        dispatch(getUserPosts(res.data))
    } catch (error) {
        console.log(error)
    }
}
export const createPost = (content,  recipeId) => async (dispatch)=>{
    try {
        let user = JSON.parse(sessionStorage.getItem('user'))
        let token = JSON.parse(sessionStorage.getItem('token'))
        await axios.post(`${url}/user/users/post/${user.id}`,{content:content,  recipeId:recipeId},{
            headers:{
                'Authorization': `Bearer ${token}`,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        console.log(error)
    }
}
export const getPost = () => async (dispatch)=>{
    try {
        let user = JSON.parse(sessionStorage.getItem('user'))
        let token = JSON.parse(sessionStorage.getItem('token'))
        let res = await axios.get(`${url}/user/users/post/recipe/${user.id}`,{
            headers:{
                'Authorization': `Bearer ${token}`,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
        })
        dispatch(getUserPost(res.data))
    } catch (error) {
        console.log(error)
    }    
}
export const updatePost = (postId,content) => async (dispatch)=>{
    try {
        let token = JSON.parse(sessionStorage.getItem('token'))
        await axios.patch(`${url}/user/users/post/post/${postId}`,{content},{
            headers:{
                'Authorization': `Bearer ${token}`,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }})
    } catch (error) {
        console.log(error)
    }   
}
export const deletePost = (postId) => async (dispatch)=>{
    try {
        console.log('postId',postId)
        let token = JSON.parse(sessionStorage.getItem('token'))
        await axios.delete(`${url}/user/users/post/post/${postId}`,{
            headers:{
                'Authorization': `Bearer ${token}`,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }})
    } catch (error) {
        console.log(error)
    }   
}