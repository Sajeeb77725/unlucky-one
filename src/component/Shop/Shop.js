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

    //handle product btn
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

    //choose 1 for me
    const chooseRandom = (newCart) =>{
        console.log(newCart);
        const random = Math.floor(Math.random()* 4);
        if(newCart.length !== 4){
            alert("Please choose 4 laptop.")
        }
        else if (random === 0){ 
            alert(newCart[0].name);
            setCart([]);  
        }
        else if(random === 1){
            alert(newCart[1].name);
            setCart([]);
        }
        else if(random === 2){
            alert(newCart[2].name);
            setCart([]);
        }
        else if(random === 3){
            alert(newCart[3].name);
            setCart([]);
        }
    }

    //choose again btn
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
                    <button onClick={() => chooseRandom(cart)}>CHOOSE 1 FOR ME</button>
                </div>
                <div>
                    <button onClick={chooseAgain}>CHOOSE AGAIN</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;