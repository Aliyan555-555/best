import React from 'react'
import  {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { ToogleNav } from '../App';
import { useContext } from 'react';
const Logout = () => {
    const {dispatch} = useContext(ToogleNav);
    const navigate = useNavigate();
// eslint-disable-next-line
    useEffect(() => {
    fetch('/logout',{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    }).then((res)=>{
        dispatch({
            type:'USER',
            payload:false
        })
        // eslint-disable-next-line
      navigate('/Login')
      // eslint-disable-next-line
         if (!res.status===200){
                throw new Error('server-down')
                
            }
    }).catch((error)=>{
        console.log(error)
    })
    // eslint-disable-next-line
    },[])
    // eslint-disable-next-line
  return (
    <div>
      
    </div>
  )
}

export default Logout
