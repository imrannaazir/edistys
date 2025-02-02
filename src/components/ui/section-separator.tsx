import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import Image from "next/image";

const SectionSeparator = ({ className }: { className?: ClassValue }) => {
  return (
    <Image
      className={cn(" w-full mb-6", className)}
      src={"/icons/powering-finance/separator.svg"}
      alt="separator"
      width={1480}
      height={240}
    />
  );
};

export default SectionSeparator;
