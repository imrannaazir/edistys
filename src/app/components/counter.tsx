import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FC, RefObject, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type TCounter = {
  containerRef: RefObject<HTMLSpanElement | null>;
  title: string;
  number: number;
  prefix?: string;
  suffix?: string;
};

const Counter: FC<TCounter> = ({
  containerRef,
  title,
  number,
  prefix,
  suffix,
}) => {
  const counterRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!counterRef.current || !containerRef.current || hasAnimated.current)
      return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        onEnter: () => {
          if (!hasAnimated.current) {
            gsap.fromTo(
              counterRef.current,
              { innerText: "0" },
              {
                innerText: number,
                duration: 2,
                snap: { innerText: 1 },
                ease: "power2.out",
                onComplete: () => {
                  hasAnimated.current = true;
                },
              }
            );
          }
        },
      },
    });

    return () => {
      tl.kill();
    };
  }, [number, containerRef]);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-primary text-7xl  md:text-8xl font-bold mb-4">
        {prefix && <span>{prefix}</span>}
        <span ref={counterRef}>0</span>
        {suffix && <span>{suffix}</span>}
      </div>
      <h3 className="text-gray-800 text-lg font-[400] ">{title}</h3>
    </div>
  );
};

export default Counter;
