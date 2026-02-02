import React, { useEffect } from "react"
import { useNavigate } from 'react-router-dom'

function About() {
   let navigate = useNavigate();

   useEffect(() => {
    if(localStorage.getItem('token')){
      navigate('/about')
    }else{
      navigate('/login')
    }
   }, [])
   
   return (
    <>
      <h1>This is About Page</h1>
    </>
  )
}

export default About
