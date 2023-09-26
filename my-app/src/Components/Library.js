import React, { useState } from "react";
import styled from "styled-components";
import {
  AiFillHome,
  AiOutlinePlus,
  AiOutlineHome,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { PiMagnifyingGlassFill } from "react-icons/pi";
import Libraryitem from "../Deco/LibraryItem";
import LibraryHome from "./LibraryHome";
import LibraryLike from "./LibraryLike";
const Library = () => {
  const [home, sethome] = useState(true);
  const [search, setsearch] = useState(false);
  const [likeplaylist, setlikeplaylist] = useState(false);
  const Render = () => {
    if (home || !search) {
      return <LibraryHome />;
    }
    if (search || !home) {
      return <LibraryLike />;
    }

    // if (likeplaylist||!home||!search){
    //   return<LibraryLike/>

    // }
  };
  const Hendleserch = () => {
    if (search) {
      sethome(true);
      setsearch(false);
    } else {
      setlikeplaylist(false);
      sethome(false);
      setsearch(true);
    }
  };
  const Renderhendle = () => {
    if (home) {
      sethome(false);
    } else {
      setlikeplaylist(false);
      setsearch(false);
      sethome(true);
    }
  };
  const likeRender = () => {
    console.log("like");
    if (likeplaylist) {
      setlikeplaylist(false);
      sethome(true);
    } else {
      setlikeplaylist(true);
      setsearch(false);
      sethome(false);
    }
  };
const [Toogle, setToogle] = useState(true);
const hendleToogle=()=>{
if (Toogle){
  setToogle(false)
  
} else {
  setToogle(true)
  
}
}
  const LeftRender=()=>{
  if (Toogle) {
    return  (
    <Toogle_main>
    <div className="Toogle-navigation">
      <a onClick={Renderhendle}>
        {home ? <AiFillHome /> : <AiOutlineHome />}
      </a>
      <a onClick={Hendleserch}>
        {search ? <PiMagnifyingGlassFill /> : <FaMagnifyingGlass />}
      </a>
    </div>
    <div className="Toogle-library">
      <div className="Toogle-library-header">
        <svg
          onClick={hendleToogle}
          role="img"
          height="24"
          width="24"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-encore-id="icon"
          className="Svg-sc-ytk21e-0 haNxPq"
        >
          <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
        </svg>
       
      </div>
      <div className="Toogle-library-content">
       
      </div>
    </div>
  </Toogle_main>

    
  )}else{
    return(
    <div className="Left">
    <div className="navigate">
      <a onClick={Renderhendle}>
        {home ? <AiFillHome /> : <AiOutlineHome />}
        <p>Home</p>
      </a>
      <a onClick={Hendleserch}>
        {search ? <PiMagnifyingGlassFill /> : <FaMagnifyingGlass />}
        <p>Search</p>
      </a>
    </div>
    <div className="library">
      <div className="library-header" onClick={hendleToogle}>
        <svg
          
          role="img"
          height="24"
          width="24"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-encore-id="icon"
          className="Svg-sc-ytk21e-0 haNxPq"
        >
          <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
        </svg>
        <p>Your Library</p>
        <AiOutlinePlus />
        <AiOutlineArrowRight />
      </div>
      <div className="library-content">
        <Libraryitem onClick={likeRender} />
        <Libraryitem />
        <Libraryitem />
        <Libraryitem />
      </div>
    </div>
  </div>)}
  }
  

  return (
    <Wrapper>
      <LeftRender/>
     
      <div className="Right">
        <div className="content">
          <Render />
        </div>
      </div>
    </Wrapper>
  );
};
const Toogle_main=styled.div`
border-radius: 1.5rem;
display: flex;
flex-direction:column;
justify-content: flex-start;
margin: 1rem;
width:10rem;
gap:1rem;
height: 100%;

.Toogle-library{
  background: black;
  width: 100%; 
  padding: 1rem;
  height:71%;
  border-radius: 1.5rem;
  display: flex;
  flex-direction:column;
  .Toogle-library-header{
    border-radius: 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height:18%;
    &:hover,
    &active {
      background: rgba(255, 255, 255, 0.13);
    }
    svg{
      fill:white;
    }
   
   
  }
}
.Toogle-navigation{
  padding: 1rem;
  background: black;
  width: 100%;
  height: 25%;
  border-radius: 1.5rem;
  display: flex;
  flex-direction:column;
  gap:1rem;
  a{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 42%;
    font-size:3rem;
    border-radius: 1.5rem;
    color: white;
    &:hover,
        &active {
          background: rgba(255, 255, 255, 0.13);
        }
  }
}
`
const Wrapper = styled.section`
  width: 100%;
  height: 91vh;
  background: ${({ theme }) => theme.colors.bg};
  display: flex;
  .Left {
    padding: 1rem;
    width: 22%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .navigate {
      width: 100%;
      height: 25%;
      background: black;
      border-radius: 1.5rem;
      display: flex;
      gap: 1.5rem;
      flex-direction: column;
      a {
        display: flex;
        border-radius: 1.5rem;
        gap: 2rem;
        padding: 2rem;
        align-items: center;
        justify-content: flex-start;
        font-size: 3rem;
        color: ${({ theme }) => theme.colors.text};
        width: 100%;
        height: 45%;
        &:hover,
        &active {
          background: rgba(255, 255, 255, 0.13);
        }
        p {
          font-size: 2rem;
          padding: 0;
          margin: 0;
          font-weight: 600;
        }
      }
    }
    .library {
      width: 100%;
      height: 75%;
      border-radius: 1.5rem;
      background: black;
      ::-webkit-scrollbar-track {
        background: black;
      }
      ::-webkit-scrollbar-thumb {
        background: transparent;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.2);
      }
      .library-content {
        padding: 0.6rem;
        gap: 0.8rem;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        width: 100%;
        height: 82%;
      }
      .library-header {
        width: 100%;
        height: 8rem;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        p {
          padding: 0;
          font-size: 2rem;
          font-weight: 600;
          margin: 0;
        }
        svg {
          cursor: pointer;
          font-size: 3rem;
          fill: ${({ theme }) => theme.colors.text};
        }
      }
    }
  }
  .Right {
    background: black;
    border-radius: 1.5rem;
    margin: 1rem 0;
    width: 78%;
    height: 100%;
    display: flex;
    flex-direction: column;
    ::-webkit-scrollbar-track {
      background: black;
    }
    ::-webkit-scrollbar {
      width: 1.5rem;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 1.5rem;
      background: transparent;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.2);
    }
    .content {
      border-radius: 1.5rem;
      overflow-y: scroll;
      width: 100%;
      overflow-y: scroll;
      height: 100%;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.media.tab1}) {
    .Left .navigate a {
      padding: 0.8rem !important;
    }
    .content {
      padding: 0.7rem !important;
    }
    .library-content {
      padding: 0 !important;
    }
    .library-header p {
      font-size: 1.6rem !important;
    }
    .library-header svg {
      font-size: 2rem !important;
    }
  }
`;

export default Library;
