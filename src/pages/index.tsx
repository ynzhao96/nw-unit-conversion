"use client";

import { useState, useEffect, ReactElement } from "react";
import LanguageSelect from "@/components/language-select";
import Select from "@/components/select";
import { getText } from "@/utils/i18n";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  const handleSubmit = async () => {
    const response = await fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ test: "Hello from frontend!" }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <div className="flex flex-row justify-between">
        {getText("welcome_title", "en_US")}
        <LanguageSelect></LanguageSelect>
      </div>
      <Select></Select>
    </>
  );
}
