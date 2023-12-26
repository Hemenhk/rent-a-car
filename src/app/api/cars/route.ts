import { NextRequest, NextResponse } from "next/server";

import { connectToDatabase } from "@/lib/db";
import Car from "@/models/carSchema";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    const reqBody = await req.json();
    const { imageCover, price, description, title, manufacturer, isAvailable } = reqBody;

    const newCar = new Car({
      title,
      manufacturer,
      isAvailable,
      description,
      price,
      imageCover,
    });
    await newCar.save();

    return NextResponse.json({
      status: 200,
      success: true,
      data: {
        cars: newCar,
      },
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 400,
      body: {
        success: false,
        error: error.message,
      },
    });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const cars = await Car.find();

    if (!cars) {
      throw new Error("Document not found");
    }

    return NextResponse.json({
      status: 200,
      success: true,
      cars: cars,
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 400,
      body: {
        success: false,
        error: error.message,
      },
    });
  }
}