import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import "./index.css";
import { useContext } from "react";
import  {ToogleNav}from "../App"

const Navbar = () => {
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

  const RenderMenu = () => {

    if (Toogle){
      return (
        <>
        <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      
      <li>
        <NavLink to={"/Playlist"}>Your Library</NavLink>
      </li>
      <li>
        <NavLink to={"/Logout"}>Logout</NavLink>
      </li>
      
      </>
       
      );
    } if(!Toogle) {
      return(
        <>
          <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        
        <li>
          <NavLink to={"/Playlist"}>Your Library</NavLink>
        </li>
       
      
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
  return (
    <>
      <NavbarStyle id="nav">
       <RenderMenu/>
      </NavbarStyle>
      <span className="menu">
        <HiMenuAlt1 onClick={Responsive} />
      </span>
    </>
  );
};
const NavbarStyle = styled.ul`
  display: flex;
  transition: .5s;
  align-items: center;
  justify-content: center;
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
