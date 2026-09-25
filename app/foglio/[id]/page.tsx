"use client"

export default async function FoglioPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <main className="p-8">
           <a href="/" className="text-[var(--primary)] underline">← Torna alla board</a> 
           <h1 className="text-2x1 font-bold mt-4 mb-4">Foglio {id}</h1>

<textarea placeholder="Scrivi qui..." className="w-full h-96 border-2 border-[var(--foreground)] p-4 rounded-lg /"></textarea>

        </main>
    );
}