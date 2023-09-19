
import Hero from '../Components/Hero'
import  {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import RecentSongs from '../Components/RecentSongs'
import { GlobalContext } from '../Context/SongContext'
import AllSongs from '../Components/AllSongs'
const Home = () => {
  const history = useNavigate();
  const Post=async()=>{
    try {
      const res=await fetch('/home',{
        method:'GET',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json'
        },
        credentials:'include'
      })
      const data=await res.json()
      if (!res.status===200){
       console.log("user-not")
      }
    } catch (error) {
        history('/Login')
    }
  }
  useEffect(() => {
   Post();
  }, []);
  return (
 <form method='GET'>
 
      <Hero Hero_h1_start="Listening " h1_span="Your"  Hero_h1_end=" Favorite MUSIC" Hero_para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate dolores placeat eum eius, recusandae."/>
      <RecentSongs tranding_h2="Recently Played"/> */
       <AllSongs Heading="Most Popular"/>
    
</form>
  )
}

export default Home
