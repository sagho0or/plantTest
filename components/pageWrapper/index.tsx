/**
 * this component should be the wrapper of all Pages
 *
 * **/

import React, { useState, useEffect } from 'react';
import styles from "./PageWrapper.module.scss";
import Head from "next/head";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from 'components/Layout/Header/Header.index';
import Footer from 'components/Layout/Footer/Footer.index';

export default function PageWrapper({ children }) {
    const [visibilityState, setVisibilityState] = useState('hidden');

    useEffect(() => {
        setVisibilityState('show');
    }, []);
    return (
        <div className={`${styles.container} bg-gradiant`}>
            <Head>
                <title>Test</title>
                <meta name="description" content="Saghar fadaei's test" />
                <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="apple-touch-icon" sizes="180x180" href="https://plnts.com/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="https://plnts.com/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="https://plnts.com/favicon-16x16.png" />
                <link rel="manifest" href="https://plnts.com/site.webmanifest" />
                <link rel="mask-icon" href="https://plnts.com/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <div className={`w-full flex flex-col flex-1 ${(visibilityState == 'show' ? '' : 'hidden')} `}>
                <ToastContainer
                    closeOnClick
                    rtl
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <Header/>
                <div className={`${styles.mainContainer} w-full overflow-hidden flex-1	`}>
                    {children}
                </div>
                <Footer/>
            </div>
        </div>
    )
}

