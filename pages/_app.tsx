import "../styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "../layout/Layout";

import { CartProvider } from "../context/CartContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <div className="flex flex-col md:h-screen">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </CartProvider>
  );
}

export default MyApp;
