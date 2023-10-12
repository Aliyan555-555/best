import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import "./index.css";
import { useContext } from "react";
import  {ToogleNav}from "../App"
import  {BsFillPersonFill}from "react-icons/bs"
import { PlaylistContext } from "../Components/Library";
import { GlobalContext } from "../Context/SongContext";
import { Link, animateScroll as scroll } from "react-scroll";

 

const Navbar = () => {
  const {setNavProfile,NavProfile}=GlobalContext()
  const {Toogle,dispatch}=useContext(ToogleNav);
  const [res, setres] = useState(true);
  const Responsive = () => {
    if (res) {
      setres(false);
      document.getElementById("nav").style.right = "0";
    } else {
      setres(true);
      document.getElementById("nav").style.right = "-100%";
    }
  };
  const [contextX,setContextX]=useState();
  const [contextY,setContextY]=useState();
  const [contextDisplay,setContextDisplay]=useState('none');

   const context=(e)=>{
    setContextX('5.5rem');
    setContextY('6.5rem');
 

    if (contextDisplay==='flex'){
      setContextDisplay('none')
    } else {
      setContextDisplay('flex')
    }

  }

  const RenderMenu = () => {

    if (Toogle){
      return (
        <>
       
      <li>
        <NavLink to={"/Logout"}>Logout</NavLink>
      </li>
      
      <Profile  onClick={context}>
      <BsFillPersonFill  size={{width:'80px',height:'80px'}}/>
        </Profile>
      </>
       
      );
    } if(!Toogle) {
      return(
        <>
         
      
        <li>
          <NavLink to={"/Login"}>Login</NavLink>
        </li>
        <li>
          <NavLink to={"/Singup"}>Singup</NavLink>
        </li>
        
        </>
      )
      
    }
  }
  const scrollToTop = () => {
    scroll.scrollTo(window.innerHeight+100);};

  const active=()=>{
    scrollToTop()
   setContextDisplay('none')
    if (NavProfile) {

      setNavProfile(false)
    } else {
      setNavProfile(true)
    }
  }
  return (
    <>
    <PlaylistContext style={{top:contextY,right:contextX,display:contextDisplay}}>
        <li onClick={active}>Profile</li>
       </PlaylistContext>
      <NavbarStyle id="nav">
       <RenderMenu/> 
      </NavbarStyle>
     
      <span className="menu">
        <HiMenuAlt1 onClick={Responsive} />
      </span>
    </>
  );
};
const Profile=styled.div`

  padding: 1rem;
  width:4rem;
  height:4rem;
  border-radius: 50%;
  background: ${({theme})=>theme.colors.play};
svg{
      font:2.5rem;
      fill:${({theme})=>theme.colors.text};
      color: ${({theme})=>theme.colors.text};
    }

`
const NavbarStyle = styled.ul`
  display: flex;
  transition: .5s;
  align-items: center;
  
  gap: 3rem;
  z-index:100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
 

  li {
    
   
    a {
      text-wrap:nowrap;
      font-size:1.6rem;
      font-weight:500;
      padding: 0.6rem  1.5rem;
      border-radius:.5rem;
      border: .1rem  solid transparent;
      color: ${({ theme }) => theme.colors.text};
     
     &:hover,
     &:active{  
      border: .1rem solid ${({ theme }) => theme.colors.helper};
      color: ${({ theme }) => theme.colors.helper};
     }
    }
  }
  @media only screen and (max-width:${({ theme }) => theme.media.tab2}) {
    
    
    display: flex;
    padding-top: 5rem;
    position: fixed;
    top: 7.3rem;
    right: -30%;
    flex-direction: column;
    width:30%;
    height:100vh;
    align-items: flex-start;
    justify-content: flex-start;
    background: currentColor;
    li{
      a{
        text-align: left;
        margin: .5rem;
        padding: 1.3rem 6rem 1.3rem 1rem  ;
        border-radius: 0;

      }
    }
    
}
@media only screen and (max-width:290px) {
width: 45%;
}
}
`;

export default Navbar;
