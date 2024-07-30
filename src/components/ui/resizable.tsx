import { GripVertical } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      "lem-flex lem-h-full lem-w-full data-[panel-group-direction=vertical]:lem-flex-col",
      className
    )}
    {...props}
  />
)

const ResizablePanel = ResizablePrimitive.Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "lem-relative lem-flex lem-w-px lem-items-center lem-justify-center lem-bg-border after:lem-absolute after:lem-inset-y-0 after:lem-left-1/2 after:lem-w-1 after:lem--translate-x-1/2 focus-visible:lem-outline-none focus-visible:lem-ring-1 focus-visible:lem-ring-ring focus-visible:lem-ring-offset-1 data-[panel-group-direction=vertical]:lem-h-px data-[panel-group-direction=vertical]:lem-w-full data-[panel-group-direction=vertical]:after:lem-left-0 data-[panel-group-direction=vertical]:after:lem-h-1 data-[panel-group-direction=vertical]:after:lem-w-full data-[panel-group-direction=vertical]:after:lem--translate-y-1/2 data-[panel-group-direction=vertical]:after:lem-translate-x-0 [&[data-panel-group-direction=vertical]>div]:lem-rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="lem-z-10 lem-flex lem-h-4 lem-w-3 lem-items-center lem-justify-center lem-rounded-sm lem-border lem-bg-border">
        <GripVertical className="lem-h-2.5 lem-w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
