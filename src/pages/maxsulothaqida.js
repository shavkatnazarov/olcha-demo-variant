import React, {useEffect, useState} from 'react';
import {Link, useHref, useParams} from "react-router-dom";
import {product} from "./product";
import Futter from "./Futter";


function Max() {

    const id = useParams().id
    const [products, setproduct] = useState({})


    function getoneProducts() {
        product.map(item => {
            if (item.id === Number.parseInt(id)) {
                setproduct(item)
            }
        })
    }

    useEffect(() => {
        getoneProducts()
    }, [])
    return (

        <div>
            <h1 className={'text-center text-danger'}>{products.name}</h1>
            <img style={{marginLeft: '600px'}} src={products.photo} alt="quri"/>
            <h1 className={"text-center text-primary-emphasis"}>{products.price}</h1>
            <Link style={{marginLeft: '660px'}} to={'https://t.me/shavkat0801'} className="btn btn-outline-primary">sotib
                olish</Link>
            <Futter/>
        </div>

    );
}

export default Max;