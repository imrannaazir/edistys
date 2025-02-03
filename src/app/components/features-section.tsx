"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const features = [
    {
      title: "Full-suite solutions",
      description:
        "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
      icon: "/icons/featues/feature1.svg",
    },
    {
      title: "Simplify the complex",
      description:
        "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
      icon: "/icons/featues/feature2.avif",
    },
    {
      title: "Cutting-edge tech",
      description:
        "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
      icon: "/icons/featues/feature3.svg",
    },
  ];

  useEffect(() => {
    if (sectionRef.current && cardsRef.current.length === features.length) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        cardsRef.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }
  }, [sectionRef, cardsRef, features.length]);

  return (
    <section ref={sectionRef} className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="flex flex-col items-start space-y-4 bg-slate-50 rounded-[20px] p-8 opacity-0"
            >
              <Image
                src={feature.icon || "/placeholder.svg"}
                alt="icon"
                width={50}
                height={50}
              />
              <h3 className="text-[18px] lg:text-2xl font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="text-sm lg:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
