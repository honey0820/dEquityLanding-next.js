import React, { useEffect } from "react";
import { useRouter } from "next/router";

import style from "./Started.module.scss";
import cl from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalEmailShowAction, toggleModalThanksShowAction, toggleAppThemeAction, changeAppLanguageAction, toggleScrollToHowAction, requestHomeFetchAction, setHomeFetchLoadingAction } from "@/src/store/actions/app";



import imgBrowse from "../../../assets/imgs/started/browse-en.png";
import imgSelect from "../../../assets/imgs/started/select-en.png";
import imgInvest from "../../../assets/imgs/started/invest-en.png";

import imgBrowseWhite from "../../../assets/imgs/started/browse-en_White.png";
import imgSelectWhite from "../../../assets/imgs/started/select-en_White.png";
import imgInvestWhite from "../../../assets/imgs/started/invest-en_White.png";
import type { RootState } from "@/src/store/store";
import { ImgBrowseMobSVG, ImgBrowseSVG, ImgBrowseWhiteMobSVG, ImgBrowseWhiteSVG, ImgInvestMobSVG, ImgInvestSVG, ImgInvestWhiteMobSVG, ImgInvestWhiteSVG, ImgSelectMobSVG, ImgSelectSVG, ImgSelectWhiteMobSVG, ImgSelectWhiteSVG } from "../../../assets/svg";

function ArrowImg() {
 return (
   <svg width="32" height="19" viewBox="0 0 32 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 9.29102H27.592" stroke="#0D6EFD" stroke-width="3" stroke-linecap="round"/>
      <path d="M22.9482 2.1582L30.5 9.29039L22.9482 16.8421" stroke="#0D6EFD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
   </svg>

 )
}

export const Started = ({data} : {data:any}) => {

   const dispatch = useDispatch();

   const { locale } = useRouter();
   const [widthWindow, setWidthWindow] = React.useState<number | null>(null);
  const handleToggleModal = () => dispatch(toggleModalEmailShowAction());

  const themeSelector:string = useSelector((state: RootState) => state.app.appReducer.appTheme);


  useEffect(() => {
   const handleResize = (event : any) => {
     setWidthWindow(event.target.innerWidth);
   };
   setWidthWindow(window.innerWidth)
   window.addEventListener('resize', handleResize);
   return () => {
     window.removeEventListener('resize', handleResize);
   };
 }, []);
  

  return (
    <>

      <section className={style.started}>
         <div className={style.started__item}>
            <h2 className={style.started__title}>
               {/* Getting started is simple! */}
               {data?.data?.attributes?.gs_title}
            </h2>
            <div className={style.started__content}>
               <div className={style.started__name}>
                  {/* Browse */}
                  {data?.data?.attributes?.gs_section1_title}
               </div>
               <div className={style.started__text}>
                  {/* View detailed financial data, inspection reports, appraisals and more */}
                  {data?.data?.attributes?.gs_section1_text}
               </div>
            </div>
            <div className={style.started__img}>
         { widthWindow == null ? "" : widthWindow < 575 ? 
             themeSelector == "theme-light" ? <ImgBrowseWhiteMobSVG />  :  <ImgBrowseMobSVG />  :
             themeSelector == "theme-light" ? <ImgBrowseWhiteSVG />  :  <ImgBrowseSVG />
         }
         </div>
         </div>
         <div className={style.started__item}>
            <div className={style.started__content}>
               <div className={style.started__name}>
                  {/* Select */}
                  {data?.data?.attributes?.gs_section2_title}
               </div>
               <div className={style.started__text}>
                  {/* Select your ideal portfolio of rental properties and decide how much you want to invest */}
                  {data?.data?.attributes?.gs_section2_text}
               </div>
            </div>
            <div className={style.started__img}>
               
            { widthWindow == null ? "" : widthWindow < 575 ? 
             themeSelector == "theme-light" ? <ImgSelectWhiteMobSVG />  :  <ImgSelectMobSVG />  :
             themeSelector == "theme-light" ? <ImgSelectWhiteSVG />  :  <ImgSelectSVG />
            }   
            </div>
         </div>
         <div className={style.started__item}>
            <div className={style.started__content}>
               <div className={style.started__name}>
                  {/* Invest */}
                  {data?.data?.attributes?.gs_section3_title}
               </div>
               <div className={style.started__text}>
                  {/* Invest in real state with a couple of clicks and receive weekly rent proceeds deposited directly to your wallet */}
                  {data?.data?.attributes?.gs_section3_text}
               </div>
               <a className={
                  cl(style.started__link,
                     locale === 'ar' && style.started__link_ar
                  )               
                  } onClick={handleToggleModal}>
                  {/* invest within minutes */}
                  {data?.data?.attributes?.gs_section3_btn}
                  <ArrowImg/>
                   {/* <svg width="32" height="19" viewBox="0 0 32 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 9.29053H27.592" stroke="#42BFF8" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M22.9492 2.1582L30.5009 9.29039L22.9492 16.8421" stroke="#42BFF8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg> */}
               </a>
            </div>
            <div className={style.started__img}>
            { widthWindow == null ? "" : widthWindow < 575 ? 
             themeSelector == "theme-light" ? <ImgInvestWhiteMobSVG />  :  <ImgInvestMobSVG />  :
             themeSelector == "theme-light" ? <ImgInvestWhiteSVG />  :  <ImgInvestSVG />
            }   
            </div>
         </div>
         <div className={style.started__decor1}></div>
         <div className={style.started__decor2}></div>
         <div className={style.started__decor3}></div>
      </section>

    </>
  );
};



export default Started;
