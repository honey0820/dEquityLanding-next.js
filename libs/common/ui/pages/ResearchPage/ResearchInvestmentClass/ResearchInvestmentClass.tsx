import React, {useState} from "react";
import style from "./ResearchInvestmentClass.module.scss";
import {useSelector, useDispatch} from "react-redux";
import type {RootState} from "@/src/store/store";
// import MaskGroup from "@/libs/common/ui/assets/imgs/Mask group.png";
//import MaskGroup from "../../../assets/imgs/NewClassResearch.png" //смотрит вправо
import Image from "next/image";
import bgDark from "@/libs/common/ui/assets/imgs/newResearch/bgResearchInvestmentClassDark.png";
import bgWith from "@/libs/common/ui/assets/imgs/newResearch/bgResearchInvestmentClassWith.png";
import bgMobDark from "@/libs/common/ui/assets/imgs/newResearch/bgResearchOpportunityDark.png";
// import bgMobWith from "@/libs/common/ui/assets/imgs/newResearch/bgResearchInvestmentClassWith.png";
import bgMobWith from "@/libs/common/ui/assets/imgs/newResearch/bgResearchOpportunityWith.png";
import SkewBGBigWhiteActive from "@/libs/common/ui/assets/imgs/SkewBlockBigNew_white_active.png";
// import SkewBGBigWhite from "@/libs/common/ui/assets/imgs/SkewBlockBigNew_white.png";
import SkewBGBigWhite from "@/libs/common/ui/assets/imgs/SkewBlockBigResearch2_white.png";
import SkewBGBigActive from "@/libs/common/ui/assets/imgs/SkewBlockBigNew_active.png";
// import SkewBGBig from "@/libs/common/ui/assets/imgs/SkewBlockBigNew.png";
import SkewBGBig from "@/libs/common/ui/assets/imgs/SkewBlockBigResearch2.png";
import {useRouter} from "next/router";


export const ResearchInvestmentClass = ({data}: { data: any }) => {

    const [investmentActive, setInvestmentActive] = useState(false);


    const [skewActive, setSkewActive] = React.useState("style.ResearchInvestmentClass_bg" || null);
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

    return (
        <>
            <div className={style.ResearchInvestmentClass} onMouseEnter={() => {
                setInvestmentActive(true)
            }} onMouseLeave={() => {
                setInvestmentActive(false)
            }}>
                <div className={ locale !== "ar" ?
                    style.ResearchInvestmentClass_bg_wrapper_big :
                    style.ResearchInvestmentClass_bg_wrapper_big_ar
                }>

                    {widthWindow == null ? "" : widthWindow < 575 ?
                        <Image
                            layout='fill'
                            src={theme === 'theme-dark' ? bgMobDark.src : bgMobWith.src}
                            
                            alt="Background"
                            className={style.ResearchInvestmentClass_bg}
                        /> :
                        <Image
                            src={theme === 'theme-light' ?
                                     SkewBGBigWhite.src :
                                    SkewBGBig.src}

                                //     investmentActive ?
                                //     SkewBGBigWhiteActive.src : SkewBGBigWhite.src :
                                // investmentActive ?
                                //     SkewBGBigActive.src : SkewBGBig.src}
                            alt="Background"
                            layout="fill"
                            className={style.ResearchInvestmentClass_bg}
                        />
                    }

                    <div className={style.ResearchInvestmentClass__OneClickText__size}>
                        <p className={style.ResearchInvestmentClass__OneClickTitle}>
                            {/* New investment class  */}
                            {data?.data?.attributes?.ric_title}
                        </p>
                    </div>
                    <div className={style.ResearchInvestmentClass__OneClickText__size}>
                        <p className={style.ResearchInvestmentClass__OneClickText}>
                            {/* dEquity brings a new investment class to the market.
                        Investors can now invest in a portion of an entire building.
                        This makes the market more transparent and accessible for everyone. */}
                            {data?.data?.attributes?.ric_text}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResearchInvestmentClass;

