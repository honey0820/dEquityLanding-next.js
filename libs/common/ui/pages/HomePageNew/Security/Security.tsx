import React from "react";

import style from "./Security.module.scss";
import cl from "classnames";
// import lock from "../../../assets/imgs/security/lock.svg";
// import save from "../../../assets/imgs/security/save.svg";

import lock from "../../../assets/imgs/security/lockNew.svg";
import save from "../../../assets/imgs/security/saveNew.svg";

import security from "../../../assets/imgs/security/security.svg";
import securityMob from "../../../assets/imgs/security/security-mob.svg";

import securityWhite from "../../../assets/imgs/security/security_white.svg";
import securityMobWhite from "../../../assets/imgs/security/security-mob_white.svg";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store/store";
import { SecurityMobSVG, SecuritySVG, SecurityWhiteMobSVG, SecurityWhiteSVG } from "../../../assets/svg";

export const Security = ({ data }: { data: any }) => {
  const themeSelector: string = useSelector(
    (state: RootState) => state.app.appReducer.appTheme
  );

  const [widthWindow, setWidthWindow] = React.useState<number | null>(null);

  React.useEffect(() => {
    const handleResize = (event: any) => {
      setWidthWindow(event.target.innerWidth);
    };
    setWidthWindow(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className={style.security}>
        <div className={style.security__img}>


          {widthWindow == null ? (
            ""
          ) : widthWindow < 575 ? (
            themeSelector == "theme-light" ? (
              <SecurityWhiteMobSVG className={style.security_bg} />
            ) : (
              <SecurityMobSVG className={style.security_bg} />
            )
          ) : themeSelector == "theme-light" ? (
            <SecurityWhiteSVG className={style.security_bg} />
          ) : (
            <SecuritySVG className={style.security_bg} />
          )}

          <h2 className={style.security__title}>
            {/* Security */}
            {data?.data?.attributes?.security_title}
          </h2>
          <p className={style.security__text}>
            {/* Cutting-edge technology to provide maximum protection for non-custodial ownership */}
            {data?.data?.attributes?.security_subtitle}
          </p>
        </div>
        <div className={style.security__list}>
          <div className={style.security__item}>
            <div className={style.security__item_icon}>
              {/* <img src={lock.src} alt="lock" /> */}
              <Image src={lock.src} width={97} height={111} alt="lock" />
            </div>
            <div className={style.security__item_content}>
              <h3 className={style.security__item_title}>
                {/* Secure and transparent */}
                {data?.data?.attributes?.security_list1_title}
              </h3>
              <p
                className={style.security__item_text}
                dangerouslySetInnerHTML={{
                  __html: data?.data?.attributes?.security_list1_text,
                }}
              >
                {/* All necessary documentation, licenses, and transactions are stored on the blockchain and can be verified by anyone */}
                {/* {data?.data?.attributes?.security_list1_text} */}
              </p>
            </div>
          </div>
          <div className={style.security__item}>
            <div className={style.security__item_icon}>
              {/* <img src={save.src} alt="save" /> */}
              <Image src={save.src} width={97} height={104} alt="save" />
            </div>
            <div className={style.security__item_content}>
              <h3 className={style.security__item_title}>
                {/* Trustless and intermediary-free */}
                {data?.data?.attributes?.security_list2_title}
              </h3>
              <p
                className={style.security__item_text}
                dangerouslySetInnerHTML={{
                  __html: data?.data?.attributes?.security_list2_text,
                }}
              >
                {/* Meaning that no one except of <br/> owner has access to assets */}
              </p>
            </div>
          </div>
        </div>
        <div className={style.security__decor1}></div>
      </section>
    </>
  );
};

export default Security;
