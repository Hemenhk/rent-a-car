"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import  { useEffect } from "react";

export default function AdminPage() {
  const { data: adminSession } = useSession();

  useEffect(() => {
    if (!adminSession) {
      redirect("/");
    }
  }, [adminSession]);
}
