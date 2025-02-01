import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PanelRight } from "lucide-react";
import Link from "next/link";
import AppLogo from "../ui/app-logo";
import { links } from "./navbar";

export function MobileSidebar() {
  return (
    <aside className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button>
            <PanelRight />
          </button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <AppLogo />
          </SheetHeader>
          <ScrollArea className="h-[calc(100vh-120px)] w-full">
            <div className="w-full">
              {links.map((link) => (
                <div key={link.path}>
                  <Link
                    key={link.path}
                    href={link.path}
                    className="text-sm   w-full"
                  >
                    {link.label}
                  </Link>
                  <Separator className="my-2" />
                </div>
              ))}
            </div>
          </ScrollArea>
          <SheetFooter>
            <Button>Contact us</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </aside>
  );
}
