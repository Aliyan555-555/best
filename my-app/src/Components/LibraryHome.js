import React from 'react'
import styled from 'styled-components'
import RecentSongs from "./RecentSongs"
import AllSongs from './AllSongs'
import Related from './Related'
import LibraryPop from './LibraryPop'


const LibraryHome = ({itemlimet,setitemlimet}) => {
  return (
    <Wrapper>
        <RecentSongs    tranding_h2="Recently Played"/>
      <LibraryPop itemlimet={itemlimet}/>
        <AllSongs  Heading="All Songs" setitemlimet={setitemlimet} itemlimet={itemlimet}/>
      
    </Wrapper>
  )
}
const Wrapper=styled.div`
width: 100%;
height:100%;



`  
export default LibraryHome
 