import SectionSeparator from "@/components/ui/section-separator";
import ContactUs from "./components/contact-us";
import FutureFinance from "./components/future-finance";
import Hero from "./components/hero";
import OurCompanies from "./components/our-companies";
import OurPhilosophy from "./components/our-philosophy";
import PoweringFinance from "./components/powering-finance";
import Statistics from "./components/statistics";

const LandingPage = () => {
  return (
    <main>
      <Hero />
      <PoweringFinance />
      <SectionSeparator />
      <OurPhilosophy />
      <FutureFinance />
      <SectionSeparator />
      <Statistics />
      <OurCompanies />
      <ContactUs />
    </main>
  );
};

export default LandingPage;
