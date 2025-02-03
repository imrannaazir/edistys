"use client";

import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";
import AppLogo from "../ui/app-logo";
import { Button } from "../ui/button";
import Container from "./container";
import { MobileSidebar } from "./mobile-sidebar";

export const links = [
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Brands",
    path: "/brand",
  },
  {
    label: "Career",
    path: "/career",
  },
  {
    label: "Services",
    path: "/services",
  },
];

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const { scrollDirection, isAtTop } = useScrollDirection();

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    if (scrollDirection === "down" && !isAtTop) {
      // Hide navbar when scrolling down
      gsap.to(nav, {
        yPercent: -100,
        duration: 0.3,
        ease: "power2.inOut",
      });
    } else {
      // Show navbar when scrolling up or at top
      gsap.to(nav, {
        yPercent: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [scrollDirection, isAtTop]);

  return (
    <nav
      ref={navRef}
      className={cn(
        "fixed top-0 w-full pt-[17px] pb-[25px] z-50 transition-colors duration-300",
        isAtTop
          ? "bg-primary md:bg-transparent "
          : "bg-white shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
      )}
    >
      <Container className="flex justify-between items-center">
        {/* start */}
        <AppLogo isDark={!isAtTop} />

        {/* end */}
        <MobileSidebar />
        <div
          className={cn(
            "hidden md:flex justify-between items-center gap-8",
            isAtTop ? "text-background" : "text-foreground"
          )}
        >
          {links?.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="hover:opacity-70 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Button
          className="py-[13px] px-[24px] hidden md:flex"
          variant={isAtTop ? "outline" : "default"}
        >
          Contact Us
        </Button>
      </Container>
    </nav>
  );
};

export default Navbar;
