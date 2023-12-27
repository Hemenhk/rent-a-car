import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function TheSignInDialog() {
  return (
    <>
      <DialogHeader className="pt-3">
        <DialogTitle>Sign In</DialogTitle>
        <DialogDescription>Sign in to your account.</DialogDescription>
      </DialogHeader>
        <div className="py-4">
          <Label htmlFor="email">Email</Label>
          <Input id="email" defaultValue="youremail@gmail.com" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      <CardFooter className="mt-3">
        <Button type="submit" className="text-white">Sign In</Button>
      </CardFooter>
    </>
  );
}
