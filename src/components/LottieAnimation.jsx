import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/elevator-animation.json'; // Adjust path if needed

const LottieAnimation = () => {
  return (
    <div className="lottie-wrapper">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LottieAnimation;
