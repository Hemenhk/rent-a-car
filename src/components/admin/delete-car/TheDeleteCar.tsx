import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteCar } from "@/lib/car-axios";

import { IoTrashOutline } from "react-icons/io5";

export default function TheDeleteCar({ carId }: { carId: string }) {
  const queryClient = useQueryClient();

  const { mutateAsync: deleteCarMutation } = useMutation({
    mutationKey: ["cars"],
    mutationFn: async () => {
      await deleteCar(carId);
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["cars"] });
    },
  });

  const handleDeleteCar = async () => {
    try {
      await deleteCarMutation();
    } catch (error) {
      console.log("Error when trying to delete car:", error);
    }
  };
  return (
    <div onClick={handleDeleteCar}>
      <IoTrashOutline /> delete
    </div>
  );
}
