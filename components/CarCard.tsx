"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";
import { carProps } from "@/types";
import CustomButton from "./CustomButton";
import { calculateCarRent } from "@/utils";
import CarDetails from "./CarDetails";
import { generateCarImageUrl } from "@/utils";


interface carCardProps {
  car: carProps;
}


const CarCard = ({ car }: carCardProps) => {

  const [isOpen,setIsOpen]=useState(false);

  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="group car-card">
      <div className="car-card__content">
        <h2 className="car-card__content">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-semibold">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          alt="car"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className=" flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              alt="wheel"
              width={20}
              height={20}
            />

            <p className="text-[14px]">
              {transmission == "a" ? "Automatic" : " Manual"}
            </p>
          </div>

          <div className=" flex flex-col justify-center items-center gap-2">
            <Image
              src="/tire.svg"
              alt="wheel"
              width={20}
              height={20}
            />

            <p className="text-[14px]">
             {drive.toUpperCase()}
            </p>
          </div>

          <div className=" flex flex-col justify-center items-center gap-2">
            <Image
              src="/gas.svg"
              alt="wheel"
              width={20}
              height={20}
            />

            <p className="text-[14px]">
              {city_mpg} MPG
            </p>
          </div>
        </div>

        <div className="car-card__btn-container">

          <CustomButton title="Read more" containerStyles="w-full py-[16px] rounded-full  bg-primary-blue" btnType={"button"}  textStyles="text-white text-[14px] font-bold leading-[17px]"  rightIcon="/right-arrow.svg" handleClick={()=>setIsOpen(true)} />
           
          
        </div>
      </div>

      <CarDetails  isOpen={isOpen} closeModal={()=>setIsOpen(false)} car={car}/>
    </div>
  );
};

export default CarCard;
