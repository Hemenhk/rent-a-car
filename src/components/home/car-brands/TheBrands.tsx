import { carBrands } from "@/lib/car-brands";
import React from "react";

export default function TheBrands() {
  const mappedCarBrands = carBrands.map((brand, idx) => (
    <li key={idx} className="text-6xl text-gray-400">{brand.carBrand}</li>
  ));
  return <ul className="flex flex-wrap gap-8">
    {mappedCarBrands}
  </ul>
}
