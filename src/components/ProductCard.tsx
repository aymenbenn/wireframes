import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';

export interface ProductCardProps {
  image?: string; // optional, default will be used
  title: string;
  brand: string;
  inStock: boolean;
  deliveryTime: string;
  warranty: string;
  sku: string;
  oldPrice?: string;
  price: string;
}

export function ProductCard({
  image = "/A.png", // default image from public folder
  title,
  brand,
  inStock,
  deliveryTime,
  warranty,
  sku,
  oldPrice,
  price
}: ProductCardProps) {
  const [quantity, setQuantity] = useState<number>(1);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="bg-white rounded-xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group flex flex-col h-full">

      {/* IMAGE AREA */}
      <div className="relative bg-gray-50 flex items-center justify-center aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-contain w-full h-full p-6 group-hover:scale-105 transition duration-500"
        />
        {/* STOCK BADGE */}
        <div className="absolute top-3 left-3">
          {inStock ? (
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
              Op voorraad
            </span>
          ) : (
            <span className="bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">
              Niet op voorraad
            </span>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col p-4 flex-grow">

        {/* TITLE */}
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-2 min-h-[42px]">
          {title}
        </h3>

        {/* MICRO INFO */}
        <div className="text-xs text-gray-500 mb-4 space-y-1">
          <div><span className="font-semibold text-gray-700">Merk:</span> {brand}</div>
          <div><span className="font-semibold text-gray-700">Levertijd:</span> {deliveryTime}</div>
          <div><span className="font-semibold text-gray-700">Garantie:</span> {warranty}</div>
          <div><span className="font-semibold text-gray-700">Art.nr:</span> {sku}</div>
        </div>

        {/* PRICE */}
        <div className="mt-auto mb-3">
          {oldPrice && (
            <span className="text-sm text-gray-400 line-through block">
              € {oldPrice}
            </span>
          )}
          <span className="text-xl font-bold text-blue-600">
            € {price}
          </span>
        </div>

        {/* QUANTITY + ADD TO CART */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full">

          {/* QUANTITY SELECTOR */}
          <div className="flex items-center border border-gray-300 rounded overflow-hidden h-8">
            <button
              onClick={decreaseQuantity}
              className="flex items-center justify-center w-6 bg-gray-100 hover:bg-gray-200 transition"
            >
              <Minus className="w-3 h-3 text-gray-700" />
            </button>
            <span className="w-6 text-center font-semibold text-gray-700 text-sm">
              {quantity}
            </span>
            <button
              onClick={increaseQuantity}
              className="flex items-center justify-center w-6 bg-gray-100 hover:bg-gray-200 transition"
            >
              <Plus className="w-3 h-3 text-gray-700" />
            </button>
          </div>

          {/* ADD TO CART BUTTON */}
          <button className="flex-1 h-12 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md flex items-center justify-center gap-2 transition shadow-md whitespace-nowrap">
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm font-medium">Voeg toe</span>
          </button>

        </div>
      </div>
    </div>
  );
}