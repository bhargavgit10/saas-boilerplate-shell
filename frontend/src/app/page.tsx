import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex">
      {/* 1. Sidebar Navigation Element */}
      <aside className="w-64 border-r border-zinc-800 bg-zinc-900/40 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg text-teal-400 tracking-tight">
            <div className="h-3 w-3 rounded-full bg-teal-500 animate-pulse" />
            SaaS CORE ENGINE
          </div>
          <nav className="mt-8 space-y-2">
            <a href="#" className="block px-3 py-2 rounded-lg bg-zinc-800 text-zinc-100 font-medium text-sm">
              Overview Dashboard
            </a>
            <a href="#" className="block px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 font-medium text-sm transition-all">
              System Nodes
            </a>
          </nav>
        </div>
        <div className="text-xs text-zinc-500 border-t border-zinc-800 pt-4">
          Environment: Local Dev
        </div>
      </aside>

      {/* 2. Main Project Content Workspace */}
      <main className="flex-1 flex flex-col">
        <header className="h-16 border-b border-zinc-800 px-8 flex items-center justify-between bg-zinc-900/10 backdrop-blur-sm">
          <h1 className="text-sm font-semibold tracking-wide uppercase text-zinc-400">System Activity</h1>
          <div className="h-8 w-8 rounded-full bg-zinc-800 border border-zinc-700" />
        </header>

        <div className="p-8 max-w-5xl w-full mx-auto space-y-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-zinc-100">Welcome to Your Next.js SaaS Shell</h2>
            <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
              This interactive dashboard workspace serves as your base engine presentation frame. 
              Future repositories will inject data panels directly inside this visual layout framework.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-zinc-800 bg-zinc-900/50 p-4 rounded-xl">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Engine Status</span>
              <div className="text-2xl font-bold text-teal-400 mt-1">Operational</div>
            </div>
            <div className="border border-zinc-800 bg-zinc-900/50 p-4 rounded-xl">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Connected Services</span>
              <div className="text-2xl font-bold text-purple-400 mt-1">FastAPI Core</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}