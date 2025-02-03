"use client";
import Container from "@/components/layout/container";
import { technologies } from "@/constants/technologies.content";
import { useInterval } from "@/hooks/use-interval";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import TechnologyCard from "./technology-card";

function OfferedTechnologies() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    skipSnaps: false,
    loop: true,
  });

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

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Autoplay functionality
  const autoplay = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  useInterval(autoplay, 5000);

  return (
    <div className="min-h-screen">
      {/* Tab Navigation */}
      <Container>
        <div className=" justify-center space-x-8 py-8 hidden lg:flex">
          {technologies.map((slide, index) => (
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
          {technologies.map((slide) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0">
              <Container>
                <div
                  style={{
                    filter:
                      "drop-shadow(rgba(207, 233, 247, 0.47) 0px 16px 21px)",
                  }}
                  className="bg-white rounded-[20px] mx-4"
                >
                  <TechnologyCard key={slide.id} item={slide} />
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
