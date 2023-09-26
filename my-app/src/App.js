import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Navigation from "./Components/Navigation";
import { ThemeProvider } from "styled-components";
import Playlist from "./Routes/Playlist";

import Singup from "./Routes/Singup";
import Login from "./Routes/Login";
import SingleProduct from "./Routes/SingleProduct";
import Error from "./Routes/Error";
import { GlobalStyle } from "./GlobleStyle";
import { SongProvider } from './Context/SongContext';
import Logout from "./Routes/Logout";
import { createContext, useReducer, useState } from "react";
import { RiNurseLine } from "react-icons/ri";
export const ToogleNav=createContext()


function App() {

  const [Toogle,setToogle]=useState(null)
console.log(Toogle)

  const theme = {
    colors: {
      play:"rgba(255, 255, 255, 0.18)",
      hover:"#001a4a",
     bg_normal:"#002252",
      bg: "rgb(1, 13, 49)",
      bg_light:"#ebf2fa",
      heading: "rgb(1, 13, 49)",
      text: "rgb(952, 945, 948)",
      para:"#323b4f",
      helper:"rgb(196, 229, 257)",
      black: " rgb(1, 20, 44)",
      white: "#f2f6fa",
      btn: "rgb(10, 1, 58)",
      boder: "rgb(0, 130,800)",
      lighttranparent:"rgba(247, 251, 255, 0.4)",
    },
    media:{
      mobile:'700px',
      tab1:"1120px",
      tab2:"950px",

    }
  }; 
  
  return (
    
    
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToogleNav.Provider value={{Toogle,setToogle}}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PlayList" element={<Playlist />} />
          <Route path="/single/:id" element={<SingleProduct/>} />
          <Route path="/Singup" element={<Singup/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Logout" element={<Logout/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter> 
      </ToogleNav.Provider>
    </ThemeProvider>


  );
}

export default App;
