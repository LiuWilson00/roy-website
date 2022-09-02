import DefaultLayout from "../layouts/default";
import { appWithTranslation } from "next-i18next";
import "antd/dist/antd.css";
import "./theme.scss";
import "./style.scss";

import Head from "next/head";
function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout =
    Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return getLayout(
    <div className="app">
      <Head>
        <title>Roy Studio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
export default appWithTranslation(MyApp);
