import Head from "next/head";
import Header from "../components/Header";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Head>
        <title>One Product Shop</title>
      </Head>
      <Header />
      {children}
    </>
  );
};

export default Layout;
