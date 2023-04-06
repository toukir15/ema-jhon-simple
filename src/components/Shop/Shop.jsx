import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    // console.log(products);
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step 1:get id of the addedProduct
    for (const id in storedCart) {
      // step 2:get product form products state by using id
      const addedProduct = products.find((product) => product.id == id);
      if (addedProduct) {
        // step 3:add quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // step 4: add the added product to the saved card
        savedCart.push(addedProduct);
      }
    }
    //  step 5: set the card
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    // const newCart = [...cart, product];
    let newCart = [];
    const exists = cart.find((pd) => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...Cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exists];
    }
    setCart(newCart);
    addToDb(product.id);
  };
  return (
    <>
      <div>
        <div className="shop__container">
          <div className="products__container">
            {products.map((product) => (
              <Product handleAddToCart={handleAddToCart} product={product} />
            ))}
          </div>
          <div className="cart__container">
            <Cart cart={cart} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
