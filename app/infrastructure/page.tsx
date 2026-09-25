export default function InfrastructurePage() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
      <h2 className="text-2xl font-semibold text-slate-100">Infrastructure</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {['Power Grid', 'Hospitals', 'Medical Shelters', 'Evacuation Centers'].map((name) => (
          <div key={name} className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
            <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">{name}</div>
            <div className="mt-2 text-lg font-medium text-slate-100">Current risk: 81/100</div>
            <div className="mt-2 text-sm text-slate-400">Nearby hazards: 2 • Flood risk: moderate • Accessibility: 72%</div>
          </div>
        ))}
      </div>
    </div>
  );
}
