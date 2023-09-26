import React, { useState } from "react";
import { GlobalContext } from "../Context/SongContext";
import MusicItem from "../Components/MusicItem";
import Loading from "../Deco/Loader";
import styled from "styled-components";
import { AiOutlinePlus, AiOutlineArrowRight } from "react-icons/ai";

const Playlist = () => {
  const { playlist } = GlobalContext();
  const [Load, setLoad] = useState(true);
  setTimeout(() => {
    setLoad(false);
  }, 1000);
  const [slide, setslide] = useState(true);

  const drop = {
    transition: "4s",
    top: `${slide ? "70px" : "-500px"}`,
    display: `${slide ? "flex" : "none"}`,
  };

  const slider = () => {
    slide ? setslide(false) : setslide(true);
  };
  console.log(slide);

  return (
    <Wrapper>
      <div className="side-panel">
        <header>
          <div>
            <svg
              role="img"
              height="24"
              width="24"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-encore-id="icon"
              class="Svg-sc-ytk21e-0 haNxPq"
            >
              <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
            </svg>
            <h3>Your Library</h3>
            <AiOutlinePlus className="active" />
            <AiOutlineArrowRight className="active" />
          </div>
        </header>
        <div className="item-holder" style={drop}>
          <div className="side-panel-item">
            <div className="pl-img">
              <img
                src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
                alt="Like"
              />
            </div>
            <div className="pl-content">
              <h3>Liked Songs</h3>
              <p>Playlist 0 Songs</p>
            </div>
          </div>
        </div>
      </div>
      <SidePanel  className="right-panel">
        <div className="panel-Hero">

        </div>

      </SidePanel>
    </Wrapper>
  );
};
const SidePanel=styled.div`
border-radius: 1rem;
margin-left: 1rem;
overflowY: scroll;
width: 75%;
height: 97%;
background: ${({theme})=>theme.colors.bg_normal};
.panel-Hero{
  background: black;
  position: relative;
  border-radius: 1rem;
  width: 100%;
  height: 80%;
 &::after{
  content: "";
  border-radius: 1rem 1rem 0 0 ;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(0deg, rgba(134,69,179,0.6839110644257703) 0%, rgba(82,0,149,0.639093137254902) 100%);
   box-shadow:0px 50px 100px 10px #582b78;
 }

}

`
const Wrapper = styled.div`
  display: flex;
  padding-top:9rem;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  .active {
    border-radius: 50%;
    &:hover,
    &:active {
      background: ${({ theme }) => theme.colors.lighttranparent};
    }
  }

  background: ${({ theme }) => theme.colors.bg};

  .side-panel {
    header {
      width: 100%;
      height: 6rem;

      padding: 1rem 1.5rem;
      div {
        color: ${({ theme }) => theme.colors.white};
        display: flex;
        align-items: center;
        justify-content: space-around;
        svg,
        h3 {
          cursor: pointer;
          font-size: 2.3rem;
          font-weight: 500;
          fill: ${({ theme }) => theme.colors.helper};
          color: ${({ theme }) => theme.colors.helper};
          &:hover,
          &active {
            fill: ${({ theme }) => theme.colors.text};
            color: ${({ theme }) => theme.colors.text};
          }
        }
      }
    }
    margin: 0rem 0 0 1.5rem;
    border-radius: 1rem;
    padding: 1rem;
    width: 21%;
    height: 97%;
    position: relative;
    background: ${({ theme }) => theme.colors.bg_normal};
    .item-holder {
      width: 100%;
      height: 90%;
      display: flex;
      flex-direction: column;

      .side-panel-item {
        border-radius: 1rem;
        display: flex;

        align-items: center;
        justify-content: flex-start;
        padding: 0.7rem;
        width: 100%;
        height: 8rem;
        box-sizing: border-box;
        margin: 0 0 1rem 0;
        background: ${({ theme }) => theme.colors.play};
        .pl-content {
          padding: 0 0 0 1rem;
          width: 80%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;

          h3 {
            color: white;
            font-size: 2rem;
            font-weight: 500;
            padding: 0;
            margin: 0;
          }
          p {
            font-size: 1.3rem;
            color: white;
            padding: 0;
            margin: 0;
          }
        }
        .pl-img {
          width: 20%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
            border-radius: 1rem;
          }
        }
      }
    }
  }
`;

export default Playlist;
