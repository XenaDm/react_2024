import React, {useEffect, useState} from 'react';
import PaginationComponent from "../components/PaginationComponent";
import {apiService} from "../services/api.service";
import {useSearchParams} from "react-router-dom";
import Carts from "../components/Carts";
import {ICart} from "../models/ICart";

const CartsPage = () => {
    const [query] = useSearchParams({page:'1'});
const [carts, setCarts] = useState<ICart[]>([]);
const [flag, setFlag] = useState<boolean>(false);

    useEffect(() => {
        const page = query.get('page');
        console.log(page);
        if (page){
            apiService.cart.getAll(+page).then(value => {
                setCarts(value.carts);
                if ((+page * 5) >= value.total) {
                    setFlag(true);
                }else {
                    setFlag(false);
                }
            });

        }

    }, [query]);

    return (
        <div>
            <Carts carts={carts}/>
            <hr/>
            <PaginationComponent flag={flag}/>
        </div>
    );
};

export default CartsPage;