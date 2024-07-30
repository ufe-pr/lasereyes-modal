import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "lem-peer lem-inline-flex lem-h-6 lem-w-11 lem-shrink-0 lem-cursor-pointer lem-items-center lem-rounded-full lem-border-2 lem-border-transparent lem-transition-colors focus-visible:lem-outline-none focus-visible:lem-ring-2 focus-visible:lem-ring-ring focus-visible:lem-ring-offset-2 focus-visible:lem-ring-offset-background disabled:lem-cursor-not-allowed disabled:lem-opacity-50 data-[state=checked]:lem-bg-primary data-[state=unchecked]:lem-bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "lem-pointer-events-none lem-block lem-h-5 lem-w-5 lem-rounded-full lem-bg-background lem-shadow-lg lem-ring-0 lem-transition-transform data-[state=checked]:lem-translate-x-5 data-[state=unchecked]:lem-translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
