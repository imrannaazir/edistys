"use client";

import Container from "@/components/layout/container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const PoweringFinance = () => {
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const foregroundRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Floating animation for icons
    iconRefs.current.forEach((icon, index) => {
      if (icon) {
        gsap.to(icon, {
          y: 10,
          duration: 1.5 + index * 0.2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }
    });

    // Scroll-based animation for background and foreground
    if (
      backgroundRef.current &&
      foregroundRef.current &&
      containerRef.current
    ) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      tl.to([backgroundRef.current, foregroundRef.current], {
        y: (i) => (i ? 50 : 30), // Move background less than foreground
        ease: "none",
      });

      // Post-scroll animation
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        onLeaveBack: () => animatePostScroll(-1),
        onLeave: () => animatePostScroll(1),
      });

      function animatePostScroll(direction: number) {
        gsap.to([backgroundRef.current, foregroundRef.current], {
          y: (i) => (i ? 70 * direction : 40 * direction),
          duration: 0.5,
          ease: "power2.out",
          delay: 0.2,
        });
      }
    }
  }, []);

  return (
    <main ref={containerRef} className="mt-[62px]">
      <Container className="flex *:flex-1 flex-col md:flex-row justify-between gap-4 md:gap-[15px]">
        {/* left */}
        <div className="space-y-6">
          <h3 className="text-xs lg:text-base font-bold text-primary leading-6 tracking-[2.65px]">
            POWERING THE FUTURE OF FINANCE
          </h3>
          <h1 className="text-[32px] lg:text-[56px] font-semibold leading-[110%] text-[#0b305b]">
            Uncovering new ways to delight customers
          </h1>
          <p className="text-[#164377] font-bold leading-6 text-xs lg:text-base">
            AnyTech is revolutionising financial technology by introducing
            innovative and real-time transaction account processing
            capabilities, specifically designed for retail financial services.
          </p>
          <p className="text-[#164377] leading-[26px] text-xs lg:text-base">
            Our modern approach surpasses traditional banking and card
            processing systems, empowering you with the most advanced technology
            for lasting success.
          </p>
        </div>
        {/* right */}
        <div className="flex justify-start relative  my-20 md:my-0 ">
          {/* background */}
          <div ref={backgroundRef} className="absolute -z-10 -left-20 -top-28">
            <figure>
              <Image
                className="scale-75 md:scale-90 "
                src="/icons/powering-finance/background.svg"
                width={140 * 4}
                height={140 * 4}
                alt="background"
              />
            </figure>
          </div>
          {/* foreground */}
          <div ref={foregroundRef} className="absolute -left-20 -bottom-10">
            <figure>
              <Image
                className=" "
                src="/icons/powering-finance/foreground.png"
                width={140 * 4}
                height={140 * 4}
                alt="background"
              />
            </figure>
          </div>
          {/* icon images */}
          <div
            ref={(el) => {
              if (el) iconRefs.current[0] = el;
            }}
            className="absolute left-[6%] md:-left-[6%] top-[20%]"
          >
            <figure>
              <Image
                className="size-[55px] md:size-[73px]"
                src="/icons/powering-finance/card.svg"
                width={73}
                height={73}
                alt="card"
              />
            </figure>
          </div>
          <div
            ref={(el) => {
              if (el) iconRefs.current[1] = el;
            }}
            className="absolute left-[15%] md:left-[5%] top-[40%]"
          >
            <figure>
              <Image
                className="size-[65px] md:size-[87px]"
                src="/icons/powering-finance/statistics.svg"
                width={87}
                height={87}
                alt="statistics"
              />
            </figure>
          </div>
          <div
            ref={(el) => {
              if (el) iconRefs.current[2] = el;
            }}
            className="absolute right-0 md:right-[13%] top-[10%]"
          >
            <figure>
              <Image
                className="size-[85px] md:size-[115px]"
                src="/icons/powering-finance/bank.svg"
                width={115}
                height={115}
                alt="Bank"
              />
            </figure>
          </div>
          <figure className="w-[76%] mx-auto">
            <Image
              className="w-full h-full object-cover"
              src="/images/powering-finance.avif"
              width={427}
              height={518}
              alt="powering finance"
            />
          </figure>
        </div>
      </Container>
    </main>
  );
};

export default PoweringFinance;
