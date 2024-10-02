import { useState } from 'react'
import './App.css'
import Login from './Components/Login'
import Valform from './Components/Valform';
import Todo from './Components/Todo'

var userIsRegistered = false;

function App() {
  
  return (
    <>
      {/* <div className='container'>{
         <Login isRegistered={userIsRegistered} />
        } </div> */}
        {/* <Valform /> */}
        <Todo />
    </>
  )
}

export default App
