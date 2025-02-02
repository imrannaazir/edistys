"use client";
import Container from "@/components/layout/container";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useState } from "react";
import TechnologyCard from "./technology-card";

const slides = [
  {
    id: "customer-focused",
    title: "Customer focused",
    active: true,
  },
  {
    id: "agile-adaptable",
    title: "Agile and adaptable",
    active: false,
  },
  {
    id: "compliance-ready",
    title: "Compliance ready",
    active: false,
  },
  {
    id: "secure-safe",
    title: "Secure and safe",
    active: false,
  },
];

function OfferedTechnologies() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ skipSnaps: false });

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      setSelectedTab(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedTab(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="min-h-screen  ">
      {/* Tab Navigation */}
      <Container>
        <div className="flex justify-center space-x-8 py-8">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => scrollTo(index)}
              className={`px-6 py-2 rounded-full text-lg font-semibold text-primary transition-all duration-300 ${
                selectedTab === index
                  ? " bg-primary/30"
                  : " hover:bg-primary/10"
              }`}
            >
              {slide.title}
            </button>
          ))}
        </div>
      </Container>

      {/* Carousel */}

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y pb-8">
          {slides.map((slide) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0">
              <Container>
                <div
                  style={{
                    filter:
                      "drop-shadow(rgba(207, 233, 247, 0.47) 0px 16px 21px)",
                  }}
                  className="bg-white rounded-[20px]   mx-4"
                >
                  <TechnologyCard key={slide.id} slide={slide} />
                </div>
              </Container>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OfferedTechnologies;
