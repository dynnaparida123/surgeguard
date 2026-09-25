export default function CitizenReportsPage() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
      <h2 className="text-2xl font-semibold text-slate-100">Citizen Reports</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {['Potholes', 'Flooded roads', 'Drain obstruction'].map((item) => (
          <div key={item} className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
            <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">{item}</div>
            <div className="mt-3 text-xl font-semibold text-cyan-300">143</div>
            <div className="mt-2 text-sm text-slate-400">Verified reports in last 30 days</div>
          </div>
        ))}
      </div>
    </div>
  );
}
