import React from 'react'
import Lottie from "react-lottie"
import lottie from "../lottie.json"

const Loading = () => {

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: lottie,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    return (
      <div>
        <Lottie options={defaultOptions} height={400} width={400} />
        <h1 className='not-found'>No Images Found From The Databse !!</h1>
      </div>
    );
}

export default Loading
