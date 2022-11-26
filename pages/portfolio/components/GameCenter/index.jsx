import PortfolioCard from "../PortfolioCard";
import Phone from "../../../../components/PortfolioScreen/components/Phone";
import Screen from "../../../../components/PortfolioScreen/components/Screen";
const GameCenter = () => {
  return (
    <PortfolioCard
      title={"遊戲平台"}
      subTitle={"Game Center"}
      role={["Frontend Leader", "Data Analysis"]}
      description={
        "整合各類遊戲的平台,能夠讓使用者簡單輕鬆的在單一平台使用單一帳號暢遊各類遊戲,並且使用相同的遊戲貨幣,提供彈性的框架適應不同的客戶需求,能夠輕鬆建立不同的模板以滿足不同的情境,且可以運行在各類裝置、平台。"
      }
      technology={["React", "antd", "React Native"]}
      platform={["web", "iOS", "andriod"]}
    >
      <div
        style={{
          display: "flex",
          overflow: "scroll",
        }}
      >
        <Phone
          style={{ margin: 15 }}
          width={150}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/meta/home1.png`}
        ></Phone>
        <Phone
          style={{ margin: 15 }}
          width={150}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/meta/aboutMe1.png`}
        ></Phone>
        <Phone
          style={{ margin: 15 }}
          width={150}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/meta/recharge1.png`}
        ></Phone>
        <Phone
          style={{ margin: 15 }}
          width={150}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/meta/recharge2.gif`}
        ></Phone>

        <Phone
          style={{ margin: 15 }}
          width={150}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/meta/bonus1.png`}
        ></Phone>
        <Phone
          style={{ margin: 15 }}
          width={150}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/meta/trans1.png`}
        ></Phone>
        <Phone
          style={{ margin: 15 }}
          width={150}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/meta/wallet1.png`}
        ></Phone>
      </div>{" "}
      <div
        style={{
          display: "flex",
          overflow: "scroll",
        }}
      >
        <Phone
          style={{ margin: 15 }}
          width={150}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/meta/bankCard1.png`}
        ></Phone>
        <Phone
          style={{ margin: 15 }}
          width={150}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/meta/bankCard2.png`}
        ></Phone>
        <Phone
          style={{ margin: 15 }}
          width={150}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/meta/bankCard3.png`}
        ></Phone>
        <Phone
          style={{ margin: 15 }}
          width={150}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/meta/record1.png`}
        ></Phone>
        <Phone
          style={{ margin: 15 }}
          width={150}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/meta/record2.png`}
        ></Phone>
        <Phone
          style={{ margin: 15 }}
          width={150}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/meta/record3.gif`}
        ></Phone>
      </div>
    </PortfolioCard>
  );
};

export default GameCenter;
