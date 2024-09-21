import React from "react";
import heroImage from "./../../public/images/h2.jpg"; // Replace with your image path

const Hero = () => {
  return (
    <div
      className="hero relative"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px", // Adjust height as needed
      }}
    >
      <div className="absolute inset-0 mb-4"></div> {/* Dark overlay */}
      {/* No text or button */}
    </div>
  );
};

export default Hero;
