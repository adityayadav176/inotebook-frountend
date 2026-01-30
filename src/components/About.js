import  React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'

function About() {
  const a = useContext(noteContext)
  useEffect(() => {
    a.update()
    // eslint-disable-next-line 
  }, [])
  
  return (
    <>
      <h1>This is About {a.state.name} and he is in class {a.state.class}</h1>
    </>
  )
}

export default About
