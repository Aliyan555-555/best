
import Hero from '../Components/Hero'
import  {useContext, useEffect,useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import RecentSongs from '../Components/RecentSongs'
import Library from '../Components/Library'

import AllSongs from '../Components/AllSongs'
import { ToogleNav } from '../App'
import { GlobalContext } from '../Context/SongContext'
const Home = () => {
  useEffect(() =>{
    window.scroll(0,0);
    document.title= 'Listening Your Favorite MUSIC'
  }, []);
  const {Toogle,setToogle}=useContext(ToogleNav)
  const {PORT} = GlobalContext()
  const containerRef = useRef(null)
  const history = useNavigate()
  const Post=async()=>{
    try {
      const res=await fetch(`${PORT}/api/v1/home`,{
        method:'GET',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json'
        },
        credentials:'include'
      })
      const data=await res.json()
      if (!res.status===200){
       
      }else{
        setToogle(true)
       
      }
      
    } catch (error) {
      setToogle(false)
        history('/Login')
    }
    
  }
  useEffect(() => {
   Post();
  }, []);
  return (
  
 <form method='GET' ref={containerRef}>
 
      <Hero Hero_h1_start="Listening " h1_span="Your"  Hero_h1_end=" Favorite MUSIC" Hero_para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate dolores placeat eum eius, recusandae."/>
      <Library/>
    
</form>

  )
}

export default Home
