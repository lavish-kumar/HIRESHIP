import React from 'react'

import NoneBlueAni from './None Blue Ani.svg';
import WhiteBlueAni from './White Blue Ani.svg';
import NoneWhiteAni from './None White Ani.svg';

import NoneBlue from './None Blue.svg'
import NoneWhite from './None White.svg'
import WhiteBlue from './White Blue.svg'
import WhiteWhite from './White White.svg'
// import BlueBlue from './Blue Blue.svg'
const Loader = (props)=> {
    // console.log(props)
    let mystyle={ 
        height:props.ls
    }
    
    return (
        <img src={ 
            (props.ani === "true")
            ?
            (  
                (props.fill === "none")
                ?
                ((props.border === "white")?(NoneWhiteAni):(NoneBlueAni))
                :
                (WhiteBlueAni)
            )

            :

            (
                (props.fill === "none") 
                ?
                ((props.border === "white")?(NoneWhite):(NoneBlue))
                :
                ((props.border === "white")?(WhiteWhite):(WhiteBlue))
            )  
        
        
        } style={mystyle} alt="logo"/>
    )
}




export default Loader;