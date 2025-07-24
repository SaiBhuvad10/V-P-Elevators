import Lottie from "lottie-react";
import animationData from "../assets/elevator-animation.json";

const MotionBanner = () => {
  return (
    <div className="motion-banner">
      <h2>Experience Smooth & Secure Elevator Journeys</h2>
      <div className="animation-wrapper">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
};

export default MotionBanner;
