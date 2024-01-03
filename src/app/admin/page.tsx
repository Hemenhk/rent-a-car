"use client";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { CarValue, fetchAllCars } from "@/lib/car-axios";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import ThePopover from "@/components/admin/ThePopover";
import ThePagination from "../helpers/ThePagination";

export default function AdminPage() {
  const { data: adminSession } = useSession();
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(8);

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;

  useEffect(() => {
    if (!adminSession) {
      redirect("/");
    }
  }, [adminSession]);

  const {
    data: carsData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cars"],
    queryFn: fetchAllCars,
  });

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  const currentCars = carsData?.slice(indexOfFirstCar, indexOfLastCar);

  const mappedCars =
    carsData &&
    carsData.length > 0 &&
    currentCars?.map((car: CarValue) => (
      <li key={car._id}>
        <div className="relative flex justify-end top-10 w-full pr-2">
          <ThePopover carId={car._id} />
        </div>
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
            <h2 className="uppercase tracking-wider font-medium ">
              {car.title}
            </h2>
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

  return (
    <ul className="w-[90%] flex flex-col gap-5  h-screen">
      <div className="grid gap-4 items-center grid-cols-1 md:grid-cols-3 md:px-2 lg:grid-cols-4">
        {mappedCars}
      </div>
      <ThePagination carsData={carsData?.length} carsPerPage={carsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </ul>
  );
}
