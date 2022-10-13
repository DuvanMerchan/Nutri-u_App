import React from 'react'

const Modal = ({children}) => {
  return (
    <article className='modal-is-open'>
        <div className='modal-conteiner'>
            <button className='modal-close'>X</button>
            {children}
        </div>
    </article>
  )
}

export default Modal
