import PortfolioCard from "../PortfolioCard";
import Phone from "../../../../components/PortfolioScreen/components/Phone";
import Screen from "../../../../components/PortfolioScreen/components/Screen";
const Funding = () => {
  return (
    <PortfolioCard
      title={"募資平台"}
      subTitle={"Funding Center"}
      role={["Frontend Leader"]}
      description={"參考近年流行的募資平台建立的系統，會員可以自由申請與贊助自己支持的項目，提供彈性的框架適應不同的客戶需求，能夠輕鬆建立不同的模板以滿足不同的情境，且可以運行在各類裝置、平台。"}
      technology={["React", "Material ui", "React Native"]}
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
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/funding/about.jpg`}
        ></Phone>
        <Phone
          style={{ margin: 15 }}
          width={150}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/funding/home.png`}
        ></Phone>
        <Phone
          style={{ margin: 15 }}
          width={150}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/funding/invite.jpg`}
        ></Phone>
      </div>
    </PortfolioCard>
  );
};

export default Funding;
