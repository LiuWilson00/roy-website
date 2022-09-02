import MainScreen from "../components/MainScreen";
import SkillScreen from "../components/SkillScreen";
import ProtfolioScreen from "../components/PortfolioScreen";
import ExperienceScreen from "../components/ExperienceScreen";
import FooterScreen from "../components/FooterScreen";
export default function Home() {
  return (
    <div className="container">
      <MainScreen></MainScreen>
      <SkillScreen></SkillScreen>
      <div className="second-screens">
        <div className="sea-background">
          <div className="mask"></div>
        </div>
        <ProtfolioScreen></ProtfolioScreen>
        <ExperienceScreen></ExperienceScreen>
      </div>
      <FooterScreen></FooterScreen>
    </div>
  );
}
