"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { carBrandsForMobileDevices } from "@/lib/car-brands";
import { Fragment } from "react";

export default function TheBrandCarousel() {
  const mappedCarBrands = carBrandsForMobileDevices.map((brand, idx) => (
    <CarouselItem key={idx} className="text-7xl text-gray-400 grid grid-cols-2 gap-4">
      {brand.map((subBrand, subIdx) => (
        <Fragment key={subIdx}>{subBrand.carBrand}</Fragment>
      ))}
    </CarouselItem>
  ));

  return (
    <Carousel>
      <CarouselContent>{mappedCarBrands}</CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
