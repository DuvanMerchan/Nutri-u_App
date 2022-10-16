import React from 'react'

const Info = (user) => {
    user = user.user
  return (
    <div>
      <h1> UserName : {user.username}</h1>
    </div>
  )
}

export default Info
