"use client";

import React, { useState } from "react";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export default function Select() {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelect = (option: (typeof options)[number]) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative inline-block w-64">
      {/* Selected Option */}
      <div
        className="flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm cursor-pointer hover:border-blue-400"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span>{selectedOption.label}</span>
        {/* Custom SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 transition-transform ${
            isDropdownOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Dropdown Options */}
      {isDropdownOpen && (
        <ul className="absolute left-0 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-md">
          {options.map((option) => (
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
