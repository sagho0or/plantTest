import '../styles/tailwind.css';
import 'tailwindcss/tailwind.css';
import "../styles/index.scss";

import React from "react";
import { wrapper } from "../store";
import Router from 'next/router';
import NProgress from 'nprogress';

NProgress.configure({
    minimum: 0.3,
    easing: 'ease',
    speed: 800,
    showSpinner: false
  });

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp = ({ Component, pageProps }) => (
    <Component {...pageProps} />
)

export default wrapper.withRedux(MyApp)