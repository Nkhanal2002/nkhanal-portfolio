"use client";

import { useEffect, useState } from "react";

export function Footer() {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white py-4 transition-colors">
      <div className="text-center text-base lg:max-w-[80rem] mx-auto">
        Narayan Khanal &copy; {currentYear}
      </div>
    </footer>
  );
}
