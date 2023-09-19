import styled from 'styled-components';
import Loadingimg from '../img/loader.gif'

const Loading=()=>{
    return (
      <Wrapper className="Loading">
        <img src={Loadingimg} alt="" />
      </Wrapper>
    )
  }
const  Wrapper=styled.div`
width: 100%;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export default Loading;