import TheGoBackButton from "@/components/admin/TheGoBackButton";
import TheToolbar from "@/components/admin/TheToolbar";


export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex items-center justify-center md:justify-start h-screen">
      <div className="hidden md:flex h-full relative left-0">
        <TheToolbar />
      </div>
      <section className="flex mx-auto">
        <TheGoBackButton />
        {children}
      </section>
    </div>
  );
}
