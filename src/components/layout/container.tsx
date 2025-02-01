import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { FC, ReactNode } from "react";

type TContainerProps = {
  className?: ClassValue;
  children: ReactNode;
};

const Container: FC<TContainerProps> = ({ className, children }) => {
  return (
    <main className={cn("max-w-6xl mx-auto px-4 md:px-6 lg:px-8", className)}>
      {children}
    </main>
  );
};

export default Container;
