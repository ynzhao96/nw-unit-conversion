"use client";

import React, { useState } from "react";
import { SupportedLanguages } from "@/constants/i18n";
import { changeLanguage } from "@/utils/i18n";
import { useRouter } from "next/router";

export default function LanguageSelect() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(SupportedLanguages[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelect = (option: (typeof SupportedLanguages)[number]) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
    changeLanguage(router, option.value);
  };

  return (
    <div className="relative inline-block w-64 z-50">
      {/* Selected Option */}
      <div
        className="flex items-center justify-between w-8 h-8 p-1 bg-white border border-gray-300 rounded-lg shadow-sm cursor-pointer hover:border-blue-400"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <img src="/globe.svg" className="w-full h-full" />
      </div>

      {/* Dropdown Options */}
      {isDropdownOpen && (
        <ul className="absolute left-0 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-md">
          {SupportedLanguages.map((option) => (
            <li
              key={option.value}
              className={`px-4 py-2 cursor-pointer hover:bg-blue-100 ${
                option.value === selectedOption.value ? "bg-blue-50" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
