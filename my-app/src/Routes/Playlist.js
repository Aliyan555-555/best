import React, { useState } from 'react'
import { GlobalContext}  from '../Context/SongContext'
import MusicItem from '../Components/MusicItem'
import Loading  from '../Deco/Loader'
import styled from 'styled-components'

const Playlist = () => {
  const {playlist}=GlobalContext()
  const [Load,setLoad]=useState(true)
  setTimeout(() => {
    setLoad(false)
  }, 1000);
  console.log(playlist)
 
  return (
    <Wrapper>
      <h2>Your favourite Songs</h2>
  
  <div className='contaner'> 

  {
    Load?<Loading/>:
    playlist.map((data)=>{
       return (<MusicItem  data={data}/>)})}
   </div>
 </Wrapper> 
 )}
const Wrapper=styled.div`
display: flex;

justify-content: center;

 flex-direction:column;
 width: 100%;
 height:80rem;

.contaner{
  width: 100%;
  display: flex;
  flex-direction: row;
}

`

export default Playlist
