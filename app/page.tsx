"use client";

import HeroContent from "@/components/hero-content";
import Products from "@/components/products";
import Image from "next/image";

export default function Home() {
  return (
    <div className="fade-in">
      <HeroContent />
      <Products />
    </div>
  );
}
