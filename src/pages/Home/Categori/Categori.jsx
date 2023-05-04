import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCart from '../../NewsCart/NewsCart';

const Categori = () => {
    const categoriNews = useLoaderData();
    // console.log(categoriNews);
    const { id } = useParams();

    return (
        <div>
            <h1>this category news {categoriNews.length}</h1>
            {
                categoriNews.map(news=><NewsCart
                key={news._id}
                news={news}
                ></NewsCart>)
            }
        </div>
    );
};

export default Categori;