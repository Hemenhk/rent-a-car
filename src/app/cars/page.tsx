"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAllCars, CarValue } from "@/lib/car-axios";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import Image from "next/image";
import Link from "next/link";

export default function AllCarsPage() {
  const { data: cars } = useQuery({
    queryKey: ["cars"],
    queryFn: () => fetchAllCars(),
  });

  console.log("cars", cars);

  const mappedCars = cars?.map((car: CarValue) => (
    <li key={car._id}>
      <Card>
        <CardContent>
          <Link href={`/cars/${car._id}`}>
            <Image
              src={car.imageCover}
              alt="car for rent"
              width={300}
              height={300}
              className="rounded-t-lg"
            />
          </Link>
        </CardContent>
        <CardFooter className="flex flex-col items-start px-3 pb-3">
          <h2 className="uppercase tracking-wider font-medium">{car.title}</h2>
          <h3 className="text-sm text-gray-400">{car.manufacturer}</h3>
          <div className="flex justify-between items-center pt-3 w-full">
            <p className="font-medium tracking-wide">
              ${car.price}
              <span className="text-xs font-normal">/day</span>
            </p>
            <Badge className="font-light tracking-wide">
              {car.isAvailable ? "Available" : "Not in"}
            </Badge>
          </div>
        </CardFooter>
      </Card>
    </li>
  ));

  return <ul className="flex flex-wrap justify-center items-center gap-5 h-screen">{mappedCars}</ul>;
}
