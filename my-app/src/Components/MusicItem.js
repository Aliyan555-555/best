import axios from 'axios'
import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { GlobalContext } from '../Context/SongContext'

const MusicItem = ({data}) => {
  const {OrgPlaylist}=GlobalContext()
const [contextX,setcontextX]=useState()
const [contextY,setcontextY]=useState()
const [contextDisplay,setcontextDisplay]=useState('none')
  const MusicItemContect=()=>{
    if (contextDisplay==='flex'){
      setcontextDisplay('none')
    } else {
      setcontextDisplay('none')
      setcontextDisplay('flex')
    }
  }
  
  const AddPlaylist=async()=>{
    try {
      const res = await fetch("/Orgplaylist",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: data._id,
          title: data.title,
          relise_date: data.relise_date,
          artist:data._id,
          duration: data.duration,
          company: data.company,
          image_url: data.image_url,
          song_url: data.song_url,
          type: data.type,
        }),
      });
    if (contextDisplay==='flex') {
      setcontextDisplay('noen')
    } else {
      setcontextDisplay('none')
    }
    OrgPlaylist()
    OrgPlaylist()
    console.clear()
    } catch (error) {
      if (contextDisplay==='flex') {
        setcontextDisplay('noen')
      } else {
        setcontextDisplay('none')
      }
      console.log(error)
    }
   

  }
  const Render=()=>{
if (data) {
     return(
     <>
        <Context  style={{top:contextY,left:contextX,display:contextDisplay}}>
          <li onClick={AddPlaylist}>Add Playlist</li>
        </Context><Link  to={`/single/${data?._id}`}>
       <MusicStyle  onContextMenu={MusicItemContect}>
       
        
         <div className="s-i-cover">
           <img src={data.image_url} alt="" />
           <p>{data.duration}</p>
         </div>
         <div className="s-i-info">
           <h3 className='artist'>{data.title}</h3>
           <p className='artist'>{data.artist}</p>
           <p>Relese on {data.relise_date}</p>
           
         </div>
      
      </MusicStyle>  </Link></>
     )}else{
      return  <></>
     }

  }


  return (

   <Render/>
  )
}
const Context=styled.div`
width:17rem;
padding: .5rem;
z-index: 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
border-radius: .5rem;
display: none;
align-items: flex-start;
flex-direction:column;
justify-content: center;
background:#282828;
position: absolute;
li{
  cursor: pointer;
  width: 100%;
  font-size:1.5rem;
  padding: 1rem;
  color: white;
  &:hover,
  &:active{
    background:rgba(255, 255, 255, 0.19);
  }
}
`
const MusicStyle=styled.div`
width: 24rem;
position: relative;
display: flex;
padding: 1.5rem;
align-items: center;
 border-radius: 1.5rem;
justify-content: center;
flex-direction:column;
height: 28rem;
transform: scale(.9);

  &:hover,
&active{

  transform: scale(1);
  background:rgba(255, 255, 255, 0.13);
}


.s-i-cover{
 
  display: flex;
  justify-content: center;
  align-items: center;
  position:relative;
  width: 95%;
  height: 70%;
  p{
   
    color: ${({theme})=>theme.colors.text};
    font-weight:600;
    position: absolute;
    right: 0.5rem;
    bottom: 0.5rem;
   
  }
  img{
    border-radius: 1rem;
    filter: contrast(130%);
    width:100%;
    height: 100%;
    background-position: center center;
  }
}
.s-i-info{
  display: flex;
  flex-direction: column;
  padding: .6rem 0rem;
  width: 95%;
  height: 25%;
  p{
  
    padding: 0;
    margin: 0.7rem 0 0 0;
    text-overflow: ellipsis;
    font-weight: 400;
    font-size: 1.2rem;
    color: rgb(952, 945, 948);
    line-height: 1rem;
    text-wrap: nowrap;
    overflow-x: clip;
}

    
  }
  h3{
  
    text-overflow: ellipsis;
    font-size:1.9rem;
    margin: .5rem 0;
    color: ${({theme})=>theme.colors.text};
    line-height: 2rem;
    font-weight: 600;
  }
}
@media only screen and (max-width:400px) {
  width: 21rem !important;
  padding: 1rem !important;
  transform: scale(.8) !important;

}

`

export default MusicItem
