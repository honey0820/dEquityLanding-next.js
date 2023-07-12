import React, { FC, ReactNode } from "react";
import Slider from "react-slick";
import { JsxElement } from "typescript";

export const CustomSlider: FC<{
  className?: string;
  
  children: ReactNode;
  nextArrow: any;
  prevArrow: any;
}> = ({ className, children, nextArrow, prevArrow }) => {
  let settings: {
    dots: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
 
    autoplay: boolean;
    className?: string;
    adaptiveHeight: boolean;
    nextArrow: any;
    prevArrow: any;
  } = {
    dots: false, // can be true if need slider for home page for example
    infinite: true, // infinite slider
    speed: 500, // spped of infinite slider
    slidesToShow: 1, // how many slides show
    autoplay: false, // if need to autoplay
    className, // classname
    adaptiveHeight: true, // adaptive height
    nextArrow,
    prevArrow,
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default CustomSlider;
