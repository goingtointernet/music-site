import { cn } from "@/lib/utils"


export function Button({ className, variant = "default", size = "default", children, ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/30": variant === "default",
          "border border-white/10 bg-transparent hover:bg-white/10 text-white": variant === "outline",
          "hover:bg-white/10 text-white": variant === "ghost",
          "h-9 px-4 py-2 text-sm": size === "sm",
          "h-10 px-6 py-2": size === "default",
          "h-12 px-8 py-3 text-lg": size === "lg",
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
