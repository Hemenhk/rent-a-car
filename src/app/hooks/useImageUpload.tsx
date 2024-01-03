import { useState } from "react";
import axios from "axios";

export default function useImageUpload() {
  const [file, setFile] = useState<File>();

  const imageUpload = async () => {
    try {
      if (!file) return;
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", process.env.CLOUDINARY_PRESET as string);
      const cloudinaryResponse = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_NAME}/image/upload`,
        data
      );
      console.log("res", cloudinaryResponse);
      const imageURL: string | File = cloudinaryResponse.data.secure_url;
      console.log("imageurl", imageURL);
      return imageURL
    } catch (error) {
      console.log(error);
    }
  };

  return {
    imageUpload,
    setFile,
  };
}
