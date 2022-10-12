import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import FavoriteList from '../../components/usersBoart/FavoriteList';
import Info from '../../components/usersBoart/Info';
import List from '../../components/usersBoart/List';
import { NavBar } from '../../components/utils/nav/nav';
import { getIdList, getLists, getUserDetail } from '../../redux/actions/useractions';


const UserProfile = () => {

    const dispatch = useDispatch()
    const {user} =useSelector((state)=>state.user)
    const {favList} = useSelector((state) => state.user)
    const {list} = useSelector((state) => state.user)

    useEffect(()=>{
        dispatch(getUserDetail())
        dispatch(getLists())
    },[])

    function handleUpdate(id, value){}
    function handleDelete(id){}
    function handleRenderList(id){
      dispatch(getIdList(id))
    }

    function RenderList(){
      return(<>
        <h2>{list.name}</h2>
        
        {
        (list.recipes.length>0)?
        list.recipes.map(r=>{
          return(
          <>
          <h3>{r.name}</h3>
          <img className="fontimg" src={r.image} alt ='recipe' width={300}/>
          {r.diets? r.diets.map(d=><span>{d.name}</span>): null}
          </>
          )
        })
      :(<span>This list don't have recipes</span>)
      }
      </>
      )
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
          {(Object.entries(list).length>0)? <RenderList />:(
            <h2>select your list</h2>
          )}
      </div>
      </div>
    </div>
  )
}

export default UserProfile
