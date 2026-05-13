"use client";
import { useState } from "react";

export default function HomePage() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("FRIDAY online. Awaiting command.");

  async function send() {
    const res = await fetch("/api/chat", { method: "POST", body: JSON.stringify({ message }) });
    const data = await res.json();
    setReply(data.reply);
  }

  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-slate-950 to-slate-900">
      <h1 className="text-4xl font-bold text-cyan-300">FRIDAY JARVIS CORE</h1>
      <p className="mt-2 text-slate-300">Cyber-futuristic assistant control panel.</p>
      <div className="mt-8 rounded-xl border border-cyan-500/30 p-4 bg-slate-900/60">
        <textarea className="w-full h-24 bg-slate-950 border border-cyan-700 p-3" value={message} onChange={(e)=>setMessage(e.target.value)} />
        <button className="mt-3 px-4 py-2 bg-cyan-500 text-slate-950 font-semibold rounded" onClick={send}>Send</button>
        <div className="mt-4 font-mono text-cyan-200">{reply}</div>
      </div>
    </main>
  );
}
