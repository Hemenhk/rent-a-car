import axios from "axios";

export interface CarValue {
  title?: string;
  manufacturer?: string;
  price?: number;
  description?: string;
  imageCover?: string;
  isAvailable?: boolean;
  _id?: string;
}

export interface CarValues {
  cars: CarValue[];
}

export const fetchAllCars = async () => {
  try {
    const res = await axios.get<CarValues>("/api/cars");
    return res.data.cars;
  } catch (error) {
    console.log(error);
  }
};
