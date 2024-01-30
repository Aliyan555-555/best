import React from "react";
import { GlobalContext } from "../Context/SongContext";
import { styled } from "styled-components";
import MusicItem from "./MusicItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Wrapper } from "./AllSongs";

const LibraryPop = ({ itemlimet }) => {
  const { state,PORT } = GlobalContext();
  const length = state.Songs.filter((element) => element.type === "Pop");
  const after = length.length >= 5;
  const [item, setitem] = useState(itemlimet);
  const Window = () => {
    if (window.innerWidth <= 1100) {
      setitem(4);
    }
    if (window.innerWidth <= 850) {
      setitem(3);
    }
    if (window.innerWidth <= 650) {
      setitem(2.5);
    }
    if (window.innerWidth <= 550) {
      setitem(2);
    }
  };
  useEffect(() => {
    Window();
  });
  const PostOrg = async () => {
    const data = {
      _id: "6512fcefdbea232bfa2783a0",
      title: " Unholy",
      relise_date: 2023,
      artist: "Sam Smith ft. Kim Petras",
      duration: "2:45",
      company: "Cock studio",
      image_url:
        "https://gospeljingle.com/wp-content/uploads/2023/02/sam-smith-unholy-lyrics-ft-kim-p-500x281.jpg",
      song_url: "../song/Unholy.mp3",
      type: "Pop",
    };
    try {
      const res = await axios.post(`${PORT}/OrgPlaylist`, data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <h2>Pop</h2>
      <Swiper className="song-ul" spaceBetween={0} slidesPerView={item}>
        {state.Songs.filter((element) => element.type === "Pop").map(
          (data, i) => {
            return (
              <SwiperSlide key={i}>
                <li id="li" className="slider-work">
                  <MusicItem data={data} />
                </li>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </Wrapper>
  );
};
export default LibraryPop;
