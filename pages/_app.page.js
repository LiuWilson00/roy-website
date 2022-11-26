import DefaultLayout from "../layouts/default";
import { appWithTranslation } from "next-i18next";
import "antd/dist/antd.css";
import "./theme.scss";
import "./style.scss";

import Head from "next/head";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout =
    Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>);

  useEffect(() => {
    if (window) {
      const windowsVH = window.innerHeight / 100;
      document.documentElement.style.setProperty("--vh", windowsVH + "px");
      document.documentElement.style.setProperty("--base-path", process.env.NEXT_PUBLIC_BASE_PATH);
    }
  }, []);

  return getLayout(
    <div className="app">
      <Head>
        <title>Roy Studio</title>
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.ico`}
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
export default appWithTranslation(MyApp);
