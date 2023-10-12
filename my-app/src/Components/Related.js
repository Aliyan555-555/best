import React from "react";
import { GlobalContext } from "../Context/SongContext";
import { styled } from "styled-components";
import MusicItem from "./MusicItem";

const Related = ({ artist }) => {
  const { state } = GlobalContext();

  // const artiste = state.Songs.map((data) => data.artist);
  // const j=state.Songs.filter((element) => element.artist === artist[0]).map((data) => data)

  return (
    <Wrapper>
      {state.Songs.filter((element) => element.artist === artist[0]).map(
        (data, i) => {
          return (
            <li id="li" key={i} className="slider-work">
              {" "}
              <MusicItem data={data} />
            </li>
          );
        }
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;

`;

export default Related;
