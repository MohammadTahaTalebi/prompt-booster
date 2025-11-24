/* eslint-disable */

import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="bg-linear-to-br from-[#1A002B] via-[#2b003f] to-[#0b0011] min-h-screen text-white flex flex-col md:pt-[81px] pt-[72px]">
      <main className="flex-1">
        <section className="h-screen max-h-[900px] flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-2 items-center animate-[fadeIn_0.8s_ease-out]">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Turn your ideas into
                <span className="text-amber-300"> powerful prompts</span>
              </h1>
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                Just write your rough idea and{" "}
                <span className="text-amber-200 font-semibold">
                  PromptImprover
                </span>{" "}
                transforms it into a clear, structured, professional prompt
                ready for AI models.
              </p>

              <div className="flex flex-wrap md:justify-start justify-center items-center gap-4">
                <Link
                  href="/improve"
                  className="px-6 py-3 rounded-xl bg-amber-300 text-black font-bold hover:bg-amber-200 transition shadow-[0_0_25px_rgba(251,191,36,0.7)]"
                >
                  Improve my prompt now
                </Link>
                <a
                  href="#features"
                  className="px-5 py-2.5 rounded-xl border border-white/25 bg-white/5 text-sm md:text-base hover:bg-white/10 transition"
                >
                  View features
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 bg-amber-400/20 blur-3xl opacity-40 pointer-events-none" />
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/15 shadow-[0_0_50px_rgba(0,0,0,0.8)] p-5 md:p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm uppercase tracking-[0.25em] text-white/60">
                    Live Preview
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-black/50 rounded-xl p-3 border border-white/10 text-xs md:text-sm font-mono text-emerald-200 shadow-inner">
                    <p className="text-white/60 mb-1">Before:</p>
                    <pre className="whitespace-pre-wrap">
{`"Write something about frontend"`}
                    </pre>
                  </div>
                  <div className="bg-black/60 rounded-xl p-3 border border-amber-300/40 text-xs md:text-sm font-mono text-amber-100 shadow-inner">
                    <p className="text-amber-200 mb-1">After (Improved):</p>
                    <pre className="whitespace-pre-wrap">
{`"Generate a detailed, step-by-step guide that explains modern frontend
best practices using React, TypeScript, and Tailwind CSS..."`}
                    </pre>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-2 text-xs text-white/60">
                  <span>Automatically optimizes structure, tone, and detail.</span>
                  <Link
                    href="/improve"
                    className="text-amber-300 hover:text-amber-200 underline underline-offset-4"
                  >
                    Try it →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="py-16 md:py-20 border-t border-white/5 bg-black/10"
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why <span className="text-amber-300">Improve My Prompt?</span>
            </h2>
            <p className="text-white/75 mb-10 max-w-2xl">
              Stop wasting time rewriting prompts. Type your idea once and let
              the tool turn it into a clear, powerful instruction for AI.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white/10 rounded-2xl p-5 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.7)]">
                <h3 className="font-semibold mb-2 text-lg">More clarity</h3>
                <p className="text-sm text-white/80">
                  Makes your prompts precise, goal-driven, and unambiguous so
                  models know exactly what you want.
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-5 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.7)]">
                <h3 className="font-semibold mb-2 text-lg">Professional structure</h3>
                <p className="text-sm text-white/80">
                  Outputs are neatly structured, easy to scan, and ready to use
                  in any chat-based interface.
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-5 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.7)]">
                <h3 className="font-semibold mb-2 text-lg">Save time</h3>
                <p className="text-sm text-white/80">
                  Skip endless trial-and-error and get to a strong final prompt
                  in seconds.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="py-16 md:py-20 border-t border-white/5"
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How it works
            </h2>

            <div className="grid gap-6 md:grid-cols-3 text-sm md:text-base">
              <div className="bg-black/40 rounded-2xl p-5 border border-white/10">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-300 text-black text-sm font-bold mb-3">
                  1
                </span>
                <h3 className="font-semibold mb-2">Write your rough idea</h3>
                <p className="text-white/80">
                  Type a simple, raw description of what you want. No need to be
                  formal or perfect.
                </p>
              </div>
              <div className="bg-black/40 rounded-2xl p-5 border border-white/10">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-300 text-black text-sm font-bold mb-3">
                  2
                </span>
                <h3 className="font-semibold mb-2">Click “Improve”</h3>
                <p className="text-white/80">
                  The tool analyzes your text and rewrites it using best
                  practices for prompting and clear instructions.
                </p>
              </div>
              <div className="bg-black/40 rounded-2xl p-5 border border-white/10">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-300 text-black text-sm font-bold mb-3">
                  3
                </span>
                <h3 className="font-semibold mb-2">Copy & use anywhere</h3>
                <p className="text-white/80">
                  Copy the markdown output with one click and paste it into any
                  AI model or tool.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="py-16 md:py-20 border-t border-white/5 bg-black/20"
        >
          <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Boost your prompt quality instantly
              </h2>
              <p className="text-white/80 mb-6 max-w-xl">
                Start using <span className="text-amber-300 font-semibold">Prompt Booter</span> and transform rough thoughts into polished, high-performance prompts optimized for AI models.
              </p>

              <ul className="space-y-2 text-white/70 text-sm md:text-base mb-8">
                <li>✅ Improve AI output quality</li>
                <li>✅ Reduce time spent rewording prompts</li>
                <li>✅ Perfect for developers, creators, and automation workflows</li>
              </ul>

              <Link
                href="/improve"
                className="px-7 py-3 rounded-xl bg-amber-300 text-black font-bold hover:bg-amber-200 transition shadow-[0_0_25px_rgba(251,191,36,0.7)] text-lg"
              >
                Start with /improve
              </Link>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
              <h3 className="font-semibold mb-3 text-xl">
                Your direct gateway to better prompts
              </h3>
              <p className="text-white/80 mb-4 text-sm md:text-base">
                Simply visit <span className="text-amber-300 font-semibold">/improve</span>, paste your idea, and watch it transform into a stronger, clearer, more effective prompt.
              </p>
              <p className="text-xs text-white/60">
                No signup • No complexity • Immediate results
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
