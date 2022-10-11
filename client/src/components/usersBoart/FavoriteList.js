import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getIdList, getLists } from '../../redux/actions/useractions'

const FavoriteList = (user) => {

    const dispatch = useDispatch()
    const {favList} = useSelector((state) => state.user)
    const {list} = useSelector((state) => state.user)
    console.log('userId3',user)
    useEffect(()=>{
        dispatch(getLists(user.id))
    },[])
const favoriteSelect = (e) =>{
    dispatch(getIdList(e.targe.value))
}

  return (
    <div>
<select className="Ordenar" onChange={favoriteSelect}>
                <option value=''>Favorite List</option>
                {/* {favList?.map((f)=>(
                    <option value={f.id} key={f.id}>
                        {f.name}
                    </option>
                ))} */}
            </select>
    </div>
  )
}

export default FavoriteList
