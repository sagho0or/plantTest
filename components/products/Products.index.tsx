import Link from "next/link";
import styles from './Products.module.scss';
import React, { useEffect, useState } from "react";
import SpinnerLoader from "../Common/Loader/Loader.index";
import arrow from './includes/bottom-arrow.svg';
import { toast } from "react-toastify";


type IProducts = {
    id: number;
    title: string;
    imageUrl: string;
    summary: string;
    linkUrl: string;
    creationDate: Date;
}


const ProductList = ({ getProducts, productsList, updateProductsList }: {
    getProducts: any;
    productsList: {
        data: Array<IProducts>,
        isLoading: boolean
    },
    updateProductsList: any
}
) => {
    const [clinetProductList, setClientProductList] = useState([]);

    const Limitation = {
        limit: 2,
        offset: 0
    };

    const loadMore = (isFirstTime?) => {
        if (!isFirstTime) {
            Limitation.offset += Limitation.limit
        } else {
            setClientProductList([]);
            Limitation.offset = 0;
        }
        let data = {
            offset: Limitation.offset,
            limit: Limitation.limit
        }
        getProducts(data);
    }

    const setFave = (item) => {
        let msg = item.isFave? 'Remove from cart successfully' : 'add to cart successfully'
        toast.success(msg, {
            position: "top-right",
            autoClose:  10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        item.isFave = !item.isFave;
        updateProductsList(item.id, item.isFave)
    }
    useEffect(() => {
        loadMore(true);
    }, [])

    useEffect(() => {
        if (productsList.data && productsList.data.length) {
            setClientProductList(clinetProductList.concat(productsList.data))
        }
    }, [productsList.data])

    return <section className="mb-10 mt-16">
        <div className="main-container">
            <div className="w-full relative">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-col-1 gap-10 ">
                    {clinetProductList && clinetProductList.map((item, index) => {
                        return <div key={item.id} className={`${styles.servicesBox} flex flex-col 
                            transition-shadow ease-in rounded-3xl pt-4 px-4`}>
                            <div className="rounded-2xl overflow-hidden mb-5">
                                <img src={item.imageUrl} className="w-full" alt={item.imageUrl} />
                            </div>
                            <div className=" mb-3 text-lg">
                                <h3>{item.title}</h3>
                            </div>
                            <div className=" mb-3 leading-7 line-clamp-4 text-base"
                                dangerouslySetInnerHTML={{ __html: item.summary }}>
                            </div>
                            <a onClick={() => setFave(item)} className="background-gray text-center inline-block py-4 border-gray-200 border rounded-xl border-solid primary-blue-text mt-4 hover:opacity-70">
                                {item.isFave ? 'Remove from cart' : 'Add to cart'}
                            </a>
                        </div>
                    })}

                </div>
                <SpinnerLoader size={75} show={productsList.isLoading} />
                {clinetProductList && clinetProductList.length > Limitation.limit ?
                    <div className="my-10 text-center w-full flex judtify-center">
                        <a className="py-6 flex flex-col items-center justify-center mx-auto cursor-pointer hover:opacity-70" onClick={() => { loadMore(false) }}>
                            <span>view more</span>
                            <img className="mt-3" src={arrow} />
                        </a>
                    </div> : ''}

            </div>
        </div>

    </section>
};


export default ProductList;
