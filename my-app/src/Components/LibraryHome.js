import React from 'react'
import styled from 'styled-components'
import RecentSongs from "./RecentSongs"
import AllSongs from './AllSongs'
import Related from './Related'


const LibraryHome = () => {
  return (
    <Wrapper>
        <RecentSongs    tranding_h2="Recently Played"/>
      
        <AllSongs  Heading="All Songs" />
      
    </Wrapper>
  )
}
const Wrapper=styled.div`
width: 100%;
height:100%;



`  
export default LibraryHome
 