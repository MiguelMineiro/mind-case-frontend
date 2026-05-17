import { Outlet } from "react-router-dom";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-[#070A0E] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(900px_circle_at_50%_-10%,rgba(0,193,213,0.18),transparent_55%),radial-gradient(1000px_circle_at_15%_30%,rgba(17,77,154,0.12),transparent_60%),radial-gradient(900px_circle_at_85%_35%,rgba(68,36,120,0.10),transparent_60%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,0.35)_45%,rgba(0,0,0,0.65))]" />
      <div className="relative">
        <SiteHeader />
        <main className="pt-24 pb-20">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
