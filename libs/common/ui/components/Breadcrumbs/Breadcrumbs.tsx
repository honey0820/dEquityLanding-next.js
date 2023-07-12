import { useRouter } from "next/router";
import { FC } from "react";
import styles from "./Breadcrumbs.module.scss";
import cl from "classnames";

type BreadcrumbItem =
  | string
  | {
      title: string;
      link: string;
      shouldHighlight?: boolean;
    };
interface IBreadcrumbs {
  items: BreadcrumbItem[];
  isPayment?: boolean;
}
export const Breadcrumbs: FC<IBreadcrumbs> = ({ items, isPayment }) => {
  const router = useRouter();
  return (
    <ul className={styles.breadcrumbs}>
      {items.map((item, i) => {
        const isLast = i + 1 === items.length;
        if (typeof item === "string") {
          return (
            <li
              className={cl(
                styles.breadcrumbs__item,
                isPayment && styles["breadcrumbs__item--payment"]
              )}
              key={i}
            >
              {item}
            </li>
          );
        } else {
          return (
            <li
              className={cl(
                styles.breadcrumbs__item,
                isPayment && styles["breadcrumbs__item--payment"],
                isLast && styles["breadcrumbs__item--payment-last"]
              )}
              key={i}
              onClick={() => router.push(item.link)}
            >
              {item.title}
              {!isLast && (
               <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M7.55859 5.16669L10.2253 8.50002L7.55859 11.8334" stroke="#264154" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>               
              )}
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Breadcrumbs;
