"use client";

import { useState, useEffect, ReactElement } from "react";
import Select from "@/components/select";
import { getText } from "@/utils/i18n";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const currentLang = useSearchParams()?.get("lang") || undefined;
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
      <h1 className="flex flex-row justify-between w-full">
        {getText("welcome_title", currentLang)}
      </h1>
      <Select></Select>
    </>
  );
}
