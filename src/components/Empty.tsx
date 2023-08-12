import { cn } from "@/lib/utils";
import { LucideIcon, MessageSquare } from "lucide-react";
import Image from "next/image";

interface EmptyProps {
  label: string;
  icon: LucideIcon;
  iconColor: string;
}

export const Empty = ({ label, icon: Icon, iconColor }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Icon className={cn("w-full h-full", iconColor)} />
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};
