import SectionSeparator from "@/components/ui/section-separator";
import FutureFinance from "./components/future-finance";
import Hero from "./components/hero";
import OurPhilosophy from "./components/our-philosophy";
import PoweringFinance from "./components/powering-finance";

const LandingPage = () => {
  return (
    <main>
      <Hero />
      <PoweringFinance />
      <SectionSeparator />
      <OurPhilosophy />
      <FutureFinance />
      <SectionSeparator />
      <div className="min-h-screen"></div>
    </main>
  );
};

export default LandingPage;
