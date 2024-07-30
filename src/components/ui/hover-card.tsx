import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

const HoverCard = HoverCardPrimitive.Root

const HoverCardTrigger = HoverCardPrimitive.Trigger

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "lem-z-50 lem-w-64 lem-rounded-md lem-border lem-bg-popover lem-p-4 lem-text-popover-foreground lem-shadow-md lem-outline-none data-[state=open]:lem-animate-in data-[state=closed]:lem-animate-out data-[state=closed]:lem-fade-out-0 data-[state=open]:lem-fade-in-0 data-[state=closed]:lem-zoom-out-95 data-[state=open]:lem-zoom-in-95 data-[side=bottom]:lem-slide-in-from-top-2 data-[side=left]:lem-slide-in-from-right-2 data-[side=right]:lem-slide-in-from-left-2 data-[side=top]:lem-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export { HoverCard, HoverCardTrigger, HoverCardContent }
