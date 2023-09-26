import React from "react";
import { useRef, useEffect } from "react";
import styled from "styled-components";


const Canvas = () => {

    useEffect(() => {
       

  const c = document.querySelector("canvas");
  const ctx = c.getContext("2d");
 var color = 0;

  c.width=window.innerWidth;
  c.height=window.innerHeight

 

  const parry = [];
  const m = {
    x: undefined,
    y: undefined,
  };
  c.addEventListener("mousemove", function (event) {
    m.x = event.x;
    m.y = event.y;
    for (let i = 0; i < 5; i++) {
      parry.push(new Partical());
    }
  });
  c.addEventListener("click", function (event) {
    m.x = event.x;
    m.y = event.y;
    for (let i = 0; i < 150; i++) {
      parry.push(new Partical());
    }
  });
  function circle() {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(m.x, m.y, 40, 0, Math.PI * 2);
    ctx.fill();
  }
  class Partical {
    constructor() {
      this.x = m.x;
      this.y = m.y;
      this.size = Math.random() * 4 + 1;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
    }
    draw() {
      ctx.fillStyle = "hsl(" + color + ",100%,50%)";
    
      
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }


  function hendle() {
    for (let i = 0; i < parry.length; i++) {
      parry[i].update();
      parry[i].draw();
      if (parry[i].size <= 0.3) {
        parry.splice(i, 1);
        i--;
      }
    }
  }
  function animation() {
    // ctx.clearRect(0,0,c.with,c.height)
    ctx.fillStyle = 'rgb(1, 13, 49,0.1)';
    ctx.fillRect(0, 0, c.width, c.height);
    requestAnimationFrame(animation);
    hendle();
    color++;
  }
  animation();

}, []);
  return (
    <Wrapper>
      <canvas id="canvas" className="fireworks"/>
  
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  canvas {
    position: absolute;
    width: 100vw;
    height: 100vh;
   
  }
`;
export default Canvas;
