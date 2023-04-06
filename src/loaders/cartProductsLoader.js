import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProduct = await fetch('products.json')
    const products = await loadedProduct.json();

    const storedCart = getShoppingCart();
    const savedCart = []
    for (const id in storedCart) {
        const addedProduct = products.find(pd => pd.id === id);
        // console.log(addedProduct);


        if (addedProduct) {
            const quantity = storedCart[id]
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
        }
    }
    console.log(savedCart);
    return savedCart;
}

export default cartProductsLoader;