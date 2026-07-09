import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import MobileBottomNav from "@/components/home/MobileBottomNav";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))] md:pb-0">
        {children}
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
