import React from "react";
import { ArrowRight } from "lucide-react";

interface GradientButtonProps {
  text: string;
  href: string;
  variant?: "emerald" | "custom";
  className?: string;
  icon?: React.ReactNode;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  text,
  href,
  variant = "emerald",
  className = "",
  icon = <ArrowRight className="w-4 ml-2" />,
}) => {
  return (
    <button className={`relative inline-flex h-10 overflow-hidden rounded-lg px-0.5 py-0.5 focus:outline-none focus:ring-2 focus:ring-purple-300 dark:focus:ring-emerald-700 focus:ring-offset-2 focus:ring-offset-purple-50 dark:focus:ring-offset-emerald-950 ${className}`}>
     
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,hsl(269,97%,85%)_0%,hsl(269,97%,65%)_50%,hsl(269,97%,85%)_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#6EE7B7_0%,#059669_50%,#6EE7B7_100%)]" />
      
      {/* <span className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-white/90 px-4 py-0 text-sm font-medium text-purple-900 backdrop-blur-3xl transition-colors duration-300 hover:bg-transparent hover:text-purple-900 dark:bg-transparent dark:text-white dark:hover:text-white">
      </span> */}

      <span className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-background px-4 py-0 text-sm font-medium text-black dark:text-white backdrop-blur-3xl transition-colors duration-300 hover:bg-transparent hover:text-white">

        <a href={href} target={"_blank"} className="flex items-center justify-center">
          <span className="mt-[-4.5px]">{text}</span>
          {icon}
        </a>
      </span>
    </button>
  );
};

export default GradientButton;



