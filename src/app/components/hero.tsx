"use client";

import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Hero = () => {
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
        x: x * 25,
        y: y * 25,
        duration: 1,
        ease: "power2.out",
      });

      gsap.to(image2, {
        x: -x * 25,
        y: -y * 25,
        duration: 1,
        ease: "power2.out",
      });
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        container.removeEventListener("mousemove", moveImages);
      } else {
        container.addEventListener("mousemove", moveImages);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      container.removeEventListener("mousemove", moveImages);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      ref={containerRef}
      className="min-h-[calc(100vh-100px)] relative overflow-hidden bg-clip-hero-container"
    >
      {/* background color */}
      <div className="absolute inset-0 home-hero__content__container -z-20"></div>

      {/* right side glow circle */}
      <div className="absolute w-[210px] h-[210px] md:w-[420px] md:h-[420px] -top-28 -right-10 md:-top-56 md:-right-20 blur-3xl overflow-x-hidden">
        <div className="w-full h-full bg-primary rounded-full"></div>
      </div>

      <div
        ref={image1Ref}
        className="absolute z-20 -top-[250px] md:-top-[495px] left-0 md:left-20 w-full md:w-[100%] md:right-1/2 h-full"
      >
        <figure>
          <Image
            className="scale-[0.7] md:scale-[1.4]"
            src="/backgrounds/WaveLinesDesktop2.svg"
            width={1136}
            height={713}
            alt="Background"
          />
        </figure>
      </div>

      <div
        ref={image2Ref}
        className="absolute z-20 left-0 md:left-40 -top-5 md:-top-10 w-full md:w-[100%] h-full"
      >
        <figure>
          <Image
            className="scale-[0.6] md:scale-[1.15]"
            src="/backgrounds/WaveLinesDesktop1.svg"
            width={1136}
            height={713}
            alt="Background"
          />
        </figure>
      </div>

      {/* right */}
      {/* image */}
      <div className="absolute hidden md:block -z-10 top-0 left-0 md:left-1/2 lg:left-[35%] w-full md:w-1/2 lg:w-[65%] h-full bg-clip-hero-image pointer-events-none">
        <figure className="w-full h-full">
          <Image
            src="/backgrounds/heroBackground.avif"
            layout="fill"
            objectFit="cover"
            alt="Background"
          />
        </figure>
      </div>

      {/* content */}
      <div className="absolute inset-0 z-30 text-background">
        <Container className="w-full h-full flex items-center">
          <div className="w-full md:w-[65%] space-y-4 md:space-y-6 py-8 md:py-0">
            <h1 className="text-3xl md:text-5xl lg:text-[80px] font-semibold leading-tight md:leading-[1.15]">
              Embrace the future of finance
            </h1>
            <p className="font-semibold text-xs md:text-base lg:text-lg w-full md:w-[90%]">
              Reimagine financial services with AnyTech&apos;s open platform,
              distributed banking solution that powers transformation
            </p>
            <Button className="mt-4">Reach out to us</Button>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Hero;
