import PortfolioCard from "../PortfolioCard";
import Phone from "../../../../components/PortfolioScreen/components/Phone";
import Screen from "../../../../components/PortfolioScreen/components/Screen";
const Exchange = () => {
  return (
    <PortfolioCard
      title={"交易所"}
      subTitle={"EXCHANGE"}
      role={["Frontend Leader", "Data Analysis"]}
      description={
        "多種虛擬貨幣的交易平台,除了基本的搓合交易、即時取得最新的幣價、交易量顯示等等,也實作了不同槓桿倍率的合約交易,介面的風格也採用了多數用戶流行的操作,提供彈性的框架適應不同的客戶需求,能夠輕鬆建立不同的模板以滿足不同的情境,且可以運行在各類裝置、平台。"
      }
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
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/crypto/crypto-mob1.png`}
        ></Phone>
        <Phone
          style={{ margin: 15 }}
          width={150}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/crypto/crypto-mob2.png`}
        ></Phone>
        <Phone
          style={{ margin: 15 }}
          width={150}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/crypto/crypto-mob3.png`}
        ></Phone>
        <Phone
          style={{ margin: 15 }}
          width={150}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/crypto/crypto-mob4.png`}
        ></Phone>
        <Phone
          style={{ margin: 15 }}
          width={150}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/crypto/crypto-mob5.png`}
        ></Phone>
        <Phone
          style={{ margin: 15 }}
          width={150}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/crypto/crypto-mob6.png`}
        ></Phone>
        <Phone
          style={{ margin: 15 }}
          width={150}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/crypto/crypto-mob7.png`}
        ></Phone>
      </div>{" "}
      <div
        style={{
          display: "flex",
          overflow: "scroll",
        }}
      >
        <Screen
          style={{ margin: 15 }}
          width={250}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/crypto/crypto-pc1.png`}
        ></Screen>
        <Screen
          style={{ margin: 15 }}
          width={250}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/crypto/crypto-pc2.png`}
        ></Screen>
        <Screen
          style={{ margin: 15 }}
          width={250}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/crypto/crypto-pc3.png`}
        ></Screen>
      </div>
    </PortfolioCard>
  );
};

export default Exchange;
