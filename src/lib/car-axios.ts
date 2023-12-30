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

export interface SingleCarValues {
  car: CarValue;
}

export const fetchAllCars = async () => {
  try {
    const res = await axios.get<CarValues>("/api/cars");
    return res.data.cars;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCarById = async (id: string) => {
  try {
    const res = await axios.get<SingleCarValues>(`/api/cars/${id}`);
    console.log("got single car by id", res);
    return res.data.car;
  } catch (error) {
    console.log(error);
  }
};

export const postCar = async (data: CarValue) => {
  try {
    const res = await axios.post("/api/cars", data);
    console.log("car was created", res);
  } catch (error) {
    console.log(error);
  }
};

export const updateCar =async (data: CarValue, id: string) => {
  try {
    const res = await axios.patch<CarValue>(`/api/cars/${id}`, data)
    console.log("updated car", res)
    return res

  } catch (error) {
    console.log(error)
  }
}
