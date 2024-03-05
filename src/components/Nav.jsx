import React from 'react'
import { Link } from 'react-router-dom'

const  Nav= () => {
  return (
    <div style = {{display: 'flex', width : '400px', justifyContent: 'space-between', position: 'fixed', top: 0}}>
         <Link to = '/'>
       Home
        </Link>

        <Link to = '/about'>
        About
        </Link>
        
        <Link to = '/projects'>
        Projects
        </Link>


    </div>
  )
}

export default Nav