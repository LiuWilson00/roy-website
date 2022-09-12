import { useState } from "react";
import { Carousel } from "antd";
import Phone from "./components/Phone";
import Screen from "./components/Screen";
import styles from "./style.module.scss";
import Link from "next/link";

const ProtfolioScreen = () => {
  const [activeId, setActiveId] = useState();
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
      contentRender: () => {
        return (
          <>
            <div>
              <div className={styles.mainTitle}>運動數據</div>
              <div className={styles.subTitle}>
                Reflex 運動數據分析.分享平台{" "}
                <Link href="/portfolio?name=reflex">
                  <a href="" style={{ marginLeft: 10 }}>
                    More
                  </a>
                </Link>
              </div>
            </div>
            <div>
              <Carousel autoplay dots={false}>
                <div>
                  <Phone
                    style={{ margin: "0 auto" }}
                    width={150}
                    image={"/image/portfolio/reflex/reflex2.png"}
                  ></Phone>
                </div>
                <div>
                  <Screen
                    style={{ margin: "0 auto" }}
                    image={"/image/portfolio/reflex/reflexPC4.png"}
                    width={250}
                  ></Screen>
                </div>
              </Carousel>
            </div>
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
      contentRender: () => {
        return (
          <>
            <div>
              <div className={styles.mainTitle}>聊天室</div>
              <div className={styles.subTitle}>
                跨平台,低耦合性real time通信軟體{" "}
                <Link href="/portfolio?name=chatroom">
                  <a href="" style={{ marginLeft: 10 }}>
                    MORE
                  </a>
                </Link>
              </div>
            </div>
            <div>
              <Carousel autoplay dots={false}>
                <div>
                  <Phone
                    style={{ margin: "0 auto" }}
                    width={150}
                    image={"/image/portfolio/chatroom/chatroomNormal.gif"}
                  ></Phone>
                </div>
                <div>
                  <Screen
                    style={{ margin: "0 auto" }}
                    image={"/image/portfolio/chatroom/chatroom.png"}
                    width={250}
                  ></Screen>
                </div>
              </Carousel>
            </div>
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
      contentRender: () => {
        return (
          <>
            <div>
              <div className={styles.mainTitle}>數據管理平台</div>
              <div className={styles.subTitle}>
                易操作、泛用的跨平台系統管理後台{" "}
                <Link href="/portfolio?name=backstage">
                  <a style={{ marginLeft: 10 }}>MORE</a>
                </Link>
              </div>
            </div>
            <div>
              <Carousel autoplay dots={false}>
                <div>
                  <Screen
                    style={{ margin: "0 auto" }}
                    width={250}
                    image={"/image/portfolio/backstage/backstage2.png"}
                  ></Screen>
                </div>
                <div>
                  <Screen
                    style={{ margin: "0 auto" }}
                    image={"/image/portfolio/backstage/backstage3.png"}
                    width={250}
                  ></Screen>
                </div>
              </Carousel>
            </div>
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
        } ${
          activeId != undefined && activeId != profolio.id
            ? styles.nonActive
            : ""
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
        <div className={styles.activeGroup}>{profolio.contentRender()}</div>
      </div>
    );
  };
  return (
    <div className={styles.protfolioScreen} style={{ position: "relative" }}>
      <div className={styles.content}>
        <div className={styles.title}>
          <p className={styles.main}>
            <span style={{ color: "var(--menu-text-active)" }}> 02</span>
            PORTFOLIO
          </p>
          <p className={styles.sub}>
            MY LATEST WORK. <a href="">SEE MORE </a>
          </p>
        </div>
        <div className={styles.profolios}>{profolios.map(profolioRender)}</div>
      </div>
    </div>
  );
};

export default ProtfolioScreen;
