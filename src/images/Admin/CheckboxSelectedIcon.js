import React from 'react'

const CheckboxSelectedIcon = ({ ccn = '' }) => (
  <svg className={ccn} width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect x='0.75' y='0.75' width='18.5' height='18.5' rx='3.25' fill='#0841B4' />
    <path d='M5 9L9 13L15 7' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <rect x='0.75' y='0.75' width='18.5' height='18.5' rx='3.25' stroke='#0841B4' strokeWidth='1.5' />
  </svg>
)

export default CheckboxSelectedIcon
