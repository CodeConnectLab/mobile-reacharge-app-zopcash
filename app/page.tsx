import AppExperience from "@/components/AppUIShowcase";
import CashbackBenefits from "@/components/FeaturesSection";
import CashbackTicker from "@/components/CashbackTicker";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import ServicesShowcase from "@/components/ServicesShowcase";
import Testimonials from "@/components/Testimonials";
import TrustStats from "@/components/TrustStats";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CashbackTicker />
        <CashbackBenefits />
        <ServicesShowcase />
        <HowItWorks />
        <AppExperience />
        <TrustStats />
        <Testimonials />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
