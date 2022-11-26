import PortfolioCard from "../PortfolioCard";
import Phone from "../../../../components/PortfolioScreen/components/Phone";
import Screen from "../../../../components/PortfolioScreen/components/Screen";
const ChatRoom = () => {
  return (
    <PortfolioCard
      title={"聊天室"}
      subTitle={"CHAT ROOM "}
      role={["Frontend Leader"]}
      description={
        "跨平台的聊天室系統,此專案係使用微服務設計架構,可以很輕鬆的在各個系統擴充聊天室功能,並且提供大部分聊天室系統包含的功能(上傳圖片、影片/刪除訊息/新增好友/新增群組/設置群組密碼),能夠輕鬆建立不同的模板以滿足不同的情境,且可以運行在各類裝置、平台。"
      }
      technology={["Next.js", "Antd", "React Native"]}
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
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/chatroom/chatroom2.PNG`}
        ></Phone>
        <Phone
          style={{ margin: 15 }}
          width={150}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/chatroom/chatroom3.PNG`}
        ></Phone>
        <Phone
          style={{ margin: 15 }}
          width={150}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/chatroom/chatroomNormal.gif`}
        ></Phone>
        <Screen
          style={{ margin: 15 }}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/chatroom/chatroom.PNG`}
          width={250}
        ></Screen>{" "}
        <Screen
          style={{ margin: 15 }}
          image={`${process.env.NEXT_PUBLIC_BASE_PATH}/image/portfolio/chatroom/chatroomRWD.gif`}
          width={250}
        ></Screen>
      </div>
    </PortfolioCard>
  );
};

export default ChatRoom;
