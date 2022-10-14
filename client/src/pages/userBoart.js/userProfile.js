import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import FavoriteList from '../../components/usersBoart/FavoriteList';
import Info from '../../components/usersBoart/Info';
import List from '../../components/usersBoart/List';
import NewList from '../../components/usersBoart/NewList';
import { NavBar } from '../../components/utils/nav/nav';
import { changeListName, createList, deleteList, getIdList, getLists, getUserDetail, removeFavorite } from '../../redux/actions/useractions';
import "./userProfile.css"

const UserProfile = () => {

    const dispatch = useDispatch()
    const {user} =useSelector((state)=>state.user)
    const {favList} = useSelector((state) => state.user)
    const {list} = useSelector((state) => state.user)
    const [ image, setImage ] = useState("")
    const [ loading, setLoading ] = useState(false)

    const uploadImage = async (e) => {
      const files = e.target.files;
      const data = new FormData();
      data.append("file", files[0])
      data.append("upload_preset", "images");
      setLoading(true)
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dq4zroj42/image/upload",
        {
          method: "POST",
          body: data,
        }
      )
      const file = await res.json();
      setImage(file.secure_url)
      console.log(file.secure_url)
      setLoading(false)
    }

    useEffect(()=>{
        dispatch(getUserDetail())
    },[])
    useEffect(()=>{
        dispatch(getLists())
    },[])

    function handleUpdate(id, value){
      try {
        dispatch(changeListName(id, value))
        setTimeout(()=>{
          dispatch(getLists())
        },100)
      } catch (error) {
        console.log(error)
      }
    }
    function handleDelete(listId){
      try {
        alert('Do you wanna delete this list?')
        dispatch(deleteList(listId))
        setTimeout(()=>{
          dispatch(getLists())
          dispatch(getIdList())
        },100)
      } catch (error) {
        console.log(error)
      }
    }
    function onDeleteRecipe(listId,recipeId) {
      
      alert('Do you wanna delete this recipe?')
      dispatch(removeFavorite(listId,recipeId))
      setTimeout(()=>{
        dispatch(getLists())
        dispatch(getIdList(listId))
      },100)
    }
    function onCreate(listName){
      dispatch(createList(listName))
      setTimeout(()=>{
        dispatch(getLists())
      },100)
    }
    function handleRenderList(id){
      dispatch(getIdList(id))
    }

return (
    <div className='profileCon'>
      <NavBar />

<div className="userprofile"> 

      <div className="username1">
        <Info
        user={user} />
      </div>

          <div className="userimage">
            {loading ? (<h3>Loading picture...</h3>) : (<img className="userimage1"src={image} style={{width: "600px"}}/>)}
          </div>
          
        <div className="upload1">
          <h5>Upload your profile picture</h5>
          <input
            type="file"
            name="file"
            placeholeder="Profile Picture"
            onChange={uploadImage}
            >
          </input>
        </div>

      <div className="list">
      <h2>My Lists</h2>
      <NewList
      onCreate={onCreate} />
      {(favList.length>0)?
      favList.map(f =>(<>
      <FavoriteList
      key = {f.id}
      user= {user}
      list={f}
      onUpdate={handleUpdate}
      onDelete={handleDelete} 
      onRender={handleRenderList}/></>
      ))
    : null}
  
      </div>

        <div className="list1">
            {(Object.entries(list).length>0)? 
            <List  
            onDeleteRecipe={onDeleteRecipe}
            list={list}
            />:(
              <h2>select your list</h2>
            )}
        </div>


      </div>

    </div>
  )
}

export default UserProfile
