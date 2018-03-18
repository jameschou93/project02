import React, { Component } from 'react'

const child = (props) => {
  return(
    <div>
      <button onClick={props.doSomething}> Hello </button>
    </div>
  )
}

export default child
