import React from "react";
import styled from "styled-components";
import  {FiClock} from  "react-icons/fi"
import MusicRowItem from "./MusicRowitem";
import  { GlobalContext } from "../Context/SongContext"
const LibraryLike = () => {
  const {playlist}=GlobalContext()

  return (
    <Wrapper>
      <div className="hero">
        <div className="left">
          <img
            src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
            alt="Like"
          />
        </div>
        <div className="right">
          <div>
          <p>Playlist</p>
           <h2>Liked Songs</h2>
           <p>Aliyan . 3 Songs</p>
           </div>
        </div>
      </div>
      <div className="Song-holder">
        <div className="header">
          <p>#</p>
          <p>title</p>
          <p>Date added</p>
          <FiClock/>
        </div>
       <div className="song-box"> {playlist.map((data,i)=>{
         return <MusicRowItem i={i} data={data}/>
        })}</div>

      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  .Song-holder{

    padding: 2rem;
    width: 100%;
    .song-box{
      padding: 1rem;
      display: flex;
      flex-direction:column;
      gap:1.5rem;
    }
 
    .header{
      padding: 1rem;
      margin: 0 auto;
      width: 95%;
     display: flex;
     align-items: center;
     justify-content: space-around;
     flex-direction:row;
      p{
        font-size:2rem;
        padding: 0;
        margin: 0;
      }
      svg{
        font-size:3rem;
        color: white;
      }
      border-bottom: .1rem solid gray;
      p:nth-child(2n){
       
        margin-left:-250px;
      }
      p:nth-child(1){
        margin-left:-130px;
      }
    }
  }
  .hero {
    with: 100%;
    height: 60%;
    background: #453286;
   
    display: flex;
    box-shadow:0px 50px 100px 10px #453286;
    flex-direction: row;
    .left {
      width: 35%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items:flex-end;
      img{
      width:70%;
      height: 60%;
      margin: 0 0 2rem 0;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
    }
    .right {
      width: 75%;
      height: 100%;
      display: flex;
      flex-direction:column;
      align-items:flex-start;
      justify-content: flex-end;
      div{
        height: 80%;
        display: flex;
        flex-direction:column;
        justify-content: flex-end;
      
        margin: auto 0 auto 0;
      h2{
        text-align: left;
        font-size:14rem;
        letter-spacing: -5px;
        color: white;
        font-weight:700;
      }
      p{
        position: relative;
       
        font-size:2rem;
        font-weight:600;
        color: white;
        padding: 0;
        margin: 0;
        }
      }
    }
  }
`;
export default LibraryLike;
