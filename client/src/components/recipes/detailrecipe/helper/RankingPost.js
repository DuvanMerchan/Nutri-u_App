import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserRanking, postRanking } from '../../../../redux/actions/postAction';
import { getTotalRanking } from '../../../../redux/actions/recipeactions';


const RankingPost = ({recipeId}) => {
const dispatch = useDispatch()

    const rankingTotal = useSelector((state) => state.recipes.ranking)

    const [ranking,setRanking] =useState(0)

    function handleSubmit(e){
        e.preventDefault();
    }
    function handleInputChange(e){
        setRanking(e.target.value)
    }
    function handleClickPost() {
        console.log('recipeId, ranking 2',recipeId, ranking)
        dispatch(postRanking(recipeId, ranking))
        dispatch(getUserRanking(recipeId, ranking))
        setTimeout(() => {
            dispatch(getTotalRanking(recipeId))
          }, 100)
    }
  return (
<form onSubmit={handleSubmit}>
    <input 
    type='number'
    name='ranking'
    min='0'
    max='100'
    value={ranking}
    onChange={handleInputChange}
    />
    <button className='buttonVote' onClick={handleClickPost}>Vote!</button>
</form>
  )
}

export default RankingPost
