import React, {useState} from 'react';
import {Form, Link} from 'react-router-dom';
import './olcha1.css'
import Futter from "./Futter";
import {product} from "./product";
import {maxsulot} from "./maxsulot";


function OLCHA() {
    const [search, setsearch] = useState('')
    const searchData = product.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div>
            <div className='nav  pb-3' id='nav'>
                <button className='btn mt-2 ' id='a'>0% Muddatli to'luv</button>
                <button className='btn btn-outline-light mt-2' id='b'>chegirmalar</button>
                <button className='btn mt-2 ' id='l'>Yutuqli uyin</button>
                <button className='btn mt-2 text-light ' id='d'>Sayt xaritasi</button>
                {/* <Link className='text-light' to="/salom" >Sayt xaritasi</Link> */}
                {/*<h4 className='text '  id='n'>+998904410801</h4>*/}
                <button className='btn btn-outline-light mt-2  ' id='g'>Olcha da soting</button>
                <button className='btn  mt-2  ' id='h'>Uzb</button>
                <button className='btn  mt-2  ' id='h'>ENG</button>
                <button className='btn  mt-2  ' id='h'>Rus</button>
            </div>
            {/* justify-content-between */}
            <div className='container'>
                <div className='col-12 d-flex align-items-center '>
                    <h1 className='col-2 textd ' style={{color: 'red'}} id='olcha'>OLCHA</h1>
                    <button className='col-2 btn btn-outline-dark ml-13'
                            style={{marginLeft: '-50px', borderRadius: "7px"}} id='kat'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                             class="bi bi-justify" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        Katalog
                    </button>
                    {/**/}
                    {/**/}
                    <form>
                        <input className='col-5 form-search__input search-active' style={{
                            marginLeft: '20px',
                            height: "35px",
                            width: "400px",
                            borderRadius: '9px',
                            backgroundColor: 'whitesmoke'
                        }} type="search" value={search} onChange={e => setsearch(e.target.value)}
                               placeholder='nima kerak' id='search'></input>
                    </form>
                    <button className='lupa ' style={{borderRadius: '5px', backgroundColor: 'red'}} id='lupa'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" class="bi bi-search"
                             viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </button>
                    <button className='btn' style={{marginLeft: '100px'}} id='btnh'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
                             class="bi bi-list-ol" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
                            <path
                                d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z"/>
                        </svg>
                    </button>
                    <button type="button" className='btngj' style={{marginLeft: '50px'}} id='yur'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                             class="bi bi-heart" viewBox="0 0 16 16">
                            <path
                                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>
                    </button>
                    <button className='btnm ' style={{border: 'none', backgroundColor: 'white', marginLeft: '58px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                             class="bi bi-cart" viewBox="0 0 16 16">
                            <path
                                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                    </button>
                    <button className='btng' style={{border: 'none', backgroundColor: 'white', marginLeft: '40px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                             className="bi bi-person"
                             viewBox="0 0 16 16">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                        </svg>
                    </button>
                </div>
                <div className="animatsiya">
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner"
                             style={{borderRadius: '12px', width: '82%', marginTop: "25px", marginLeft: '-30px'}}>
                            <div className="carousel-item active">
                                <img
                                    src="https://olcha.uz/image/original/sliders/oz/PXfohuX8XuA5rBnDeLGvcU6gYA2uDb9osUjGT0VfryoM4SPirR16fDhekpUC.png"
                                    className="d-block w-100" alt="oka internet yo'q"/>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://olcha.uz/image/original/sliders/oz/o33z6lfn3xxYGFmufGwqND4Y3TEHddvUjy7t8ljcF4cwBCViNi2MfjnzcQ21.png"
                                    className="d-block w-100" alt="📈📈"/>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://olcha.uz/image/original/sliders/oz/xnJMOueyHNatwhVr4dCXbaErjO0GbykIEUIRkG0pEMAugVzEqC4IxVvPcHGu.png"
                                    className="d-block w-100" alt="quy"/>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://olcha.uz/image/original/sliders/oz/5DBhU8gVPBaxrhNiujjRqhfXkf1ts2wA7rxo7buxMQVsjJwYPemDuVF9F0I3.png"
                                    className="d-block w-100" alt="quy"/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample"
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        <div className="card" style={{
                            width: "18rem",
                            border: "3px solid red",
                            borderRadius: '12px',
                            marginLeft: "1070px",
                            marginTop: '-360px'
                        }}>
                            <img style={{width: "16rem", height: "16rem"}}
                                 src="https://olcha.uz/image/700x700/products/2022-05-25/moyka-vysokogo-davleniya-total-tgt11316-54118-0.jpg"
                                 className=" card-img-top" alt="gaday"/>
                            <div className="card-body">
                                <p className="card-text">Yuqori bosimli yuvish vositasi Total <br/>TGT11316<br/>
                                    <p style={{color: "red", textAlign: "center"}}>1 025 000 so'm</p></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div autoFocus id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <img style={{
                            width: "10rem",
                            height: '10rem',
                            backgroundColor: '#aaa8a8',
                            borderRadius: '15px',
                            marginLeft: '-60px'
                        }}
                             src="https://c1.neweggimages.com/ProductImageCompressAll1280/A8X5_131019324219685795LNLgh9ub3l.jpg"
                             alt="quye"/>
                        <img style={{width: "10rem", height: '10rem'}}
                             src="https://olcha.uz/image/128x128/category/ANjR66Mftj98kEBx8CWVVnQLdFQuJ4pSr3QKP4n9msN9OAwp25zPtdDyLxi5."
                             alt="quye"/>
                        <img style={{width: "10rem", height: '10rem'}}
                             src="https://olcha.uz/image/128x128/category/ZUL8nBr5B3s2XNEX8MYx7lQz52QDpTpOOEf31vUDjN5Zxt0nkHEDuxyNNvuJ."
                             alt="quye"/>
                        <img style={{width: "10rem", height: '10rem'}}
                             src="https://olcha.uz/image/128x128/category/BCoCpVZoqpqJzQC4aiRpGVE115PG3XEqtSsF4AfxYn9sruh9BLoqUenR5IAi."
                             alt="quye"/>
                        <img style={{width: "10rem", height: '10rem'}}
                             src="https://olcha.uz/image/128x128/category/BMBNZQhTuA1GZumMwimF96GL1kiCPWrmAqAqHjYJ9hMB1uuofjrF9GHH0cli."
                             alt="quye"/>
                        <img style={{width: "10rem", height: '10rem'}}
                             src="https://olcha.uz/image/128x128/category/9fCLiZeH7QOJDKz24ZZg9h7lNbSMlWNuZKCYZueqB0bGSDpx9AbodQuBhmoa."
                             alt="quye"/>
                        <img style={{width: "10rem", height: '10rem'}}
                             src="https://olcha.uz/image/128x128/category/Yj9TQjVam8Cv1fiH09UBzA38z6ei92xvBC7BCvhyS3CS5b2XZVd3dRwvMUVQ."
                             alt="quye"/>
                        <img style={{width: "10rem", height: '10rem'}}
                             src="https://olcha.uz/image/128x128/category/1Yxv7H4MED8VfZPun78QtIrbJz7ZSC2VWMVAc9i5952ZDmdlN4SP9Lkr0bCh.png"
                             alt="quye"/>
                    </div>
                </div>
                <div className="vidyo">
                    <video autoPlay loop
                           poster='https://olcha.uz/image/original/homePage/9sos3oWCrRmjhpu2yxIdUfFqb96r74IOeXJop7NNTmyHIMdkSKK9pV2QDcMq.png'
                           data-v-21816440 style={{width: "100%"}}>
                    </video>
                </div>
                <div className={"row"}>
                    {maxsulot.map(item => (
                        <div className="card col-2 m-3" style={{width: "18rem;"}}>
                            <img src={item.photo} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">narxi:{item.price}</p>
                                <Link to={`/olcha/maxsulot/${item.id}`} className="btn btn-primary">sotib olish</Link>
                            </div>
                        </div>
                    ))}
                </div>
                {searchData.length === 0 ? (
                    <Getproduct products={product}/>
                ) : (
                    <Getproduct products={searchData}/>
                )}
                <div className="text" style={{marginTop: "300px"}}>
                    <h2 style={{textAlign: "center"}}>Marketplace - “Olcha” xarid qilish uchun qulay gipermarket</h2>
                    <p role="button" className="x">Har qanday insonning farovon hayoti va qulay hayotini zamonaviy
                        texnologiyalarsiz tasavvur etib bo'lmaydi. Ish va shaxsiy masalalar - smartfonda , sevimli
                        filmlar va teleko'rsatuvlar - televizor, tozalash - changyutgich, pishirish - pechka, pech va
                        ko'plab kichikroq, ammo foydali qurilmalar. Bundan tashqari, texnologiyalar rivojlanmoqda va
                        shuning uchun elektronika muntazam yangilanishlarni talab qiladi, men yangi modellarni sinab
                        ko'rmoqchiman yoki shunchaki mavjud qurilmalarning kuchi etarli emas. Shu nuqtai nazardan,
                        maishiy texnika sotib olish uchun ishonchli joyga ega bo'lish foydalidir. Agar siz hali o'zingiz
                        uchun birini topa olmagan bo'lsangiz, sizni veb-saytimizda bir necha daqiqa qolishga taklif
                        qilamiz. Sizni ishontirib aytamizki, vaqtingizni behuda o'tkazmadingiz.</p>
                    <h2 style={{textAlign: "center"}}>O‘zbekistonda uskunalarni qayerdan sotib olish mumkin?</h2>
                    <p role="button" className="x">Точек для приобретения электроники в стране немало, но важно, чтобы
                        клиенту подходил ассортимент, цена, общие условия совершения заказа. Что предлагаем мы:

                        Отличный выбор техники всех категорий – от телевизоров, смартфонов, кухонных принадлежностей до
                        автотоваров и геймерских девайсов. Кроме того, мы реализуем исключительно оригинальную брендовую
                        продукцию, по которой Вы получаете гарантии и сервисное обслуживание;

                        За счет работы в формате маркетплейса мы значительно сокращаем операционные издержки и можем
                        предложить цены, ниже рыночных на тот же товар с гарантией оригинальности;

                        Удобные покупки в рассрочку – без бумажной волокиты, нюансов с банками. Для вас достаточно иметь
                        лишь паспорт и банковскую карту, чтобы быстро оформить оплату по частям без пени за просрочки;

                        Быстрая доставка (в Ташкенте от 4 до 12 рабочих часов, в регионах – от 1-3 рабочих дней). Так
                        легко совершать покупки еще не было – оформляйте все в несколько кликов онлайн, а затем
                        получайте оперативной доставкой;

                        У нас часто действуют скидки, устраиваются дни мегаакций и предусмотрены персональные презенты к
                        заказам любого объема.</p>
                </div>
                <Futter/>
            </div>
        </div>
    );
}


function Getproduct({products}) {
    return (
        <div className={"row"}>
            {products.map(item => (
                <div className="card col-2 m-3" style={{width: "18rem;"}}>
                    <img src={item.photo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">narxi:{item.price}</p>
                        <Link to={`/olcha/product/${item.id}`} className="btn btn-primary">sotib olish</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default OLCHA;
