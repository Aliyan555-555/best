import React, { useState,useEffect} from "react";
import { styled } from "styled-components";
import { GlobalContext } from "../Context/SongContext";
import { useParams } from "react-router-dom";
import Button from "../Deco/Button";
import { AiFillHeart } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import MusicControl from "../Deco/MusicControl";
import Related from "../Components/Related";
const SingleProduct = () => {
  const { state,GetUserSong } = GlobalContext();
  const { id } = useParams();
  const [Status, setStatus] = useState("Play");
  const [Liked, setLiked] = useState(false);

  const [value, setvalue] = useState(false);
  const Data = state.Songs.filter((element) => element._id === id);
  const MusicData = Data.map((DATA) => DATA);
  const artiste = Data.map((DATA) => DATA.artist);
  useEffect(() =>{
    window.scroll(0,0);
    document.title= state.Songs.filter((element) => element._id === id).map((data)=>data.title)
  }, []);

  const Like = async (e) => {
  if (Liked) {
    document.getElementById("Like").style.color = "red";
    setLiked(false);
  }else{
    document.getElementById("Like").style.color = "black";
    setLiked(true);
  }
  }
  const PostLikeData = async (e) => {


    e.preventDefault();
   
    document.getElementById("Like").style.color = "red";
    
    try {
      const res = await fetch("/addsong", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: MusicData[0]._id,
          title: MusicData[0].title,
          relise_date: MusicData[0].relise_date,
          artist: MusicData[0].artist,
          duration: MusicData[0].duration,
          company: MusicData[0].company,
          image_url: MusicData[0].image_url,
          song_url: MusicData[0].song_url,
          type: MusicData[0].type,
        }),
      });
     

      GetUserSong()
      GetUserSong()
    } catch (error) {
      console.log(error);
    }

  };



  return (
    <Parent>
      <form method="POST">
        {state.Songs.filter((element) => element._id === id).map((data) => (
          <Wrapper key={data._id}>
            <div className="single-left">
              <img src={data.image_url} alt={data.title} />
            </div>
            <div className="single_music_info">
              <div className="info_left">
                <h2>{data.title}</h2>
                <p>Artist :{data.artist}</p>
                <p className="releas_d_p">Release on :{data.relise_date}</p>
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    setvalue(true);
                  }}
                >
                  <Button btn_text={Status} />
                </div>
              </div>
              <div className="info_right" >
                <AiFillHeart id="Like" className="icon" onClick={PostLikeData}/>

                <BiDotsVerticalRounded  className="icon" />
               
              </div>
            </div>
          </Wrapper>
        ))}
      </form>
      <Related artist={artiste} />
      <MusicControl data={MusicData} value={value} />
    </Parent>
  );
};
const Parent  = styled.div`
width:100%;
position:relative;
top:7.3rem;
height: 90vh;

padding: 5rem 0;
overflow: hidden;
`
const Wrapper = styled.section`
  margin: 0rem auto 0 auto;
  display: flex;

  align-items: center;
  justify-content: center;
  width: 70%;
  background: ${({ theme }) => theme.colors.white};
  height: 30rem;

  .single_music_info {
    width: 70%;
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: row;

    .info_right {
      position: relative;
      padding: 1.8rem;
      box-sizing: border-box;
      display: flex;
      justify-content: flex-end;
      width: 25%;
      height: 100%;

      .Dropdown {
        cursor: pointer;
        display: none;
        z-index: 100000000000;
        position: absolute;
        top: 7rem;
        right: -6rem;
        width: 13rem;

        height: 8rem;
        button {
          background: white;
          border: 0;
          outline: 0;
          width: 100%;
          height: 50%;
          &:hover,
          &:active {
            background: ${({ theme }) => theme.colors.bg_light};
            color: ;
          }
        }
      }
      .icon {
        cursor: pointer;
        &:hover,
        &:active {
          background: ${({ theme }) => theme.colors.bg_light};
          color: ;
        }
        font-size: 4.7rem;
        border-radius: 50%;
        padding: 10px;

        margin: 0 1rem 0 0;
        color: ${({ theme }) => theme.colors.hover};

        font-weight: 300;
      }
    }

    .info_left {
      width: 75%;
      padding: 0 0 0 2rem;
      height: 100%;
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;

      h2 {
        text-align: start;
        font-size: 3rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.heading};
      }
      .releas_d_p {
        font-size: 1.3rem;
        font-weight: 400;
      }
      p {
        font-size: 1.6rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.para};
      }
    }
  }

  .single-left {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 100%;

    img {
      width: 25rem;
      height: 25rem;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.media.tab2}) {
    width: 80%;
  }
  @media only screen and (max-width: 800px) {
    width: 90%;
  }
  @media only screen and (max-width: 700px) {
    height: 55rem;
    flex-direction: column;
    .single_music_info {
      width: 100%;
      height: 50%;
      flex-direction: column;
      .info_left {
        text-align: center;
        height: 65%;
        width: 100%;
        align-items: center;
      }
      .info_right {
        width: 100%;
        height: 35%;
      }
    }

    .single-left {
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 50%;
      img {
        border-radius: 50%;
        width: 17rem;
        height: 17rem;
      }
    }
  }
`;
export default SingleProduct;
