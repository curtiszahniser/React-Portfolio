import React from 'react'

const Project = ({data}) => {
  return (
    <div>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        {/* <div>{data}</div> */}

    </div>
  )
}

export default Project