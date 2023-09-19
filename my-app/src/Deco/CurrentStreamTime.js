// src/CurrentStreamTime.jsx
import React from 'react';
import { styled } from 'styled-components';
   export const CurrentStreamTime = (props) => {
    const {src, type='audio', ref, setCurrentTime} = props;
    const timeUpdate = (event) => {
        const minutes = Math.floor(event.target.currentTime / 60);
        const seconds = Math.floor(event.target.currentTime - minutes * 60);
        const currentTime = str_pad_left(minutes,'0',2) + ':' + str_pad_left(seconds,'0',2);
        setCurrentTime(currentTime);
    }
    const str_pad_left = (string,pad,length) => {
        return (new Array(length+1).join(pad)+string).slice(-length);
    }
    let htmlTag = '';
    if(type === 'audio') {
        htmlTag = <audio src={src}  ref={ref}  onTimeUpdate={timeUpdate} />;
    }
   
    return (
        <Wrapper>
            
            {htmlTag}
        </Wrapper>
    );
}
const  Wrapper=styled.span`
audio{
    background: ${({theme})=>theme.colors.bg}
    border-radius: 0;
}


`

