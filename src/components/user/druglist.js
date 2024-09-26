import React from 'react';

const druglist = ({ onDrugSelect }) => {
  const drugs = [
    { id: 1, name: 'Thuốc Long Chân', price: 100000 },
    { id: 2, name: 'Thuốc Ho Bổ Phế', price: 150000 },
  ];

  return (
    <div>
      <h2>Danh Sách Thuốc</h2>
      <ul>
        {drugs.map((drug) => (
          <li key={drug.id} onClick={() => onDrugSelect(drug)}>
            {drug.name} - {drug.price} VND
          </li>
        ))}
      </ul>
    </div>
  );
};

export default druglist;
