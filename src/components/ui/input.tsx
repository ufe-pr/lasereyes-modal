import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "lem-flex lem-h-10 lem-w-full lem-rounded-md lem-border lem-border-input lem-bg-background lem-px-3 lem-py-2 lem-text-sm lem-ring-offset-background file:lem-border-0 file:lem-bg-transparent file:lem-text-sm file:lem-font-medium placeholder:lem-text-muted-foreground focus-visible:lem-outline-none focus-visible:lem-ring-2 focus-visible:lem-ring-ring focus-visible:lem-ring-offset-2 disabled:lem-cursor-not-allowed disabled:lem-opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
