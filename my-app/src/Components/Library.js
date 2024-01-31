import React from "react";
import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Cookies from "js-cookie";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { PiMagnifyingGlassFill } from "react-icons/pi";
import Libraryitem from "../Deco/LibraryItem";
import LibraryHome from "./LibraryHome";
import LibraryLike from "./LibraryLike";
import ToogleLibraryitem from "../Deco/ToogleLibraryitem";
import { GlobalContext } from "../Context/SongContext";

const LeftRender = ({Toogle,hendleToogle,ToogleRef,setitemlimet,Renderhendle,home,Hendleserch,search,ContextClick,LibraryContext,LibraryContextDisplay,PinPlaylist,PinLike,LibraryContextY,LibraryContextX,  pinlike,pinPlaylist,likeRender,playlistRender,orgplay,likeplaylist,Profile,Activeprofile,Render,setNavProfile,NavProfile,playlist,setorgplay,setlikeplaylist,sethome,setsearch,setProfile,Orgplaylist,setpinPlaylist,setpinlike,itemlimet,}) => {
  if (Toogle) {
    const hendle = () => {};

    const r = window.innerWidth <= 650;
    const p = r ? hendle : hendleToogle;
    if (ToogleRef.current) {
      ToogleRef.current.style.width = "92%";
    }

    // setitemlimet(5.5);

    return (
      <ToogleMain>
        <div className="Toogle-navigation">
          <button onClick={Renderhendle}>
            {home ? <AiFillHome /> : <AiOutlineHome />}
          </button>
          <button onClick={Hendleserch}>
            {search ? <PiMagnifyingGlassFill /> : <FaMagnifyingGlass />}
          </button>
        </div>
        <div
          className="Toogle-library"
          onClick={ContextClick}
          onContextMenu={LibraryContext}
        >
          <PlaylistContext
            style={{
              top: LibraryContextY,
              left: LibraryContextX,
              display: LibraryContextDisplay,
            }}
          >
            <li onClick={PinPlaylist}>
              {pinPlaylist ? "Unpin Playlist" : "Pin Playlist"}
            </li>
            <li onClick={PinLike}>{pinlike ? "Unpin Like" : "Pin Like"}</li>
          </PlaylistContext>
          <div className="Toogle-library-header" onClick={p}>
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
          </div>
          <div className="Toogle-library-content">
            {pinlike ? (
              <ToogleLibraryitem like={true} likeRender={likeRender} />
            ) : (
              ""
            )}
            {pinPlaylist ? (
              Orgplaylist?.length > 0 ? (
                <ToogleLibraryitem like={false} likeRender={playlistRender} />
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </div>
        </div>
      </ToogleMain>
    );
  } else {
    setitemlimet(4.5);
    ToogleRef.current.style.width = "78%";
    return (
      <div className="Left">
        <div className="navigate">
          <button onClick={Renderhendle}>
            {home ? <AiFillHome /> : <AiOutlineHome />}
            <p>Home</p>
          </button>
          <button onClick={Hendleserch}>
            {search ? <PiMagnifyingGlassFill /> : <FaMagnifyingGlass />}
            <p>Search</p>
          </button>
        </div>
        <div
          className="library"
          onContextMenu={LibraryContext}
          onClick={ContextClick}
        >
          <PlaylistContext
            style={{
              top: LibraryContextY,
              left: LibraryContextX,
              display: LibraryContextDisplay,
            }}
          >
            <li onClick={PinPlaylist}>
              {pinPlaylist ? "Unpin Playlist" : "Pin Playlist"}
            </li>
            <li onClick={PinLike}>{pinlike ? "Unpin Like" : "Pin Like"}</li>
          </PlaylistContext>
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
          </div>
          <div className="library-content">
            {pinlike ? <Libraryitem like={true} likeRender={likeRender} /> : ""}
            {pinPlaylist ? (
              Orgplaylist?.length != 0 ? (
                <Libraryitem like={false} likeRender={playlistRender} />
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
};

const Library = () => {
  const { Orgplaylist, setNavProfile, NavProfile, playlist } = GlobalContext();
  const ToogleRef = useRef();
  const [home, sethome] = useState(true);
  const [search, setsearch] = useState(false);
  const [likeplaylist, setlikeplaylist] = useState(false);
  const [orgplay, setorgplay] = useState(false);
  const [itemlimet, setitemlimet] = useState(4.5);
  const [pinPlaylist, setpinPlaylist] = useState(true);
  const [pinlike, setpinlike] = useState(true);
  const [Profile, setProfile] = useState(false);
  const Render = () => {
    if (home && !search && !likeplaylist && !orgplay) {
      return <LibraryHome itemlimet={itemlimet} setitemlimet={setitemlimet} />;
    }
    if (search && !home && !likeplaylist && !orgplay) {
      return <LibraryLike />;
    }

    if (likeplaylist && !home && !search && !orgplay) {
      return <LibraryLike like={true} />;
    }
    if (orgplay && !likeplaylist && !home && !search) {
      return <LibraryLike like={false} />;
    }
    if (Profile && !orgplay && !likeplaylist && !home && !search) {
      return <LibraryLike like={false} Profile={Profile} />;
    }
  };
  const Hendleserch = () => {
    if (search) {
      setsearch(true);
    } else {
      setNavProfile(false);
      setProfile(false);
      setorgplay(false);
      setlikeplaylist(false);
      sethome(false);
      setsearch(true);
    }
  };
  const Renderhendle = () => {
    if (home) {
      sethome(true);
    } else {
      setNavProfile(false);
      sethome(true);
      setProfile(false);
      setorgplay(false);
      setlikeplaylist(false);
      setsearch(false);
    }
  };
  const likeRender = () => {
    if (likeplaylist) {
      setlikeplaylist(true);
    } else {
      setNavProfile(false);
      setorgplay(false);
      setProfile(false);
      setlikeplaylist(true);
      setsearch(false);
      sethome(false);
    }
  };
  const playlistRender = () => {
    if (orgplay) {
      setorgplay(true);
    } else {
      setNavProfile(false);
      setProfile(false);
      setorgplay(true);
      setlikeplaylist(false);
      setsearch(false);
      sethome(false);
    }
  };
  const Activeprofile = () => {
    if (Profile) {
      setProfile(true);
    } else {
      setNavProfile(true);
      setProfile(true);
      setorgplay(false);
      setlikeplaylist(false);
      setsearch(false);
      sethome(false);
    }
  };
  useEffect(() => {
    if (NavProfile) {
      Activeprofile();
    }
  });

  const [Toogle, setToogle] = useState(true);
  const hendleToogle = () => {
    if (Toogle) {
      setToogle(false);
    } else {
      setToogle(true);
    }
  };

  Cookies.set("pinlike", pinlike);
  Cookies.set("pinPlaylist", pinPlaylist);
  const [LibraryContextY, setLibrayContextY] = useState();
  const [LibraryContextX, setLibrayContextX] = useState();
  const [LibraryContextDisplay, setLibrayContextDisplay] = useState("none");

  const PinPlaylist = async (e) => {
    e.preventDefault();
    if (pinPlaylist) {
      setpinPlaylist(false);
      await Cookies.remove("pinPlaylist");
      await Cookies.set("pinPlaylist", pinPlaylist);
    } else {
      await Cookies.remove("pinPlaylist");
      await Cookies.set("pinPlaylist", pinPlaylist);
      setpinPlaylist(true);
    }
    setLibrayContextDisplay("none");
  };
  const PinLike = (e) => {
    e.preventDefault();
    if (pinlike) {
      setpinlike(false);
    } else {
      setpinlike(true);
    }
    setLibrayContextDisplay("none");
  };
  // eslint-disable-next-line
  const [contextDisplay, setcontextDisplay] = useState("none");
  const ContextClick = (e) => {
    e.preventDefault();
    if (LibraryContextDisplay === "flex") {
      setLibrayContextDisplay("none");
    } else {
      setLibrayContextDisplay("none");
    }
  };
  const LibraryContext = (e) => {
    e.preventDefault();

    setLibrayContextX(e.pageX + "px");
    setLibrayContextY(e.pageY + "px");

    if (contextDisplay === "flex") {
      setLibrayContextDisplay("none");
    } else {
      setLibrayContextDisplay("flex");
    }
  };

  // const Context=(e)=>{
  // e.preventDefault()

  // setContextY(e.pageY + "px")
  // setContextX(e.pageX + "px")
  // if (contextDisplay==='flex'){
  //   setcontextDisplay('none')
  // } else {

  //   setcontextDisplay('flex')
  //   setLibrayContextDisplay("none")
  // }

  // }
  return (
    <Wrapper>
      <LeftRender
        Toogle={Toogle}
        hendleToogle={hendleToogle}
        ToogleRef={ToogleRef}
        setitemlimet={setitemlimet}
        Renderhendle={Renderhendle}
        home={home}
        Hendleserch={Hendleserch}
        search={search}
        ContextClick={ContextClick}
        LibraryContext={LibraryContext}
        LibraryContextDisplay={LibraryContextDisplay}
        PinPlaylist={PinPlaylist}
        PinLike={PinLike}
        pinlike={pinlike}
        pinPlaylist={pinPlaylist}
        likeRender={likeRender}
        playlistRender={playlistRender}
        orgplay={orgplay}
        likeplaylist={likeplaylist}
        Profile={Profile}
        Activeprofile={Activeprofile}
        Render={Render}
        setNavProfile={setNavProfile}
        NavProfile={NavProfile}
        playlist={playlist}
        setorgplay={setorgplay}
        setlikeplaylist={setlikeplaylist}
        sethome={sethome}
        setsearch={setsearch}
        setProfile={setProfile}
        Orgplaylist={Orgplaylist}
        setpinPlaylist={setpinPlaylist}
        setpinlike={setpinlike}
        itemlimet={itemlimet}
        LibraryContextX={LibraryContextX}
        LibraryContextY={LibraryContextY}
      />

      <div ref={ToogleRef} className="Right">
        <div className="content">
          <Render />
        </div>
      </div>
    </Wrapper>
  );
};

export const PlaylistContext = styled.div`
  width: 17rem;
  padding: 0.5rem;
  z-index: 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
  border-radius: 0.5rem;
  display: none;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  background: #282828;
  position: absolute;
  li {
    cursor: pointer;
    width: 100%;
    font-size: 1.5rem;
    padding: 1rem;
    color: white;
    &:hover,
    &:active {
      background: rgba(255, 255, 255, 0.19);
    }
  }
`;
const ToogleMain = styled.div`
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 1rem;
  width: 10rem;
  gap: 1rem;
  height: 100%;

  .Toogle-library {
    background: black;
    width: 100%;
    padding: 0.5rem;
    height: 71%;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    .Toogle-library-content {
      margin-top: 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .Toogle-library-header {
      border-radius: 0.7rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 17%;
      &:hover,
      &active {
        background: rgba(255, 255, 255, 0.13);
      }
      svg {
        color: black;
        fill: white;
      }
    }
  }
  .Toogle-navigation {
    background: #000;
    width: 100%;
    height: 23%;
    padding: 0.5rem;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    button {
      display: flex;
      outline: none;
      border: none;
      align-items: center;
      justify-content: center;
      background: #000;
      width: 100%;
      height: 50%;
      font-size: 3rem;
      border-radius: 0.7rem;
      color: white;
      &:hover,
      &active {
        background: rgba(255, 255, 255, 0.13);
      }
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 6rem;
    gap: 0.5rem;
    margin: 0.5rem;
  }
`;
const Wrapper = styled.section`
  width: 100%;
  height: 95vh;
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
      button{
        display: flex;
        border-radius: 1.5rem;
        gap: 2rem;
        padding: 2rem;
        align-items: center;
        justify-content: flex-start;
        background: #000;
        outline: none;
        border: none;
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
        justify-content: flex-start;
        padding: 2.5rem;
        p {
          padding: 1rem;
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

    width: 92%;
    height: 97%;
    display: flex;
    flex-direction: column;
    ::-webkit-scrollbar-track {
      background: transparent;
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
    .Left .navigate button {
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
