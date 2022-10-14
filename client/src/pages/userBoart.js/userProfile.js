import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import FavoriteList from '../../components/usersBoart/FavoriteList';
import Info from '../../components/usersBoart/Info';
import List from '../../components/usersBoart/List';
import NewList from '../../components/usersBoart/NewList';
import { NavBar } from '../../components/utils/nav/nav';
import { changeListName, createList, deleteList, getIdList, getLists, getUserDetail, removeFavorite } from '../../redux/actions/useractions';
import { useNavigate } from "react-router-dom"

const UserProfile = () => {
    const loggedUserSession = window.sessionStorage.getItem("user")
    const dispatch = useDispatch()
    const {user} =useSelector((state)=>state.user)
    const {favList} = useSelector((state) => state.user)
    const {list} = useSelector((state) => state.user)
    const navigate2 = useNavigate()

    useEffect(()=>{
        if(!loggedUserSession){navigate2("/home")}
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
      <div>
        <Info
        user={user} />
      </div>
      <div>
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
  
      <div>
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
