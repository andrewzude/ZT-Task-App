"use client";
import { useState } from 'react';

export default function Page() {
const [view, setView] = useState('tasks');
return (
<main className="min-h-screen bg-slate-950 text-white p-6 font-sans">
<div className="max-w-md mx-auto">
<h1 className="text-4xl font-black text-center mb-8">ZT Pro Manager</h1>
<div className="flex bg-slate-900 p-2 rounded-2xl mb-8">
<button onClick={() => setView('tasks')} className={`flex-1 py-3 rounded-xl ${view === 'tasks' ? 'bg-blue-600' : ''}`}>Tasks</button>
<button onClick={() => setView('orders')} className={`flex-1 py-3 rounded-xl ${view === 'orders' ? 'bg-emerald-600' : ''}`}>Orders</button>
</div>
</div>
</main>
)
}
