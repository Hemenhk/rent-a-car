import { ReactElement } from "react";
import {
  SiFiat,
  SiMercedes,
  SiVolvo,
  SiVolkswagen,
  SiBmw,
  SiTesla,
  SiKia,
  SiFord,
  SiMazda,
  SiHyundai,
} from "react-icons/si";

type CarBrand = {
  carBrand: ReactElement;
};

export const carBrands: CarBrand[] = [
  { carBrand: <SiBmw /> },
  { carBrand: <SiFiat /> },
  { carBrand: <SiMercedes /> },
  { carBrand: <SiVolvo /> },
  { carBrand: <SiVolkswagen /> },
  { carBrand: <SiTesla /> },
  { carBrand: <SiFord /> },
  { carBrand: <SiMazda /> },
];

export const carBrandsForMobileDevices: CarBrand[][] = [
  [
    { carBrand: <SiBmw /> },
    { carBrand: <SiFiat /> },
    { carBrand: <SiMercedes /> },
    { carBrand: <SiVolvo /> },
  ],
  [
    { carBrand: <SiVolkswagen /> },
    { carBrand: <SiTesla /> },
    { carBrand: <SiKia /> },
    { carBrand: <SiFord /> },
  ],
  [{ carBrand: <SiMazda /> }, { carBrand: <SiHyundai /> }],
];
