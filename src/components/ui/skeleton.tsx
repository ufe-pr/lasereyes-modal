import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("lem-animate-pulse lem-rounded-md lem-bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
