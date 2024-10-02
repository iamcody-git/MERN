import React from 'react'
import Input from './Input'

function Login(props) {
  return (
    <form className='container'>
    
    <Input 
    type="text"
    placeholder ="username"
    /><br/>
     <Input 
    type="password"
    placeholder ="password"
    /><br/>
    {props.isRegistered === false && ( <Input 
    type="password"
    placeholder ="confirm password"
    />)}
    <br/>
      <button type='submit'>
        {props.isRegistered ? "LOGIN" : "REGISTER"} 
      </button>
    </form>
  )
}

export default Login
