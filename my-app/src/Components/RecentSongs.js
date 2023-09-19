import React, { useState }  from 'react'
import { styled } from 'styled-components'
import { GlobalContext } from '../Context/SongContext'
import MusicItem from './MusicItem'
import Loading from '../Deco/Loader'

const Tranding = ({tranding_h2}) => {
const {RecentlyPlayed}=GlobalContext();

  const LastElem1=RecentlyPlayed.RecentlyPlay[RecentlyPlayed.RecentlyPlay.length - 1]
  const LastElem2=RecentlyPlayed.RecentlyPlay[RecentlyPlayed.RecentlyPlay.length - 2]
  const LastElem3=RecentlyPlayed.RecentlyPlay[RecentlyPlayed.RecentlyPlay.length - 3]
  const LastElem4=RecentlyPlayed.RecentlyPlay[RecentlyPlayed.RecentlyPlay.length - 4]

    console.log(LastElem1)
    console.log(LastElem2)
    console.log(LastElem3)

 const [LastRecentSongs,setLastRecentSong]=useState([])
const [Load,setLoad]=useState(true)
setTimeout(() => {
  setLoad(false)
}, 5000);

const Main=()=>{
  try {
  
   if (LastElem1||LastElem2||LastElem3||LastElem4) {
       setLastRecentSong([LastElem3,LastElem2,LastElem4,LastElem1])
       return (
         <>
         <h2>{tranding_h2}</h2>
         <div className="song_slider">
           <ul className='song-ul'>
      {Load?<Loading/>:LastRecentSongs.map((data,i)=>{
       // console.log(data)
         return <li  id='li' key={i} className='slider-work'> <MusicItem  data={data}/></li>
     })}</ul></div> </>)
   }


} catch (error) {
    console.log("Recent-catch")
  }
}

  return (
   
    <TrandeStyle>
    <Main/>
    </TrandeStyle>
  )
}
const TrandeStyle=styled.section`
width: auto;
position: relative;
h2{
  color: ${({theme})=>theme.colors.bg};
  text-align: left;
  font-size: 3.5rem;
  font-weight: 600;
  margin: 0rem 9rem;
}


.song-ul{
  
  margin: 5rem auto;
 
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap:wrap;
  height: 100%;
  
  #li{
    margin:1rem .6rem
  }
  }
 

`

export default Tranding
