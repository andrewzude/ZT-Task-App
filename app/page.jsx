"use client";
import { useState } from 'react';

export default function Page() {
const [view, setView] = useState('tasks');
return (
<main className="min-h-screen bg-slate-950 text-white p-6 font-sans">
<div className="max-w-md mx-auto">
<header className="mb-10 text-center">
<h1 className="text-4xl font-black bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">ZT Pro Manager</h1>
</header>

<div className="grid grid-cols-2 gap-3 mb-8 bg-slate-900 p-2 rounded-2xl border border-slate-800">
<button onClick={() => setView('tasks')} className={`py-3 rounded-xl font-bold transition-all ${view === 'tasks' ? 'bg-blue-600' : 'text-slate-400'}`}>Tasks</button>
<button onClick={() => setView('orders')} className={`py-3 rounded-xl font-bold transition-all ${view === 'orders' ? 'bg-emerald-600' : 'text-slate-400'}`}>Orders</button>
</div>

{view === 'tasks' ? (
<div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 text-center text-slate-500">Tasks coming soon...</div>
) : (
<div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 space-y-4">
<input className="w-full bg-slate-950 p-4 rounded-xl border border-slate-700" placeholder="Country" />
<input className="w-full bg-slate-950 p-4 rounded-xl border border-slate-700" placeholder="Company Name" />
<button className="w-full bg-emerald-600 py-4 rounded-xl font-bold">Save Order</button>
</div>
)}
</div>
</main>
)
}
