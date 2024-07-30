import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "lem-flex lem-min-h-[80px] lem-w-full lem-rounded-md lem-border lem-border-input lem-bg-background lem-px-3 lem-py-2 lem-text-sm lem-ring-offset-background placeholder:lem-text-muted-foreground focus-visible:lem-outline-none focus-visible:lem-ring-2 focus-visible:lem-ring-ring focus-visible:lem-ring-offset-2 disabled:lem-cursor-not-allowed disabled:lem-opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
