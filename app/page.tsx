import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import FeaturesSection from "@/components/FeaturesSection";
import WhyZopcash from "@/components/WhyZopcash";
import TargetAudience from "@/components/TargetAudience";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <HowItWorks />
        <FeaturesSection />
        <WhyZopcash />
        <TargetAudience />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
