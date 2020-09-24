// import "../styles/globals.css";
import { Layout } from "antd";
import Head from "next/head";
import App from "next/app";
import Nav from "../components/AppLayout/Nav";
import Foot from "../components/AppLayout/Footer";
import "../styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
const { Header, Footer, Content } = Layout;
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <div className="lay">
        <Head>
          <title>Tendon Clan</title>
          <link rel="stylesheet" type="text/css" href="/globals.css" />
          <link
            href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
            rel="stylesheet"
          ></link>
        </Head>

        <Nav />

        <div className="main">
          <Component {...pageProps} />
        </div>

        <Foot />

        <style jsx>{`
          .lay {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: #181f2e;
            color: #eee;
          }
          .main {
            min-height: 91vh;
            display: flex;
            justify-content: center;
            // align-items: center;
          }
        `}</style>
      </div>
    );
  }
}

export default MyApp;
