import React, {FC} from 'react';
import {IProductModel} from "../models/IProductModel";
type TypeProps = {item:IProductModel};
const Product: FC<TypeProps> = ({item}) => {
    return (
        <div>
            {/*{item.id}*/}
            <h3>{item.title}</h3>
            {/*{item.description}*/}
            {/*{item.category}*/}
            {/*{item.price}*/}
            {/*{item.discountPercentage}*/}
            {/*{item.rating}*/}
            {/*{item.stock}*/}
            {/*{item.tags}*/}
            {/*{item.brand}*/}
            {/*{item.sku}*/}
            {/*{item.dimensions}*/}
            {/*{item.warrantyInformation}*/}
            {/*{item.shippingInformation}*/}
            {/*{item.availabilityStatus}*/}
            {/*{item.reviews}*/}
            {/*{item.returnPolicy}*/}
            {/*{item.meta}*/}
            {/*{item.images}*/}
            <img src={item.thumbnail} alt={item.title}/>

        </div>
    );
};

export default Product;