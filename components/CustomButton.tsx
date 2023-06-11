import { CustomButtonProps } from "@/types";

import Image from "next/image"
import React from "react";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  textStyles,
  rightIcon,
  btnType
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      {" "}
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative h-6 w-6">
          <Image src={rightIcon}  fill alt="icon" className="object-contain" />
          
        </div>
      )}
    </button>
  );
};

export default CustomButton;
