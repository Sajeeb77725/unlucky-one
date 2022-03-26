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
        if(newCart.length > 4){
            alert('You can choose only 4 laptop')
            return;
        }
        else{
            setCart(newCart);
        }    
        
    }

    const chooseAgain = () =>{
        setCart([]);
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
                <div>
                    <button>CHOOSE 1 FOR ME</button>
                </div>
                <div>
                    <button onClick={chooseAgain}>CHOOSE AGAIN</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;