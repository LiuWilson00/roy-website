import { Tag } from "antd";

import styles from "./style.module.scss";

const PortfolioCard = ({
  children,
  title,
  subTitle,
  role,
  description,
  technology,
  platform,
}) => {
  return (
    <div className={styles.portfolioCard}>
      <div className={styles.title}>
        <div className={styles.text}>{title}</div>
        <div className={styles.sub}>{subTitle}</div>
      </div>
      <div className={styles.info}>
        <div className={`${styles.infoContent} ${styles.first}`}>
          <div className={styles.infoItem}>
            <div className={styles.infoTitle}>ROLE</div>
            <div className={styles.value}>
              {role.map((r) => {
                return <Tag color="geekblue">{r}</Tag>;
              })}
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.infoTitle}>DESCRIPTION</div>
            <div className={styles.value}>{description}</div>
          </div>
        </div>
        <div className={styles.infoContent}>
          <div className={styles.infoItem}>
            <div className={styles.infoTitle}>TECH</div>
            <div className={styles.value}>
              {technology.map((tech) => {
                return <Tag color="cyan">{tech}</Tag>;
              })}
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.infoTitle}>PLATFORM</div>
            <div className={styles.value}>
              {platform.map((p) => {
                return <Tag color="green">{p}</Tag>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default PortfolioCard;
