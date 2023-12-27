import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function TheAdminButtons() {
    
    const handleSignOut = () => signOut()
  return (
    <div className="flex items-center justify-center gap-3">
      <Button>Admin</Button>
      <Button onClick={handleSignOut}>Sign out</Button>
    </div>
  );
}
