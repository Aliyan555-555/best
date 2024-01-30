import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import reducer from "../Reducer/Reducer";
const SongContext = createContext();

const SongProvider = ({ children }) => {
  const initialstate = { isError: false, isLoading: false, Songs: [] };
  const PORT = "http://localhost:5000"
  const [state, dispatch] = useReducer(reducer, initialstate);
  const [playlist, setplaylist] = useState([]);
  const inital = { isLoading: false, RecentlyPlay: [] };
  const reducer1 = (state, action) => {
    switch (action.type) {
      case "LOADING":
        return {
          isLoading: true,
          RecentlyPlay: [],
        };
      case "GET_RECENT":
        return {
          isLoading: false,
          RecentlyPlay: action.payload,
        };
      default:
        return state;
    }
  };
  const [RecentlyPlayed, setRecentlyPlay] = useReducer(reducer1, inital);

  const GetSongs = async () => {
    try {
      dispatch({
        type: "LOADING",
      });
      const res = await axios.get(`${PORT}/api/v1/song`);
      const product = await res.data;
      dispatch({
        type: "GET_DATA",
        payload: product,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const GetUserSong = async () => {
    try {
     
      const res = await axios.get(`${PORT}/api/v1/Playlist`);
      const playlist = await res.data;
      setplaylist(playlist);
    } catch (error) {
      console.log(error);
    }
  };

  const GetRecentlyPlay = async () => {
    try {
      const res = await axios.get(`${PORT}/api/v1/Recent`);
      const RecentlyPlay = await res.data;

      setRecentlyPlay({
        type: "GET_RECENT",
        payload: RecentlyPlay,
      });
    } catch (error) {}
  };

  const [User, setUser] = useState({});
  const GetUseData = async () => {
    try {
      const res = await axios.get(`${PORT}/api/v1/rootUser`);
      const user = await res.data;
      if (user) {
        setUser(user);
      }
    } catch (error) {}
  };
  const [Orgplaylist, setOrgplaylist] = useState([]);
  const OrgPlaylist = async () => {
    try {
      const res = await axios.get(`${PORT}/api/v1/OrgPlaylist`);
      const user = await res.data;
      setOrgplaylist(user);
    } catch (error) {
      console.log(error)
    }
  };

 const [NavProfile, setNavProfile] = useState(false);
  useEffect(() => {

      try {
   
        OrgPlaylist();
        GetUserSong();
        GetUseData();
        GetSongs();
        GetRecentlyPlay();
      } catch (error) {
        console.log(error);
      }
   
  },[]);

 

  return (
    <SongContext.Provider
      value={{
        state,
        PORT,
        playlist,
        RecentlyPlayed,
        GetRecentlyPlay,
        User,
        GetUserSong,
        Orgplaylist,
        OrgPlaylist,
        setNavProfile,
        NavProfile,
      }}
    >
      {children}
    </SongContext.Provider>
  );
};

const GlobalContext = () => {
  return useContext(SongContext);
};

export { SongProvider, SongContext, GlobalContext };
