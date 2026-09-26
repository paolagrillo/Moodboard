"use client"
import { useState, useEffect } from "react";

export default function Home() {
  const [fogli, setFogli] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const salvato = localStorage.getItem("fogli");
    if (salvato) {
      setFogli(JSON.parse(salvato));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("fogli", JSON.stringify(fogli));
    }
  }, [fogli, isLoaded]);

  function aggiungiFoglio() {
    setFogli((prev) => [...prev, prev.length + 1]);
  }

  return (
    <main className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 p-8">
      <div
        onClick={aggiungiFoglio}
        className="w-64 h-96 p-2 bg-[var(--background)] border-2 border-[var(--foreground)] flex items-center justify-center cursor-pointer"
      >
        <p className="text-8xl text-[var(--primary)]">+</p>
      </div>

{fogli.map((foglio) => {
  const testoSalvato = localStorage.getItem(`foglio-${foglio}`) || "";
  return (
    <a key={foglio} href={`/foglio/${foglio}`} className="w-64 h-96 p-2 bg-[var(--background)] border-2 border-[var(--foreground)] flex items-center justify-center cursor-pointer">
      <p className="text-sm text-[var(--foreground)] line-clamp-4 p-2">
        {testoSalvato || "Foglio vuoto"}
      </p>
    </a>
  );
})}
    </main>
  );
}