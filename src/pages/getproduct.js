import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {maxsulot} from "./maxsulot";
import Futter from "./Futter";

function Pro() {
    const id=useParams().id
    const [maxsulots,setmaxsulot] =useState({})
    function getmaxsulots(){

        maxsulot.map(item=>{
            if (item.id===Number.parseInt(id)){
                setmaxsulot(item)
                console.log(id)
            }
        })
    }
    useEffect(() => {
        getmaxsulots()
    },[])
    return (

        <div>

                <h1 className={'text-center text-danger'}>{maxsulots.name}</h1>
                <img style={{marginLeft:'600px'}} src={maxsulots.photo} alt="quri"/>
                <h1 className={"text-center text-primary-emphasis"}>{maxsulots.price}</h1>
                <Link style={{marginLeft:'660px'}} to={'https://t.me/shavkat0801'} className="btn btn-outline-primary">sotib olish</Link>
                <Futter/>

        </div>
    );
}

export default Pro;