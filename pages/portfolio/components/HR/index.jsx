import PortfolioCard from "../PortfolioCard";
import Phone from "../../../../components/PortfolioScreen/components/Phone";
import Screen from "../../../../components/PortfolioScreen/components/Screen";
const HR = () => {
  return (
    <PortfolioCard
      title={"HR系統"}
      subTitle={"Human Resource Information System"}
      role={["Full Stack"]}
      description={
        "功能豐富的人力資源系統,內容包含複雜的表單簽核能根據不同的需求產製符合實務的簽核流程,且能根據不同的部門、情境進行客製化的調整,能夠使用一套系統整合上千人以上的機關,並且根據不同的需求客制化不同的表單、權限,系統除了表單外也包含完整的總務管理系統。"
      }
      technology={["ASP.net MVC"]}
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
          image={"/image/portfolio/eip/approval.png"}
          width={250}
        ></Screen>{" "}
        <Screen
          style={{ margin: 15 }}
          image={"/image/portfolio/eip/leave1.png"}
          width={250}
        ></Screen>
        <Screen
          style={{ margin: 15 }}
          image={"/image/portfolio/eip/leave2.png"}
          width={250}
        ></Screen>
        <Screen
          style={{ margin: 15 }}
          image={"/image/portfolio/eip/leave3.png"}
          width={250}
        ></Screen>
        <Screen
          style={{ margin: 15 }}
          image={"/image/portfolio/eip/leave4.png"}
          width={250}
        ></Screen>
        <Screen
          style={{ margin: 15 }}
          image={"/image/portfolio/eip/leaveError1.png"}
          width={250}
        ></Screen>
        <Screen
          style={{ margin: 15 }}
          image={"/image/portfolio/eip/leaveError2.png"}
          width={250}
        ></Screen>
        <Screen
          style={{ margin: 15 }}
          image={"/image/portfolio/eip/password1.png"}
          width={250}
        ></Screen>
      </div>
    </PortfolioCard>
  );
};

export default HR;
