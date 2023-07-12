import React, {useState} from "react";
import style from "./ResearchPortfolio.module.scss";
import {useSelector, useDispatch} from "react-redux";
import type {RootState} from "@/src/store/store";
// import ResearchPortfolioBg from "@/libs/common/ui/assets/imgs/Mask group.png";
// import bgMob   from "@/libs/common/ui/assets/imgs/ResearchSkewMobile.png";
import bgDark from "@/libs/common/ui/assets/imgs/newResearch/bgResearchBeOwnerDark.png";
import bgWith from "@/libs/common/ui/assets/imgs/newResearch/bgResearchPortfolioWith.png";
// import bgMobDark from "@/libs/common/ui/assets/imgs/newResearch/bgMobileResearchPortfolioDark.svg";
// import bgMobWith from "@/libs/common/ui/assets/imgs/newResearch/bgMobileResearchPortfolioWith.svg";
import bgMobDark from "@/libs/common/ui/assets/imgs/newResearch/bgMobileResearchPortfolioDark.png";
import bgMobWith from "@/libs/common/ui/assets/imgs/newResearch/bgMobileResearchPortfolioWith.png";
import Image from "next/image";
import SkewBGBigWhiteActive from "@/libs/common/ui/assets/imgs/SkewBlockBigNew_white_active.png";
// import SkewBGBigWhite from "@/libs/common/ui/assets/imgs/SkewBlockBigNew_white.png";
import SkewBGBigWhite from "@/libs/common/ui/assets/imgs/SkewBlockBigResearch4_white.png";
import SkewBGBigActive from "@/libs/common/ui/assets/imgs/SkewBlockBigNew_active.png";
// import SkewBGBig from "@/libs/common/ui/assets/imgs/SkewBlockBigNew.png";
import SkewBGBig from "@/libs/common/ui/assets/imgs/SkewBlockBigNewResearch4.png";
import {useRouter} from "next/router";


export const ResearchPortfolio = ({data}: { data: any }) => {

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

    const [portfolioActive, setPortfolioActive] = useState(false);

    const {locale} = useRouter()

    return (
        <>
            <div className={style.ResearchPortfolio} onMouseEnter={() => {
                setPortfolioActive(true)
            }} onMouseLeave={() => {
                setPortfolioActive(false)
            }}>
                <div className={
                    locale !== "ar" ?
                        style.ResearchPortfolio_bg_wrapper_big :
                        style.ResearchPortfolio_bg_wrapper_big_ar
                }>

                    {widthWindow == null ? "" : widthWindow < 575 ?
                        <Image
                            layout='fill'
                            src={theme === 'theme-dark' ? bgMobDark.src : bgMobWith.src}
                            alt="Background"
                            className={style.ResearchPortfolio_bg}
                        /> :
                        <Image
                            src={theme === 'theme-light' ?
                                    SkewBGBigWhite.src :
                                    SkewBGBig.src}

                                //     portfolioActive ?
                                //     SkewBGBigWhiteActive.src : SkewBGBigWhite.src :
                                // portfolioActive ?
                                //     SkewBGBigActive.src : SkewBGBig.src}
                            alt="Background"
                            layout="fill"
                            className={style.ResearchPortfolio_bg}
                        />
                    }

                    {/* <Image
                    src={ResearchPortfolioBg.src}
                    alt="Background"
                    layout="fill"
                    style={{margin:"0 auto",}}
                    className={style.ResearchPortfolio_bg}


                /> */}
                    <div className={style.ResearchPortfolio__BeOwnerText__size}><p
                        className={style.ResearchPortfolio__BeOwnerTitle}>
                        {/* Hand picked portfolio  */}
                        {data?.data?.attributes?.portf_title}
                    </p></div>
                    <div className={style.ResearchPortfolio__BeOwnerText__size}>
                        <p className={style.ResearchPortfolio__BeOwnerText}>
                            {/* dEquity empowers consumers to build a portfolio based on yield, location, class, and type of real estate. The platform allows you to identify and target your preferences and select matching offers quickly. */}
                            {data?.data?.attributes?.portf_text1}
                        </p>
                        <div>
                            <p className={style.ResearchPortfolio__BeownerLittletxt}>
                                {/* dEquity allows you to exit your holdings without lockups or holding periods 24/7/365 */}
                                {data?.data?.attributes?.portf_text2}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResearchPortfolio;

