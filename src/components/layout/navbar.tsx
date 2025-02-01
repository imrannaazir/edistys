import Link from "next/link";
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
  return (
    <nav className="fixed top-0 w-full  pt-[17px] pb-[25px] z-50">
      <Container className=" flex justify-between items-center">
        {/* start */}
        <AppLogo />

        {/* end */}
        <MobileSidebar />
        <div className="hidden md:flex justify-between items-center gap-8 text-background">
          {links?.map((link) => (
            <Link key={link.path} href={link.path}>
              {link.label}
            </Link>
          ))}
        </div>
        <Button className="py-[13px] px-[24px]" variant={"outline"}>
          Contact Us
        </Button>
      </Container>
    </nav>
  );
};

export default Navbar;
