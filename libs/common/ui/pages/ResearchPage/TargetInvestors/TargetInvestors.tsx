import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { toggleModalEmailShowAction, toggleModalThanksShowAction, toggleAppThemeAction, changeAppLanguageAction, toggleScrollToHowAction, requestHomeFetchAction, setHomeFetchLoadingAction } from "@/src/store/actions/app";
import Link from "next/link";
import style from "./TargetInvestors.module.scss";
import cl from "classnames";
// import grafic from "../../../assets/imgs/TargetInvestors.svg";
import graficDark   from "@/libs/common/ui/assets/imgs/newResearch/TargetInvestorsDark.svg";
import graficWith   from "@/libs/common/ui/assets/imgs/newResearch/TargetInvestorsWith.svg";
import ReactSwipe from 'react-swipe';
import { RootState } from "@/src/store/store";



export const TargetInvestors = ({ data }: { data: any }) => {
   const [widthWindow, setWidthWindow] = React.useState<number | null>(null);
   const [theme, setTheme] = useState("");

   const themeSelector = useSelector((state: RootState) => state.app.appReducer.appTheme);

   React.useEffect(()=>{
       if(themeSelector) {
           setTheme(themeSelector);
       }
   },[themeSelector]);

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

   const {locale} = useRouter()


   return (
      <>
         <div className={locale === "ar" ? cl(style.TargetInvestors, style.TargetInvestors__TargetInvestors_ar) : style.TargetInvestors}>
            <div className={style.TargetInvestors__content}>
               <h2 className={style.TargetInvestors__title}>
                  {/* Target investors */}
                  {data?.data?.attributes?.target_title}
               </h2>
               <p className={style.TargetInvestors__text2}>
                  {/* Mass affluent investors ($10-$100k) with a global total wealth $57 tn */}
                  {data?.data?.attributes?.target_text2}
               </p>
               <p className={style.TargetInvestors__text1}>
                  {/* Demand for passive and alternative strategies has been growing over the years, and this trend will continue */}
                  {data?.data?.attributes?.target_text1}
               </p>
               {widthWindow == null ? "" : widthWindow > 1024 ?
                  <p className={style.TargetInvestors__text1}>
                     {/* Alternatives AUM will more than double in 2016- 2025 from $10 trillion to $21 trillion */}
                     {data?.data?.attributes?.target_text3}
                  </p>
                  : null
               }
            </div>
            <div className={style.TargetInvestors__img}>
               <img src={theme === 'theme-dark' ? graficDark.src : graficWith.src} alt={data?.data?.attributes?.target_title} />
            </div>

            {widthWindow == null ? "" : widthWindow <= 1024 ?
               <p className={style.TargetInvestors__text1}>
                  {/* Alternatives AUM will more than double in 2016- 2025 from $10 trillion to $21 trillion */}
                  {data?.data?.attributes?.target_text3}
               </p>
               : null
            }
         </div>
      </>
   );
};



export default TargetInvestors;
