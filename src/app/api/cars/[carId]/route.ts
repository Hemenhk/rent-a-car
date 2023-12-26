import { connectToDatabase } from "@/lib/db";
import Car from "@/models/carSchema";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { carId: string } }
) {
  try {
    await connectToDatabase();

    const id = params.carId;
    const car = await Car.findById(id);

    if (!car) {
      throw new Error("Document not found");
    }

    return NextResponse.json({
      status: 200,
      success: true,
      car: car,
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

export async function PATCH(
  req: NextRequest,
  { params }: { params: { carId: string } }
) {
  try {
    await connectToDatabase();

    const id = params.carId;
    const reqBody = await req.json();

    const title: string = reqBody.title;
    const description: string = reqBody.description;
    const price: string = reqBody.price;
    const imageCover: string = reqBody.imageCover;

    const carValues = await Car.findByIdAndUpdate(id, reqBody, {
      new: true,
      runValidators: true,
    });

    return NextResponse.json({
      status: 200,
      success: true,
      data: {
        car: carValues,
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

export async function DELETE(
  req: NextRequest,
  { params }: { params: { carId: string } }
) {
  try {
    await connectToDatabase();

    const id = params.carId;
    const deletedCar = await Car.findByIdAndDelete(id);

    if (!deletedCar) {
      return NextResponse.json({
        status: 404,
        success: false,
        error: "Car was not found",
      });
    }

    return NextResponse.json({
      status: 200,
      success: true,
      data: {
        message: "Car was deleted successfully",
      },
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 400,
      success: false,
      error: error.message,
    });
  }
}