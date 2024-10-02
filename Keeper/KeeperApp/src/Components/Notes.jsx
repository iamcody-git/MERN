import React from 'react'

function Notes(props) {
  return (
    <>
    <div className='text-center'>
        <h2 className='bg-red-400 text-3xl'>{props.title}</h2>
        <p className='bg-green-200'>{props.content}</p>
         
    </div>
      
    </>
  )
}

export default Notes
