import { useState } from 'react'
import './App.css'
import Notes from './Components/Notes'
import notes from '../NotesDetails'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-3xl text-center'>Bands and the songs</div>
      
      {notes.map((noteDetails)=>
      <Notes
      key = {noteDetails.key}
      title={noteDetails.title}
      content = {noteDetails.content}
      />


      )}
    </>
  )
}

export default App
