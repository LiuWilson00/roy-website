import styles from "./style.module.scss";

const MainScreen = () => {
  return (
    <div className={styles.mainScreen}>
      <div
        className={styles.background}
        style={{ background: `url("${process.env.NEXT_PUBLIC_BASE_PATH}/image/index/programmer.jpg")` }}
      ></div>
      <div className={styles.mask}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            I <span style={{ color: "var( --sub-color)" }}>'</span>M
          </h1>
          <h1>
            <span style={{ color: "var( --sub-color)" }}>ROY</span> LIU,
          </h1>
          <h1>
            A <span style={{ color: "var( --sub-color)" }}>PROGRAMMER</span>
          </h1>

          <h2>BACK END,FRONT END,UI/UX,DEVOPS</h2>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
