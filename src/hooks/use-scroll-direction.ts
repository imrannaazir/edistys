"use client";

import { useEffect, useState } from "react";

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const [prevOffset, setPrevOffset] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const toggleScrollDirection = () => {
      const scrollY = window.pageYOffset;

      // Check if at top
      setIsAtTop(scrollY === 0);

      // Determine scroll direction
      if (scrollY > prevOffset) {
        setScrollDirection("down");
      } else if (scrollY < prevOffset) {
        setScrollDirection("up");
      }

      setPrevOffset(scrollY);
    };

    window.addEventListener("scroll", toggleScrollDirection);

    return () => {
      window.removeEventListener("scroll", toggleScrollDirection);
    };
  }, [prevOffset]);

  return { scrollDirection, isAtTop };
}
