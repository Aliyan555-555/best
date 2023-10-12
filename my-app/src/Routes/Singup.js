import React, { useState,useEffect } from "react";
import { styled } from "styled-components";
import { GrStatusWarning } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
const Singup = () => {
  const history = useNavigate();
  const [warn, setwran] = useState("");
  const [wtrue, setwtrue] = useState(false);

  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
  });
  useEffect(() =>{
    window.scroll(0,0);
    document.title= 'Signup'
  }, []);

  const hendleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setuser({ ...user, [name]: value });
  };
  const Post = async (e) => {
    e.preventDefault();
    const { name, email, password } = user;
    const res = await fetch("/registor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data || !name || !email || !password) {
      setwran("Please fill all the fields");
      setwtrue(true);
    } else {
      setwran("Registor seccsecfull");
      history("/Login");
      setwtrue(false);
    }
  };
  const secc = "rgba(0, 255, 40, 0.64)";
  const warning = "rgba(255, 242, 0, 1)";
  const red = "rgba(255, 0, 0)";
  const none =" rgba(255, 0, 0, 0)";

  
  const style1 = {
    
    border:`.2rem solid ${wtrue ? red : none}`,
  };
  const style = {
    background: `${wtrue ? warning : secc}`,
  };
  const Wran = () => {
    return (
      <div className="warn" id="warn" style={style}>
        <GrStatusWarning id="Warnning" />
        <p>{warn}</p>
      </div>
    );
  };

  return (
    <Wrapper>
      {wtrue ? Wran() : ""}
      <div className="contaner">
        <h2>Sign Up</h2>
        <form method="POST">
          <div>
            <label>User Name</label>
            <input
            style={style1}
              type="text"
              placeholder="Enter your User Name"
              name="name"
              value={user.name}
              onChange={hendleInput}
              autoComplete="off"
            />
          </div>
          <div>
            <label>Email</label>
            <input
             style={style1}
              type="email"
              placeholder="Enter your Email"
              name="email"
              value={user.email}
              onChange={hendleInput}
              autoComplete="off"
            />
          </div>
          <div>
            <label>Password</label>
            <input
             style={style1}
              type="password"
              placeholder="Set your Password"
              name="password"
              value={user.password}
              onChange={hendleInput}
              autoComplete="off"
            />
          </div>
          <div>
            <input
             
              id="submit"
              onClick={Post}
              className="submit"
              type="submit"
              value={"Submit"}
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
    z-index: 1000000000000000000;
    
    position: absolute;
    top: 8rem;
    display: flex;
    border-radius: .5rem;
    padding: 1.3rem;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    width: 35vw;
    #Warnning{
      margin: 0 8rem  0 3rem;
      font-size: 2rem;
    }
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
    border-width: 90.5vh 0 0 100vw;
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
    border-width: 0 100vw 90.5vh 0;
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
    height: 55rem;
    h2 {
      font-weight: 800;
      font-size: 5rem;
    }
    div {
      padding: 2px 10px;
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
      #submit{
        &:hover{
          transform: scale(.9);
          background: ${({ theme }) => theme.colors.hover};
        }
      }
      input {
        border: 0;
        border-radius: 1rem;
        background: ${({ theme }) => theme.colors.white};

        padding: 1.3rem 1rem;
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.media.tab1}) {
    .warn{
      #Warnning{
       margin: 0 3rem 0 2rem;
     }
    }}
@media only screen and (max-width: ${({ theme }) => theme.media.tab2}) {
  .warn{
    top: 12rem;
    width: 45vw;
   }
  .contaner {
      width: 45%;
    div{
      width: 35vw;
    }
    }

}

@media only screen and (max-width: ${({ theme }) => theme.media.mobile}) {
  .warn{
    width: 52vw;
   }
}

@media only screen and (max-width:800px) {
  .contaner {
    border-radius: 2rem;
      width: 60%;
      height: 55rem;
     div{
      width: 45vw;
     }
    }

}
@media only screen and (max-width: ${({ theme }) => theme.media.mobile}) {
  .contaner {
    border-radius: 2rem;
      width: 58%;
      height: 50rem;
     div{
      width: 45vw;
     }
    }

}
@media only screen and (max-width:600px) {
  .warn{
    width: 60vw;
   }
  .contaner {
      width: 65%;
    div{
      width: 55vw;
    }}
}
@media only screen and (max-width:500px) {
  .warn{
    top: 15rem;
    width: 76vw;
   }
  .contaner {
      width: 75%;
    
    div{
      width: 60vw;
      input{
        border-radius: .5rem;
      }
    }}
}
@media only screen and (max-width:400px) {
  .warn{
    p{font-size:1.2rem;}
    width: 83vw;
    #Warnning{
      margin: 0 2rem 0 1rem;
    }
   }
  .contaner {
      width: 80%;
      height: 47rem;
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
  .warn{
    width: 90vw;
    #Warnning{
      margin: 0 1rem 0 1rem;
    }
   }
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

export default Singup;
