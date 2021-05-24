import React from "react";
import App, { Container } from "next/app";
import Header from "../components/header";
import "./_app.scss";
import HomeLink from "../components/homeLink";
import { useRouter, withRouter } from "next/router";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;
    const isHome = router.route === "/";

    return (
      <Container>
        <Header />
        <main id="page">
          {!isHome ? <HomeLink /> : null}
          <Component {...pageProps} />
        </main>
      </Container>
    );
  }
}

export default withRouter(MyApp);
