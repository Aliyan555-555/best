import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import  Button  from '../Deco/Button'

const Error = () => {
  return (
    <ErrorStyled>
      <h1>404</h1>
      <Link to={'/'}><Button btn_text={"Home"}/></Link>
    </ErrorStyled>
  )
}
const ErrorStyled=styled.section`
width: 100%;
height: 90vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h1{
  font-size: 10rem;
  margin-bottom: -1.5rem;
}
a{
  cursor: pointer;
}


`
export default Error
