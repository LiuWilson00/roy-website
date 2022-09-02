import { Layout } from "antd";
import styles from "./style.module.scss";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import Logo from "../components/Logo";
const { Header, Footer, Sider, Content } = Layout;
function Default({ children }) {
  const { t } = useTranslation("common");
  const [currentKey, setCurrentKey] = useState(1);
  const menu = [
    {
      text: "HOME",
      herf: "#home",
      key: 1,
    },
    {
      text: "PROFESSIONAL",
      herf: "#professional",
      key: 2,
    },
    {
      text: "EXPERIENCE",
      herf: "#experience",
      key: 3,
    },
    {
      text: "PORTFOLIO",
      herf: "#protfoio",
      key: 4,
    },
    {
      text: "CONTACT",
      herf: "#contact",
      key: 5,
    },
  ];

  const renderMenu = (m) => {
    return (
      <div
        className={`${styles.menuItem} ${
          currentKey == m.key ? styles.selected : ""
        }`}
        key={m.key}
      >
        {m.text}
      </div>
    );
  };

  return (
    <div className="default-layout" style={{ margin: "0 auto" }}>
      <Layout>
        <Header
          style={{
            background: "var(--main-background)",
            color: "var(--main-text-color)",
            display: "flex",
            justifyContent: "space-around",
            alignContent: "center",
            boxShadow: "rgb(0 0 0 / 30%) 0px 3px 4px",
            zIndex: 100,
          }}
        >
          <Logo></Logo>
          <div className={styles.menu}>{menu.map((m) => renderMenu(m))}</div>
        </Header>
        <Content>{children}</Content>
      </Layout>
    </div>
  );
}

export default Default;
