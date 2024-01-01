import { Alert, AlertTitle } from "@/components/ui/alert";
import { FaCircleCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";

type AlertProps = {
  type: "success" | "error";
  message: string;
};

export default function TheAlert({ message, type = "success" }: AlertProps) {
  const renderIcon = () => {
    if (type === "success") {
      return (
        <Alert>
          <AlertTitle className="flex items-center gap-3">
            <FaCircleCheck />
            <p>{message}</p>
          </AlertTitle>
        </Alert>
      );
    } else if (type === "error") {
      return (
        <Alert variant={"destructive"}>
          <AlertTitle className="flex items-center gap-3">
            <MdError />
            <p>{message}</p>
          </AlertTitle>
        </Alert>
      );
    }
  };
  return <>{renderIcon}</>;
}
