import React from 'react';
import  { useRef,useEffect } from 'react';
import { styled } from 'styled-components'
import hero_bg  from  "../../src/img/hero_bg.webp"
import Canvas from './Canvas';
import '../Deco/index.css'
import { Link, animateScroll as scroll } from "react-scroll";

  const scrollToTop = () => {
  scroll.scrollTo(window.innerHeight+100);};
const Hero = ({Hero_h1_start,h1_span,Hero_h1_end,Hero_para}) => {
const ScrollTo=()=>{
  window.scrollTo(0,700)
}
  return (<Div>
    <HeroStyle  className='Hero-responsive'>
      <Canvas/>
      <div className="Hero-text-data">
        <h1 id='hero-heading'>{Hero_h1_start}<span>{h1_span}</span>{Hero_h1_end}</h1>
       
        
      </div>
      
    
    </HeroStyle> 
    <ToogleSection>
      <Link
       activeClass="active"
       to="#Recent"
       spy={true}
       smooth={true}
       offset={-70}
       duration={200}
       onClick={scrollToTop}
       >
       </Link>
     </ToogleSection>
</Div>
  )
}
const Div=styled.div`
position: relative;
height: 100vh;
`
const ToogleSection=styled.div`
width: 100%;
height:6rem;
position: absolute;
bottom: 1rem;

display: flex;
align-items: center;
justify-content: center;

a{
  border:3px solid white;
  border-radius: 2rem;
  position: absolute;
  padding: 2.8rem 1.3rem;
  display: flex;
  
  justify-content: center;
  &::before{
    top: .8rem;
    border-radius: 5px; 
    content: '';
    position: absolute;
    background: white;
    width: 1rem;
    animation-name: move;
    animation-iteration-count: infinite;
    animation-duration: 7s;
    height: 1rem;
  }
 
  
}


`
const HeroStyle=styled.section`
padding-top:50px; 
display: flex;

align-items: center;
width: 100%;
@font-face {
  font-family:'Nexa Rust Slab Black Shadow 01 ';
  src: url(./font/NexaRustSlab-BlackShadow01.otf);
}
height: 92vh;
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
