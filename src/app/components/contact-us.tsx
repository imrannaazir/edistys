"use client";

import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

const ContactUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image1 = image1Ref.current;
    const image2 = image2Ref.current;

    if (!container || !image1 || !image2) return;

    const moveImages = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      gsap.to(image1, {
        x: x * 30,
        y: y * 30,
        duration: 1,
        ease: "power2.out",
      });

      gsap.to(image2, {
        x: -x * 30,
        y: -y * 30,
        duration: 1,
        ease: "power2.out",
      });
    };

    container.addEventListener("mousemove", moveImages);

    return () => {
      container.removeEventListener("mousemove", moveImages);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-clip-cta bg-[url('/backgrounds/ctaMobileWaveLines.svg')] min-h-[400px] bg-no-repeat bg-cover relative overflow-hidden h-[60vh] lg:h-[530px]"
    >
      <div
        ref={image1Ref}
        className="absolute z-20 left-40 -top-20 inset-0 w-full object-cover"
      >
        <figure>
          <Image
            className="scale-[1.4]"
            src="/backgrounds/contact/contact1.svg"
            width={1136}
            height={713}
            alt="Background"
          />
        </figure>
      </div>

      <div
        ref={image2Ref}
        className="absolute z-30 inset-0 w-full object-cover"
      >
        <figure>
          <Image
            className="scale-[1.4]"
            src="/backgrounds/WaveLinesDesktop4.svg"
            width={1136}
            height={713}
            alt="Background"
          />
        </figure>
      </div>

      <div className="absolute inset-0 z-50">
        <Container className="w-full h-full flex justify-center flex-col mt-6">
          <h3 className="text-[32px] lg:text-[56px] font-semibold text-background">
            Legacy no longer
          </h3>
          <p className="text-sm lg:text-[20px] text-background">
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
