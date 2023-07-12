import React, {useState} from "react";
import style from "./ResearchOne-click.module.scss";
import {useSelector, useDispatch} from "react-redux";
import type {RootState} from "@/src/store/store";
import bgDark from "@/libs/common/ui/assets/imgs/newResearch/bgResearchOneClickDark.png";
import bgWith from "@/libs/common/ui/assets/imgs/newResearch/bgResearchOneClickWith.png";
import asas from "@/libs/common/ui/assets/imgs/SkewBlockBigNew_active.png"
// import bgMobDark from "@/libs/common/ui/assets/imgs/newResearch/bgMobileResearchOneClickDark.svg";
import bgMobDark from "@/libs/common/ui/assets/imgs/newResearch/bgMobileResearchOneClickDark.png";
// import bgMobWith from "@/libs/common/ui/assets/imgs/newResearch/bgMobileResearchOneClickWith.svg";
import bgMobWith from "@/libs/common/ui/assets/imgs/newResearch/bgMobileResearchOneClickWith.png";
import Image from "next/image";
import SkewBGBigWhiteActive from "@/libs/common/ui/assets/imgs/SkewBlockBigNew_white_active.png";
// import SkewBGBigWhite from "@/libs/common/ui/assets/imgs/SkewBlockBigNew_white.png";
import SkewBGBigWhite from "@/libs/common/ui/assets/imgs/SkewBlockBigResearch_white.png";
import SkewBGBigActive from "@/libs/common/ui/assets/imgs/SkewBlockBigNew_active.png";
// import SkewBGBig from "@/libs/common/ui/assets/imgs/SkewBlockBigNew.png";
import SkewBGBig from "@/libs/common/ui/assets/imgs/SkewBlockBigNewResearch.png";
import SkewBGBigMobWhite from "@/libs/common/ui/assets/imgs/SkewBlockBig-mob_white.png";
import SkewBGBigMob from "@/libs/common/ui/assets/imgs/SkewBlockBig-mob2.png";
import {useRouter} from "next/router";


export const ResearchOneClick = ({data}: { data: any }) => {

    const [widthWindow, setWidthWindow] = React.useState<number | null>(null);
    const [theme, setTheme] = useState("");

    const themeSelector = useSelector((state: RootState) => state.app.appReducer.appTheme);

    React.useEffect(() => {
        if (themeSelector) {
            setTheme(themeSelector);
        }
    }, [themeSelector]);

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

    const [researchActive, setResearchActive] = useState(false);

    return (
        <>
            <div className={style.ResearchOneClick} onMouseEnter={() => {
                setResearchActive(true)
            }} onMouseLeave={() => {
                setResearchActive(false)
            }}>
                <div className={
                    locale !== "ar" ?
                        style.ResearchOneClick_bg_wrapper_big :
                        style.ResearchOneClick_bg_wrapper_big_ar
                }>

                    {widthWindow == null ? "" : widthWindow < 575 ?
                        <Image
                            layout='fill'
                            src={theme === 'theme-dark' ? bgMobDark.src : bgMobWith.src}
                            alt="Background"
                            className={style.ResearchOneClick_bg}
                        /> :
                        <Image
                            src={theme === 'theme-light' ?
                                SkewBGBigWhite.src :
                                SkewBGBig.src}
                                // researchActive ?
                                //     SkewBGBigWhiteActive.src : SkewBGBigWhite.src :
                                // researchActive ?
                                //     SkewBGBigActive.src : SkewBGBig.src}
                            alt="Background"
                            layout="fill"
                            className={style.ResearchOneClick_bg}
                        />
                    }

                    {/* <Image
                    src={bg.src}
                    alt="Background"
                    layout="fill"
                    className={style.ResearchOneClick_bg}
                /> */}
                    <div className={style.ResearchOneClick}><p className={style.ResearchOneClick__OneClickTitle}>
                        {/* One-click access solution  */}
                        {data?.data?.attributes?.rOneClick_title}
                    </p></div>
                    <div className={style.ResearchOneClick__OneClickText__size}><p
                        className={style.ResearchOneClick__OneClickText}>
                        {/* dEquity offers one-click access to fractionalized
                & tokenized real-world assets with ownership powered by
                a multi-blockchain solution, creating a more inclusive earning model
                and a faster and more transparent real estate market */}
                        {data?.data?.attributes?.rOneClick_text}
                    </p></div>

                </div>
            </div>
        </>
    );
};

export default ResearchOneClick;

