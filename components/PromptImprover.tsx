/* eslint-disable */

"use client";

import Markdown from "react-markdown";
import { useState } from "react";

export default function PromptImprover() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [improved, setImproved] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  async function handleImprove() {
    if (!prompt.trim()) return;
    setLoading(true);
    setImproved(null);
    setCopied(false);

    try {
      const res = await fetch("/api/improve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setImproved(data.improved);
    } catch (err: any) {
      setImproved(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }

  function handleCopy() {
    if (!improved) return;
    navigator.clipboard.writeText(improved);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="bg-gradient-to-br from-[#1A002B] via-[#2b003f] to-[#0b0011] min-h-screen flex flex-col items-center justify-center text-white p-6 pt-25">
      <div className="flex items-center gap-3 mb-6 animate-[fadeIn_0.8s_ease-out]">
        <div className="relative">
          <img
            src="/robotHead.png"
            alt="Gears animation"
            className="w-12 h-12 md:w-20 md:h-20"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Improve My Prompt
        </h1>
      </div>

      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] w-full max-w-7xl border border-white/10 animate-[slideUp_0.6s_ease-out]">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={6}
          placeholder="Please enter your prompt here:"
          className="w-full p-3 rounded-lg bg-black/40 text-white mb-4 outline-none border border-white/5 focus:border-pink-400/70 transition shadow-inner"
        />

        <button
          onClick={handleImprove}
          disabled={loading || !prompt.trim()}
          className="w-full py-3 bg-amber-300 text-black font-bold rounded-xl hover:bg-amber-300 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
        >
          {loading ? (
            <>
              <span className="inline-block w-5 h-5 border-2 border-black/40 border-t-transparent rounded-full animate-spin" />
              <span>Improving...</span>
            </>
          ) : (
            <>
              <span>Improve Prompt</span>
            </>
          )}
        </button>
      </div>

      {improved && (
        <div className="relative mt-6 bg-black/40 backdrop-blur-md p-6 rounded-2xl w-full max-w-7xl text-base md:text-lg border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.7)] animate-[fadeInUp_0.7s_ease-out]">
          <button
            onClick={handleCopy}
            className="absolute top-3 left-3 bg-white/10 hover:bg-white/20 border border-white/25 text-white text-xs px-3 py-1 rounded-lg transition cursor-pointer flex items-center gap-1"
          >
            {copied ? (
              <>
                <span className="w-1 h-1 rounded-full bg-emerald-800 animate-ping mr-2" />
                Copied
              </>
            ) : (
              <>Copy</>
            )}
          </button>

          <div className="prose prose-invert max-w-none whitespace-pre-wrap mt-7">
            <Markdown>{improved}</Markdown>
          </div>
        </div>
      )}
    </div>
  );
}
