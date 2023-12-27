"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import TheSignInDialog from "./sign-in/TheSignInDialog";
import TheSignUpDialog from "./sign-up/TheSignUpDialog";

export default function TheAuthDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Profile</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] pt-12">
        <Tabs>
          <TabsList className="w-full">
            <TabsTrigger className="w-full" value="sign-in">Sign In</TabsTrigger>
            <TabsTrigger className="w-full" value="sign-up">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="sign-in">
            <TheSignInDialog />
          </TabsContent>
          <TabsContent value="sign-up">
            <TheSignUpDialog />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
