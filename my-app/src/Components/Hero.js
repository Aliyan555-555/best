import React from 'react';
import { styled } from 'styled-components'
import hero_bg  from  "../../src/img/hero_bg.webp"


const Hero = ({Hero_h1_start,h1_span,Hero_h1_end,Hero_para}) => {

  return (<>
    <HeroStyle  className='Hero-responsive'>
      <div className="Hero-text-data">
        <h1>{Hero_h1_start}<span>{h1_span}</span>{Hero_h1_end}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quae dicta saepe deleniti quis dolorum quia ex ipsa maxime repellat!</p>
      </div>
      <div className="Hero-image-data">
        <img src={hero_bg} alt="" />
      </div>
     
    </HeroStyle>
 <hr/></>
  )
}
const HeroStyle=styled.section`
padding-top:50px; 
display: flex;
align-items: center;
width: 70%;
margin:0 auto;
height: 100vh;
hr{
  padding: 2px;
}
.Hero-text-data{
 
  display: flex;
  padding-right: 50px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  flex-wrap:wrap; 
  justify-content:center; 
  h1{
    span{
      color: #ff0062;
    }
  }

  p{ 
    
    color: ${({theme})=>theme.colors.para};
    
  }
}
.Hero-image-data{

padding-left: 50px;
padding-right: 50px;
  
 img{
  width: 120%;
  height: 80%;
  
 }
}
`
export default Hero
