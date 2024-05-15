import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type MaxWidthWrapperProps = {
  className?: string;
  children?: ReactNode;
};
const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperProps) => {
  return (
    <div className={cn("h-full mx-auto max-w-screen-xl md:px-20 ", className)}>
      {children ? children : null}
    </div>
  );
};

export default MaxWidthWrapper;
