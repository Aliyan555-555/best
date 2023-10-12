import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import  Button  from '../Deco/Button'
import { useEffect } from 'react'

const Error = () => {
  useEffect(() =>{
    window.scroll(0,0);
    document.title= '404'
  }, []);
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
  font-size: 15rem;
  margin-bottom: -1.5rem;
}
a {button{

cursor: pointer;
}
}

`
export default Error
