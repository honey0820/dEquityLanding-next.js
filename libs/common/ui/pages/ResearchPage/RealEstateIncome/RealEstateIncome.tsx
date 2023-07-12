import React, { useState } from "react";
import style from "./RealEstateIncome.module.scss";
import cl from "classnames";
import graficDark from "../../../assets/imgs/newResearch/RealEstateIncome-dark.svg";
import graficWith from "../../../assets/imgs/newResearch/RealEstateIncome-with.svg";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store/store";



export const RealEstateIncome = ({ data }: { data: any }) => {
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

   return (
      <>
         <div className={style.realEstateIncome}>
            {widthWindow == null ? "" : widthWindow <= 1024 ?
               <h2 className={style.realEstateIncome__title}>
                  {/* Real estate income and inflation */}
                  {data?.data?.attributes?.rei__title}
                  </h2>
               : null
            }
            <div className={style.realEstateIncome__content}>
               {widthWindow == null ? "" : widthWindow > 1024 ?
                  <h2 className={style.realEstateIncome__title}>
                     {/* Real estate income and inflation */}
                     {data?.data?.attributes?.rei__title}
                  </h2>
                  : null
               }
               <p className={style.realEstateIncome__text1}>
                  {/* U.S. property prices and income have historically outpaced inflation, making real estate an attractive investment option */}
                  {data?.data?.attributes?.rei__text1}
                  </p>
               <p className={style.realEstateIncome__text2}>
                  {/* Combining physical real world assets and digital art, we have created an innovative product that helps hedge against inflation and potentially grow your capital */}
                  {data?.data?.attributes?.rei__text2}
                  </p>
            </div>
            <div className={style.realEstateIncome__img}>
               {
                  theme === 'theme-dark' ? <img src={graficDark.src} alt="grafic" /> : <img src={graficWith.src} alt="grafic" />
               }
            </div>

            <div className={style.realEstateIncome__decor1}></div>
         </div>
      </>
   );
};



export default RealEstateIncome;
