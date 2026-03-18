"use client";
import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';

export default function Page() {
const [tasks, setTasks] = useState([]);
const [error, setError] = useState(null);
const supabase = createClient();

useEffect(() => {
async function loadData() {
try {
const { data, error } = await supabase.from('tasks').select('*');
if (error) throw error;
setTasks(data || []);
} catch (err) {
console.error("Supabase Error:", err);
setError(err.message);
}
}
loadData();
}, []);

return (
<main className="min-h-screen bg-slate-950 text-white p-6 font-sans">
<div className="max-w-md mx-auto">
<h1 className="text-3xl font-black text-center mb-8">ZT Pro Manager</h1>
{error && <div className="bg-red-900 p-4 rounded-xl text-center">Error: {error}</div>}
<div className="space-y-4">
{tasks.map(t => <div key={t.id} className="bg-slate-900 p-4 rounded-xl">{t.task}</div>)}
</div>
</div>
</main>
)
}
