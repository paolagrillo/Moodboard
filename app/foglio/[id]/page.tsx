"use client"

import { useState, useEffect } from "react";

export default function FoglioPage({ params }: { params: Promise<{ id: string }> }) {
    const [id, setId] = useState<string>("");
    const [testo, setTesto] = useState("");

    useEffect(() => {
        params.then((p) => {
            setId(p.id);
            const salvato = localStorage.getItem(`foglio-${p.id}`);
            if (salvato) {
                setTesto(salvato);
            }
        });
    }, [params]);
    
    useEffect(() => {
        if (id) {
            localStorage.setItem(`foglio-${id}`, testo);
        }
    }, [testo, id]); 



    return (
        <main className="p-8">
           <a href="/" className="text-[var(--primary)] underline">← Torna alla board</a> 
           <h1 className="text-2x1 font-bold mt-4 mb-4">Foglio {id}</h1>

<textarea
value={testo}
onChange={(e) => setTesto(e.target.value)}
placeholder="Scrivi qui..." 
className="w-full h-96 border-2 border-[var(--foreground)] p-4 rounded-lg"></textarea>

        </main>
    );
}