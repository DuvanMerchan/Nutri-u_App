import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
//import FavoriteList from '../../components/usersBoart/FavoriteList';
import Info from '../../components/usersBoart/Info';
import { NavBar } from '../../components/utils/nav/nav';
import { getLists, getUserDetail } from '../../redux/actions/useractions';

const UserProfile = () => {

    const dispatch = useDispatch()
    const {user} =useSelector((state)=>state.user)
    const {favList} = useSelector((state) => state.user)
    const {list} = useSelector((state) => state.user)
    console.log('userId3',user)
    console.log('favList',favList)
    useEffect(()=>{
        dispatch(getUserDetail())
        dispatch(getLists())
    },[])

    // const renderFavoriteList = () =>{
    //   return(
      
    //   favList?.map(f=>{
    //     // return(
    //     //   <><button key={f.id} value={f.id}>{f.name}</button>
    //     //   </>
    //     console.log(f)
    //     //)
    //   })
      
    // )}

return (
    <div className='profileCon'>
      <NavBar />
      <div>
        <Info
        user={user} />
      </div>
      <div>
      <div>{renderFavoriteList()}</div>
      <div></div>
      </div>
    </div>
  )
}

export default UserProfile
