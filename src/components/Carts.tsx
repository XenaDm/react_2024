import React, {FC} from 'react';
import {ICart} from "../models/ICart";

type CartsProps = {
    carts:ICart[];
}
const Carts: FC<CartsProps> = ({ carts }) => {
    return (
        <div>
            {carts.map((cart) => (

                <ul key={cart.userId}>
                    <li key={cart.userId}>
                        <h3>User ID: {cart.userId}</h3>
                        <div>Total: {cart.total}</div>
                        <div>Discounted Total: {cart.discountedTotal}</div>
                        <div>Total Products: {cart.totalProducts}</div>
                        <div>Total Quantity: {cart.totalQuantity}</div>

                        {cart.carts?.map((singleCart) => (
                            <div key={singleCart.id}>
                                <h4>Cart ID: {singleCart.id}</h4>
                                {singleCart.products?.map((product) => (
                                    <div key={product.id}>
                                        Product Title: {product.title} - Price: ${product.price} -
                                        Quantity: {product.quantity}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </li>
                </ul>
            ))}
        </div>
    );
};



export default Carts;