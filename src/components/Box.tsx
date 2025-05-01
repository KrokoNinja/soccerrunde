import { cn } from "@/lib/utils";

export default function Box({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={cn("bg-white rounded-lg p-4 text-black", className)}>{children}</div>;
}