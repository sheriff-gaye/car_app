
"use client";
import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h3 className="hero__title">
          Find , Book, or Rent a Car - quickly and easily!
        </h3>

        <p className="hero__subtitle">
          Stremline your car booking experience with our effortless booking
          experience
        </p>

        <CustomButton
          title="Explore Cars"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white mt-10"
          handleClick={handleScroll}
        />
      </div>


      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
