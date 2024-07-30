import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "lem-fixed lem-inset-0 lem-z-50 lem-bg-black/80 lem- data-[state=open]:lem-animate-in data-[state=closed]:lem-animate-out data-[state=closed]:lem-fade-out-0 data-[state=open]:lem-fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "lem-fixed lem-left-[50%] lem-top-[50%] lem-z-50 lem-grid lem-w-full lem-max-w-lg lem-translate-x-[-50%] lem-translate-y-[-50%] lem-gap-4 lem-border lem-bg-background lem-p-6 lem-shadow-lg lem-duration-200 data-[state=open]:lem-animate-in data-[state=closed]:lem-animate-out data-[state=closed]:lem-fade-out-0 data-[state=open]:lem-fade-in-0 data-[state=closed]:lem-zoom-out-95 data-[state=open]:lem-zoom-in-95 data-[state=closed]:lem-slide-out-to-left-1/2 data-[state=closed]:lem-slide-out-to-top-[48%] data-[state=open]:lem-slide-in-from-left-1/2 data-[state=open]:lem-slide-in-from-top-[48%] sm:lem-rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="lem-absolute lem-right-4 lem-top-4 lem-rounded-sm lem-opacity-70 lem-ring-offset-background lem-transition-opacity hover:lem-opacity-100 focus:lem-outline-none focus:lem-ring-2 focus:lem-ring-ring focus:lem-ring-offset-2 disabled:lem-pointer-events-none data-[state=open]:lem-bg-accent data-[state=open]:lem-text-muted-foreground">
        <X className="lem-h-4 lem-w-4" />
        <span className="lem-sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "lem-flex lem-flex-col lem-space-y-1.5 lem-text-center sm:lem-text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "lem-flex lem-flex-col-reverse sm:lem-flex-row sm:lem-justify-end sm:lem-space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "lem-text-lg lem-font-semibold lem-leading-none lem-tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("lem-text-sm lem-text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
