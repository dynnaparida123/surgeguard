export default function ProfilePage() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
      <h2 className="text-2xl font-semibold text-slate-100">Profile</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-[180px_1fr]">
        <div className="flex h-40 w-40 items-center justify-center rounded-full bg-cyan-500/10 text-3xl font-semibold text-cyan-300">DA</div>
        <div className="space-y-3 text-slate-200">
          <div className="text-2xl font-semibold">Deepak A.</div>
          <div className="text-sm text-slate-400">Verified contributor • DEEPWAY</div>
          <div className="grid gap-2 text-sm md:grid-cols-2">
            <div>Points: <span className="text-cyan-300">1,240</span></div>
            <div>Trust score: <span className="text-emerald-400">91</span></div>
            <div>Verified reports: <span className="text-slate-100">47</span></div>
            <div>Accuracy: <span className="text-slate-100">94%</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
