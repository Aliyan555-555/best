import React, { useRef, useState } from "react";
import styled from "styled-components";
import MusicRowItem from "./MusicRowitem";
import Default_Profile from "../img/download.png"
import  { GlobalContext } from "../Context/SongContext"
var like1 =null
const LibraryLike = ({like,Profile}) => {


const {User,Orgplaylist,playlist}=GlobalContext()
const style={
  background: `${like?'#453286':'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(18,0,0,1) 11%, rgba(21,0,0,1) 13%, rgba(28,0,0,1) 23%, rgba(166,0,0,1) 100%)'}`,
  boxShadow:`0px 50px 100px 10px ${like?'#453286':'#000'}`,}
const ProfileColor={background:" linear-gradient(0deg, rgba(22,22,22,1) 0%, rgba(83,82,82,1) 100%)"}
const input=useRef(null)
const [ProfilePic,setProfilePic]=useState('')
const handleFileUpload = e => {
  const { files } = e.target;
  if (files && files.length) {
    const filename = files[0].name;
    var parts = filename.split(".");
    const fileType = parts[parts.length - 1];
    console.log("fileType", fileType); 
    
    setProfilePic(files[0]);
  }
};

console.log(ProfilePic)
const Filluploade=(e)=>{

  input.current.click()
  console.log(input)
}

const Render=()=>{
  if (Profile&&!like) {
  return(  <>
     <ProfileStyle style={ProfileColor}>
        <div  className="left"  >
          <div className="Icon-Holder"  onClick={Filluploade}>
          
          <div  className="Icon" >
              <input type="file" ref={input} onChange={handleFileUpload} style={{display:'none'}} />
            <svg role="img"  aria-hidden="true" data-testid="user" viewBox="0 0 24 24" data-encore-id="icon" ><path d="M10.165 11.101a2.5 2.5 0 0 1-.67 3.766L5.5 17.173A2.998 2.998 0 0 0 4 19.771v.232h16.001v-.232a3 3 0 0 0-1.5-2.598l-3.995-2.306a2.5 2.5 0 0 1-.67-3.766l.521-.626.002-.002c.8-.955 1.303-1.987 1.375-3.19.041-.706-.088-1.433-.187-1.727a3.717 3.717 0 0 0-.768-1.334 3.767 3.767 0 0 0-5.557 0c-.34.37-.593.82-.768 1.334-.1.294-.228 1.021-.187 1.727.072 1.203.575 2.235 1.375 3.19l.002.002.521.626zm5.727.657-.52.624a.5.5 0 0 0 .134.753l3.995 2.306a5 5 0 0 1 2.5 4.33v2.232H2V19.77a5 5 0 0 1 2.5-4.33l3.995-2.306a.5.5 0 0 0 .134-.753l-.518-.622-.002-.002c-1-1.192-1.735-2.62-1.838-4.356-.056-.947.101-1.935.29-2.49A5.713 5.713 0 0 1 7.748 2.87a5.768 5.768 0 0 1 8.505 0 5.713 5.713 0 0 1 1.187 2.043c.189.554.346 1.542.29 2.489-.103 1.736-.838 3.163-1.837 4.355m-.001.001z"></path></svg>
          </div>
          <div  className="Hover" >
            <svg role="img"  aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" ><path d="M17.318 1.975a3.329 3.329 0 1 1 4.707 4.707L8.451 20.256c-.49.49-1.082.867-1.735 1.103L2.34 22.94a1 1 0 0 1-1.28-1.28l1.581-4.376a4.726 4.726 0 0 1 1.103-1.735L17.318 1.975zm3.293 1.414a1.329 1.329 0 0 0-1.88 0L5.159 16.963c-.283.283-.5.624-.636 1l-.857 2.372 2.371-.857a2.726 2.726 0 0 0 1.001-.636L20.611 5.268a1.329 1.329 0 0 0 0-1.879z"></path></svg>
            <span>Choose photo</span>
          </div>
          </div>
        </div>
        <div className="right" >
          <div>
          <p>Profile</p>
           <h2>{User?.name.charAt(0).toUpperCase() + User?.name.slice(1)}</h2>
           {/* <p>{User.name}. {User.OrgPlaylist.length} Songs</p> */}
           </div>
        </div>
      </ProfileStyle>
      <div className="Song-holder">
       
       <div className="song-box"> {like?playlist?.map((data,i)=>{
         return <MusicRowItem i={i} data={data}/>
        }):Orgplaylist.map((data,i)=>{
         return <MusicRowItem key={data._id} i={i} data={data}/>
        })}</div>

      </div>
    </>)
  } else {
   return(
      <>
       <div className="hero" style={style}>
        <div className="left">
          <img
            src={like?"https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png":Orgplaylist[0]?.image_url}
            alt={like?"Liked":"Playlist"}
          />
        </div>
        <div className="right">
          <div>
          <p>Playlist</p>
           <h2>{like?'Liked Songs':"PLAYLIST"}</h2>
           <p>{like?'Likes':"Playlist"}. {like?playlist?.length:User.OrgPlaylist?.length} Songs</p>
           </div>
        </div>
      </div>
      <div className="Song-holder">
       
       <div className="song-box"> {like?playlist?.map((data,i)=>{
         return <MusicRowItem i={i} data={data}/>
        }):Orgplaylist?.map((data,i)=>{
         return <MusicRowItem i={i} data={data}/>
        })}</div>

      </div>
      </>)
   
  }
}
  return (
    <Wrapper>
     <Render/>
    </Wrapper>
  );
};
const ProfileStyle=styled.div`
  with: 100%;
  height: 60%;
  display: flex;
  flex-direction: row;
  .left {
  
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items:flex-end;
  .Icon-Holder{
    cursor: pointer;
    background: ${({theme})=>theme.colors.play};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: auto auto 20px auto;
    width: 28rem;
    height: 28rem;
    &:hover,&:active{
      .Hover{
        display: flex;

      }
      .Icon{
        display: none;
      }
    }
   
    .Icon{
   display: flex;
      svg{
        width:8rem;
        height: 8rem;
        fill:${({theme})=>theme.colors.lighttranparent};

      }
    }
    .Hover{
      
  display: none;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      svg{
        width:4rem;
        height:4rem;
        fill:${({theme})=>theme.colors.text};
      }
      span{
        letter-spacing:0px;
        font-size:2rem;
        font-weight:400;
        color: ${({theme})=>theme.colors.text};
      }
    }
  }
  
    img{
      padding:1rem;
      image-resolution:50px; 
      background: ${({theme})=>theme.colors.play};
      border-radius: 50%;
      border: 4rem solid  ${({theme})=>theme.colors.play};
      width:20rem;
      height: 20rem;
      margin: 0 0 2rem 3rem;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
    }
  }
  .right {
    width: 75%;
    height: 100%;
    display: flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content: flex-end;
    div{
      height: 80%;
      display: flex;
      flex-direction:column;
      justify-content: flex-end;
    
      margin: auto 0 auto 0;
    h2{
      text-align: left;
      font-size:14rem;
      letter-spacing: -3px;
      color: white;
      font-weight:700;
    }
    p{
      position: relative;
     
      font-size:2rem;
      font-weight:600;
      color: white;
      padding: 0;
      margin: 0;
      }
    }
  }
}
`
 const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  overflow-x: hidden;
  overflow-y: scroll;
  .Song-holder{

    padding: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .song-box{
    width: 95%;
      padding: 1rem;
    }
 
    .header{
      padding: 1rem;
      margin: 0 auto;
      width: 95%;
     display: flex;
     align-items: center;
     justify-content: space-around;
     flex-direction:row;
      p{
        font-size:2rem;
        padding: 0;
        margin: 0;
      }
      svg{
        font-size:3rem;
        color: white;
      }
      border-bottom: .1rem solid gray;
      p:nth-child(2n){
       
        margin-left:-250px;
      }
      p:nth-child(1){
        margin-left:-130px;
      }
    }
  }
  .hero {
    with: 100%;
    height: 60%;
   
   
    display: flex;
  
    flex-direction: row;
    .left {
      width: 25%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items:flex-end;
      img{
      width:25rem;
      height: 25rem;
      margin: 0 0 2rem 3rem;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
    }
    .right {
      width: 75%;
      height: 100%;
      display: flex;
      flex-direction:column;
      align-items:flex-start;
      justify-content: flex-end;
      div{
        height: 80%;
        display: flex;
        flex-direction:column;
        justify-content: flex-end;
      
        margin: auto 0 auto 0;
      h2{
        text-align: left;
        font-size:14rem;
        letter-spacing: -3px;
        color: white;
        font-weight:700;
      }
      p{
        position: relative;
       
        font-size:2rem;
        font-weight:600;
        color: white;
        padding: 0;
        margin: 0;
        }
      }
    }
  }
  @media only screen and (max-width: 1250px) {
    .hero{
      height:50%;
    }
    .left{
      width:35% !important;
      img{
        width:23rem !important;
        height: 23rem !important;
      }

    }
    .right{
      width:75% !important;
      div{
        h2{
          font-size:13rem !important;
        }
      }
    }
  
  }
  @media only screen and (max-width: 1000px) {
    .hero{
      height: 45%;
    }
    .left{
      width:30% !important;
      img{
        width:23rem !important;
        height: 23rem !important;
      }

    }
    .right{
      width:70% !important;
      div{
        h2{
          letter-spacing: 1px !important;
          font-weight:800 !important;
          font-size:11rem !important;
        }
      }
    }
  
  
  }
  @media only screen and (max-width:900px) {
    .hero{
      height: 40%;
    }
    .left{
      width:35% !important;

    }
    .right{
      width:65% !important;
      div{
        h2{
         
          letter-spacing: .2rem !important;
          font-size:8rem !important;
        }
      }
    }

  }
  @media only screen and (max-width:750px) {
    .hero{
      height: 35%;
    }
    .left{
      width:35% !important;
     img{
      width:18rem !important;
      height:18rem !important;
     }

    }
    .right{
      div{
      h2{
        font-size:7rem !important;
      
      }}
      width:65% !important;
    }
  }
  @media only screen and (max-width:650px) {
    .hero{
      height: 30%;
    }
    .left{
      width:35% !important;
     img{
      margin: 0 0 2rem 1.5rem !important;
      width:16rem !important;
      height:16rem !important;
     }

    }
    .right{
      div{
      h2{
        font-size:5.5rem !important;
      
      }}
      width:65% !important;
    }
  }
  @media only screen and (max-width:510px) {
    .hero{
      height: 25%;
    }
    .left{
      width:35% !important;
     img{
      margin: 0 0 2rem 1.5rem !important;
      width:13rem !important;
      height:13rem !important;
     }

    }
    .right{
      div{
      h2{
        font-size:4.5rem !important;
      
      }}
      width:65% !important;
    }
  }
  @media only screen and (max-width:450px) {
    .hero{
      height: 20%;
    }
    .left{
      width:35% !important;
     img{
      margin: 0 0 2rem 1.5rem !important;
      width:11rem !important;
      height:11rem !important;
     }

    }
    .right{
      div{
      h2{
        font-weight:800 !important;
        font-size:4rem !important;
      
      }}
      width:65% !important;
    }
  }
  @media only screen and (max-width:400px) {
    
    .left{
      width:33% !important;
     img{
      margin: 0 0 2rem 1.5rem !important;
      width:8.5rem !important;
      height:8.5rem !important;
     }

    }
    .right{
      div{
        p{
          font-size:1.5rem !important;
          font-weight:400 !important;
        }
      h2{
        font-weight:700 !important;
        font-size:3rem !important;
      
      }}
      width:67% !important;
    }

  }
`;
export default LibraryLike;
