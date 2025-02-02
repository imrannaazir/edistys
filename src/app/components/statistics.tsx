"use client";
import Container from "@/components/layout/container";
import { statistics } from "@/constants";
import { useRef } from "react";
import Counter from "./counter";

export default function Statistics() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="  ">
      <Container>
        <div className="space-y-16">
          <h3 className="font-bold text-primary text-center leading-6 tracking-[2.65px]">
            TRUSTED BY THE BEST
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {statistics.map(({ id, number, prefix, suffix, title }) => (
              <Counter
                key={id}
                containerRef={containerRef}
                number={number}
                prefix={prefix}
                suffix={suffix}
                title={title}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
