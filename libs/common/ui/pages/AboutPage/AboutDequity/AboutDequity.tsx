import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { toggleModalEmailShowAction, toggleModalThanksShowAction, toggleAppThemeAction, changeAppLanguageAction, toggleScrollToHowAction, requestHomeFetchAction, setHomeFetchLoadingAction } from "@/src/store/actions/app";
import Link from "next/link";
import style from "./AboutDequity.module.scss";
import cl from "classnames";
    // import AboutDequityImage from "../../../assets/imgs/AboutDequityImage.png";
    // import AboutDequityMobImage from "../../../assets/imgs/AboutDequityMobImage.png";
    // import ReactSwipe from 'react-swipe';
    // import {AboutDequityLightMobSVG, AboutDequityLightSVG, AboutDequityMobSVG, AboutDequitySVG} from "../../../assets/svg"
import AbourDequity from "../../../assets/imgs/AboutDequity.png"
import AbourDequityLight from "../../../assets/imgs/AboutDequityLight.png"
import AbourDequityLightMob from "../../../assets/imgs/AboutDequityLightMob.png"
import AbourDequityMob from "../../../assets/imgs/AboutDequityMob.png"

import { AboutDequitySVG,AboutDequityLightSVG } from "../../../assets/svg";



export const AboutDequity = ({ data,theme }: { data: any,theme:string }) => {
    const [widthWindow, setWidthWindow] = React.useState<number | null>(null);

    React.useEffect(() => {
        const handleResize = (event: any) => {
            setWidthWindow(event.target.innerWidth);
        };
        setWidthWindow(window.innerWidth)
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    console.log(widthWindow,"widthWindow");
    

    return (
        <>
            <div className={style.ImmediateRent}>

                <div className={style.ImmediateRent__img}>
                    {widthWindow == null ? "" : widthWindow <= 1040 ?
                    theme === "theme-light" ? 
                    // <img src={AboutDequityMobImage.src} alt="Immediate rent and dividends" />
   
                    <img src={AbourDequityLightMob.src}  alt="Immediate rent and dividends" />

                    : 
                    <img src={AbourDequityMob.src}  alt="Immediate rent and dividends" />
                    :
                    theme === "theme-light" ? 
                 <AboutDequityLightSVG />
                    :
                   
                    <AboutDequitySVG />
                    }

                    {/* <img src={ widthWindow == null ? AboutDequityImage.src : widthWindow <= 1040 ? AboutDequityMobImage.src : AboutDequityImage.src} alt="Immediate rent and dividends" /> */}
                </div>

                <div className={style.ImmediateRent__right_side}>
                <div className={style.ImmediateRent__content}>
                     <h2 className={style.ImmediateRent__title}>
                        {/* About dEquity */}
                        {data?.data?.attributes?.aboutDequity_title}
                     </h2>
                    <p className={style.ImmediateRent__text1}>
                     {/* dEquity is a FinTech project that transforms Real World Assets into Web3 financial instruments using blockchain, cryptocurrency and NFTs, creating a more inclusive class of investors */}
                     {data?.data?.attributes?.aboutDequity_text}
                   </p>
                </div>

                <div className={style.ImmediateRent__circle}></div>
                </div>
            

            </div>
        </>
    );
};



export default AboutDequity;
