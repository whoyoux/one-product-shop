import "../styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "../layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col md:h-screen">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
