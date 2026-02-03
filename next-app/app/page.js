"use client";
import React, { useState } from 'react';
import Product, { menu } from "./components/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

export default function Home() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const handleNext = () => {
    setCurrentProductIndex((prev) => (prev + 1) % menu.length);
  };

  const handlePrev = () => {
    setCurrentProductIndex((prev) => (prev - 1 + menu.length) % menu.length);
  };

  return (
    <main>
      <Navbar />
      <Hero currentProductIndex={currentProductIndex} />
      <Product
        currentProductIndex={currentProductIndex}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </main>
  );
}
