export default function AlertsPage() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
      <h2 className="text-2xl font-semibold text-slate-100">Alerts</h2>
      <div className="mt-6 space-y-4">
        {['Critical infrastructure alert', 'Heavy rainfall risk', 'Road blockage advisory'].map((alert) => (
          <div key={alert} className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
            <div className="text-[10px] uppercase tracking-[0.22em] text-orange-300">Alert</div>
            <div className="mt-2 text-lg font-medium text-slate-100">{alert}</div>
            <div className="mt-2 text-sm text-slate-400">Recommended action: inspect road segment immediately.</div>
          </div>
        ))}
      </div>
    </div>
  );
}
