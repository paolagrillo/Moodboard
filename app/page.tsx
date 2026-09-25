"use client"
import { useState } from "react";

export default function Home() {
  const [fogli, setFogli] = useState<number[]>([]);

  function aggiungiFoglio() {
    setFogli((prev) => [...prev, prev.length + 1]);
  }

  return (
    <main className="grid grid-cols-5 gap-8 p-8 overscroll-auto">
      <div
        onClick={aggiungiFoglio}
        className="w-64 h-96 m-4 p-2 bg-[var(--background)] border-2 border-[var(--foreground)] flex items-center justify-center cursor-pointer"
      >
        <p className="text-8xl text-[var(--primary)]">+</p>
      </div>

      {fogli.map((foglio) => (
        <a key={foglio} href={`/foglio/${foglio}`} className="w-64 h-96 p-2 m-4 bg-[var(--background)] border-2 border-[var(--foreground)] flex items-center justify-center cursor-pointer">
        </a>
      ))}
    </main>
  );
}