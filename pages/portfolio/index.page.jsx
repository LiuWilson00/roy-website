import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import styles from "./style.module.scss";
function Portfolio() {
  const router = useRouter();
  const [activeId, setActiveId] = useState();
  const { name } = router.query;
  const profolios = [
    {
      id: 0,
      name: "reflex",
      img: "/image/portfolio/sport.jpg",
      titleRender: () => {
        return (
          <>
            <div className={styles.mainTitle}>運動數據</div>
            <div className={styles.subTitle}>Reflex</div>
          </>
        );
      },
    },
    {
      id: 1,
      name: "chat",
      img: "/image/portfolio/chat.jpg",
      titleRender: () => {
        return (
          <>
            <div className={styles.mainTitle}>聊天室</div>
            <div className={styles.subTitle}>Chat room</div>
          </>
        );
      },
    },
    {
      id: 2,
      name: "chart",
      img: "/image/portfolio/chart.jpg",
      titleRender: () => {
        return (
          <>
            <div className={styles.mainTitle}>數據管理平台</div>
            <div className={styles.subTitle}>Backstage</div>
          </>
        );
      },
    },
  ];

  const profolioRender = (profolio) => {
    return (
      <div
        className={`${styles.profolio} ${
          activeId === profolio.id ? styles.active : ""
        }`}
        onClick={() => {
          if (activeId === profolio.id) {
            setActiveId(undefined);
          } else {
            setActiveId(profolio.id);
          }
        }}
        style={{ backgroundImage: `url("${profolio.img}")` }}
      >
        <div className={styles.mask}></div>
        <div className={styles.title}>{profolio.titleRender()}</div>
      </div>
    );
  };
  return (
    <div className={styles.protfolios}>
      <div className={styles.content}>
        {profolios.map((profolio) => {
          return profolioRender(profolio);
        })}
      </div>
    </div>
  );
}

export default Portfolio;
