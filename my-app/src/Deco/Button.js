import React from 'react'
import { styled } from 'styled-components'

const Button = ({btn_text}) => {
  return (
    <Wrapper>{btn_text}</Wrapper>
  )
}
const Wrapper=styled.button`
margin:2rem 0 0  0;
border: 0;
outline: 0;
border-radius: 4rem;
padding: 1.1rem 5rem;
font-size:1.7rem;
letter-spacing: 2px;
font-weight:600;
background: ${({theme})=>theme.colors.heading};
color: ${({theme})=>theme.colors.white};
`

export default Button
