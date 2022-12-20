import React from "react";
import {END} from 'redux-saga';
import {wrapper} from "../store";
import {connect} from 'react-redux';

import PageWrapper from "../components/pageWrapper";
import ProductSection from "../components/HomePage/ProductSection/ProductSection.index";
import { getProductsLoading } from "store/actions/home/getProducts.action";

function Home({products}) {
    return (
        <PageWrapper>
            <ProductSection productList={products} />
        </PageWrapper>
    )
}

export const getStaticProps = wrapper.getStaticProps(async ({store}) => {

    store.dispatch(getProductsLoading());
    store.dispatch(END)

    await store.api.getProductsSaga.toPromise();
});

const mapStateToProps = state => {
    return {
        products: state?.home?.getProduct?.response || null
    }
};


export default connect(mapStateToProps, null)(Home);

