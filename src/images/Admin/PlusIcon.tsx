import React from 'react'

const PlusIcon = ({ ccn = '' }) => (
  <svg className={ccn} width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10.75 3.75C10.75 3.33579 10.4142 3 10 3C9.58579 3 9.25 3.33579 9.25 
          3.75V9.25H3.75C3.33579 9.25 3 9.58579 3 10C3 10.4142 3.33579 10.75 3.75 
          10.75H9.25L9.25 16.25C9.25 16.6642 9.58579 17 10 17C10.4142 17 10.75 16.6642 
          10.75 16.25L10.75 10.75L16.25 10.75C16.6642 10.75 17 10.4142 17 10C17 9.58579 
          16.6642 9.25 16.25 9.25L10.75 9.25V3.75Z'
      fill='#74808A'
    />
  </svg>
)

export default PlusIcon
