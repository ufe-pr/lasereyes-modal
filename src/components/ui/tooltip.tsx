import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "lem-z-50 lem-overflow-hidden lem-rounded-md lem-border lem-bg-popover lem-px-3 lem-py-1.5 lem-text-sm lem-text-popover-foreground lem-shadow-md lem-animate-in lem-fade-in-0 lem-zoom-in-95 data-[state=closed]:lem-animate-out data-[state=closed]:lem-fade-out-0 data-[state=closed]:lem-zoom-out-95 data-[side=bottom]:lem-slide-in-from-top-2 data-[side=left]:lem-slide-in-from-right-2 data-[side=right]:lem-slide-in-from-left-2 data-[side=top]:lem-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
