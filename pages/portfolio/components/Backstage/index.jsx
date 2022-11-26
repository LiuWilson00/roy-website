import PortfolioCard from "../PortfolioCard";
// import Phone from "../../../../components/PortfolioScreen/components/Phone";
import Screen from "../../../../components/PortfolioScreen/components/Screen";
const Backstage = () => {
  return (
    <PortfolioCard
      title={"數據管理平台"}
      subTitle={"BACKSTAGE"}
      role={["Frontend Leader"]}
      description={
        "Antd風格的後台系統，能夠輕鬆擴充不同的功能，並且擁有相當舒適的使用者體驗，並且根據不同的客戶需求能夠延展出不同的操作邏輯，且能夠讓各種不同層度的RD都能輕鬆開發，並維持十分迅速的開發速度。"
      }
      technology={["React", "TypeScript", "Antd pro", "umi.js"]}
      platform={["web"]}
    >
      <div
        style={{
          display: "flex",
          overflow: "scroll",
        }}
      >
        <Screen
          style={{ margin: 15 }}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/backstage/backstage2.png`}
          width={250}
        ></Screen>{" "}
        <Screen
          style={{ margin: 15 }}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/backstage/backstage3.png`}
          width={250}
        ></Screen>
        <Screen
          style={{ margin: 15 }}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/backstage/backstage4.png`}
          width={250}
        ></Screen>{" "}
        <Screen
          style={{ margin: 15 }}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/backstage/backstage5.png`}
          width={250}
        ></Screen>
      </div>
    </PortfolioCard>
  );
};

export default Backstage;
