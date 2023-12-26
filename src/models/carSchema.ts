import mongoose, { Schema, Document, Model } from "mongoose";

export interface CarDocument extends Document {
  title: string;
  review: string;
  rating: number;
}

interface CarModel extends Model<CarDocument> {
  calculateReviewStats(title: string): Promise<any>; // Adjust the return type as needed
}

const carSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "A car must have a title"],
      trim: true,
      maxLength: [100, "A car must have less than 500 characters"],
      minLength: [1, "A car must have at least 1 character"],
    },
    manufacturer: {
      type: String,
      required: [true, "A car must have a manufacturer"],
      trim: true,
      maxLength: [100, "A car must have less than 500 characters"],
      minLength: [1, "A car must have at least 1 character"],
    },
    description: {
      type: String,
      required: [true, "A car must have a description"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "A car must have a price"],
    },
    isAvailable: {
      type: Boolean,
      default: true
    },
    imageCover: {
      type: String,
      default:
        "https://res.cloudinary.com/hemen/image/upload/v1696246559/default_post_kh6p7i.webp",
    },
    images: [String],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Car: CarModel = (mongoose.models.Car ||
  mongoose.model<CarDocument>("Car", carSchema)) as CarModel;

export default Car;
