import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import FavoriteList from '../../components/usersBoart/FavoriteList';
import Info from '../../components/usersBoart/Info';
import { NavBar } from '../../components/utils/nav/nav';
import { getUserDetail } from '../../redux/actions/useractions';

const UserProfile = () => {

    const dispatch = useDispatch()
    const {user} =useSelector((state)=>state.user)
    useEffect(()=>{
        dispatch(getUserDetail())
    },[])

return (
    <div className='profileCon'>
      <NavBar />
      <div>
        <Info
        user={user} />
      </div>
      <div>
        <FavoriteList 
        user={user}/>
      </div>
    </div>
  )
}

export default UserProfile
