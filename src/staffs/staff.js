import React from 'react'

const Staff = (props) => {
  return (<li> Name: {props.name} | Pet: {props.pet}
          <button onClick={props.delEvent}>Delete</button>
          </li>
  )
}

export default Staff
