import React from "react";
import { useState,useEffect } from "react";
import { styled } from "styled-components";
import { GlobalContext } from "../Context/SongContext";
import MusicItem from "./MusicItem";
import Loading from "../Deco/Loader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Wrapper } from "./AllSongs";
// Import Swiper styles
import "swiper/css";

const Tranding = ({ tranding_h2 }) => {
  const { RecentlyPlayed } = GlobalContext();

  const LastElem1 =
    RecentlyPlayed.RecentlyPlay[RecentlyPlayed.RecentlyPlay.length - 1];
  const LastElem2 =
    RecentlyPlayed.RecentlyPlay[RecentlyPlayed.RecentlyPlay.length - 2];
  const LastElem3 =
    RecentlyPlayed.RecentlyPlay[RecentlyPlayed.RecentlyPlay.length - 3];
  const LastElem4 =
    RecentlyPlayed.RecentlyPlay[RecentlyPlayed.RecentlyPlay.length - 4];
  const LastElem5 =
    RecentlyPlayed.RecentlyPlay[RecentlyPlayed.RecentlyPlay.length - 5];
  const LastElem6 =
    RecentlyPlayed.RecentlyPlay[RecentlyPlayed.RecentlyPlay.length - 6];

  const [LastRecentSongs, setLastRecentSong] = useState([
    LastElem1,
    LastElem2,
    LastElem3,
    LastElem4,
  ]);

  const [Load, setLoad] = useState(true);
  setTimeout(() => {
    setLoad(false);
  }, 2000);

  const Recent2 = () => {
    return (
      <>
        <MusicItem data={LastElem1} />
        <MusicItem data={LastElem2} />
      </>
    );
  };
  const [item,setitem]=useState(4.5)
  const Window=()=>{
    if (window.innerWidth<=1100){
      setitem(4)
    }
    if (window.innerWidth<=850){
      setitem(3)
    }
    if (window.innerWidth<=650){
      setitem(2.5)
    }
    if (window.innerWidth<=550){
      setitem(2)
    }
     
    }
    useEffect(() => {
    Window()
    });
    const l=LastRecentSongs.length>item
 
  const Main = () => {
    try {

      if ((LastElem1, LastElem2 === undefined)) {
        return (
          <>
            <h2>{tranding_h2}</h2>
            <ul>
              <Swiper className="song-ul" spaceBetween={0} slidesPerView={l?item:LastRecentSongs.length}>
                {Load ? (
                  <Loading />
                ) : (
                  <SwiperSlide>
                    <li id="li">
                      <MusicItem data={LastElem1} />
                    </li>
                  </SwiperSlide>
                )}
              </Swiper>
            </ul>{" "}
          </>
        );
      }
      if ((LastElem1, LastElem2, LastElem3 === undefined)) {
        return (
          <>
            <h2>{tranding_h2}</h2>
            <ul>
              <Swiper className="song-ul" spaceBetween={0} slidesPerView={l?item:LastRecentSongs.length}>
                {Load ? (
                  <Loading />
                ) : (
                  <>
                    <SwiperSlide>
                      <li id="li">
                        <MusicItem data={LastElem1} />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li id="li">
                        <MusicItem data={LastElem2} />
                      </li>
                    </SwiperSlide>
                  </>
                )}
              </Swiper>
            </ul>{" "}
          </>
        );
      }
      if ((LastElem1, LastElem2, LastElem3, LastElem4 === undefined)) {
        return (
          <>
            <h2>{tranding_h2}</h2>
            <ul>
              <Swiper className="song-ul" spaceBetween={0} slidesPerView={l?item:LastRecentSongs.length}>
                {Load ? (
                  <Loading />
                ) : (
                  <>
                    <SwiperSlide>
                      <li id="li">
                        <MusicItem data={LastElem1} />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li id="li">
                        <MusicItem data={LastElem2} />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li id="li">
                        <MusicItem data={LastElem3} />
                      </li>
                    </SwiperSlide>
                  </>
                )}
              </Swiper>
            </ul>{" "}
          </>
        );
      }
      if (
        (LastElem1, LastElem2, LastElem3, LastElem4, !LastElem5, !LastElem6)
      ) {
        return (
          <>
            <h2>{tranding_h2}</h2>
            <ul>
              <Swiper className="song-ul" spaceBetween={0} slidesPerView={l?item:LastRecentSongs.length}>
                {Load ? (
                  <Loading />
                ) : (
                  <>
                    <SwiperSlide>
                      <li id="li">
                        <MusicItem data={LastElem1} />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li id="li">
                        <MusicItem data={LastElem2} />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li id="li">
                        <MusicItem data={LastElem4} />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li id="li">
                        <MusicItem data={LastElem3} />
                      </li>
                    </SwiperSlide>
                  </>
                )}
              </Swiper>
            </ul>{" "}
          </>
        );
      }
      if ((LastElem1, LastElem2, LastElem3, LastElem4, LastElem5, !LastElem6)) {
        return (
          <>
            <h2>{tranding_h2}</h2>
            <ul>
              <Swiper className="song-ul" spaceBetween={0} slidesPerView={l?item:LastRecentSongs.length}>
                {Load ? (
                  <Loading />
                ) : (
                  <>
                    <SwiperSlide>
                      <li id="li">
                        <MusicItem data={LastElem1} />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li id="li">
                        <MusicItem data={LastElem2} />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li id="li">
                        <MusicItem data={LastElem3} />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li id="li">
                        <MusicItem data={LastElem4} />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li id="li">
                        <MusicItem data={LastElem5} />
                      </li>
                    </SwiperSlide>
                  </>
                )}
              </Swiper>
            </ul>{" "}
          </>
        );
      }
      if ((LastElem1, LastElem2, LastElem3, LastElem4, LastElem5, LastElem6)) {
        return (
          <>
            <h2>{tranding_h2}</h2>
            <ul>
              <Swiper className="song-ul" spaceBetween={0} slidesPerView={l?item:LastRecentSongs.length}>
                {Load ? (
                  <Loading />
                ) : (
                  <>
                    <SwiperSlide>
                      <li id="li">
                        <MusicItem data={LastElem1} />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li id="li">
                        <MusicItem data={LastElem2} />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li id="li">
                        <MusicItem data={LastElem3} />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li id="li">
                        <MusicItem data={LastElem4} />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li id="li">
                        <MusicItem data={LastElem5} />
                      </li>
                    </SwiperSlide>
                    <SwiperSlide>
                      <li id="li">
                        <MusicItem data={LastElem6} />
                      </li>
                    </SwiperSlide>
                  </>
                )}
              </Swiper>
            </ul>{" "}
          </>
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
const RenderCheck=()=>{
  if (LastElem1===undefined){
    return  <></>
    
  } else {
    return(
    <Wrapper id="Recent">
    <Main />
    </Wrapper>)
  }
}
  return (
   <RenderCheck/>
  );
};


export default Tranding;
