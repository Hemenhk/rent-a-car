import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CardFooter } from "@/components/ui/card";

export default function TheSignUpDialog() {
  return (
    <>
      <DialogHeader className="pt-3">
        <DialogTitle>Sign Up</DialogTitle>
        <DialogDescription>Create your account to rent cars.</DialogDescription>
      </DialogHeader>
        <div className="py-4">
          <Label htmlFor="email">Email</Label>
          <Input id="email" defaultValue="youremail@gmail.com" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <div className="pt-3">
          <Label htmlFor="passwordConfirm">Confirm Password</Label>
          <Input id="passwordConfirm" type="password" />
        </div>
      <CardFooter className="mt-3">
        <Button type="submit" className="text-white">Create account</Button>
      </CardFooter>
    </>
  );
}
