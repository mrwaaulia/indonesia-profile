import React from "react";
import bg from "../assets/peta.jpg";

function Hero() {
  return (
    <div
      className="relative h-screen flex items-center justify-center bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 z-10 bg-black/60"></div>
      <div className="z-20 text-white">
        <h1 className="text-6xl text-center lg:text-8xl font-bold mb-8">
          This is Indonesia
        </h1>
        <p className="text-lg lg:text-xl text-center px-8 font-mono">
          'Berbeda beda tetapi tetap satu jua'{" "}
        </p>
      </div>
    </div>
  );
}

export default Hero;
