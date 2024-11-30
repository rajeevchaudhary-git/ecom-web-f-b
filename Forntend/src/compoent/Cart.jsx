import React from 'react'
import { useSelector } from "react-redux";

function Cart() {
    const cartItems = useSelector((state) => state.cart.items);
    console.log(cartItems);

  return (
    <div>
            <h2>Cart Items</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            <strong>{item.name}</strong> - Quantity: {item.quantity} - Price: ${item.price}
                        </li>
                    ))}
                </ul>
            )}
            {/* Log cart data in the console */}
            <button onClick={() => console.log(cartItems)}>Print Cart Data</button>
        </div>
  )
}

export default Cart
