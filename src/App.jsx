import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
function App() {
 

  return (
    <div style ={{backgroundColor: '#292F36', fontColor: '#FFFEFF'}}>
      <Nav/>
      <main >
      <Outlet/>
      </main>
      {/* <footer/> */}
    </div>
    
  )
}

export default App
