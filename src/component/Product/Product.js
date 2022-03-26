import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {

    const {picture, name, price} = props.product;
    const {handleProductBtn} = props;


    return (
        <div className='product'>
            <img src={picture} alt="" />
            <div className='product-info'>
                <h5>{name}</h5>
                <p>Price: ${price}</p>
                <button onClick={() => handleProductBtn(props.product)}>Add To Cart  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Product;