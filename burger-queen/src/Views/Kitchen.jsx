import React, {useEffect} from 'react'
import { Container } from 'react-bootstrap' 
import logo from '../Assets/img/logo.jpeg'
import {traeData } from  '../Firabase/Firestore.js'

const Kitchen = () => {
  useEffect(() => {
    traeData()
}, [])
  return (

    <>
    <Container>
<img className='logoCocina' src={logo} alt=""/>

    </Container>
    
    
    </>
  )
}

export default Kitchen