"use client";

import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Welcome to My Blog",
      "I'm Providing Luxuries Fragrances",
      "And Huge Offers"
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });

  return (
    <div>
      <div className="bg-black text-bold z-[-1] w-full h-[500px] bg-banner bg-cover bg-no-repeat bg-center flex items-center justify-center text-white text-2xl">
        <div className="max-w-screen-2xl mx-auto flex flex-col justify-center text-center items-center text-4xl md:text-5xl font-extrabold">
          {text}
          <Cursor /> {/* Add the Cursor component if you want the blinking cursor effect */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
