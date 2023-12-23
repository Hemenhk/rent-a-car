import Image from "next/image";
import React from "react";

import carImage from "../../assets/images/car-home.png";
import classes from "./styles/TheHeroBanner.module.css"

export default function TheHeroBanner() {
  return (
    <div className="relative overflow-hidden">
      <div className={classes.bar_1}>hello</div>
      <div className={classes.bar_2}>hello</div>
      <Image
        src={carImage}
        alt="background image"
        width={500}
        height={500}
        className="absolute top-96 right-32"
      />
    </div>
  );
}
