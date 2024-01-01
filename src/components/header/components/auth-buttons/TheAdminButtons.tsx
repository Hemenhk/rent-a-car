import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function TheAdminButtons() {
const router = useRouter()
  const handleSignOut = () => signOut();
  return (
    <div className="flex items-center justify-center gap-3">
      <Button onClick={() => router.push("/admin")}>Admin</Button>
      <Button onClick={handleSignOut}>Sign out</Button>
    </div>
  );
}
