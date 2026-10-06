import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent font-medium transition-colors outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent-soft disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-accent text-page hover:opacity-85",
        outline:
          "border-border-strong bg-control text-content hover:bg-surface",
        ghost: "text-content hover:bg-surface hover:text-accent",
      },
      size: {
        default: "h-10 gap-2 px-4 text-sm",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({ className, variant = "default", size = "default", ...props }) {
  return (
    <button
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button };
