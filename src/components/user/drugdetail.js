import React from 'react';

const DrugDetail = ({ drug, addToCart }) => {
  if (!drug) return <p>Chọn thuốc để xem chi tiết.</p>;

  return (
    <div>
      <h2>Chi Tiết Thuốc</h2>
      <p>Tên: {drug.name}</p>
      <p>Giá: {drug.price} VND</p>
      <button onClick={() => addToCart(drug)}>Thêm vào giỏ hàng</button>
    </div>
  );
};

export default DrugDetail;
