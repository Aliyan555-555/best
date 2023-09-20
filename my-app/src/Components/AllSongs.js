import React from 'react'
import { useState } from 'react'
import { GlobalContext } from '../Context/SongContext'
import Loading from '../Deco/Loader'
import {styled} from 'styled-components'
import MusicItem from './MusicItem'

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
      <ul className='song-ul'>
  {Load?<Loading/>:state.Songs.map((data,i)=>{
          return <li  id='li' key={i}  className='slider-work'> <MusicItem  data={data}/></li>
})
} 
    
    
    </ul>
    </div>
  
  </Wrapper>
  )

}
const Wrapper=styled.section`
width: auto;
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

export default AllSongs
