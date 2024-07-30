import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "lem-fixed lem-top-0 lem-z-[100] lem-flex lem-max-h-screen lem-w-full lem-flex-col-reverse lem-p-4 sm:lem-bottom-0 sm:lem-right-0 sm:lem-top-auto sm:lem-flex-col md:lem-max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "lem-group lem-pointer-events-auto lem-relative lem-flex lem-w-full lem-items-center lem-justify-between lem-space-x-4 lem-overflow-hidden lem-rounded-md lem-border lem-p-6 lem-pr-8 lem-shadow-lg lem-transition-all data-[swipe=cancel]:lem-translate-x-0 data-[swipe=end]:lem-translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:lem-translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:lem-transition-none data-[state=open]:lem-animate-in data-[state=closed]:lem-animate-out data-[swipe=end]:lem-animate-out data-[state=closed]:lem-fade-out-80 data-[state=closed]:lem-slide-out-to-right-full data-[state=open]:lem-slide-in-from-top-full data-[state=open]:sm:lem-slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "lem-border lem-bg-background lem-text-foreground",
        destructive:
          "lem-destructive lem-group lem-border-destructive lem-bg-destructive lem-text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "lem-inline-flex lem-h-8 lem-shrink-0 lem-items-center lem-justify-center lem-rounded-md lem-border lem-bg-transparent lem-px-3 lem-text-sm lem-font-medium lem-ring-offset-background lem-transition-colors hover:lem-bg-secondary focus:lem-outline-none focus:lem-ring-2 focus:lem-ring-ring focus:lem-ring-offset-2 disabled:lem-pointer-events-none disabled:lem-opacity-50 group-[.destructive]:lem-border-muted/40 group-[.destructive]:hover:lem-border-destructive/30 group-[.destructive]:hover:lem-bg-destructive group-[.destructive]:hover:lem-text-destructive-foreground group-[.destructive]:focus:lem-ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "lem-absolute lem-right-2 lem-top-2 lem-rounded-md lem-p-1 lem-text-foreground/50 lem-opacity-0 lem-transition-opacity hover:lem-text-foreground focus:lem-opacity-100 focus:lem-outline-none focus:lem-ring-2 group-hover:lem-opacity-100 group-[.destructive]:lem-text-red-300 group-[.destructive]:hover:lem-text-red-50 group-[.destructive]:focus:lem-ring-red-400 group-[.destructive]:focus:lem-ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="lem-h-4 lem-w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("lem-text-sm lem-font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("lem-text-sm lem-opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
