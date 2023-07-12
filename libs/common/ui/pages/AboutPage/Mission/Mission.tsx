import React,{useState,useEffect} from "react";

import style from "./Mission.module.scss";
import cl from "classnames";
import imgHome from "../../../assets/imgs/mission.png";
import { MissionLightSVG, MissionMobLightSVG, MissionMobSVG, MissionSVG } from "../../../assets/svg";

export const Mission = ({ data,theme }: { data: any,theme:string }) => {   
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

            <div dir="ltr" className={style.vision__img}>
            {widthWindow == null ? "" : widthWindow < 991 ? 
            theme === "theme-dark" ?  <MissionMobSVG /> : <MissionMobLightSVG />
            :
            theme === "theme-dark" ?  <MissionSVG /> : <MissionLightSVG />
            }
               
              
            </div>

            <div className={style.vision__content}>
               <h2 className={style.vision__title}>
                  {/* Mission */}
                  {data?.data?.attributes?.mission_title}
               </h2>
               <p className={style.vision__text}>
                  {/* Our mission is to streamline and simplify the global investing process and ensure equality of opportunity by combining Real Estate and DeFi with pioneering NFT technology, (r)evolutionizing how real estate is bought, sold and managed */}
                  {data?.data?.attributes?.mission_text}
               </p>

            </div>
            
            

            
         </section>

         <div className={style.decor1}></div>
         <div className={style.decor2}></div>
      </div>
   );
};



export default Mission;
