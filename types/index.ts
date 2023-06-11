import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType: "submit" | "button";
    textStyles?:string;
    rightIcon?:string;
    isDisabled?:boolean;
}


export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}


export interface carProps {
    city_mpg: number;
    class: string;
    combination_mpg: number
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string
    model: string;
    transmission: string;
    year:number;
}


export interface filterProps{
    manufacturer:string;
    year:number;
    limit:number;
    fuel:string;
    model:string;

}

export interface OptionProps{
    title:string;
    value:string;
}


export interface customFilterProps{
    title:string;
    options:OptionProps[];
}

export interface ShowMoreProps{
    isNext:boolean;
    pageNumber:number;
}