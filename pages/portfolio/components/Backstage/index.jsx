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
        "跨平台的聊天室系統,此專案係使用微服務設計架構,可以很輕鬆的在各個系統擴充聊天室功能,並且提供大部分聊天室系統包含的功能(上傳圖片、影片/刪除訊息/新增好友/新增群組/設置群組密碼),能夠輕鬆建立不同的模板以滿足不同的情境,且可以運行在各類裝置、平台。"
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
