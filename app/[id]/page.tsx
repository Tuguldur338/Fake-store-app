import React from "react";
import Image from "next/image";

// Fetch product details from API
export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  if (!product || product.id === undefined) {
    return <div className="p-8">Product not found.</div>;
  }

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        {product.title}
      </h1>
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="mb-6 object-contain"
      />
      <p className="text-lg text-gray-700 mb-2">{product.description}</p>
      <p className="text-green-600 font-bold text-xl mb-2">${product.price}</p>
      <p className="text-sm text-gray-500 mb-2">Category: {product.category}</p>
      {product.rating && (
        <p className="text-sm text-yellow-600">
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </p>
      )}
    </div>
  );
}
