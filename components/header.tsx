"use client";

import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: "fa-house" },
    { id: "about", label: "About", icon: "fa-user" },
    { id: "experience", label: "Experience", icon: "fa-briefcase" },
    { id: "projects", label: "Projects", icon: "fa-code" },
    { id: "contact", label: "Contact", icon: "fa-address-book" },
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white dark:bg-gray-900 py-2 sm:py-0 text-gray-800 dark:text-white fixed top-0 left-0 right-0 z-50 shadow-sm transition-colors">
      <nav className="m-0 relative lg:max-w-[80rem] text-sm md:text-base mx-auto sm:py-2">
        <div className="nav-bar flex flex-row sm:flex-row justify-between items-center">
          <div className="nav-logo p-[0.5rem] text-transparent bg-clip-text bg-gradient-to-r from-[#15D3E0] via-[#398a99] to-[#136066] dark:text-[#15D3E0] uppercase font-bold mx-2">
            Nkhanal
          </div>

          {/* Desktop Navigation */}
          <div className="hidden text-base sm:block my-auto md:text-lg">
            <ul className="sm:flex space-x-[2rem] px-[0.9rem] items-center">
              {navItems.map((item) => (
                <li key={item.id} className="list-options hover:cursor-pointer">
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`links flex gap-1 justify-center items-center hover:cursor-pointer hover:border-b-2 hover:border-b-[#15D3E0] transition-all duration-100 ease-in-out ${
                      activeSection === item.id
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#15D3E0] via-[#398a99] to-[#136066] border-b-2 border-b-[#15D3E0] dark:text-[#15D3E0] font-medium"
                        : ""
                    }`}
                  >
                    <i className={`fa-solid ${item.icon} text-base`}></i>
                    <span className="mt-0.5">{item.label}</span>
                  </button>
                </li>
              ))}
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </div>

          {/* Mobile Menu Toggle and Theme Toggle */}
          <div className="flex items-center sm:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:cursor-pointer my-auto mx-2 p-[0.5rem]"
            >
              <i
                className={`fa-solid ${
                  isMobileMenuOpen ? "fa-xmark text-xl" : "fa-bars text-lg"
                }`}
              ></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`navlist-menu bg-white dark:bg-gray-900 w-full text-center py-1 text-base sm:hidden absolute transition-all duration-200 ease-in ${
            isMobileMenuOpen ? "top-full" : "-top-[20rem]"
          }`}
        >
          <ul className="flex justify-center gap-6">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="list-options hover:cursor-pointer flex flex-col"
              >
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`m-links hover:text-[#15D3E0] transition-colors ${
                    activeSection === item.id
                      ? "text-[#15D3E0] font-medium"
                      : ""
                  }`}
                >
                  <i className={`fa-solid ${item.icon} text-sm`}></i>
                  <p className="text-sm">{item.label}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
