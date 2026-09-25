export default function WeatherPage() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
      <h2 className="text-2xl font-semibold text-slate-100">Weather & Satellite</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
          <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Current conditions</div>
          <div className="mt-4 space-y-2 text-sm text-slate-200">
            <div className="flex justify-between"><span>Temperature</span><span>31.4°C</span></div>
            <div className="flex justify-between"><span>Rainfall</span><span>42 mm/hr</span></div>
            <div className="flex justify-between"><span>Wind</span><span>113 km/h</span></div>
          </div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
          <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Cyclone overview</div>
          <div className="mt-4 text-xl font-semibold text-orange-300">Cyclone Aman</div>
          <div className="mt-2 text-sm text-slate-300">Category 2 · Wind 113 km/h · Direction NE · Surge risk high</div>
        </div>
      </div>
    </div>
  );
}
