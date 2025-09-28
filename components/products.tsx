"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaHeart, FaRegHeart } from "react-icons/fa";
// Removed react-bootstrap Button, using Tailwind CSS for all styling

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

const ProductCard = ({
  product,
  favorited,
  onAdd,
  onDelete,
  onToggleFavorite,
}: {
  product: Product;
  favorited: boolean;
  onAdd: (id: number) => void;
  onDelete: (id: number) => void;
  onToggleFavorite: (id: number) => void;
}) => (
  <div className="border border-gray-200 bg-white p-6 rounded-xl flex flex-col items-center shadow hover:shadow-xl transition group">
    <Link href={`/${product.id}`} className="w-full">
      <div className="flex flex-col items-center cursor-pointer h-[300px]">
        <Image
          src={product.image}
          alt={product.title}
          width={120}
          height={120}
          className="object-contain mb-4 group-hover:scale-105 transition-transform duration-200"
        />
        <h3 className="text-lg font-semibold mb-2 text-center line-clamp-2 text-gray-700 group-hover:text-green-600">
          {product.title}
        </h3>
        <p className="text-green-600 font-bold mb-4 text-lg">
          ${product.price}
        </p>
      </div>
    </Link>
    <div className="flex w-full gap-2 items-center mt-2">
      <button
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-semibold shadow w-1/2"
        onClick={() => onAdd(product.id)}
      >
        Add
      </button>
      <button
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-semibold shadow w-1/2"
        onClick={() => onDelete(product.id)}
      >
        Delete
      </button>
      <button
        className="ml-2 flex items-center gap-1"
        onClick={() => onToggleFavorite(product.id)}
        aria-label={favorited ? "Unfavorite" : "Favorite"}
      >
        {favorited ? (
          <FaHeart size={24} className="text-pink-500" />
        ) : (
          <FaRegHeart
            size={24}
            className="text-gray-400 hover:text-pink-500 transition"
          />
        )}
      </button>
    </div>
  </div>
);

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<{ [key: number]: boolean }>({});

  React.useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch products");
        setLoading(false);
      });
  }, []);

  const handleAdd = (id: number) => alert(`Added product ${id}`);
  const handleDelete = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    setFavorites((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };
  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <div className="loader border-4 border-gray-300 border-t-green-500 rounded-full w-12 h-12 animate-spin"></div>
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen text-xl text-red-500">
        {error}
      </div>
    );

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800 tracking-tight">
        🛒 Fake Store
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            favorited={!!favorites[product.id]}
            onAdd={handleAdd}
            onDelete={handleDelete}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
