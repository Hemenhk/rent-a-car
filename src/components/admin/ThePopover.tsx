import Link from "next/link";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SlOptionsVertical } from "react-icons/sl";
import { IoCreateOutline } from "react-icons/io5";
import TheDeleteCar from "./delete-car/TheDeleteCar";

type PopoverProps = { carId: string | undefined };

export default function ThePopover({ carId }: PopoverProps) {

  return (
    <Popover>
      <PopoverTrigger className="text-violet-100  p-1 rounded-[50%] transition ease-out duration-300 hover:bg-violet-300 hover:text-violet-600">
        <SlOptionsVertical />
      </PopoverTrigger>
      <PopoverContent className="w-32">
        <ul className="flex flex-col justify-center gap-3">
          <li className="flex items-center gap-2 w-full">
            <Link className="w-full p-2 rounded-sm flex items-center gap-2 uppercase text-xs cursor-pointer transition ease-out duration-300 hover:bg-violet-100" href={`/admin/edit-car/${carId}`}>
              <IoCreateOutline /> edit
            </Link>
          </li>
          <li className="flex items-center gap-2 w-full" >
           <TheDeleteCar carId={carId} />
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
