import PortfolioCard from "../PortfolioCard";
import Phone from "../../../../components/PortfolioScreen/components/Phone";
import Screen from "../../../../components/PortfolioScreen/components/Screen";
const Reflex = () => {
  return (
    <PortfolioCard
      title={"運動數據"}
      subTitle={"REFLEX"}
      role={["Frontend Leader", "Data Analysis"]}
      description={
        "提供各類運動賽事數據分析、即時的比賽紀錄，並包含各類互動的衍生功能、微商推廣功能，提供彈性的框架適應不同的客戶需求，能夠輕鬆建立不同的模板以滿足不同的情境，且可以運行在各類裝置、平台。"
      }
      technology={["Nuxt.js", "Vuetify", "React Native"]}
      platform={["web", "iOS", "andriod"]}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <Phone
          style={{ margin: 15 }}
          width={150}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/reflex/reflex2.png`}
        ></Phone>
        <Phone
          style={{ margin: 15 }}
          width={150}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/reflex/reflex3.png`}
        ></Phone>
        <Phone
          style={{ margin: 15 }}
          width={150}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/reflex/reflex4.png`}
        ></Phone>
        <Phone
          style={{ margin: 15 }}
          width={150}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/reflex/reflex5.png`}
        ></Phone>
        <Phone
          style={{ margin: 15 }}
          width={150}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/reflex/reflex6.png`}
        ></Phone>
        <Phone
          style={{ margin: 15 }}
          width={150}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/reflex/reflex7.png`}
        ></Phone>
      </div>
      <div
        style={{
          display: "flex",
          overflow: "scroll",
        }}
      >
        <Screen
          style={{ margin: 15 }}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/reflex/reflexPC1.png`}
          width={250}
        ></Screen>
        <Screen
          style={{ margin: 15 }}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/reflex/reflexPC2.png`}
          width={250}
        ></Screen>
        <Screen
          style={{ margin: 15 }}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/reflex/reflexPC4.png`}
          width={250}
        ></Screen>
      </div>
    </PortfolioCard>
  );
};

export default Reflex;
