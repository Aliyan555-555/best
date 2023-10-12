import React from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../Context/SongContext'

const ToogleLibraryitem = ({likeRender,like,Context}) => {
const {Orgplaylist}=GlobalContext()

  return (
    <Wrapper  onClick={likeRender} onContextMenu={Context}>
      <div className='image'>
          <img src={like?"https://misc.scdn.co/liked-songs/liked-songs-640.png":Orgplaylist[0]?.image_url} alt={like?"Like":Orgplaylist[0]?.title} />
      </div>
    </Wrapper>
  )
}
const Wrapper=styled.div`
border-radius: .7rem;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
width:100%;
height:8.5rem;

align-items: center;
&:hover,
&active {
  background: rgba(255, 255, 255, 0.13);
}
.image{
    width:100%;
    height: 100%;
  display: flex;

  align-items: center;
  justify-content: center;

    img{
        border-radius: .7rem;
        width:5.5rem;
        height: 5.5rem;

    }
}

`

export default ToogleLibraryitem
