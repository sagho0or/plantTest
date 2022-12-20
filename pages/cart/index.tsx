import React from "react";
import PageWrapper from "../../components/pageWrapper";
import { END } from 'redux-saga';
import { wrapper } from "../../store";
import { connect } from 'react-redux';
import CartList from "components/cart/cartList/Cart.index";
import { servicesItemsLoading } from "store/actions/services/services.action";

function CartPage({
    cartList
}) {

    return (
        <PageWrapper>
            <CartList cartList={cartList}/>
        </PageWrapper>
    )
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {

    store.dispatch(servicesItemsLoading());
    store.dispatch(END)
    await store.api.servicesItemsSaga.toPromise();
});
const mapStateToProps = state => ({
    cartList: state?.services?.items?.response || null,
});


export default connect(mapStateToProps, null)(CartPage);