import React from 'react'
import   { useState }  from 'react'
import { styled } from 'styled-components'
import { GlobalContext } from '../Context/SongContext'
import MusicItem from './MusicItem'
import Loading from '../Deco/Loader'
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';

const Tranding = ({tranding_h2}) => {
const {RecentlyPlayed}=GlobalContext();

  const LastElem1=RecentlyPlayed.RecentlyPlay[RecentlyPlayed.RecentlyPlay.length - 1]
  const LastElem2=RecentlyPlayed.RecentlyPlay[RecentlyPlayed.RecentlyPlay.length - 2]
  const LastElem3=RecentlyPlayed.RecentlyPlay[RecentlyPlayed.RecentlyPlay.length - 3]
  const LastElem4=RecentlyPlayed.RecentlyPlay[RecentlyPlayed.RecentlyPlay.length - 4]
  const LastElem5=RecentlyPlayed.RecentlyPlay[RecentlyPlayed.RecentlyPlay.length - 5]
  const LastElem6=RecentlyPlayed.RecentlyPlay[RecentlyPlayed.RecentlyPlay.length - 6]


 const [LastRecentSongs,setLastRecentSong]=useState([LastElem1,LastElem2,LastElem3,LastElem4])
const [Load,setLoad]=useState(true)
setTimeout(() => {
  setLoad(false)
}, 2000);

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
        
           <ul >
        <Swiper
        className='song-ul'
      spaceBetween={20}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {Load?<Loading/>:<SwiperSlide><li><MusicItem  data={LastElem1}/></li></SwiperSlide>
     }</Swiper></ul> </>)
   }
   if (LastElem1,LastElem2,LastElem3===undefined) {
       
       return (
         <>
         <h2>{tranding_h2}</h2>
      
           <ul>
        <Swiper
        className='song-ul'
      spaceBetween={20}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {Load?<Loading/>: <>
      <SwiperSlide><li><MusicItem  data={LastElem1}/></li></SwiperSlide>
      <SwiperSlide><li><MusicItem  data={LastElem2}/></li></SwiperSlide>
    
      
      </>
     }</Swiper></ul> </>)
   }
   if (LastElem1,LastElem2,LastElem3,LastElem4===undefined) {
      
       return (
         <>
         <h2>{tranding_h2}</h2>
    
           <ul>
           <Swiper
        className='song-ul'
      spaceBetween={20}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {Load?<Loading/>: <>
      <SwiperSlide><li><MusicItem  data={LastElem1}/></li></SwiperSlide>
      <SwiperSlide><li><MusicItem  data={LastElem2}/></li></SwiperSlide>
      <SwiperSlide><li><MusicItem  data={LastElem3}/></li></SwiperSlide>
      
      
      </>
     }</Swiper></ul> </>)
   }
   if (LastElem1,LastElem2,LastElem3,LastElem4,!LastElem5,!LastElem6) {
      
       return (
         <>
         <h2>{tranding_h2}</h2>
      
           <ul>
           <Swiper
        className='song-ul'
      spaceBetween={10}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

      {Load?<Loading/>: <>
     <SwiperSlide><li><MusicItem  data={LastElem1}/></li></SwiperSlide> 
     <SwiperSlide><li><MusicItem  data={LastElem2}/></li></SwiperSlide> 
     <SwiperSlide><li><MusicItem  data={LastElem4}/></li></SwiperSlide> 
     <SwiperSlide><li><MusicItem  data={LastElem3}/></li></SwiperSlide> 
      
      
      </>
     }</Swiper></ul> </>)
   }
   if (LastElem1,LastElem2,LastElem3,LastElem4,LastElem5,!LastElem6) {
      
    return (
      <>
      <h2>{tranding_h2}</h2>
   
        <ul>
        <Swiper
     className='song-ul'
   spaceBetween={10}
   slidesPerView={4}
   onSlideChange={() => console.log('slide change')}
   onSwiper={(swiper) => console.log(swiper)}
 >

   {Load?<Loading/>:<>
  <SwiperSlide><li><MusicItem  data={LastElem1}/></li></SwiperSlide> 
  <SwiperSlide><li><MusicItem  data={LastElem2}/></li></SwiperSlide> 
  <SwiperSlide><li><MusicItem  data={LastElem3}/></li></SwiperSlide> 
  <SwiperSlide><li><MusicItem  data={LastElem4}/></li></SwiperSlide> 
  <SwiperSlide><li><MusicItem  data={LastElem5}/></li></SwiperSlide> 
   
   
   </>
  }</Swiper></ul> </>)
}
   if (LastElem1,LastElem2,LastElem3,LastElem4,LastElem5,LastElem6) {
    return (
      <>
      <h2>{tranding_h2}</h2>
   
        <ul>
        <Swiper
     className='song-ul'
   spaceBetween={10}
   slidesPerView={4}
   onSlideChange={() => console.log('slide change')}
   onSwiper={(swiper) => console.log(swiper)}
 >

   {Load?<Loading/>:<>
  <SwiperSlide><li><MusicItem  data={LastElem1}/></li></SwiperSlide> 
  <SwiperSlide><li><MusicItem  data={LastElem2}/></li></SwiperSlide> 
  <SwiperSlide><li><MusicItem  data={LastElem3}/></li></SwiperSlide> 
  <SwiperSlide><li><MusicItem  data={LastElem4}/></li></SwiperSlide> 
  <SwiperSlide><li><MusicItem  data={LastElem5}/></li></SwiperSlide> 
  <SwiperSlide><li><MusicItem  data={LastElem6}/></li></SwiperSlide> 
   
   
   </>
  }</Swiper></ul> </>)
}
  } catch (error) {
  console.log(error)
  }
 
}

  return (
   
    <TrandeStyle  id='Recent'>
      
    <Main/>

    </TrandeStyle>
  )
}
const TrandeStyle=styled.section`
width: 100%;
height: 65%;
padding: 4rem;
display: flex;

h2{
  padding: 3rem 1rem;
  font-weight:600;
  text-align:left;
  font-size:3.5rem;
  color: ${({theme})=>theme.colors.text}}
flex-direction:column;
ul{

  gap:1rem;
  display: flex;
}



`

export default Tranding
