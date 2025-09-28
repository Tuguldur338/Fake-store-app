"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
};

export default function FavoritePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<{ [key: number]: boolean }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const favoriteProducts = products.filter((p) => favorites[p.id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-xl loader"></div>
    );

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-pink-600 tracking-tight">
        ❤️ Favorites
      </h2>
      {favoriteProducts.length === 0 ? (
        <div className="text-center text-gray-500">
          No favorite products yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
          {favoriteProducts.map((product) => (
            <Link
              key={product.id}
              href={`/${product.id}`}
              className="border border-gray-200 bg-white p-6 rounded-xl flex flex-col items-center shadow hover:shadow-xl transition group"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={120}
                height={120}
                className="object-contain mb-4 group-hover:scale-105 transition-transform duration-200"
              />
              <h3 className="text-lg font-semibold mb-2 text-center line-clamp-2 text-gray-700 group-hover:text-pink-600">
                {product.title}
              </h3>
              <p className="text-pink-600 font-bold mb-4 text-lg">
                ${product.price}
              </p>
              <FaHeart size={24} className="text-pink-500" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
