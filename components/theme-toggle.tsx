"use client";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [enabled, setEnabled] = useState(theme === "dark");

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true);
    setEnabled(theme === "dark");
  }, [theme]);

  const handleToggle = () => {
    setEnabled(!enabled);
    toggleTheme();
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center">
      <button
        onClick={handleToggle}
        className={`${
          enabled ? "bg-[#15D3E0]" : "bg-gray-200"
        } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#15D3E0]`}
        role="switch"
        aria-checked={enabled}
        aria-label="Toggle theme"
      >
        <span
          aria-hidden="true"
          className={`${
            enabled ? "translate-x-5" : "translate-x-0"
          } pointer-events-none inline-flex items-center justify-center h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
        >
          {enabled ? (
            <Moon className="h-3 w-3 text-gray-600" aria-hidden="true" />
          ) : (
            <Sun className="h-3 w-3 text-yellow-500" aria-hidden="true" />
          )}
        </span>
      </button>
    </div>
  );
}
