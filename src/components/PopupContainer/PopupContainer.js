import React from 'react'

import './PopupContainer.css'

const PopupContainer = ({ children }) => {
  return (
    <div className='popup'>
      <div className='popup__contentWrapper'>{children}</div>
    </div>
  )
}

export default PopupContainer
