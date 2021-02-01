import React, { useState } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import Widget from "../Widget";
import animationData from "../Loading/animation.json";


const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
}

export default function LoadingPage() {
    const [animationState , setAnimationState] = useState({ isStopped: false , isPaused: false });

    return ( 
    <div>
        <Lottie options={defaultOptions}
          height={400} // 400
          width={250} //300
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}/>
    </div>
    )
}

