import Container from "@/components/layout/container";
import Image from "next/image";
import FeaturesSection from "./features-section";

const OurPhilosophy = () => {
  return (
    <section className="mb-[128px]">
      <Container>
        <header className="space-y-6  text-center">
          <h3 className="text-xs lg:text-base font-bold text-primary leading-6 tracking-[2.65px]">
            OUR PHILOSOPHY
          </h3>
          <h1 className="text-[32px] lg:text-[56px] font-semibold leading-[110%] text-[#0b305b]">
            Human-centred innovation
          </h1>
        </header>

        {/* image */}
        <Image
          className="my-8 hidden md:block"
          src={"/images/our-philosophy.avif"}
          alt="our-philosophy"
          width={1138}
          height={375}
        />
        <Image
          className="my-8 md:hidden w-full"
          src={"/images/our-philosophy-mobile.avif"}
          alt="our-philosophy"
          width={393}
          height={452}
        />

        {/* features section */}
        <FeaturesSection />
      </Container>
    </section>
  );
};

export default OurPhilosophy;
