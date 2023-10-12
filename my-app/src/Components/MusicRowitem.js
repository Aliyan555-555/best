import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { PlaylistContext } from './Library'

const MusicRowItem = ({data,i}) => {
    const [currentDate, setCurrentDate] = React.useState(new Date());
 
const  [contextX,setcontextX]=useState()
const  [contextY,setcontextY]=useState()
const  [contextDisplay,setcontextDisplay]=useState('none')
   const Context=(e)=>{
    setcontextX(e.pageX+'px')
    setcontextY(e.pageY+'px')
    if (contextDisplay==='flex'){
        setcontextDisplay('none')
    } else {
        setcontextDisplay('flex')
    }
   }
   const contextitem=()=>{
    if (contextDisplay==='flex'){
        setcontextDisplay('none')
    } else {
        setcontextDisplay('none')
    }
   }
  const Render=()=>{
if (data._id) {
     return(
        <>
        <PlaylistContext  style={{top:contextY,left:contextX,display:contextDisplay}}>
            <li onClick={contextitem}>Delete</li>
        </PlaylistContext>
       <Link  to={`/single/${data._id}`}>
       <MusicRowStyle  onContextMenu={Context}>
       <h4>{i+1}.</h4>
        <img src={data.image_url} alt={data.title} />
        <p>{data.title}</p>
   
       
        <p className='end'>{data.duration}</p>
      </MusicRowStyle>
      </Link></>
     )}else{
      return  <></>
     }

  }


  return (

   <Render/>
  )
}

const MusicRowStyle=styled.div`

&:hover,
&:active{
    background: rgba(255, 255, 255, 0.21);
}
width:100%;
height:8rem;
display: flex;
align-items: center;
border-radius: .5rem;
padding: 4rem;
position: relative;


img{
    border-radius: .5rem;
width:6rem;
height:6rem;
}

h4{
    color: white;
    font-weight:400;
    font-size:2rem;
    padding:0rem;
    margin-right: 2rem;
}
p{
    
    padding: 0  0 0 3%;
    margin: 0;
   
}
.end{
    position: absolute;
   right:30px;
}


`
export default MusicRowItem
