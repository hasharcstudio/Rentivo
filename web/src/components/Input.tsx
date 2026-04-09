"use client";

import { forwardRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  Icon?: React.ElementType;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, Icon, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        <label className="text-[10px] font-bold uppercase tracking-widest text-secondary px-2">
          {label}
        </label>
        <div className="relative">
          {Icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary">
              <Icon size={20} />
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              "w-full bg-surface-container-low text-on-surface font-medium border-0 rounded p-4 outline-none transition-all",
              "focus:bg-surface focus:ring-1 focus:ring-primary/20",
              Icon && "pl-[44px]",
              error && "border-b-2 border-b-primary ring-0 bg-surface",
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <span className="text-xs text-primary font-medium px-2 mt-1 hidden-state-to-visible animate-in slide-in-from-top-1">
            {error}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";
