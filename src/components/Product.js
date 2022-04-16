import React from "react";

import productimage from "./image/LeanImage.jpg";
import StarsIcon from '@material-ui/icons/Stars';
import './Product.css'
function Product(){

    return (
        <div className="product">
            <div className="product__info">
                <p> The Learn Startup</p>
                <small>$</small> <strong className="product__price">49.99 </strong>
                <div className="product__rating">
                <StarsIcon />
                </div>

            </div>

            <img  className="productimage" src={productimage}/>
            <button> Add to basket</button>
        </div>

    );
}

export default Product;
