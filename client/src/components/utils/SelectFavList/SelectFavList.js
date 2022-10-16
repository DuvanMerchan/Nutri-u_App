import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLists } from '../../../redux/actions/useractions'

const SelectFavList = () => {
    const dispatch = useDispatch()
    const {favList} = useSelector((state) => state.user)
    const {list} = useSelector((state) => state.user)

  useEffect(()=>{
    dispatch(getLists())
  },[])

    return (
    <div>
      {
        favList.map((f)=>{
            return(
            <span>{f.name}</span>
        )})
      }
    </div>
 )
}


export default SelectFavList
