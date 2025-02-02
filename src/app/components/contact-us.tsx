import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ContactUs = () => {
  return (
    <section className="bg-clip-cta bg-[url('/backgrounds/ctaMobileWaveLines.svg')] min-h-[400px] bg-no-repeat bg-cover relative overflow-hidden h-[60vh] lg:h-[530px]">
      <div className=" absolute z-20 left-40 -top-20 inset-0 w-full object-cover">
        <figure>
          <Image
            className="scale-[1.4]"
            src={"/backgrounds/contact/contact1.svg"}
            width={1136}
            height={713}
            alt="Background"
          />
        </figure>
      </div>
      <div className="absolute z-30 inset-0 w-full object-cover">
        <figure>
          <Image
            className="scale-[1.4]"
            src={"/backgrounds/WaveLinesDesktop4.svg"}
            width={1136}
            height={713}
            alt="Background"
          />
        </figure>
      </div>
      <div className="absolute inset-0 z-50  ">
        <Container className="w-full h-full   flex justify-center flex-col mt-6">
          <h3 className="text-[56px] font-semibold text-background">
            Legacy no longer
          </h3>
          <p className="text-[20px] text-background">
            Talk to us to find out how we can transform your organisation for
            the future
          </p>

          <Button className="w-fit py-[15px] px-[42px] mt-6">Contact Us</Button>
        </Container>
      </div>
    </section>
  );
};

export default ContactUs;
