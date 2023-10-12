import React from 'react'
import { useState,useEffect } from 'react'
import { GlobalContext } from '../Context/SongContext'
import Loading from '../Deco/Loader'
import {styled} from 'styled-components'
import MusicItem from './MusicItem'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


const AllSongs = ({Heading,itemlimet}) => {
  const [item,setitem]=useState(itemlimet)
  const Window=()=>{
if (window.innerWidth<=1100){
  setitem(4)
}
if (window.innerWidth<=850){
  setitem(3)
}
if (window.innerWidth<=650){
  setitem(2.5)
}
if (window.innerWidth<=550){
  setitem(2)
}
 
}
useEffect(() => {
Window()
});

    const {state} = GlobalContext()
    const [Load,setLoad] = useState(true)
  setTimeout(() => {
    setLoad(false)
  }, 1);
  return (
    <Wrapper>
    <h2>{Heading}</h2>
    <div>
      <ul >
      <Swiper
      className='song-ul'
      spaceBetween={20}
      slidesPerView={item}
     
    >
   {Load?<Loading/>:state.Songs.map((data,i)=>{
          return <SwiperSlide key={i} ><li  id='li'  className='slider-work'> <MusicItem  data={data}/></li> </SwiperSlide> 
})
} 
  </Swiper>
    
    </ul>
    </div>
  
  </Wrapper>
  )

}
 export const Wrapper=styled.section`
width: auto;
padding: 2rem 4rem;
position: relative;
h2{
  padding: 1rem 2rem;
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
  @media only screen and (max-width: 450px) {
    padding: .5rem;
    h2{
      letter-spacing: -0.5px;
      font-size:3rem;
      padding: 3rem .5rem !important;
    }
  }

`

export default AllSongs
