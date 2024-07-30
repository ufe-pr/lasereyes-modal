import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "lem-inline-flex lem-h-10 lem-items-center lem-justify-center lem-rounded-md lem-bg-muted lem-p-1 lem-text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "lem-inline-flex lem-items-center lem-justify-center lem-whitespace-nowrap lem-rounded-sm lem-px-3 lem-py-1.5 lem-text-sm lem-font-medium lem-ring-offset-background lem-transition-all focus-visible:lem-outline-none focus-visible:lem-ring-2 focus-visible:lem-ring-ring focus-visible:lem-ring-offset-2 disabled:lem-pointer-events-none disabled:lem-opacity-50 data-[state=active]:lem-bg-background data-[state=active]:lem-text-foreground data-[state=active]:lem-shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "lem-mt-2 lem-ring-offset-background focus-visible:lem-outline-none focus-visible:lem-ring-2 focus-visible:lem-ring-ring focus-visible:lem-ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
