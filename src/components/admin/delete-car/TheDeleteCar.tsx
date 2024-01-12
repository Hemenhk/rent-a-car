import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { deleteCar } from "@/lib/car-axios";

import { IoTrashOutline } from "react-icons/io5";

export default function TheDeleteCar({ carId }: { carId: string | undefined }) {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const {
    mutateAsync: deleteCarMutation,
    isSuccess,
    isError,
  } = useMutation({
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
      toast({
        title: "Car was deleted!",
        description: new Date().toDateString(),
        variant: "destructive",
      });
    } catch (error) {
      console.log("Error when trying to delete car:", error);
    }
  };
  return (
    <div
      onClick={handleDeleteCar}
      className="w-full p-2 rounded-sm flex items-center gap-2 uppercase text-xs cursor-pointer transition ease-out duration-300 hover:bg-violet-100"
    >
      <IoTrashOutline /> delete
    </div>
  );
}
