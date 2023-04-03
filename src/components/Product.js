import React from 'react';

const Product = ({ product,test }) => {
    const { name, price } = product;


    return (
        <div className="product">
            <h3 >Name: { name}</h3>
            <p>Price:{price} </p>
            <p>Country:{ test}</p>
         
        </div>
    );
};

export default Product;