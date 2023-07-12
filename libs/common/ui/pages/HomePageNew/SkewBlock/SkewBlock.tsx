import React, { useState } from "react";

import style from "./SkewBlock.module.scss";
import cl from "classnames";
import SkewBG from "../../../assets/imgs/SkewBlock.png";
import SkewBGActive from "../../../assets/imgs/SkewBlockActive.png";
// import SkewBGBig from "../../../assets/imgs/SkewBlockBig.png";
import SkewBGBig from "../../../assets/imgs/SkewBlockBigNew.webp";
import SkewBGBigActive from "../../../assets/imgs/SkewBlockBigNew_active.webp";
// import SkewBGBigWhite from "../../../assets/imgs/SkewBlockBig_white.webp";
import SkewBGBigWhite from "../../../assets/imgs/SkewBlockBigNew_white.webp";
import SkewBGBigWhiteActive from "../../../assets/imgs/SkewBlockBigNew_white_active.webp";

import SkewBGBigMob from "../../../assets/imgs/SkewBlockBig-mob2.webp";
import SkewBGBigMobWhite from "../../../assets/imgs/SkewBlockBig-mob_white.webp";

// import SkewBGBigActive from "../../../assets/imgs/SkewBlockBigActive.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store/store";
import { useRouter } from "next/router";

export const SkewBlock = (props : any) => {

  const {locale} = useRouter()
  
  const themeSelector:string = useSelector((state: RootState) => state.app.appReducer.appTheme);

   const [widthWindow, setWidthWindow] = React.useState<number | null>(null);

  React.useEffect(() => {
    const handleResize = (event : any) => {
      setWidthWindow(event.target.innerWidth);
    };
    setWidthWindow(window.innerWidth)
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [skewActive, setSkewActive] = useState(false);
  
  let mobImgBig =  themeSelector == "theme-light" ? SkewBGBigMobWhite.src : SkewBGBigMob.src
  let rightImg = themeSelector == "theme-light" ? skewActive ? SkewBGBigWhiteActive.src : SkewBGBigWhite.src : skewActive ? SkewBGBigActive.src : SkewBGBig.src

  return (
    <>
       <div className={style.skew} onMouseEnter={()=>{setSkewActive(true)}} onMouseLeave={()=>{setSkewActive(false)}} >{/*  onMouseEnter={()=>{setSkewActive(true)}} onMouseLeave={()=>{setSkewActive(false)}} */}

       <div className={ 
       props.size == "big" ? 
       locale !== "ar" ? 
       style.skew_bg_wrapper_big : 
       style.skew_bg_wrapper_big_ar : 
       locale !== "ar" ?
       style.skew_bg_wrapper :
       style.skew_bg_wrapper_ar 
      }>

           { widthWindow == null ? "" : widthWindow < 575 && props.size == "big" ?
            <img className={style.skew_bg} src={mobImgBig} alt="Background"  /> :
            <img className={style.skew_bg} src={rightImg} alt="Background"/>
         }
       </div>

      
       {/* width={180} height={22} layout="fill" objectFit="cover" */}

    <div className={style.skew__position}>
        {props.children}
    </div>

    </div>

      
    </>
  );
};



export default SkewBlock;
