
import React from "react";
import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const PageContainer = ({ children, className, fullWidth = false }: PageContainerProps) => {
  return (
    <main
      className={cn(
        "pt-24 pb-12 min-h-screen",
        fullWidth ? "px-4" : "container px-4 mx-auto",
        className
      )}
    >
      {children}
    </main>
  );
};

export default PageContainer;
