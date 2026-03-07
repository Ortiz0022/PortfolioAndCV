import SiteBackground from "../shared/components/SiteBackground.tsx";
import CvPage from "../modules/cv/CvPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function AppShell() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SiteBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
        <CvPage />
        </main>
        <Footer />
        </div>
    </div>
  );
}