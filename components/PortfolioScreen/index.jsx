import styles from "./style.module.scss";

const ProtfolioScreen = () => {
  const profolios = [
    {
      id: 0,
      name: "app1",
      img: "/image/portfolio/app1.jpg",
    },
    {
      id: 1,
      name: "app2",
      img: "/image/portfolio/app2.jpg",
    },
    {
      id: 2,
      name: "app3",
      img: "/image/portfolio/app3.jpg",
    },
  ];
  const profolioRender = (profolio) => {
    return (
      <div className={styles.profolio}>
        <img src={profolio.img} alt={profolio.name} />
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
