import styles from "./style.module.scss";
import Logo from "../Logo";
const IntroduceCard = () => {
  return (
    <div className={styles.introduceCard}>
      <Logo size={3}></Logo>
      <div className={styles.content}>
        <div className={styles.text}>
          I'M A PARAGRAPH. CLICK HERE TO ADD YOUR OWN TEXT AND EDIT ME. IT’S
          EASY. JUST CLICK “EDIT TEXT” OR DOUBLE CLICK ME TO ADD YOUR OWN
          CONTENT AND MAKE CHANGES TO THE FONT. FEEL FREE TO DRAG AND DROP ME
          ANYWHERE YOU LIKE ON YOUR PAGE.
        </div>
      </div>
    </div>
  );
};

export default IntroduceCard;
