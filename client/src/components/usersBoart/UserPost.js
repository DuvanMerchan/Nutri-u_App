import React from 'react'

const UserPost = ({post}) => {
  console.log('post', post);
    return (
    <div className='posts'>
      <h3>{post.content}</h3>
    </div>
  )
}

export default UserPost
