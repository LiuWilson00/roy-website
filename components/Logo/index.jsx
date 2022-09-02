import styles from "./style.module.scss";

const Logo = (params) => {
  const { size } = params;
  return (
    <div className={styles.logoArea}>
      <div
        className={styles.logo}
        style={{
          fontSize: `${size}rem`,
          padding: `${size * 0.5}rem  ${size * 0.25}rem`,
        }}
      >
        Roy Studio
      </div>
    </div>
  );
};

export default Logo;
