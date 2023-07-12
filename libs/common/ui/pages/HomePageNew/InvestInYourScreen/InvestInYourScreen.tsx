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

import style from "./InvestInYourScreen.module.scss";
import cl from "classnames";
import ArrowRightIcon from "../../../assets/imgs/Group 21.png";
// import ArrowIcon from "../../../assets/imgs/Arrow (Stroke).png";
import ArrowIcon from "../../../assets/imgs/Arrow (Stroke) (Stroke).png";
import Image from "next/image";

import HouseImg from "../../../assets/imgs/homepage/House.webp";
import HouseImgWhite from "../../../assets/imgs/homepage/HouseWhite.webp";

import HouseMobImg from "../../../assets/imgs/homepage/HouseMob.webp";
import HouseMobImgWhite from "../../../assets/imgs/homepage/HouseMobWhite.webp";
// import Balc1Img from "../../../assets/imgs/animationBalc1.png";
// import Balc2Img from "../../../assets/imgs/animationBalc2.png";
// import Balc3Img from "../../../assets/imgs/animationBalc3.png";
// import Balc4Img from "../../../assets/imgs/animationBalc4.png";

import Balc1Img from "../../../assets/imgs/homepage/animationBalc1New.webp";
import Balc2Img from "../../../assets/imgs/homepage/animationBalc2New.webp";
import Balc3Img from "../../../assets/imgs/homepage/animationBalc3New.webp";
import Balc4Img from "../../../assets/imgs/homepage/animationBalc4New.webp";

import Balc1ImgWhite from "../../../assets/imgs/homepage/animationBalc1NewWhite.webp";
import Balc2ImgWhite from "../../../assets/imgs/homepage/animationBalc2NewWhite.webp";
import Balc3ImgWhite from "../../../assets/imgs/homepage/animationBalc3NewWhite.webp";
import Balc4ImgWhite from "../../../assets/imgs/homepage/animationBalc4NewWhite.webp";

// import BalconMobile4 from "../../../assets/imgs/BalconMobile4.png";
import BalconMobile4 from "../../../assets/imgs/homepage/BalconMobile4New.webp";
// import BalconMobile3 from "../../../assets/imgs/BalconMobile3.png";
import BalconMobile3 from "../../../assets/imgs/homepage/BalconMobile3New.webp";

import BalconMobile4White from "../../../assets/imgs/homepage/BalconMobile4New_white.webp";
import BalconMobile3White from "../../../assets/imgs/homepage/BalconMobile3New_white.webp";




import BalconText1 from "../../../assets/imgs/homepage/Apartments 1.webp";
import BalconText2 from "../../../assets/imgs/homepage/Apartments 2.webp";
import BalconText3 from "../../../assets/imgs/homepage/Apartments 3.webp";
import BalconText4 from "../../../assets/imgs/homepage/Apartments 4.webp";

import BalconTextMob1 from "../../../assets/imgs/homepage/Apartments 1_mob.webp";
import BalconTextMob2 from "../../../assets/imgs/homepage/Apartments 2_mob.webp";
import BalconTextMob3 from "../../../assets/imgs/homepage/Apartments 3_mob.webp";
import BalconTextMob4 from "../../../assets/imgs/homepage/Apartments 4_mob.webp";

import BalconTextWhite1 from "../../../assets/imgs/homepage/Apartments White 1.webp";
import BalconTextWhite2 from "../../../assets/imgs/homepage/Apartments White 2.webp";
import BalconTextWhite3 from "../../../assets/imgs/homepage/Apartments White 3.webp";
import BalconTextWhite4 from "../../../assets/imgs/homepage/Apartments White 4.webp";

import BalconTextWhiteMob1 from "../../../assets/imgs/homepage/Apartments 1_mob_white.webp";
import BalconTextWhiteMob2 from "../../../assets/imgs/homepage/Apartments 2_mob_white.webp";
import BalconTextWhiteMob3 from "../../../assets/imgs/homepage/Apartments 3_mob_white.webp";
import BalconTextWhiteMob4 from "../../../assets/imgs/homepage/Apartments 4_mob_white.webp";


import type { RootState } from "@/src/store/store";
import { useSelector } from "react-redux";


export const InvestInYourScreen = ({ data }: { data: any }) => {
  const dispatch = useDispatch();

  const handleToggleModal = () => dispatch(toggleModalEmailShowAction());

  const [lastImg,setLastImg] = useState<any>()

  const list = data?.data?.attributes?.animation_list?.split(",");

  const locale = data?.data?.attributes?.locale;

  const themeSelector:string = useSelector((state: RootState) => state.app.appReducer.appTheme);



  useEffect(()=>{
    if(themeSelector === "theme-dark"){
      setLastImg(BalconText1.src)
    }else{
      setLastImg(BalconTextWhite1.src)
    }

  },[])

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

  const animationTimeSec = 24;
  const animationTimeWordSec = 6;

  const [balcon1State, setBalcon1State] = useState<any>();
  const [balcon2State, setBalcon2State] = useState<any>();
  const [balcon3State, setBalcon3State] = useState<any>();
  const [balcon4State, setBalcon4State] = useState<any>();

  const [HouseImgState, setHouseImgState] = useState<any>();
  const [imageSrc, setImageSrc] = useState("");

  const [textState, setTextState] = useState<any>();
  const [textStateMob, setTextStateMob] = useState<any>();
  const [textStateMobPercent, setTextStateMobPercent] = useState<any>("12.5%");
  const [textStateMobDirection, setTextStateMobDirection] =
    useState<any>("right");

  const [animationEnd, setAnimationEnd] = useState(true);
  const [firstPlayEnd, setFirstPlayEnd] = useState(false);

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
        if (window.innerWidth > 992) {
          animWord();
        } else {
          animWordMob();
          // animWord()
        }
      }, 1000);
    } else {
      if (window.innerWidth > 992) {
        animWord();
      } else {
        animWordMob();
        // animWord()
      }
    }
  }, [wordAnimationEnd]);

  useEffect(() => {
    if (!animationEnd) {
      return;
    }

    setAnimationEnd(false);

    function animDesktop() {
      //DESKTOP ANIM
      //step1

      setTimeout(() => {

        setBalcon1State({ opacity: 1, top: "138px" });

        if(locale == "ar") {
          setTextState({ top: "100px", right: "400px", opacity: 1 });
        } else {
          setTextState({ top: "100px", right: "200px", opacity: 1 });
        }

        setImageSrc("text1");


        // if(themeSelector == "theme-light") {
        //   setImageSrc(BalconTextWhite1.src);
        // } else {
        //   setImageSrc(BalconText1.src);
        // }

      }, (tempMsTime / 100) * 2.5);

      setTimeout(() => {

        if(locale == "ar") {
          setTextState({ top: "0px", right: "400px", opacity: 0 });
        } else {
          setTextState({ top: "0px", right: "200px", opacity: 0 });
        }

        
        setBalcon1State(null);
      }, (tempMsTime / 100) * 20);

      setTimeout(() => {
        setTextState({
          top: "478px",
          right: "475px",
          opacity: 0,
          transitionDuration: "0s",
        });
      }, (tempMsTime / 100) * 25);

      // step2

      setTimeout(() => {
        setBalcon4State({ opacity: 1, top: "391px" });
        setTextState({ top: "378px", right: "475px", opacity: 1 });


        if(locale == "ar") {
          setImageSrc("text4");
        } else {
          setImageSrc("text2");
        }

        // if(themeSelector == "theme-light") {
        //   setImageSrc(BalconTextWhite2.src);
        // } else {
        //   setImageSrc(BalconText2.src);
        // }

      }, (tempMsTime / 100) * 27.5);

      setTimeout(() => {
        setTextState({ top: "278px", right: "475px", opacity: 0 });
        setBalcon4State(null);
      }, (tempMsTime / 100) * 45);

      setTimeout(() => {
        setTextState({
          top: "202px",
          right: "326px",
          opacity: 0,
          transitionDuration: "0s",
        });
      }, (tempMsTime / 100) * 50);

      // step3

      setTimeout(() => {
        setBalcon3State({ opacity: 1, top: "206px" });
        


        if(locale == "ar") {
          setImageSrc("text1");
          setTextState({ top: "102px", right: "280px", opacity: 1 });
        } else {
          setImageSrc("text3");
          setTextState({ top: "102px", right: "326px", opacity: 1 });
        }

        // if(themeSelector == "theme-light") {
        //   setImageSrc(BalconTextWhite3.src);
        // } else {
        //   setImageSrc(BalconText3.src);
        // }

      }, (tempMsTime / 100) * 52.5);

      setTimeout(() => {
        

        if(locale == "ar") {
          setTextState({ top: "2px", right: "280px", opacity: 0 });
        } else {
          setTextState({ top: "2px", right: "326px", opacity: 0 });
        }

        setBalcon3State(null);
      }, (tempMsTime / 100) * 70);

      setTimeout(() => {
        setTextState({
          top: "303px",
          right: "164px",
          opacity: 0,
          transitionDuration: "0s",
        });
      }, (tempMsTime / 100) * 75);

      // step4
      setTimeout(() => {
        setBalcon2State({ opacity: 1, top: "341px" });
        

        if(locale == "ar") {
          setTextState({ top: "203px", right: "364px", opacity: 1 });
        } else {
          setTextState({ top: "203px", right: "164px", opacity: 1 });
        }

        setImageSrc("text4");

        // if(themeSelector == "theme-light") {
        //   setImageSrc(BalconTextWhite4.src);
        // } else {
        //   setImageSrc(BalconText4.src);
        // }

      }, (tempMsTime / 100) * 77.5);

      setTimeout(() => {
        setBalcon2State(null);
        setTextState({ top: "103px", right: "164px", opacity: 0 });
      }, (tempMsTime / 100) * 95);

      setTimeout(() => {
        setTextState({
          top: "200px",
          right: "200px",
          opacity: 0,
          transitionDuration: "0s",
        });
      }, (tempMsTime / 100) * 99.9);

      //   //end

      setTimeout(() => {
        setAnimationEnd(true);
        setFirstPlayEnd(true);
      }, (tempMsTime / 100) * 100);
    }

    function animMobile() {
      //MOBILE ANIM
      // 1
      setTimeout(() => {
        // setBalcon1State({ opacity: 1, top: "230px" });
        setBalcon1State({ opacity: 1, top: "228px" });
        
        setTextStateMobPercent("12.5%");

        // setImageSrc(BalconTextMobile1.src);
        // setImageSrc(BalconTextMob1.src);

        

        if(locale == "ar") {
          setImageSrc("text4");
          setTextStateMob({ top: "-80px", right: "100px", opacity: 1 });
        } else {
          setImageSrc("text1");
          setTextStateMob({ top: "50px", right: "150px", opacity: 1 });
        }

        // if(themeSelector == "theme-light") {
        //   setImageSrc(BalconTextWhiteMob1.src);
        // } else {
        //   setImageSrc(BalconTextMob1.src);
        // }

      }, (tempMsTime / 100) * 2.5);

      setTimeout(() => {
        setTextStateMob({ top: "-50px", right: "150px", opacity: 0 });
        setBalcon1State(null);
      }, (tempMsTime / 100) * 20);

      setTimeout(() => {
        setTextStateMob({
          top: "190px",
          right: "100px",
          opacity: 0,
          transitionDuration: "0s",
        });
        setTextStateMobPercent("13.5%");
        setTextStateMobDirection("right");
      }, (tempMsTime / 100) * 25);

      //2
      setTimeout(() => {
        setBalcon4State({ opacity: 1, top: "421px" });
        
        // setImageSrc(BalconTextMobile2.src);
        // setImageSrc(BalconTextMob2.src);

        

        if(locale == "ar") {
          setImageSrc("text4");
          setTextStateMob({ top: "130px", right: "100px", opacity: 1 });
        } else {
          setImageSrc("text2");
          setTextStateMob({ top: "90px", right: "100px", opacity: 1 });
        }

        // if(themeSelector == "theme-light") {
        //   setImageSrc(BalconTextWhiteMob2.src);
        // } else {
        //   setImageSrc(BalconTextMob2.src);
        // }
      }, (tempMsTime / 100) * 27.5);

      //
      setTimeout(() => {
        setTextStateMob({ top: "-10px", right: "100px", opacity: 0 });
        setBalcon4State(null);
      }, (tempMsTime / 100) * 45);

      setTimeout(() => {
        setTextStateMob({
          top: "130px",
          right: "140px",
          opacity: 0,
          transitionDuration: "0s",
        });
        setTextStateMobPercent("14.5%");
        setTextStateMobDirection("right");
      }, (tempMsTime / 100) * 50);

      //3
      setTimeout(() => {
        // setBalcon3State({ opacity: 1, top: "274px" });
        setBalcon3State({ opacity: 1, top: "313px" });
        
        // setImageSrc(BalconTextMobile2.src);
        // setImageSrc(BalconTextMob3.src);

        

        if(locale == "ar") {
          setImageSrc("text4");
          setTextStateMob({ top: "30px", right: "80px", opacity: 1 });
        } else {
          setImageSrc("text3");
          setTextStateMob({ top: "30px", right: "140px", opacity: 1 });
        }

        // if(themeSelector == "theme-light") {
        //   setImageSrc(BalconTextWhiteMob3.src);
        // } else {
        //   setImageSrc(BalconTextMob3.src);
        // }
      }, (tempMsTime / 100) * 52.5);

      setTimeout(() => {
        setTextStateMob({ top: "-70px", right: "140px", opacity: 0 });
        setBalcon3State(null);
      }, (tempMsTime / 100) * 70);

      setTimeout(() => {
        setTextStateMob({
          top: "125px",
          right: "90px",
          opacity: 0,
          transitionDuration: "0s",
        });
        setTextStateMobPercent("15.5%");
        setTextStateMobDirection("left");
      }, (tempMsTime / 100) * 75);
      //4

      setTimeout(() => {
        setBalcon2State({ opacity: 1, top: "395px", left: "508px" });
        
        // setImageSrc(BalconTextMobile4.src);
        // setImageSrc(BalconTextMob4.src);

        

        if(locale == "ar") {
          setImageSrc("text2");
          setTextStateMob({ top: "25px", right: "60px", opacity: 1 });
        } else {
          setImageSrc("text4");
          setTextStateMob({ top: "25px", right: "90px", opacity: 1 });
        }

        // if(themeSelector == "theme-light") {
        //   setImageSrc(BalconTextWhiteMob4.src);
        // } else {
        //   setImageSrc(BalconTextMob4.src);
        // }
      }, (tempMsTime / 100) * 77.5);
      //
      setTimeout(() => {
        setBalcon2State(null);
        setTextStateMob({ top: "-75px", right: "90px", opacity: 0 });
      }, (tempMsTime / 100) * 95);

      setTimeout(() => {
        setTextStateMob({
          top: "150px",
          right: "150px",
          opacity: 0,
          transitionDuration: "0s",
        });
        setTextStateMobPercent("12.5%");
        setTextStateMobDirection("right");
      }, (tempMsTime / 100) * 99.9);

      //end

      setTimeout(() => {
        setAnimationEnd(true);
        setFirstPlayEnd(true);
      }, (tempMsTime / 100) * 100);
    }

    let tempMsTime = animationTimeSec * 1000;

    if (!firstPlayEnd) {
      setTimeout(() => {
        if (window.innerWidth > 992) {

          animDesktop();
        } else {
          animMobile();
        }
      }, 1000);
    } else {
      if (window.innerWidth > 992) {
        animDesktop();
      } else {
        animMobile();
      }
    }
  }, [animationEnd]);

  useEffect(() => {
    if (locale === "ar") { // && window.innerWidth > 992
      setHouseImgState({
        transform: "scaleX(-1)",
      });
    }
  }, [locale]);

  return (
    <>
      <div
        style={HouseImgState ? { paddingLeft: 0 } : {}}
        className={style.invest_screen}
      >
        <div className={ cl(style.invest_screen__text, style["invest_screen__text--" + locale]) }>
          <div 
            style={animationText == "self" ? {gap: "0em"} : {gap: "0.3em"}}
            className={cl(style.invest_screen__title,
                  style["invest_screen__title--" + locale]
            )}>
            {data?.data?.attributes?.animation_text1} {"  "}
            {/* <div style={animationText == "self" ? {marginLeft: "0em", display: "inline-block"} : {marginLeft: "0.3em", display: "inline-block"}}> */}

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
                        1
                    ]
                  : animationText}
              
            </span>
            {/* </div> */}

            {/* Invest in your <span>wealth</span> */}
          </div>
          <div className={cl(style.invest_screen__subtitle,
               style["invest_screen__subtitle--" + locale]
            )}>
            {/* Real Estate investing for All */}
            {data?.data?.attributes?.animation_text2}
          </div>

          <div className={style.invest_screen__btn_wrapper}>

            <div
              className={
               cl(style.invest_screen__btn,
                  style["invest_screen__btn--" + locale])
              }
              onClick={handleToggleModal}
              style={{ gap: "10px" }}
            >
              {/* Build your wealth */}
              {data?.data?.attributes?.section1_btn}
              <img src={ArrowRightIcon.src} alt="Arrow" />
            </div>

            <div
              className={style.invest_screen__btn_header_mobile_btn}
              style={locale === "ar" ? { left: 0 } : {}}
              onClick={() => {
                dispatch(toggleMenu(true));
                // setMobileMenuShow((prev) => !prev);
              }}
            >
              <div className={style.invest_screen__btn_header_mobile_btn_btn}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              
              {/* <Image
                  src={themeSelector === "theme-dark" ? ResearchCloseDark : ResearchClose}
                  alt="ResearchClose"
              /> */}
            </div>
          </div>

          
          <div
            className={style.invest_screen__link}
            style={{ display: "flex", gap: "10px" }}
          >
            <img src={ArrowIcon.src} alt="arrow" />
            {data?.data?.attributes?.section1_btn2}
            {/* Passive income 11-15% */}
          </div>
        </div>

        <div
          style={HouseImgState ? HouseImgState : {}}
          className={style.invest_screen__img}
        >
          <div className={style.invest_screen__img_bg}>
            {widthWindow == null ? (
              ""
            ) : widthWindow < 992 ? (
              <div className={style.invest_screen__img_bg_test}>
                
                <img
                  className={style.invest_screen__img_bg_test_house}
                  src={ themeSelector == "theme-light" ? HouseMobImgWhite.src : HouseMobImg.src }
                  alt="House"
                />
                <img
                  style={balcon1State ? balcon1State : {}}
                  className={style.invest_screen__img_bg_test_balcon1}
                  src={ themeSelector == "theme-light" ? Balc2ImgWhite.src : Balc2Img.src }
                  alt="Balcony"
                />
                <img
                  style={balcon2State ? balcon2State : {}}
                  className={style.invest_screen__img_bg_test_balcon2}
                  src={ themeSelector == "theme-light" ? BalconMobile4White.src : BalconMobile4.src }
                  alt="Balcony"
                />
                <img
                  style={balcon3State ? balcon3State : {}}
                  className={style.invest_screen__img_bg_test_balcon3}
                  src={ themeSelector == "theme-light" ? BalconMobile3White.src : BalconMobile3.src }
                  alt="Balcony"
                />
                <img
                  style={balcon4State ? balcon4State : {}}
                  className={style.invest_screen__img_bg_test_balcon4}
                  src={ themeSelector == "theme-light" ? Balc4ImgWhite.src : Balc4Img.src }
                  alt="Balcony"
                />
              </div>
            ) : (
              <>
                <div className={style.invest_screen__img_bg_test}>
                  <img
                    className={style.invest_screen__img_bg_test_house}
                    src={ themeSelector == "theme-light" ? HouseImgWhite.src : HouseImg.src}
                    alt="House"
                  />
                  
                  <img
                    style={balcon1State ? balcon1State : {}}
                    className={style.invest_screen__img_bg_test_balcon1}
                    src={ themeSelector == "theme-light" ? Balc2ImgWhite.src : Balc2Img.src }
                    alt="Balcony"
                  />
                  <img
                    style={balcon2State ? balcon2State : {}}
                    className={style.invest_screen__img_bg_test_balcon2}
                    src={themeSelector == "theme-light" ? Balc1ImgWhite.src : Balc1Img.src}
                    alt="Balcony"
                  />
                  <img
                    style={balcon3State ? balcon3State : {}}
                    className={style.invest_screen__img_bg_test_balcon3}
                    src={themeSelector == "theme-light" ? Balc3ImgWhite.src : Balc3Img.src}
                    alt="Balcony"
                  />
                  <img
                    style={balcon4State ? balcon4State : {}}
                    className={style.invest_screen__img_bg_test_balcon4}
                    src={themeSelector == "theme-light" ? Balc4ImgWhite.src : Balc4Img.src}
                    alt="Balcony"
                  />
                </div>
                {/* <img className={style.invest_screen__img_bg_house} src={HouseImg.src} alt="House"/>
              <img className={style.invest_screen__img_bg_balcon1} src={Balc2Img.src} alt="House"/> */}
              </>
            )}

            <div
              className={style.invest_screen__img_bg_text}
              style={{
                ...textState,
              }}
            >
              <Image
                style={HouseImgState ? HouseImgState : {}}
                // src={imageSrc ? imageSrc : Balc1Img.src}
                src={themeSelector == "theme-light" ?
                      (
                      imageSrc == "text1" ? BalconTextWhite1.src :
                      imageSrc == "text2" ? BalconTextWhite2.src :
                      imageSrc == "text3" ? BalconTextWhite3.src :
                      imageSrc == "text4" ? BalconTextWhite4.src : lastImg
                      ) :
                      (
                      imageSrc == "text1" ? BalconText1.src :
                      imageSrc == "text2" ? BalconText2.src :
                      imageSrc == "text3" ? BalconText3.src :
                      imageSrc == "text4" ? BalconText4.src : lastImg
                      )
                }
                alt="Background Image"
                width={295}
                height={176}
              />
              {/*<div className={style.invest_screen__img_bg_text_title}></div>*/}
              {/*<div className={style.invest_screen__img_bg_text_subtitle}></div>*/}

              {/*<div className={style.invest_screen__img_bg_text_numbers}>*/}
              {/*  <div className={style.invest_screen__img_bg_text_number}>*/}
              {/*    <div className={style.invest_screen__img_bg_text_number_title}>*/}

              {/*    </div>*/}
              {/*    <div className={style.invest_screen__img_bg_text_number_number}>*/}

              {/*    </div>*/}
              {/*  </div>*/}
              {/*  <div className={style.invest_screen__img_bg_text_number}>*/}
              {/*    <div className={style.invest_screen__img_bg_text_number_title}>*/}

              {/*    </div>*/}
              {/*    <div className={style.invest_screen__img_bg_text_number_number}>*/}

              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
            <div
              className={style.invest_screen__img_bg_text}
              style={{
                ...textStateMob,
              }}
            >
              <div style={{ position: "relative", width: "fit-content" }}>
                <Image
                  className={cl(style.invest_screen__img_balcon_text, locale === "ar" && style.invest_screen__img_balcon_text_ar)}
                  // src={imageSrc ? imageSrc : Balc1Img.src}
                  src={themeSelector == "theme-light" ?
                      (
                      imageSrc == "text1" ? BalconTextWhiteMob1.src :
                      imageSrc == "text2" ? BalconTextWhiteMob2.src :
                      imageSrc == "text3" ? BalconTextWhiteMob3.src :
                      imageSrc == "text4" ? BalconTextWhiteMob4.src : BalconTextWhiteMob1.src
                      ) :
                      (
                      imageSrc == "text1" ? BalconTextMob1.src :
                      imageSrc == "text2" ? BalconTextMob2.src :
                      imageSrc == "text3" ? BalconTextMob3.src :
                      imageSrc == "text4" ? BalconTextMob4.src : BalconTextMob1.src
                      )
                  }
                  alt="Background Image"
                  // width={205}
                  // height={110}
                  width={190}
                  height={115}
                />
                {/* <div
                  className={
                    textStateMobDirection == "right"
                      ? cl(
                          style.invest_screen__MobImg_right,
                          style.invest_screen__MobImg
                        )
                      : cl(
                          style.invest_screen__MobImg_left,
                          style.invest_screen__MobImg
                        )
                  }
                >
                  <div className={style.invest_screen__img_bg_text_title}>
                    {" "}
                    Miami, FL
                  </div>
                  <div className={style.invest_screen__img_bg_text_subtitle}>
                    {" "}
                    Biscayne Blvd
                  </div>
                  <div className={style.invest_screen__img_bg_text_numbers}>
                    <div className={style.invest_screen__img_bg_text_number}>
                      <div
                        className={
                          style.invest_screen__img_bg_text_number_title
                        }
                      >
                        Unit price
                      </div>
                      <div
                        className={
                          style.invest_screen__img_bg_text_number_number
                        }
                      >
                        $100
                      </div>
                    </div>
                    <div className={style.invest_screen__img_bg_text_number}>
                      <div
                        className={
                          style.invest_screen__img_bg_text_number_title
                        }
                      >
                        Yield
                      </div>
                      <div
                        className={
                          style.invest_screen__img_bg_text_number_number
                        }
                      >
                        {textStateMobPercent}
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          
        </div>
        <div className={style.invest_screen__decor1}></div>
        <div className={style.invest_screen__decor2}></div>
      </div>
    </>
  );
};

export default InvestInYourScreen;
