import PortfolioCard from "../PortfolioCard";
import Phone from "../../../../components/PortfolioScreen/components/Phone";
import Screen from "../../../../components/PortfolioScreen/components/Screen";
const Other = () => {
  const itemTitleStyle = {
    color: "white",
    fontWeight: "bold",
    padding: "20px 10px 0px",
  };
  const itemContentStyle = {
    display: "flex",
    overflow: "scroll",
    marginTop: -40,
  };
  return (
    <PortfolioCard
      title={"其他專案"}
      subTitle={"Other"}
      role={["Programmer", "Planner"]}
      description={
        "在求學過程及工作經驗中，有許多不同領域的作品，舉凡各大公司的行銷企劃、機器學習照片辨識、統計應用、遊戲、形象網站等等，此外雖然學歷不是很漂亮，但在學期間十分勤奮在校成績優異，也附上相關的證明。"
      }
      technology={["React", "Swift", "Kotlin"]}
      platform={["web", "iOS", "andriod"]}
    >
      <div>
        <div style={itemTitleStyle}>在校成績:</div>
        <div style={itemContentStyle}>
          <Screen
            style={{ margin: 15 }}
            image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/other/school1.png`}
            width={250}
          ></Screen>
          <Screen
            style={{ margin: 15 }}
            image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/other/school2.png`}
            width={250}
          ></Screen>
          <Screen
            style={{ margin: 15 }}
            image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/other/school3.png`}
            width={250}
          ></Screen>
          <Screen
            style={{ margin: 15 }}
            image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/other/school4.png`}
            width={250}
          ></Screen>
        </div>
      </div>
      <div>
        <div style={itemTitleStyle}>統計應用作品:</div>
        <div style={itemContentStyle}>
          <Screen
            style={{ margin: 15 }}
            image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/other/ccs.png`}
            width={250}
          ></Screen>
          <Screen
            style={{ margin: 15 }}
            image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/other/resourcing1.png`}
            width={250}
          ></Screen>
          <Screen
            style={{ margin: 15 }}
            image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/other/resourcing2.png`}
            width={250}
          ></Screen>
          <Screen
            style={{ margin: 15 }}
            image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/other/resourcing3.png`}
            width={250}
          ></Screen>
        </div>
      </div>
      <div>
        <div style={itemTitleStyle}>企劃作品:</div>
        <div style={itemContentStyle}>
          <Screen
            style={{ margin: 15 }}
            image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/other/unimicron.png`}
            width={250}
          ></Screen>
          <Screen
            style={{ margin: 15 }}
            image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/other/ge.png`}
            width={250}
          ></Screen>
          <Screen
            style={{ margin: 15 }}
            image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/other/hs.png`}
            width={250}
          ></Screen>
          <Screen
            style={{ margin: 15 }}
            image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/other/px.png`}
            width={250}
          ></Screen>
          <Screen
            style={{ margin: 15 }}
            image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/other/vv.png`}
            width={250}
          ></Screen>
          <Screen
            style={{ margin: 15 }}
            image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/other/yc.png`}
            width={250}
          ></Screen>
        </div>
      </div>
      <div>
        <div style={itemTitleStyle}>其他作品:</div>
        <div style={itemContentStyle}>
          <Phone
            style={{ margin: 15 }}
            image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/other/ai1.jpg`}
            width={150}
          ></Phone>
          <Phone
            style={{ margin: 15 }}
            image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/other/ai2.jpg`}
            width={150}
          ></Phone>
          <Phone
            style={{ margin: 15 }}
            image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/other/ai3.jpg`}
            width={150}
          ></Phone>
          <Screen
            style={{ margin: 15 }}
            image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/other/ihsin.png`}
            width={250}
          ></Screen>
          <Screen
            style={{ margin: 15 }}
            image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/other/game.PNG`}
            width={250}
          ></Screen>
        </div>
      </div>
    </PortfolioCard>
  );
};

export default Other;
