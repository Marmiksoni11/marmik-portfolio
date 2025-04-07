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

  {/* <button className="relative inline-flex h-10 overflow-hidden rounded-lg px-0.5 py-0.5 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-0 text-sm font-medium text-white backdrop-blur-3xl">
              <a href="#contact" className="flex items-center justify-center">
                <span className="mt-[-4.5px]">Let's discuss your project </span><ArrowRight className="w-4 ml-2" />
              </a>
            </span>
          </button> */}

  return (
    <button className={`relative inline-flex h-10 overflow-hidden rounded-lg px-0.5 py-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2 focus:ring-offset-emerald-950 ${className}`}>

      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6EE7B7_0%,#059669_50%,#6EE7B7_100%)]" />
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6EE7B7_0%,#005138_50%,#4bf3b1_100%)]" />
      <span className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-background px-4 py-0 text-sm font-medium text-white backdrop-blur-3xl transition-colors duration-300 hover:bg-transparent hover:text-white">
        {/* <span className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-transparent px-4 py-0 text-sm font-bold font-stretch-75% text-white backdrop-blur-3xl transition-colors duration-300 hover:bg-slate-950 hover:text-white"> */}
        {/* <span className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-transparent px-4 py-0 text-sm font-bold font-stretch-75% text-white backdrop-blur-3xl transition-colors duration-300 hover:bg-black hover:text-white backdrop-brightness-50 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]"> */}
        <a href={href} target={"_blank"} className="flex items-center justify-center">
          <span className="mt-[-4.5px]">{text}</span>
          {icon}
        </a>
      </span>
    </button>
  );
};

export default GradientButton;



