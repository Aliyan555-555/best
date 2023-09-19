import React from "react";
import { styled } from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  {ToogleNav}from "../App"
import { useContext } from "react";

const Login = () => {
  const history = useNavigate();
  const [wtrue,setwtrue]=useState(false);
  const [warn,setwarn]=useState('');
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const {dispatch}=useContext(ToogleNav);
 
  const Post=async(e)=>{
    e.preventDefault();
   const res=await fetch('/signin',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email:email,
        password:password
      })
    })
    const data=await res.json()
    if (res.status===400||!data||!email||!password){
      setwarn('Please fill all the fields correctly')
      setwtrue(true)
    }else{
      setwarn('Login seccsesfully')
      setwtrue(false)
      dispatch({
        type:'USER',
        payload:true,
      })
      history('/')

    }
  }

  const secc = "rgba(0, 255, 40, 0.64)";
  const warning = "rgba(255, 242, 0, 1)";

  const style = {
    background: `${wtrue ? warning : secc}`,
  };
  const Wran = () => {
    return (
      <div className="warn" id="warn" style={style}>
        <p>{warn}</p>
      </div>
    );
  };
  
  return (
  
      <Wrapper>
      {wtrue ? Wran() : ""}
        <div className="contaner">
          <h2>Login</h2>
          <form method="POST">
            <div>
              <label>Email</label>
              <input type="email" name="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter your email" autoComplete="off" />
            </div>
            <div>
              <label>Password</label>
              <input type="password" name="password" value={password} onChange={(e)=>
              setpassword(e.target.value)} placeholder="Enter your password" autoComplete="off" />
            </div>

            <div>
              <input
                id="submit"
                onClick={Post}
                className="submit"
                type="submit"
                value={"Login"}
              />
            </div>
          </form>
        </div>
      </Wrapper>

  );
};
const Wrapper = styled.section`
  position: relative;
  display: flex;

  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90.5vh;
  background: white;
  .warn {
    z-index: 10000000;
    top: 1rem;
    position: absolute;

    display: flex;
    border-radius: 1rem;
    padding: 1.3rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 50%;
    p {
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: black;
      font-size: 1.5rem;
      font-weight: 400;
    }
  }
  &::before {

    content: "";
    position: absolute;
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 90vh 0 0 100vw;
    border-color: transparent transparent transparent
      ${({ theme }) => theme.colors.bg_light};
  }
  &::after {
   
    content: "";
    position: absolute;
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 100vw 90vh 0;
    border-color: transparent ${({ theme }) => theme.colors.bg} transparent
      transparent;
  }

  .contaner {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 3rem;
    z-index: 100;
    position: absolute;
    background: white;
    width: 35%;
    height:50rem;
    h2 {
      font-weight: 800;
      font-size: 5rem;
    }
    div {
      padding: 5px 10px;
      width: 25vw;
      flex-direction: column;
      justify-content: space-between;
      display: flex;
      .submit {
        margin: 4rem 0 0 0;
        color: white;
        font-size: 2rem;
        background: ${({ theme }) => theme.colors.bg};
      }
      label {
        color: ${({ theme }) => theme.colors.hover};
        font-size: 1.5rem;
        font-weight: 400;
        padding: 1rem 0;
      }
      input {
        border: 0;
        border-radius: .7rem;
        background: ${({ theme }) => theme.colors.white};

        padding: 1.3rem 1rem;
      }
    }
  }

  
@media only screen and (max-width: ${({ theme }) => theme.media.tab2}) {
  .contaner {
      width: 45%;
    div{
      width: 35vw;
    }
    }

}
@media only screen and (max-width: ${({ theme }) => theme.media.mobile}) {
  .contaner {
    border-radius: 2rem;
      width: 55%;
      height: 45rem;
     div{
      width: 45vw;
     }
    }

}
@media only screen and (max-width:600px) {
  .contaner {
      width: 65%;
    div{
      width: 55vw;
    }}
}
@media only screen and (max-width:500px) {
  .contaner {
      width: 70%;
    
    div{
      width: 60vw;
      input{
        border-radius: .5rem;
      }
    }}
}
@media only screen and (max-width:400px) {
  .contaner {
      width: 80%;
       h2 {
        font-weight: 800;
        font-size: 4rem;
      }
    div{
      width: 70vw;
    }

    }
}
@media only screen and (max-width:300px) {
  .contaner {
      width: 90%;
      h2 {
        font-weight: 800;
        font-size: 3.8rem;
      }
    
      div{
      width: 85vw;
      input{
        padding: 1rem;
      }

    }
}
`;

export default Login;
