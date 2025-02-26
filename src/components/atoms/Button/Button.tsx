import * as React from "react";
import { ButtonProps } from "./Button.props";
import { buttonVariants } from "./Button.styles";

import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    // Special handling for neon and gradient variants
    if (variant === "neon") {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          <span className="relative z-10 flex items-center gap-2">
            {props.children}
          </span>
          <span className="absolute inset-0 translate-y-full bg-primary transition-transform duration-300 group-hover:translate-y-0"></span>
        </Comp>
      );
    }

    if (variant === "gradient") {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          <span className="relative z-10 flex items-center gap-2">
            {props.children}
          </span>
        </Comp>
      );
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
