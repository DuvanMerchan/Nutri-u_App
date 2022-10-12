import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getIdList, getLists } from '../../redux/actions/useractions'

const FavoriteList = ({list, onUpdate, onDelete, onRender}) => {    
const [isEdit, setIsEdit] = useState(false)

function FormEdit(){
    const [newValue, setNewValue] = useState(list.name);
    function handleSubmit(e) {
        e.preventDefault();
      }
      function handleChange(e) {
        const value = e.target.value;
        setNewValue(value);
      }
      function handleClickUpdate() {
        onUpdate(list.id, newValue);
        setIsEdit(false);
      }
      return (
        <form className="ListNameUpdateForm" onSubmit={handleSubmit}>
            <input
                type="text"
                className="ListNameInput"
                onChange={handleChange}
                value={newValue}
            />
             <button className="buttonUpdate" onClick={handleClickUpdate}>
                Update
                </button>
        </form>
      )
}
function RenderList(){
    return (
        <div>
           <button className='buttonListName' onClick={() => onRender(list.id)}>{list.name}</button>
           <button className= 'edit' onClick={() => setIsEdit(true)}>✏️</button>
           <button className= 'delete'  onClick={() => onDelete(list.id)}>🗑️</button>
        </div>
      )
}

  return <>{isEdit? <FormEdit />: <RenderList />}</>
}

export default FavoriteList
