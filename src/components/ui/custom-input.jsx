import React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-white/30 transition-colors",
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }
