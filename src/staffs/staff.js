import React from 'react'

const Staff = (props) => {
  return (<div>
          Name: {props.name} | Pet: {props.children}
  </div>)
}

export default Staff
