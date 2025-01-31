"use client";
import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export default function App() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".box", {
        x: 400,
        opacity: 0,
        y: 200,
        delay: 2,
        duration: 1,
        scrollTrigger: {},
      });
    },
    { scope: container }
  );
  return (
    <div ref={container} className="app">
      <div className="box size-40 bg-cyan-400 flex items-center justify-center">
        Hello
      </div>
      <div className="">Hello</div>
    </div>
  );
}
