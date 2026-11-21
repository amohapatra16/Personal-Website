export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <div className="max-w-2xl space-y-6">
        <span className="inline-block px-3 py-1 text-sm font-medium tracking-wide text-blue-600 bg-blue-50 border border-blue-200 rounded-full">
          Personal Website
        </span>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-slate-900">
          Welcome to My Website
        </h1>
        <p className="text-lg text-slate-600">
          Built with Next.js (App Router), TypeScript, and Tailwind CSS.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <div className="p-4 rounded-lg border border-slate-200 bg-white shadow-sm text-left w-64">
            <h3 className="font-semibold text-slate-900">Next.js App Router</h3>
            <p className="text-sm text-slate-500 mt-1">Ready for custom pages, components, and layouts.</p>
          </div>
          <div className="p-4 rounded-lg border border-slate-200 bg-white shadow-sm text-left w-64">
            <h3 className="font-semibold text-slate-900">Tailwind CSS</h3>
            <p className="text-sm text-slate-500 mt-1">Utility-first styling ready for your personal design.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
