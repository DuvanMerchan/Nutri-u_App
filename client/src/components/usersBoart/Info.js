import React from 'react'

const Info = (user) => {
    user = user.user
  return (
    <div>
      <h2>{user.username}</h2>
    </div>
  )
}

export default Info
