export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#06131a] p-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-950/80 p-6 shadow-glow">
        <div className="mb-6 text-center text-[10px] uppercase tracking-[0.24em] text-cyan-300">SurgeGuard</div>
        <h1 className="text-3xl font-semibold text-slate-100">Login</h1>
        <div className="mt-6 space-y-3">
          <input className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none" placeholder="Email" />
          <input className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none" type="password" placeholder="Password" />
          <button className="w-full rounded-xl bg-cyan-500 px-4 py-3 font-medium text-slate-950">Sign in</button>
        </div>
      </div>
    </div>
  );
}
