import React from 'react'

import { Link } from 'react-router-dom'
import { styled } from 'styled-components'


const MusicRowItem = ({data,i}) => {
    const [currentDate, setCurrentDate] = React.useState(new Date());
  const Render=()=>{
if (data._id) {
     return(
       <Link  to={`/single/${data._id}`}>
       <MusicRowStyle>
        <div className='index'>{i+1}</div>
        <div className='img'><img src={data.image_url} alt={data.title} />
        <p>{data.title}</p></div>
   
        <div className='date'><p>{currentDate.toDateString()}</p></div>
        <div className="duration">{data.duration}</div>
      </MusicRowStyle>
      </Link>
     )}else{
      return  <></>
     }

  }


  return (

   <Render/>
  )
}

const MusicRowStyle=styled.div`
width: 112rem;
display: flex;
align-items: center;
border-radius: 1rem;
&:hover,
&:active{
    background: rgba(255, 255, 255, 0.21);
}
padding: 1.5rem;

height: 8rem;
margin: 0 auto;
overflow: hidden;
color: white;
font-size:2rem;


.index{
    padding: .5rem;
    font-size:2rem;
    color: ${({theme})=>theme.colors.text};
   
}
.img{
    padding: 0 0 0 2.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 35%;
  
    height: 100%;
    p{
        padding: 0 1.5rem;
        margin: 0;
    }
}

div img{
    
    width: 6rem;
    border-radius: 1rem;
    height: 6rem;
}
.date{
    padding: 0 4rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 45%;
  
    p{
        padding: 0;
        margin: 0;
    }
}

`
export default MusicRowItem
