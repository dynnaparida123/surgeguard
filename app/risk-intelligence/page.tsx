export default function RiskIntelligencePage() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
      <h2 className="text-2xl font-semibold text-slate-100">Risk Intelligence</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {['Flood risk', 'Cyclone track', 'Infrastructure exposure'].map((item) => (
          <div key={item} className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
            <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Model estimate</div>
            <div className="mt-4 text-2xl font-semibold text-cyan-300">{item === 'Flood risk' ? '82/100' : item === 'Cyclone track' ? '74/100' : '88/100'}</div>
            <div className="mt-2 text-sm text-slate-300">Confidence: {item === 'Flood risk' ? '91%' : item === 'Cyclone track' ? '87%' : '90%'}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
