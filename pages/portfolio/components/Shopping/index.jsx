import PortfolioCard from "../PortfolioCard";
import Phone from "../../../../components/PortfolioScreen/components/Phone";
import Screen from "../../../../components/PortfolioScreen/components/Screen";
const Shopping = () => {
  return (
    <PortfolioCard
      title={"搶購平台"}
      subTitle={"SHOPPING"}
      role={["Frontend Leader"]}
      description={"功能豐富完整的購物平台,提供彈性的框架適應不同的客戶需求,能夠輕鬆建立不同的模板以滿足不同的情境,且可以運行在各類裝置、平台。"}
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
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/uorder/home.jpg`}
        ></Phone>
        <Phone
          style={{ margin: 15 }}
          width={150}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/uorder/order.jpg`}
        ></Phone>
        <Phone
          style={{ margin: 15 }}
          width={150}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/uorder/record.png`}
        ></Phone>
      </div>
    </PortfolioCard>
  );
};

export default Shopping;
