"use client";
import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';

export default function Page() {
const [view, setView] = useState('tasks');
const [tasks, setTasks] = useState([]);
const supabase = createClient();

useEffect(() => {
async function loadData() {
const { data } = await supabase.from('tasks').select('*');
setTasks(data || []);
}
loadData();
}, []);

return (
<main className="min-h-screen bg-slate-950 text-white p-6 font-sans">
<div className="max-w-md mx-auto">
<h1 className="text-3xl font-black text-center mb-8">ZT Pro Manager</h1>
<div className="flex bg-slate-900 p-2 rounded-2xl mb-8">
<button onClick={() => setView('tasks')} className={`flex-1 py-3 rounded-xl font-bold ${view === 'tasks' ? 'bg-blue-600' : 'text-slate-400'}`}>Tasks</button>
<button onClick={() => setView('orders')} className={`flex-1 py-3 rounded-xl font-bold ${view === 'orders' ? 'bg-emerald-600' : 'text-slate-400'}`}>Orders</button>
</div>

{view === 'tasks' ? (
<div className="space-y-4">
{tasks.map(t => (
<div key={t.id} className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex justify-between items-center">
<span className="font-bold">{t.task}</span>
<span className="text-blue-400 text-sm">{t.task_time}</span>
</div>
))}
<div className="text-center text-slate-500 italic mt-6">All tasks synced from Supabase</div>
</div>
) : (
<div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 text-center">
<p className="text-slate-400">Order Management Module Ready</p>
</div>
)}
</div>
</main>
)
}
