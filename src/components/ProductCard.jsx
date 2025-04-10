'use client'; // si estás usando el App Router

import React from 'react';

const ProductCard = ({ title, price }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-full max-w-sm">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <p className="text-lg text-green-600 font-semibold">${price}</p>
    </div>
  );
};

export default ProductCard;
