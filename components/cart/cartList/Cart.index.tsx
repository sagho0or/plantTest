import styles from './Cart.module.scss';
import arrow from './includes/arrow.svg';

type IService = {
    id: number;
    title: string;
    iconUrl: string;
    summary: string;
    linkUrl: string;
}


const CartList = ({ cartList }: {
    cartList: Array<IService>;
}
) => {

    return cartList && cartList.length > 0 ? <section className="mb-10">
        <div className="main-container">
            <div className="grid md:grid-cols-2 grid-col-1 gap-10">
                {cartList && cartList.map((item, index) => {
                    return <div key={item.id} className={`${styles.cartBox} flex flex-col transition-shadow ease-in rounded-2xl`}>
                        <div className="py-6 px-5 flex flex-row items-center">
                            <img src={item.iconUrl} className="w-12 ml-5" alt={item.iconUrl} />
                            <h2 className="text-lg">{item.title}</h2>
                        </div>
                        <div className="px-5 leading-7 line-clamp-4" dangerouslySetInnerHTML={{ __html: item.summary }}>
                        </div>
                        <div className="py-6 text-center">
                            <a className="green-text flex flex-row items-center justify-center">
                                <span> Remove from cart(not implemented)</span>
                            </a>
                        </div>
                    </div>
                })}
            </div>
        </div>

    </section>
        : <section className="mb-10">
            <div className="main-container">
                <div className="grid md:grid-cols-2 grid-col-1 gap-10">
                    <p className="mt-16">Your cart is empty</p>
                </div>
            </div>

        </section>
};


export default CartList;
