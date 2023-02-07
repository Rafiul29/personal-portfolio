import React from 'react'

const CustomCursor = ({innerCursorRef,outerCursorRef}) => {
  return (
    <>
    <div className="inner-cursor" ref={innerCursorRef}></div>
    <div className="outter-cursor" ref={outerCursorRef}></div>
    </>
  )
}

export default CustomCursor