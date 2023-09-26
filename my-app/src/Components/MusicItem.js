import React from 'react'

import { Link } from 'react-router-dom'
import { styled } from 'styled-components'


const MusicItem = ({data}) => {

  const Render=()=>{
if (data._id) {
     return(
       <Link  to={`/single/${data._id}`}>
       <MusicStyle>
         <div className="s-i-cover">
           <img src={data.image_url} alt="" />
           <p>{data.duration}</p>
         </div>
         <div className="s-i-info">
           <h3>{data.title}</h3>
           <p>{data.artist}</p>
           <p>Relese on {data.relise_date}</p>
           
         </div>
        
      </MusicStyle></Link>
     )}else{
      return  <></>
     }

  }


  return (

   <Render/>
  )
}

const MusicStyle=styled.div`
width: 24rem;
position: relative;

  &:hover,
&active{
  transform: scale(1.1);
  background:rgba(255, 255, 255, 0.13);
}
padding: 2rem;
border-radius: 1rem;

height: 27.9rem;
.s-i-cover{
  position:relative;
  width: 100%;
  height: 75%;
  p{
    color: ${({theme})=>theme.colors.text};
    font-weight:600;
    position: absolute;
    bottom: 1rem;
    right: .7rem;
  }
  img{
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
  width: 100%;
  height: 25%;
  p{
    color: ${({theme})=>theme.colors.text};
    line-height: .7rem;
    font-size:1rem;
  }
  h3{
    margin: .8rem  0 0 0;
    color: ${({theme})=>theme.colors.text};
    line-height: 1rem;
    font-weight: 600;
  }
}

`

export default MusicItem
