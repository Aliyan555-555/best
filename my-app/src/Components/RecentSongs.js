import React from 'react'
import   { useState }  from 'react'
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


 const [LastRecentSongs,setLastRecentSong]=useState([LastElem1,LastElem2,LastElem3,LastElem4])
const [Load,setLoad]=useState(true)
setTimeout(() => {
  setLoad(false)
}, 5000);

const Recent2=()=>{
  return (
    <><MusicItem  data={LastElem1}/>
    <MusicItem  data={LastElem2}/></>
  )
}
const Main=()=>{
 
try {
  

   if (LastElem1,LastElem2===undefined) {
      
       return (
         <>
         <h2>{tranding_h2}</h2>
         <div className="song_slider">
           <ul className='song-ul'>
      {Load?<Loading/>: <li><MusicItem  data={LastElem1}/></li>
     }</ul></div> </>)
   }
   if (LastElem1,LastElem2,LastElem3===undefined) {
       
       return (
         <>
         <h2>{tranding_h2}</h2>
         <div className="song_slider">
           <ul className='song-ul'>
      {Load?<Loading/>: <>
      <li><MusicItem  data={LastElem1}/></li>
      <li><MusicItem  data={LastElem2}/></li>
    
      
      </>
     }</ul></div> </>)
   }
   if (LastElem1,LastElem2,LastElem3,LastElem4===undefined) {
      
       return (
         <>
         <h2>{tranding_h2}</h2>
         <div className="song_slider">
           <ul className='song-ul'>
      {Load?<Loading/>: <>
      <li><MusicItem  data={LastElem1}/></li>
      <li><MusicItem  data={LastElem2}/></li>
      <li><MusicItem  data={LastElem3}/></li>
      
      
      </>
     }</ul></div> </>)
   }
   if (LastElem1,LastElem2,LastElem3,LastElem4) {
      
       return (
         <>
         <h2>{tranding_h2}</h2>
         <div className="song_slider">
           <ul className='song-ul'>
      {Load?<Loading/>: <>
     <li><MusicItem  data={LastElem1}/></li> 
     <li><MusicItem  data={LastElem2}/></li> 
     <li><MusicItem  data={LastElem3}/></li> 
     <li><MusicItem  data={LastElem4}/></li> 
      
      
      </>
     }</ul></div> </>)
   }
  } catch (error) {
  console.log(error)
  }
 
}

  return (
   
    <TrandeStyle>
    <Main/>
    <hr/>
    </TrandeStyle>
  )
}
const TrandeStyle=styled.section`
width: 100%;
padding-top:5rem;

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
 
  width: 65%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap:wrap;
  height: 100%;
  
  li{
    margin:1rem .6rem;
  }
  }
 

`

export default Tranding
