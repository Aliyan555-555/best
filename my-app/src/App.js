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
import { createContext, useReducer } from "react";
import { RiNurseLine } from "react-icons/ri";
export const ToogleNav=createContext()


function App() {
  const initalstate=null
  const Reducer=(state,action)=>{
    if (action.type==="USER"){
      return action.payload;
    }
  }
  const [Toogle,dispatch]=useReducer(Reducer,initalstate)
console.log(Toogle)

  const theme = {
    colors: {
      hover:"#001a4a",
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
    
    <ToogleNav.Provider value={{Toogle,dispatch}}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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
    </ThemeProvider>
 </ToogleNav.Provider>

  );
}

export default App;
