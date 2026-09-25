"use client"
import { useState } from "react";

export default function Home() {

const [fogli, setFogli] = useState<number[]>([]);

function aggiungiFoglio() {
  setFogli((prev) => [...prev, prev.length + 1]);
}

return (

  <main className="gap-8 p-8 overscroll-auto">
   
 <div className="w-66 h-96 p-2 bg-[var(--background)] border-2 border-[var(--foreground)] flex items-center justify-center">
  <p className="text-8xl  text-[var(--primary)]">+</p>
</div>
  
  
  
  
  
  </main>


);
}