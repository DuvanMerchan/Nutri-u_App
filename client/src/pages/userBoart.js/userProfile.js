import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import FavoriteList from '../../components/usersBoart/FavoriteList';
import Info from '../../components/usersBoart/Info';
import List from '../../components/usersBoart/List';
import { NavBar } from '../../components/utils/nav/nav';
import { changeListName, deleteList, getIdList, getLists, getUserDetail } from '../../redux/actions/useractions';


const UserProfile = () => {

    const dispatch = useDispatch()
    const {user} =useSelector((state)=>state.user)
    const {favList} = useSelector((state) => state.user)
    const {list} = useSelector((state) => state.user)

    useEffect(()=>{
        dispatch(getUserDetail())
        dispatch(getLists())
    },[])

    function handleUpdate(id, value){
      dispatch(changeListName(id, value))
    }
    function handleDelete(id){
      dispatch(deleteList(id))
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
      {favList.map(f =>(
        
      <FavoriteList
      key = {f.id}
      list={f}
      onUpdate={handleUpdate}
      onDelete={handleDelete} 
      onRender={handleRenderList}/>
      ))}
  
      <div>
          {(Object.entries(list).length>0)? 
          <List  
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
