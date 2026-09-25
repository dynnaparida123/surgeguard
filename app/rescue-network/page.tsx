export default function RescueNetworkPage() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
      <h2 className="text-2xl font-semibold text-slate-100">Rescue Network</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {['Team Orion', 'Rescue Base 4', 'Medical Unit 7'].map((team) => (
          <div key={team} className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
            <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Status</div>
            <div className="mt-2 text-lg font-medium text-cyan-300">{team}</div>
            <div className="mt-2 text-sm text-slate-400">Available • Last update: 4 minutes ago</div>
          </div>
        ))}
      </div>
    </div>
  );
}
