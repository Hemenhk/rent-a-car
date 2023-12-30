import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SlOptionsVertical } from "react-icons/sl";
import { IoCreateOutline, IoTrashOutline } from "react-icons/io5";
import Link from "next/link";
import TheDeleteCar from "./delete-car/TheDeleteCar";

type PopoverProps = { carId: string };

export default function ThePopover({ carId }: PopoverProps) {
  const handleCarDelete = async () => {

  };
  return (
    <Popover>
      <PopoverTrigger className="text-violet-950">
        <SlOptionsVertical />
      </PopoverTrigger>
      <PopoverContent className="w-32">
        <ul className="flex flex-col justify-center gap-3">
          <li className="flex items-center gap-2">
            <Link href={`/admin/edit-car/${carId}`}>
              <IoCreateOutline /> edit
            </Link>
          </li>
          <li className="flex items-center gap-2">
           <TheDeleteCar carId={carId} />
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
