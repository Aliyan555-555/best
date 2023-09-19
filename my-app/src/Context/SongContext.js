import {createContext,useContext,useEffect,useReducer,useState,} from "react";
import axios from "axios";
import reducer from "../Reducer/Reducer";
const SongContext = createContext();

const SongProvider = ({ children }) => {
  const API="/api/v1/songs"
  const initialstate = { isError: false, isLoading: false, Songs: [] ,};
  const [state, dispatch] = useReducer(reducer, initialstate);
  const [playlist,setplaylist]=useState([])
  const inital={isLoading:false,RecentlyPlay:[]}
  const reducer1=(state,action)=>{
   switch (action.type) {
    case "LOADING":
      return {
        isLoading:true,
        RecentlyPlay:[]
      }
   case "GET_RECENT":
    return {
      isLoading:false,
      RecentlyPlay:action.payload
    }
    default:
      return state

   } 
  }
  const [RecentlyPlayed,setRecentlyPlay]=useReducer(reducer1,inital)

const GetSongs= async ()=>{
 try {
  dispatch({
    type: "LOADING",
  })
  const res =await axios.get('/api/v1/song');
  const product=await res.data;
dispatch({
  type: "GET_DATA",
  payload: product,
})
 
 } catch (error) {
  console.log(error)
 }
}
const GetUserSong=async()=>{
  try {
    dispatch({
      type: "LOADING",
    })
    const res =await axios.get('/api/v1/Playlist');
    const playlist=await res.data;
    setplaylist(playlist);
   
    
  } catch (error) {
    console.log(error)
  }
}

const GetRecentlyPlay=async()=>{
  try {
    const res =await axios.get('/api/v1/Recent')
    const RecentlyPlay=await res.data;
    console.log(RecentlyPlay)
   setRecentlyPlay({
    type:"GET_RECENT",
    payload:RecentlyPlay
   })

  } catch (error) {
    
  }

}
useEffect(() => {
  GetUserSong()
  GetSongs()
   GetRecentlyPlay()
}, []);





  return (
    <SongContext.Provider value={{ state ,playlist,RecentlyPlayed,GetRecentlyPlay}}>{children}</SongContext.Provider>
  );
};

const GlobalContext = () => {
  return useContext(SongContext);
};

export { SongProvider, SongContext, GlobalContext };
