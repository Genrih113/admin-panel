import React from 'react'

import './ResizeableTextArea.css'

const ResizeableTextArea = ({ placeholder = '', ccn = '', value = '', handleSetValue = (a) => {} }) => {
  const inputRef = React.useRef()

  function keyUpper(ref) {
    if (ref.current.scrollTop > 0) {
      ref.current.style.height = ref.current.scrollHeight + 'px'
    }
  }

  return (
    <textarea
      placeholder={placeholder}
      ref={inputRef}
      className={`resizeableTextArea ${ccn}`}
      onKeyUp={() => {
        keyUpper(inputRef)
      }}
      value={value}
      onChange={(e) => handleSetValue(e.target.value)}
    />
  )
}

export default ResizeableTextArea
