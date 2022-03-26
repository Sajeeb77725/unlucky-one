import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])

    const handleProductBtn = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        product={product}
                        handleProductBtn={handleProductBtn}
                        key={product.id}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
            <h3>Selected Laptops</h3>
                {
                    cart.map(product => <Cart 
                        product={product}
                        key={product.id}
                        ></Cart>)
                }
            </div>
        </div>
    );
};

export default Shop;