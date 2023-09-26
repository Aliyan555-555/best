import React from 'react'
import { useState } from 'react'
import { GlobalContext } from '../Context/SongContext'
import Loading from '../Deco/Loader'
import {styled} from 'styled-components'
import MusicItem from './MusicItem'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


const AllSongs = ({Heading}) => {
    const {state} = GlobalContext()
    const [Load,setLoad] = useState(true)
  setTimeout(() => {
    setLoad(false)
  }, 1);
  return (
    <Wrapper>
    <h2>{Heading}</h2>
    <div className="song_slider">
      <ul >
      <Swiper
      className='song-ul'
      spaceBetween={20}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
   {Load?<Loading/>:state.Songs.map((data,i)=>{
          return <SwiperSlide><li  id='li' key={i}  className='slider-work'> <MusicItem  data={data}/></li> </SwiperSlide> 
})
} 
  </Swiper>
    
    </ul>
    </div>
  
  </Wrapper>
  )

}
const Wrapper=styled.section`
width: auto;

padding: 4rem;
position: relative;
h2{
  padding: 2rem;
  color: ${({theme})=>theme.colors.text};
  text-align: left;
  font-size: 3.5rem;
  font-weight: 600;

}


.song-ul{
  
  margin: 2rem auto;
 
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap:wrap;
  height: 100%;
  
  #li{
    margin:1rem .6rem
  }
  }
 

`

export default AllSongs
