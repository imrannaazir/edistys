import Link from "next/link";
import AppLogo from "../ui/app-logo";
import Container from "./container";

export default function Footer() {
  return (
    <footer className=" min-h-[200px] flex flex-col justify-between   ">
      <div className="bg-[#002045] pt-8">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <Link href="/" className="mb-6 md:mb-0">
              <AppLogo />
            </Link>
            <nav>
              <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <li>
                  <Link
                    href="/solutions"
                    className="text-[#00E5FF] hover:text-[#00E5FF]/90 transition-colors"
                  >
                    Our Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/anycaas"
                    className="text-[#00E5FF] hover:text-[#00E5FF]/90 transition-colors"
                  >
                    AnyCaaS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/anybaas"
                    className="text-[#00E5FF] hover:text-[#00E5FF]/90 transition-colors"
                  >
                    AnyBaaS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/anypaas"
                    className="text-[#00E5FF] hover:text-[#00E5FF]/90 transition-colors"
                  >
                    AnyPaaS
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </div>
      <div className="bg-[#00142c] pb-8">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#1d3d5e] pt-6">
            <p className="text-[#3B82F6] text-sm mb-4 md:mb-0">
              ©2023 All rights reserved. Any Technology Pte Ltd.
            </p>
            <Link
              href="/privacy"
              className="text-[#3B82F6] text-sm hover:text-[#3B82F6]/90 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
