import React from 'react';
import  { useRef,useEffect } from 'react';
import { styled } from 'styled-components'
import hero_bg  from  "../../src/img/hero_bg.webp"
import Canvas from './Canvas';


const Hero = ({Hero_h1_start,h1_span,Hero_h1_end,Hero_para}) => {
 




  return (<>
    <HeroStyle  className='Hero-responsive'>
      <Canvas/>
      <div className="Hero-text-data">
        <h1>{Hero_h1_start}<span>{h1_span}</span>{Hero_h1_end}</h1>
       
        
      </div>
      
     
    </HeroStyle>
 <hr/></>
  )
}
const HeroStyle=styled.section`
padding-top:50px; 
display: flex;
align-items: center;
width: 100%;

height: 100vh;
background: ${({theme})=>theme.colors.bg};


.Hero-text-data{
  padding: 0  0 0 13rem;
 
  z-index:1;
  display: flex;
  padding-right: 50px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  flex-wrap:wrap; 
width: 50%;
  justify-content:flex-start; 
  h1{
   
    font-size:7rem;
    color: white;
    span{
      color: #ff0062;
    }
  }

  p{ 
    
    color: ${({theme})=>theme.colors.para};
    
  }
}

`
export default Hero
