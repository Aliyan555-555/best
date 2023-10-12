import React from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../Context/SongContext'

const Libraryitem = ({likeRender,like,Context}) => {
const {User,Orgplaylist}=GlobalContext()
 
  return (
    <Wrapper onClick={likeRender} onContextMenu={Context}>
      <div className='image'>
          <img src={like?"https://misc.scdn.co/liked-songs/liked-songs-640.png":Orgplaylist[0]?.image_url} alt={like?"Like":Orgplaylist[0]?.like} />
      </div>
      <div className='content'> 
        <h4>
          {like?'Your Like Songs':"Your Playlist"}
        </h4>
        <p>{like?'Liked. '+User.Playlist.length+' Songs':"Playlist. "+User.OrgPlaylist?.length+" Songs"}</p>

      </div>
    </Wrapper>
  )
}
const Wrapper=styled.div`
cursor: pointer;
width: 100%;
height: 7.5rem;
border-radius: 1rem;
background: transparent;
display: flex;
align-items: center;
.content{
  width:75%;
  color: ${({theme})=>theme.colors.text};
  height: 100%;

  padding: 1.5rem;
  h4{
    font-size:1.8rem;
    font-weight:400;
  }
  p{
    font-size:1.5rem;
    padding: 0;
    margin: 0;
  }
}
&:hover,
&active{
  background:rgba(255, 255, 255, 0.13);
}

.image{
  width: 25%;
  height: 100%;

  padding: .7rem;
  img{
    border-radius: 1rem;
    width:5.5rem;
    height: 5.5rem;

  }
}

`

export default Libraryitem
