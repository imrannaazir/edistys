import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

const buttonVariants = cva(
  " flex items-center justify-center gap-2  px-[42px] py-[15.5px] text-lg transition-all duration-300 group overflow-hidden  rounded-sm font-semibold active:scale-[.95]",
  {
    variants: {
      variant: {
        default: "bg-secondary text-background shadow-button-primary ",
        outline:
          "bg-transparent text-background border-background border hover:bg-background hover:text-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const firstRightArrowVariants = cva(
  "absolute left-0 transition-all duration-300 transform  group-hover:translate-x-full group-hover:opacity-0 ",
  {
    variants: {
      variant: {
        default: "text-background",
        outline: "text-background",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const secondRightArrowVariants = cva(
  "absolute left-0 transition-all duration-300 transform   -translate-x-full opacity-0  group-hover:translate-x-0 group-hover:opacity-100 ",
  {
    variants: {
      variant: {
        default: "text-background",
        outline: "text-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        <span>{children}</span>
        <span className="relative w-5 h-5">
          <ChevronRight
            size={20}
            className={cn(firstRightArrowVariants({ variant }))}
          />
          <ChevronRight
            size={20}
            className={cn(secondRightArrowVariants({ variant }))}
          />
        </span>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
