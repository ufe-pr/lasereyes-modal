import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "lem-inline-flex lem-items-center lem-rounded-full lem-border lem-px-2.5 lem-py-0.5 lem-text-xs lem-font-semibold lem-transition-colors focus:lem-outline-none focus:lem-ring-2 focus:lem-ring-ring focus:lem-ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "lem-border-transparent lem-bg-primary lem-text-primary-foreground hover:lem-bg-primary/80",
        secondary:
          "lem-border-transparent lem-bg-secondary lem-text-secondary-foreground hover:lem-bg-secondary/80",
        destructive:
          "lem-border-transparent lem-bg-destructive lem-text-destructive-foreground hover:lem-bg-destructive/80",
        outline: "lem-text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
