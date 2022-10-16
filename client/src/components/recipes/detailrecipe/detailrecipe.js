import React, { useState } from 'react';
//import {spinner} from '../../utils/spinner/spinner.js';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, //useState 
} from 'react';
import { getRecipeDetail, getRecipePost, getTotalRanking,} from '../../../redux/actions/recipeactions';
import { useParams } from 'react-router-dom';
import { NavBar } from '../../utils/nav/nav';

//import {check} from "./check.png"

import style from './detail.css'
import SelectFavList from '../../utils/SelectFavList/SelectFavList';
import { useModal } from "../../../hooks/useModal";
import Modal from "../../utils/Modal/Modal";
import Post from "./helper/Post";
import useUser from "../../../hooks/useUser";
import { createPost, deletePost, updatePost } from "../../../redux/actions/postAction";
import NewPost from "./helper/NewPost";
import RankingPost from './helper/RankingPost';

const RecipeDetail =()=>{
    
    const dispatch = useDispatch();
    const { id } = useParams();
    const [isOpen, openModal, closeModal] = useModal();
    const { isLogged, logout } = useUser();
    const recipe = useSelector((state) => state.recipes.detail);
    const { detailPost } = useSelector((state) => state.recipes);
    const rankingTotal = useSelector((state) => state.recipes.ranking)
    //setRecipeDetail(recipe)  

    useEffect(() => {
        dispatch(getRecipeDetail(id));
        dispatch(getRecipePost(id));
        dispatch(getTotalRanking(id))
    },[])
    useEffect(() => {
      dispatch(getTotalRanking(id))
  },[rankingTotal])
    function handleUpdate(postId, value) {
      try {
        dispatch(updatePost(postId, value))
        setTimeout(() => {
          dispatch(getRecipePost(id))
        }, 100);
      } catch (error) {
        console.log(error);
      }
    }
    function handleDelete(postId) {
      try {
        alert("Do you wanna delete this list?");
        dispatch(deletePost(postId))
        setTimeout(() => {
          dispatch(getRecipePost(id))
        }, 100);
      } catch (error) {
        console.log(error);
      }
    }
    function handleCreate(content) {
      dispatch(createPost(content, id));
      setTimeout(() => {
        dispatch(getRecipePost(id));
      }, 100);
    }
    
     return(
<div className='detalles'>
<NavBar />

<div className="detail1">

  
      <div className="detail2">
        <h1 className="font1">{recipe.name}</h1>
      </div>

        <div className="detail3">

        <h4>Diet/s</h4>
            {recipe.createdInDB?(<p>{recipe.diets[0].name}</p>):<p>{recipe.diets}</p>}

        <h5>Health Score</h5>
                <li>{recipe.healthScore}</li> 
        </div>
        <div className='ranking'>
          <h3>Users calification</h3>
          {<h3>{rankingTotal?rankingTotal:'No ranking'}</h3>} 
          <div>
          {isLogged? <RankingPost recipeId={id} />:null}
          </div>
        </div>

        <div className="detail6">
        <button onClick={openModal}>Favorite</button>
          <Modal isOpen={isOpen} closeModal={closeModal}>
            <SelectFavList recipeId={recipe.id} />
          </Modal>
        </div>

        <div className="detail4">
            <h5>Summary</h5>
            {recipe.createdInDB?(<p>{recipe.summary}</p>):(<p dangerouslySetInnerHTML={{__html:recipe.summary}}/>)}
        </div>
        
        <div className="detail5">
          <img className="fontimg" src={recipe.image} alt ='recipe' width={700}/>
        </div>
        <div>
          <h2>coments</h2>
          {isLogged ? <NewPost onCreate={handleCreate} /> : null}
          {detailPost
          ? detailPost.map((post) =>{
            return( <Post
            isLogged={isLogged}
            post={post}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />)
          }):null
            }
        </div>
    </div>
    </div>
    )
}


export default RecipeDetail;