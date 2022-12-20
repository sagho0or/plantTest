import styles from './products.module.scss';
import Link from "next/link";
import Swiper from 'react-id-swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper';
SwiperCore.use([Navigation, Pagination]);
import { useEffect, useState } from 'react';

type IPrducts = {
    title: string;
    id: number;
    summary: string;
    imageUrl: string;
    isFave: boolean;
}

const ProductSection = ({ productList }: {
    productList: Array<IPrducts>}
) => {
    const [showSlider, setShowSlider] = useState(false);

    useEffect(() => {
        if (productList && productList.length > 0) {
            setTimeout(()=>{setShowSlider(true);}, 0.5)
        }
    }, [productList]);

    
    const params = {
        slidesPerView: 1.5,
        spaceBetween: 15,
        rebuildOnUpdate: true,
        /*pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },*/
        touchActive: true,
        // mousewheel: true,
        breakpoints: {
            "480": {
                slidesPerView: 1.5,
                spaceBetween: 15
            },
            "640": {
                slidesPerView: 1.5,
                spaceBetween: 20
            },
            "768": {
                slidesPerView: 2.5,
                spaceBetween: 40
            },
            "1200": {
                slidesPerView: 2.5,
                spaceBetween: 50
            },
            "1400": {
                slidesPerView: 3.5,
                spaceBetween: 50
            }
        }
    };


    const productContent = productList?.map(item => {
        return <div className="swiper-slide ml-10" key={item.id}>
            <div className={"flex-1 flex flex-col w-full"}>
                <div className={`border-gray border-2 rounded-xl border-solid w-full m-auto p-1.5 mb-5`}>
                    <img src={item.imageUrl} className={styles.serviceIco + " rounded-xl w-full mx-auto "} />
                </div>
                <h2 className={`mb-3 leading-6 normal-font text-base ${styles.headerText}`}>{item.title}</h2>
                <div className={`light-font leading-7 text-gray-100 ${styles.summaryText}`}>
                    <p>{item.summary}</p>
                </div>
            </div>
        </div>
    });

    return <section className="main-container">
        <div className="product-section mb-10">
            <div className="flex flex-col lg:flex-row">
                <div className={`hidden lg:block w-1/4 `}>
                    <div className={`ml-10 flex flex-col ${styles.titrBox} border-black border-2 rounded-2xl border-solid background-mid-footer`}>
                        <h1 className="text-4xl mt-32 mb-32 text-center">
                        Products of
                        <br />
                            <span className="text-gray text-center block"> PLNTS</span>
                        </h1>
                        <hr className="w-6/12 m-auto"></hr>
                        <Link href="/products">
                            <a className="hover:opacity-70 mt-20 mb-24 primary-blue-text block m-auto text-center flex flex-row align-center justify-center">
                                <span>View All</span>
                                <img className="mr-2" src="/images/left-arrow-wide.svg" />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row items-end lg:hidden">
                    <div className="w-1/2">
                        <h1 className="text-2xl section--title">
                            Products of
                        <br />
                            <span className="less-step"> PLNTS</span>
                        </h1>
                    </div>
                    <div className="w-1/2">
                        <Link href="/products">
                            <a className="hover:opacity-70 mb-10 primary-blue-text block m-auto text-center flex flex-row align-center justify-center">
                                <span>View All</span>
                                <img className="mr-2" src="/images/left-arrow-wide.svg" />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="w-full lg:w-3/4 relative">
                    {productList && productList.length>0 && showSlider && 
                    <>
                        <div className={`absolute inset-y-0 left-0 w-16 h-full ${styles.shadowSlider}`}></div>
                        <Swiper {...params} shouldSwiperUpdate>
                            {productContent}
                        </Swiper>
                    </>}

                </div>
            </div>
        </div>
    </section>
};


export default ProductSection;
