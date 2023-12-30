"use client";

import { CarValue, fetchAllCars } from "@/lib/car-axios";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import Image from "next/image";
import Link from "next/link";
import ThePopover from "@/components/admin/ThePopover";

export default function AdminPage() {
  const { data: adminSession } = useSession();

  useEffect(() => {
    if (!adminSession) {
      redirect("/");
    }
  }, [adminSession]);
  const { data: cars } = useQuery({
    queryKey: ["cars"],
    queryFn: () => fetchAllCars(),
  });

  console.log("cars", cars);

  const mappedCars = cars?.map((car: CarValue) => (
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
          <h2 className="uppercase tracking-wider font-medium ">{car.title}</h2>
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
    <ul className="w-[90%] grid gap-4 items-center grid-cols-1 md:grid-cols-3 md:px-2 lg:grid-cols-4 h-screen">
      {mappedCars}
    </ul>
  );
}
