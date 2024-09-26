import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Giỏ Hàng</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price} VND
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
