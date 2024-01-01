import TheToolbar from "@/components/admin/TheToolbar";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="h-full absolute left-0">
        <TheToolbar />
      </div>
      <section className="flex justify-center items-center">{children}</section>
    </div>
  );
}
