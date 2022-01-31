import React from 'react'

import './TabLabel.css'

const TabLabel = ({ selectedTabNumber, setSelectedTabNumber, tabNumber, title }) => {
  return (
    <button
      className={selectedTabNumber === tabNumber ? 'tabLabel_selected' : 'tabLabel'}
      onClick={() => {
        setSelectedTabNumber(tabNumber)
      }}
    >
      {title}
    </button>
  )
}

export default TabLabel
