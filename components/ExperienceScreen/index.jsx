import styles from "./style.module.scss";
import { Timeline } from "antd";
import { useEffect, useRef, useState } from "react";
let varexp = [];
const ExperienceScreen = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  let contentHeights = [];

  const expRef = useRef();
  const [experience, setExperience] = useState([
    {
      dates: ["2012", "2016"],
      name: "PCCU",
      job: "Student",
      show: false,
      content:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    },
    {
      dates: ["2016", "2017"],
      name: "行銷公司",
      job: "行銷專員",
      show: false,
      content:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    },
    {
      dates: ["2017", "2018"],
      name: "桓基科技",
      job: "MARD",
      show: false,
      content:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    },
    {
      dates: ["2018", "2019"],
      name: "YPCloud",
      job: "Front end",
      show: false,
      content:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    },
    {
      dates: ["2020", "2021"],
      name: "POYUE",
      job: "Front end manager",
      show: false,
      content:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    },
  ]);
  const scrollHandler = (el) => {
    const scrollTop = el.target.documentElement.scrollTop;
    // const targetHeight = expRef.current.offsetTop;
    const windowHeight = document.documentElement.offsetHeight;
    const showPoint = windowHeight * 2.3;
    if (scrollTop > showPoint) {
      setIsScrolled(true);
    }
    let h = 0;
    contentHeights.forEach((height, index) => {
      if (scrollTop > showPoint + h) {
        if (!varexp[index].show) {
          let newExp = JSON.parse(JSON.stringify(varexp));
          newExp[index].show = true;
          setExperience(newExp);
        }
      }
      h += height;
    });
  };

  useEffect(() => {
    varexp = experience;
  }, [experience]);
  useEffect(() => {
    const targets = document.querySelectorAll(".ant-timeline-item-tail");
    //[1].offsetHeight
    const contentContents = document.querySelectorAll(
      ".ant-timeline-item-content"
    );
    contentContents.forEach((c) => {
      contentHeights.push(c.offsetHeight * 1.2);
    });
    targets.forEach((line, index) => {
      line.style = `transition-delay: ${index * 0.3}s;`;
    });
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  const timelineItemRender = (exp, index) => {
    return (
      <Timeline.Item color="var(--sub-color)" key={index}>
        <div
          className={styles.timelineItem}
          style={{
            transition: "opacity 1.5s",
            transitionTimingFunction: "ease-in-out",
            opacity: exp.show ? 1 : 0,
          }}
        >
          <p className={styles.timelineDates}>
            {exp.dates[0]}-{exp.dates[1]}
          </p>
          <p className={styles.timelineName}> {exp.name}</p>
          <p className={styles.timelineJob}>{exp.job}</p>
          <p className={styles.timelineContent}>{exp.content}</p>
        </div>
      </Timeline.Item>
    );
  };
  return (
    <div
      className={styles.experienceScreen}
      ref={expRef}
      style={{ position: "relative" }}
    >
      <div className={styles.content}>
        <div className={styles.title}>
          <p className={styles.main}>
            <span style={{ color: "var(--menu-text-active)" }}> 03</span>
            EXPERIENCE
          </p>
        </div>
        <div>
          <Timeline mode="alternate" className={isScrolled ? "" : "hide"}>
            {experience.map(timelineItemRender)}
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default ExperienceScreen;
