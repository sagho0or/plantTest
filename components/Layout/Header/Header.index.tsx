import styles from './Header.module.scss';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import arrow from './includes/arrow.svg';
import triangleIcon from './includes/triangle.svg';

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(false);
    const [searchBar, setSeachBar] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [slideOver, setSlideOver] = useState(false);
    const [showDlTooltip, setShowDlTooltip] = useState(false);
    const handleScroll = () => {
        const position = window.pageYOffset || 0;
        const isScroll: boolean = position > 35;
        setScrollPosition(isScroll);
    };

    const router = useRouter()

    useEffect(() => {
        if (router?.asPath !== router?.route) {
            const { search } = router.query;
            if (search) setSearchQuery(search as any);
        }
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [router]);

    const onSearchBarClick = () => {
        setSeachBar(!searchBar);
    }
    const ochangeSideBarVisibility = () => {
        setSlideOver(!slideOver);
    }

    const submitSearch = (event) => {
        event.preventDefault();
        router.push(`search/?search=${searchQuery}`)
    }

    return (
        <div className={styles.headerBox}>
            <aside
                className={`fixed inset-0 overflow-hidden ${styles.sidebarMenu} ${(slideOver ? styles.show : styles.hide)}`}
                aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                <div className="absolute inset-0 overflow-hidden">

                    <div onClick={ochangeSideBarVisibility} className="absolute inset-0" aria-hidden="true"></div>

                    <div className={`${styles.sidebarOverlay} absolute inset-y-0 right-0 max-w-full flex`}>

                        <div className={`${styles.content} relative w-screen md:max-w-md max-w-sm`}>
                            <div className="h-full flex flex-col py-2 backgrounds-toolbar shadow-xl overflow-y-scroll">
                                <div className="px-2 sm:px-6">
                                    <a className={styles.logoWrapper} href="/">
                                        <h1>PLNTS</h1>
                                    </a>
                                </div>
                                <div className="mt-2 relative flex-1">
                                    <div className="absolute inset-0 ">
                                        <div className="h-full">
                                            <div className="border-b border-solid border-gray-600 mb-2">
                                                <ul className="px-6 sm:px-8 flex flex-col ">
                                                    <li className="w-full flex flex-row py-5 border-b border-solid border-gray-600">
                                                        <Link href={"/"}>
                                                            <a className="w-full flex flex-row justify-between items-center">
                                                                Home
                                                                <i>
                                                                    <img src={arrow} />
                                                                </i>
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="w-full flex flex-row py-5 border-b border-solid border-gray-600">
                                                        <Link href={"/cart"}>
                                                            <a className={`${(router && router.pathname === "/cart") ? 'warning-text' : ''} w-full flex flex-row justify-between items-center`}>
                                                            Cart
                                                                <i>
                                                                    <img src={arrow} />
                                                                </i>
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="w-full flex flex-row py-5 border-b border-solid border-gray-600">
                                                        <Link href={"/products"}>
                                                            <a className={`${(router && router.pathname === "/products") ? 'warning-text' : ''} w-full flex flex-row justify-between items-center`}>
                                                                Products
                                                                <i>
                                                                    <img src={arrow} />
                                                                </i>
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            <div
                className={`${styles.headerWrapper} ${(scrollPosition ? styles.headerBackground : styles.headerTransparent)}`}>
                <header>
                    <div className={'container mx-auto xl:px-24 px-5'}>
                        <div className={styles.wrapper}>

                            <div className={styles.menuRightMobile}>
                                <a className={styles.logoWrapper} onClick={ochangeSideBarVisibility}>
                                    <h1>PLNTS</h1>
                                </a>
                            </div>
                            <div className={styles.menuRight}>
                                <a className={styles.logoWrapper} href="/">
                                    <h1>PLNTS</h1>
                                </a>
                                <ul className={`${styles.menu + ' ' + (searchBar ? styles.showSearchBar : '')} mt-4`}>
                                    <li className={styles.menuItem}>
                                        <Link href={"/"}>
                                            <a className={`${(router && router.pathname === "/") ? 'warning-text' : ''}`}>
                                                Home
                                            </a>
                                        </Link>
                                        {
                                            router && router.pathname === "/" ?
                                                <img src={triangleIcon} className={"m-auto mt-2"} /> : ''
                                        }
                                    </li>                                    <li className={styles.menuItem}>
                                        <Link href={"/cart"}>
                                            <a className={`${(router && router.pathname === "/cart") ? 'warning-text' : ''}`}>
                                                Cart
                                            </a>
                                        </Link>
                                        {
                                            router && router.pathname === "/cart" ?
                                                <img src={triangleIcon} className={"m-auto mt-2"} /> : ''
                                        }
                                    </li>
                                    <li className={styles.menuItem}>
                                        <Link href={"/products"}>
                                            <a className={`${(router && router.pathname === "/products") ? 'warning-text' : ''}`}>
                                                Products
                                            </a>
                                        </Link>
                                        {
                                            router && router.pathname === "/products" ?
                                                <img src={triangleIcon} className={"m-auto mt-2"} /> : ''
                                        }
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </header>
            </div>

        </div>
    )
};


export default Header;
