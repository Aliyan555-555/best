import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
      letter-spacing: .8px;
-webkit-font-smoothing: antialiased; 
-moz-osx-font-smoothing: grayscale;
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Work Sans', sans-serif;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
 
}
::selection {
  
      background: transparent;
    }
/* Track */
::-webkit-scrollbar-track {
  background: ${({theme})=>theme.colors.bg}; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background:transparent;  
  
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #ff0062; 
}
html{
height: 191vh;
      width: 100vw;
      overflow-x: hidden;
      font-size:50.5%;
      
}
h1{
      color: ${({ theme }) => theme.colors.heading};

      font-size: 6rem;
      font-weight: 800;

}
body{
      height: 191vh;
      width: 100vw;

      overflow-x: hidden;
      background: ${({ theme }) => theme.colors.bg_light};
}
h2{
      font-size: 4.4rem;
      font-weight: 500;
      white-space: normal;
      text-align: center;
      color: ${({ theme }) => theme.colors.heading};
      
}
h3{
      font-size: 1.4rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.heading};
}
p{
      font-size: 1.65rem;
      opacity: .8;
      font-weight: 400;
      margin-top: 1rem;
      line-height: 2rem;
      color: ${({ theme }) => theme.colors.text}

}
a{
      text-decoration: none
}
li{
      list-style: none
}

@media only screen and (max-width: ${({ theme }) => theme.media.tab2}) {
     .Hero-responsive{
      text-align: center;
      height: 90vh;
      width: 100%;
      margin: 0;
      margin-bottom: 8rem;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .Hero-text-data {
            width: 75%;
            padding: 2rem 0;
            h1{
                  line-height:4.5rem;
                  font-size:4.5rem;
                  padding: 2rem 0;
            }
            p{
                  font-size:2rem;
                  line-height: 2.5rem;
            }
      }
      .Hero-image-data{
            padding: 0;
            width: 50%;
            
            padding: 0;
            img{
                  width: 100%;
                  height: 100%;
            }
      }

      
     
      }
      
}
`;
