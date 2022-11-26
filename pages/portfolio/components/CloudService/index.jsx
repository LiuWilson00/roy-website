import PortfolioCard from "../PortfolioCard";
import Phone from "../../../../components/PortfolioScreen/components/Phone";
import Screen from "../../../../components/PortfolioScreen/components/Screen";
const CloudService = () => {
  return (
    <PortfolioCard
      title={"雲端服務"}
      subTitle={"Cloud Service"}
      role={["Frontend Engineer"]}
      description={
        "以SAAS的架構時做的雲端服務,實作的功能包含IoT偵測監控畫面若有異常在社交軟體即時傳訊息,並配合yolo實作物件偵測.以及以WebRTC實作的免安裝C2C通訊軟體,且有配合物件偵測,能夠紀錄會議中的物件.還有webbase的IoT動畫系統,可配合實體玩具的組裝在系統上顯示動等等的雲端服務。"
      }
      technology={["Vue", "Vuetify", "WebRTC"]}
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
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/yp/aicam.png`}
          width={250}
        ></Screen>
        <Phone
          style={{ margin: 15 }}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/yp/aicamDemo1.jpg`}
          width={125}
        ></Phone>
        <Screen
          style={{ margin: 15 }}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/yp/aicamDemo2.gif`}
          width={250}
        ></Screen>
        <Phone
          style={{ margin: 15 }}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/yp/aicamDemo3.PNG`}
          width={125}
        ></Phone>
        <Screen
          style={{ margin: 15 }}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/yp/aicamDemo4.jpg`}
          width={250}
        ></Screen>
      </div>
      <div
        style={{
          display: "flex",
          overflow: "scroll",
        }}
      >
        <Screen
          style={{ margin: 15 }}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/yp/brick.png`}
          width={250}
        ></Screen>
        <Screen
          style={{ margin: 15 }}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/yp/brickDemo1.jpg`}
          width={250}
        ></Screen>
        <Screen
          style={{ margin: 15 }}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/yp/brickDemo2.gif`}
          width={250}
        ></Screen>
        <Screen
          style={{ margin: 15 }}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/yp/brickDemo3.gif`}
          width={250}
        ></Screen>
      </div>
      <div
        style={{
          display: "flex",
          overflow: "scroll",
        }}
      >
        <Screen
          style={{ margin: 15 }}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/yp/yp.jpg`}
          width={250}
        ></Screen>
      </div>
    </PortfolioCard>
  );
};

export default CloudService;
