import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import {
  toggleMenu,
  toggleModalEmailShowAction,
  toggleModalThanksShowAction,
  toggleAppThemeAction,
  changeAppLanguageAction,
  toggleScrollToHowAction,
  requestHomeFetchAction,
  setHomeFetchLoadingAction,
} from "@/src/store/actions/app";

import style from "./AnimationSkew.module.scss";
import cl from "classnames";
import ArrowRightIcon from "../../../assets/imgs/Group 21.png";
import ArrowIcon from "../../../assets/imgs/Arrow (Stroke).png";
import Image from "next/image";

import HouseImg from "../../../assets/imgs/Pic + animation.png";
import Balc1Img from "../../../assets/imgs/animationBalc1.png";
import Balc2Img from "../../../assets/imgs/animationBalc2.png";
import Balc3Img from "../../../assets/imgs/animationBalc3.png";
import Balc4Img from "../../../assets/imgs/animationBalc4.png";
import BalconMobile4 from "../../../assets/imgs/BalconMobile4.png";
import BalconMobile3 from "../../../assets/imgs/BalconMobile3.png";

import HouseMobImg from "../../../assets/imgs/Pic + animation_m.png";
import HouseMobImgLight from "../../../assets/imgs/Pic + animation_m_light.png";

import BalconText1 from "../../../assets/1.png";
import BalconText2 from "../../../assets/2.png";
import BalconText3 from "../../../assets/3.png";
import BalconText4 from "../../../assets/4.png";
import BalconTextMobile1 from "../../../assets/imgs/BalconTextMobile1.png";
import BalconTextMobile2 from "../../../assets/imgs/BalconTextMobile2.png";
import BalconTextMobile3 from "../../../assets/imgs/BalconTextMobile3.png";
import BalconTextMobile4 from "../../../assets/imgs/BalconTextMobile4.png";
import Skew from "../../../assets/imgs/AboutPage/Skew.png"
import SkewLight from "../../../assets/imgs/AboutPage/SkewLight.png"

import { SkewLightMobSVG, SkewLightSVG,SkewMobSVG,SkewSVG,SkewSVG2 } from "../../../assets/svg";

export const AnimationSkew = ({ data,theme }: { data: any,theme:string }) => {
  const dispatch = useDispatch();

  const handleToggleModal = () => dispatch(toggleModalEmailShowAction());

  const list = data?.data?.attributes?.animation_list?.split(",");

  const locale = data?.data?.attributes?.locale;

  let animation_values = data?.data?.attributes?.animation_list?.split(",");

  const [animationText, setAnimationText] = React.useState(null);

  const [animationIndex, setAnimationIndex] = React.useState(0);

  // useEffect(() => {
  //   changeTextTitle();
  // }, [data]);

  async function changeTextTitle() {
    if (animation_values) {
      let tempIndex = animationIndex;

      if (animationIndex >= animation_values.length) {
        tempIndex = 0;
      }else if (widthWindow != null && widthWindow < 575 && animationIndex == animation_values.length-1) {
         tempIndex = 0;
      }

      setAnimationText(animation_values[tempIndex]);
      tempIndex++;

      setAnimationIndex(tempIndex);
    }
  }

  const [widthWindow, setWidthWindow] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = (event: any) => {
      setWidthWindow(event.target.innerWidth);
    };
    setWidthWindow(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const animationTimeWordSec = 6;

  const [HouseImgState, setHouseImgState] = useState<any>();

  const [wordAnimationEnd, setWordAnimationEnd] = useState(true);
  const [firstPlayWordEnd, setFirstPlayWordEnd] = useState(false);
  const [wordState, setWordState] = useState<any>();

  useEffect(() => {
    if (!wordAnimationEnd) {
      return;
    }

    setWordAnimationEnd(false);

    let tempMsTime = animationTimeWordSec * 1000;

    function animWord() {
      setTimeout(() => {
        setWordState({ top: "100px", opacity: 0 });
      }, (tempMsTime / 100) * 0);

      setTimeout(() => {
        setWordState({ top: "0px", opacity: 1 });
      }, (tempMsTime / 100) * 10);

      setTimeout(() => {
        setWordState({ top: "-100px", opacity: 0 });
      }, (tempMsTime / 100) * 80);

      setTimeout(() => {
        changeTextTitle();

        setWordAnimationEnd(true);
        setFirstPlayWordEnd(true);
      }, (tempMsTime / 100) * 100);
    }

    function animWordMob() {
      setTimeout(() => {
        setWordState({ top: "40px", opacity: 0 });
      }, (tempMsTime / 100) * 0);

      setTimeout(() => {
        setWordState({ top: "0px", opacity: 1 });
      }, (tempMsTime / 100) * 10);

      setTimeout(() => {
        setWordState({ top: "-40px", opacity: 0 });
      }, (tempMsTime / 100) * 80);

      setTimeout(() => {
        changeTextTitle();

        setWordAnimationEnd(true);
        setFirstPlayWordEnd(true);
      }, (tempMsTime / 100) * 100);
    }

    if (!firstPlayWordEnd) {
      setTimeout(() => {
        if (window.innerWidth > 1370) {
          animWord();
        } else {
          animWordMob();
          // animWord()
        }
      }, 1000);
    } else {
      if (window.innerWidth > 1370) {
        animWord();
      } else {
        animWordMob();
        // animWord()
      }
    }
  }, [wordAnimationEnd]);


  useEffect(() => {
    if (locale === "ar" && window.innerWidth > 1370) {
      setHouseImgState({
        transform: "scaleX(-1)",
      });
    }
  }, [locale]);

  return (
    <>
      <div
        style={HouseImgState ? { paddingLeft: 0 } : {}}
        className={ cl( style.invest_screen, locale === "ar" && style.invest_screen_ar)}
      >
        <div className={ cl( style.invest_screen__text, locale === "ar" && style.invest_screen__text_ar)}>
          <div className={cl(style.invest_screen__title, style.invest_screen__title_nowrap)} >
            {/* dEquity is <br/> re- */}
            {/* {data?.data?.attributes?.animation_text1} {"  "} */}
            <div className={style.invest_screen__title_inner} dangerouslySetInnerHTML={{ __html: data?.data?.attributes?.animation_text1}}>

            </div>
            <span
              style={wordState ? wordState : {}}
              className={
                style.invest_screen__title__testClass
                // locale === "ar" ? style.invest_screen__title__testClass : ""
              }
            >
                {animationText == null
                ? data?.data?.attributes?.animation_list?.split(",")[
                    data?.data?.attributes?.animation_list?.split(",").length -
                      (widthWindow != null && widthWindow < 575 ? 2 : 1)
                  ]
                : animationText}
              {/* {animationText == null
                ? data?.data?.attributes?.animation_list?.split(",")[
                    data?.data?.attributes?.animation_list?.split(",").length -
                      1
                  ]
                : animationText} */}
            </span>
          </div>
          <div className={cl(style.invest_screen__subtitle,
               locale === 'es' && style.invest_screen__subtitle_es,
               locale === 'pt' && style.invest_screen__subtitle_pt
            )}>
            {/* real estate investing for you */}
            {data?.data?.attributes?.animation_text2}
          </div>
          
          
        </div>

        <div
          style={HouseImgState ? HouseImgState : {}}
          className={ cl( style.invest_screen__img, locale === "ar" && style.invest_screen__img_ar) }
        >
          <div className={style.invest_screen__img_bg}>
            {widthWindow == null ? (
              ""
            ) : widthWindow < 991 ? (
              <div className={cl( style.invest_screen__img_bg_test , locale === "ar" && style.invest_screen__img_bg_test_ar)}>
                {theme === "theme-dark" ?
                <img
                  className={cl( style.invest_screen__img_bg_test_house, locale === "ar" && style.invest_screen__img_bg_test_house_ar)}
                  src={HouseMobImg.src}
                  alt="House"
                />
              
                :
            
                <img
                  className={cl( style.invest_screen__img_bg_test_house, locale === "ar" && style.invest_screen__img_bg_test_house_ar)}
                  src={HouseMobImgLight.src}
                  alt="House"
                />}
              </div>
            ) : (
              <>
                <div className={ cl( style.invest_screen__img_bg_test)}>
            
                  <img
                    className={ cl( style.invest_screen__img_bg_test_house)}
                    src={HouseImg.src}
                    alt="House"
                  />
                  
                </div>
                {/* <img className={style.invest_screen__img_bg_house} src={HouseImg.src} alt="House"/>
              <img className={style.invest_screen__img_bg_balcon1} src={Balc2Img.src} alt="House"/> */}
              </>
            )}

            
           
          </div>

          {/* <div className={style.invest_screen__img_text}>
            <div className={style.invest_screen__img_text__subtitle}>Miami, FL</div>
            <div className={style.invest_screen__img_text__title}>Biscayne Blvd</div>

            <div className={style.invest_screen__img_text__numbers}>

              <div className={style.invest_screen__img_text__number}>
                <div className={style.invest_screen__img_text__number_title}>Unit price</div>
                <div className={style.invest_screen__img_text__number_number}>$100</div>
              </div>

              <div className={style.invest_screen__img_text__number}>
                <div className={style.invest_screen__img_text__number_title}>Yield</div>
                <div className={style.invest_screen__img_text__number_number}>12.5%</div>
              </div>

            </div>
          </div> */}
        </div>

        <div className={style.invest_screen_wrapper}>

            <div className={style.invest_screen_line}></div>

            <div
              className={style.invest_screen_header_mobile_btn}
              style={locale === "ar" ? { left: 0 } : {}}
              onClick={() => {
                dispatch(toggleMenu(true));
              }}
            >
              <div className={style.invest_screen_header_mobile_btn_btn}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
        </div>

        <div className={style.invest_screen__decor1}></div>
        <div className={style.invest_screen__decor2}></div>
      </div>
      

      <div className={ cl( style.invest_screen_skew, locale === "ar" && style.invest_screen_skew_ar)}>
      <div className={   cl( style.invest_screen_skew_wrapper, locale === "ar" && style.invest_screen_skew_wrapper_ar)}>
        {/* <img className={style.invest_screen_skew_bg } src={ theme === "theme-light" ? SkewLight.src : Skew.src} alt="Background" /> */}
        {widthWindow == null ? (
              ""
            ) : widthWindow < 576 ? (
              theme === "theme-dark" ? <SkewMobSVG /> : <SkewLightMobSVG />
            ):(

              theme === "theme-light"  ?
                <img className={style.invest_screen_skew_bg } src={ SkewLight.src} alt="Background" />
                :
                <img className={style.invest_screen_skew_bg } src={ Skew.src} alt="Background" />
            )
            }
      </div>

        <div className={style.invest_screen_skew_position}>
          <div className={style.invest_screen_skew_position_title}>
            {/* Who We Are */}
            {data?.data?.attributes?.section1_item1_title}
          </div>
          <div className={style.invest_screen_skew_position_text}>
            {/* We are a hard-working team of technologists, programmers, real estate professionals and attorneys who have managed thousands of home sale transactions for consumers, banks, and investors */}
            {data?.data?.attributes?.section1_item1_text}
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimationSkew;
