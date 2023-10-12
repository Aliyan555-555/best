import { useState, useRef,useEffect} from "react";

import { RiForward10Line } from "react-icons/ri";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay,faDownload,faRotateLeft,faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "../Context/SongContext";

const MusicControl = ({ data, value }) => {

  const [Btn, setBtn] = useState(faPlay);
  const [url,seturl] =useState(data[0]?.song_url)

  const audio = new Audio(url);
  audio.load();
  const [audioStatus, setaudioStatus] = useState(false);
  const myref = useRef();
  const {GetRecentlyPlay}=GlobalContext()
 

  const PostRecentlyplayed=async()=>{
    const datasong={
      _id: data[0]._id,
      title: data[0].title,
      relise_date: data[0].relise_date,
      artist: data[0].artist,
      duration: data[0].duration,
      company: data[0].company,
      image_url: data[0].image_url,
      song_url: data[0].song_url,
      type: data[0].type,}
   try{
      await fetch("/Recentlyplayed",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",},body: JSON.stringify(datasong)
      })}catch (error) {}}
  const Play = () => {
    GetRecentlyPlay()
   try {
     myref.current.play();
     PostRecentlyplayed()
     setBtn(faPause);

     setaudioStatus(true);
   } catch (error) {
    console.log(error)
   }
  };
  const Pause = () => {
    GetRecentlyPlay()
    try {
      myref.current.pause();
      setBtn(faPlay);
      setaudioStatus(false);
    } catch (error) {
      console.log(error)
    }
  };

  const [currentTime1, setCurrentTime1] = useState("00:00");
  // console.log(data);

  const src = url;
  const setCurrentTime = setCurrentTime1;
  const ref = myref;
  const timeUpdate = (event) => {
    const minutes = Math.floor(event.target.currentTime / 60);
    const seconds = Math.floor(event.target.currentTime - minutes * 60);
    const currentTime =
      str_pad_left(minutes, "0", 2) + ":" + str_pad_left(seconds, "0", 2);
    setCurrentTime(currentTime);
  };
  const str_pad_left = (string, pad, length) => {
    return (new Array(length + 1).join(pad) + string).slice(-length);
  };
  let htmlTag = "";
  if (true) {
    htmlTag = (
      <audio src={src} ref={ref} id="audio" onTimeUpdate={timeUpdate} />
    );
  }

  const [progress, setProgress] = useState(parseInt(data[0]?.duration));
  const hendleProgress = (e) => {
    setProgress(e.target.value);
  };
  if (value) {
    document.getElementById("SongControl").style.bottom = "0%";
  }
 

  setTimeout(() => {
    try {
      let timer;
      let percent = 0;
      let audio2 = document.getElementById("audio");
      audio2.addEventListener("playing", function (_event) {
        var duration = _event.target.duration;
        advance(duration, audio2);
      });
      audio.addEventListener("pause", function (_event) {
        clearTimeout(timer);
      });
      var advance = function (duration, element) {
        let progress = document.getElementById("progress");
        let increment = 10 / duration;
        percent = Math.min(increment * element.currentTime * 10, 100);
        try {
          progress.style.width = percent + "%";
        } catch (error) {}
        // console.log(percent)

        startTimer(duration, element);
      };
      let startTimer = function (duration, element) {
        if (percent < 100) {
          timer = setTimeout(function () {
            advance(duration, element);
          }, 100);
        }
      };
    } catch (error) {}
  }, 5000);

  return (
    <Buttombar id="SongControl">
      <div className="song_info">
        <div className="img">
          <img src={data[0]?.image_url} alt="" />
        </div>
        <div className="info">
          <h3>{data[0]?.title}</h3>
          <p>{data[0]?.artist}</p>
        </div>
      </div>
      <div className="song_control">
      
      <span>
        <FontAwesomeIcon  icon={faRotateLeft} />
        </span>
        <span onClick={audioStatus ? Pause : Play}>
          {htmlTag}
          <FontAwesomeIcon icon={Btn} className="icon" />
        </span>
        <span>
        <FontAwesomeIcon icon={faRotateRight} />
        </span>
       
      </div>
      <div className="progress">
        <p>{currentTime1}</p>

        <div className="pro-con">
          <div className="progress-out" id="progress"></div>
        </div>
        <a href={url} download={url}>
        <FontAwesomeIcon icon={faDownload} />
        </a>
      </div>
    </Buttombar>
  );
};
const Buttombar = styled.section`
  color: ${({ theme }) => theme.colors.helper};
  transition: 1s;
  position: fixed;
  padding: 0.5rem;
  border-radius: 0rem 0rem 0 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  bottom: -50%;
  width: 100%;
  height: 9.5rem;
  background: ${({ theme }) => theme.colors.bg};
  .progress {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    width: 60%;
    height: 100%;
    a {
    
      padding: 1.4rem 1.5rem;
      border-radius: 50%;
      font-size: 2.5rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.white};
      text-decoration: none;
      &:hover,
      &:active{
        background:${({theme})=>theme.colors.hover};
      }
    }
    .pro-con {
      margin-top: 1rem;
      width: 75%;
      padding: 5px;

      .progress-out {
        border-right: 10px solid ${({ theme }) => theme.colors.hover};
        position: relative;
        width: 1px;
        height: 5px;
        background: ${({ theme }) => theme.colors.boder};
        transition: width 0.1s linear;
      }
    }
  }
  .song_control {
    height: 100%;
    width: 20%;

    font-size: 3rem;
    border-right: 2px solid white;
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: center;
    span {
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem 1.5rem;
      border-radius: 50%;

      .icon {
    
      }
    }
  }
  .song_info {
    
    height: 100%;

    width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-even;
    .img {
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      img {
        border-radius: 0.5rem;
        objectfit: cover;
        objectposition: center;
        width: 7rem;
        height: 7rem;
      }
    }
    .info {
      p {
        line-height: 1.5rem;
        font-size: 1.2rem;
        font-weight: 600;
      }
      h3 {
        font-size: 1.5rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }
`;

export default MusicControl;
