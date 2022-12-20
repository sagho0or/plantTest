import React from "react";
import PageWrapper from "../../components/pageWrapper";
import { wrapper } from "../../store";
import { connect } from 'react-redux';
import ProductList from "../../components/products/Products.index";
import { productsItemsLoading } from "../../store/actions/Products/product.action";
import { editProductContentLoading } from "store/actions/Products/editProductContent.action";

function ProductPage({
    productsList,
    getProducts,
    updateProductsList
}) {

    return (
        <PageWrapper >
            <ProductList productsList={productsList} getProducts={getProducts} updateProductsList={updateProductsList}/>
        </PageWrapper>
    )
}


const mapStateToProps = state => ({
    productsList: {
        data: state?.products?.items?.response,
        isLoading: state?.products?.items?.isLoading
    },
});


const mapDispatchToProps = (dispatch) => ({
    getProducts : (data) => dispatch(productsItemsLoading({data})),
    updateProductsList: (body) => (dispatch(editProductContentLoading(body))),
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);