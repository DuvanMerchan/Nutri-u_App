import React from 'react'

const UserPost = ({post}) => {
    return (
    <div className='posts col'>
        <div className='postrecipedata'>
        <a href={"/detail/" + post.recipeId}  className="Links" >
        <img src={post.recipeImg} alt='recipeImg'></img>
        <h4>{post.recipeName}</h4></a>
        </div>
        <div className='postUserdata'>
            <h6>{post.username}</h6>
            <span>{post.content}</span>
      </div>
    </div>
  )
}

export default UserPost
