import React,{useEffect,useState} from "react";

import style from "./Vision.module.scss";
import cl from "classnames";
import imgHome from "../../../assets/imgs/new-investment-class.png";
import AboutImage from "../../../widgets/AboutImage/AboutImage";
import { VisionBackLightSVG, VisionBackSVG, VisionElLightSVG, VisionElSVG,VisionBackLightMobSVG,VisionElLightMobSVG,VisionBackMobSVG,VisionElMobSVG, VisionAllSVG } from "../../../assets/svg";
import VisionDark from "../../../assets/imgs/VisionDark.png"
import VisionDarkMob from "../../../assets/imgs/VisionDarkMob.png"

export const Vision = ({ data,theme }: { data: any,theme:string }) => {   
   const [widthWindow, setWidthWindow] = useState<number | null>(null);
   useEffect(() => {
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
      <div className={style.wrapper}>
         <section className={style.vision}>
            <div className={style.vision__content}>
               <h2 className={style.vision__title}>
                  {/* Vision */}
                  {data?.data?.attributes?.vision_title}
               </h2>
               <p className={style.vision__text}>
                  {/* Real estate investment must be fast, transparent and accessible to everyone. Bridging the industry with blockchain technology will pave the way for retail investors to access borderless Investment worldwide with higher potential liquidity through the secondary market */}
                  {data?.data?.attributes?.vision_text}
               </p>

            </div>
            

            {/* <div dir="ltr" className={style.vision__img}> */}
               {/* <img src={imgHome.src} alt="New vision class" /> */}
               {/* <img src={ imgHome.src} alt={data?.data?.attributes?.vision_title} /> */}
            {widthWindow == null ? "" : widthWindow < 991 ? 
            theme === "theme-dark" ? <img src={VisionDarkMob.src} alt="" /> :  <AboutImage ElementSVG={<VisionElLightMobSVG />} backSVG={<VisionBackLightMobSVG />}/>
            :
            theme === "theme-dark" ?  <img src={VisionDark.src} alt="" /> :  <AboutImage  ElementSVG={<VisionElLightSVG />} backSVG={<VisionBackLightSVG />}/>
            }
            {/* </div> */}
         </section>

         <div className={style.decor}></div>
      </div>
   );
};



export default Vision;
