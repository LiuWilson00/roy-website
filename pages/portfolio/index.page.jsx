import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import Url from "url-parse";

import styles from "./style.module.scss";
import Reflex from "./components/Reflex";
import ChatRoom from "./components/ChatRoom";
import Backstage from "./components/Backstage";
import HR from "./components/HR";
import Exchange from "./components/Exchange";
import GameCenter from "./components/GameCenter";
import Games from "./components/Games";
import CloudService from "./components/CloudService";
import Funding from "./components/Funding";
import Shopping from "./components/Shopping";
import Other from "./components/Other";

function Portfolio() {
  const router = useRouter();
  const [activeId, setActiveId] = useState(1);
  const { name } = router.query;
  const profolios = [
    {
      id: 1,
      name: "reflex",
      img: `${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/sport.jpg`,
      titleRender: () => {
        return (
          <>
            <div className={styles.mainTitle}>運動數據</div>
            <div className={styles.subTitle}>Reflex</div>
          </>
        );
      },
      content: Reflex,
    },
    {
      id: 2,
      name: "chatroom",
      img: `${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/chat.jpg`,
      titleRender: () => {
        return (
          <>
            <div className={styles.mainTitle}>聊天室</div>
            <div className={styles.subTitle}>Chat room</div>
          </>
        );
      },
      content: ChatRoom,
    },
    {
      id: 3,
      name: "backstage",
      img: `${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/chart.jpg`,
      titleRender: () => {
        return (
          <>
            <div className={styles.mainTitle}>數據管理平台</div>
            <div className={styles.subTitle}>Backstage</div>
          </>
        );
      },
      content: Backstage,
    },
    {
      id: 4,
      name: "hr",
      img: `${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/employee.jpg`,
      titleRender: () => {
        return (
          <>
            <div className={styles.mainTitle}>HR系統</div>
            <div className={styles.subTitle}>
              Human Resource Information System
            </div>
          </>
        );
      },
      content: HR,
    },
    {
      id: 5,
      name: "crypto",
      img: `${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/crypto.jpg`,
      titleRender: () => {
        return (
          <>
            <div className={styles.mainTitle}>交易所</div>
            <div className={styles.subTitle}>Exchange</div>
          </>
        );
      },
      content: Exchange,
    },
    {
      id: 6,
      name: "gameCenter",
      img: `${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/games.jpg`,
      titleRender: () => {
        return (
          <>
            <div className={styles.mainTitle}>遊戲平台</div>
            <div className={styles.subTitle}>Game Center</div>
          </>
        );
      },
      content: GameCenter,
    },
    {
      id: 7,
      name: "games",
      img: `${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/games2.jpg`,
      titleRender: () => {
        return (
          <>
            <div className={styles.mainTitle}>各類遊戲</div>
            <div className={styles.subTitle}>Games</div>
          </>
        );
      },
      content: Games,
    },
    {
      id: 8,
      name: "computer",
      img: `${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/computer.jpg`,
      titleRender: () => {
        return (
          <>
            <div className={styles.mainTitle}>雲端服務</div>
            <div className={styles.subTitle}>Cloud Service</div>
          </>
        );
      },
      content: CloudService,
    },
    {
      id: 9,
      name: "funding",
      img: `${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/funding.jpg`,
      titleRender: () => {
        return (
          <>
            <div className={styles.mainTitle}>募資平台</div>
            <div className={styles.subTitle}>Funding Center</div>
          </>
        );
      },
      content: Funding,
    },
    {
      id: 10,
      name: "uorder",
      img: `${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/shopping.jpg`,
      titleRender: () => {
        return (
          <>
            <div className={styles.mainTitle}>購物平台</div>
            <div className={styles.subTitle}>Shopping</div>
          </>
        );
      },
      content: Shopping,
    },
    {
      id: 11,
      name: "other",
      img: `${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/software.jpg`,
      titleRender: () => {
        return (
          <>
            <div className={styles.mainTitle}>其他</div>
            <div className={styles.subTitle}>Other</div>
          </>
        );
      },
      content: Other,
    },
  ];

  useEffect(() => {
    const url = Url(window.location.href, true);
    const target = profolios.find((p) => url?.query?.name === p.name);
    if (target) {
      setActiveId(target.id);
    }
  }, []);

  const profolioRender = (profolio) => {
    return (
      <div
        className={`${styles.profolio} ${
          activeId === profolio.id ? styles.active : ""
        }`}
        onClick={() => {
          if (activeId === profolio.id) {
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

  const currentProtfolio = profolios.find((p) => activeId === p.id);
  return (
    <div className={styles.protfolios}>
      <div
        className={styles.content}
        style={{
          background: `url(${currentProtfolio?.img})`,
        }}
      >
        <div className={styles.profolioList}>
          {profolios.map((profolio) => {
            return profolioRender(profolio);
          })}
        </div>
        <div className={styles.main}>
          {currentProtfolio.content ? (
            <currentProtfolio.content></currentProtfolio.content>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
