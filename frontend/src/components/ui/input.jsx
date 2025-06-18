import { forwardRef } from "react";
import { cn } from "../../lib/utils";

export const Input = forwardRef(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
        "h-8 sm:h-10 md:h-12",         // responsive height
        "text-xs sm:text-sm md:text-base", // responsive font size
        className
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";
