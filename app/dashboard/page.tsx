import Link from 'next/link';
import { LayoutDashboard, ShieldAlert, CloudRain, MapPinned, Users } from 'lucide-react';

export default function DashboardPage() {
  const metrics = [
    { label: 'Active hazards', value: '18', tone: 'text-red-400' },
    { label: 'Critical zones', value: '06', tone: 'text-orange-300' },
    { label: 'Verified reports', value: '241', tone: 'text-emerald-400' },
    { label: 'Rescue teams', value: '23', tone: 'text-cyan-300' }
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        {metrics.map((item) => (
          <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
            <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">{item.label}</div>
            <div className={`mt-4 text-3xl font-semibold ${item.tone}`}>{item.value}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.5fr_0.8fr]">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Map layers</div>
            <div className="flex gap-2 text-[10px] uppercase tracking-[0.18em] text-slate-500">
              <span className="rounded-full border px-2 py-1">Weather</span>
              <span className="rounded-full border px-2 py-1">Cyclone</span>
              <span className="rounded-full border px-2 py-1">Infrastructure</span>
            </div>
          </div>
          <div className="h-[420px] rounded-2xl border border-slate-800 bg-[radial-gradient(circle_at_center,_rgba(103,232,249,0.08),_rgba(2,6,23,0.9)_60%)] p-6">
            <div className="flex h-full items-center justify-center text-center text-slate-400">
              <div>
                <div className="text-4xl text-cyan-300">Map integration ready</div>
                <div className="mt-3 text-sm">Connect a Google Maps API key to enable live geospatial visualization.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-slate-400"><CloudRain className="h-4 w-4 text-cyan-300" /> Weather</div>
            <div className="mt-4 space-y-2 text-sm text-slate-200">
              <div className="flex justify-between"><span>Rainfall</span><span className="text-cyan-300">42 mm/hr</span></div>
              <div className="flex justify-between"><span>Wind</span><span className="text-amber-300">113 km/h</span></div>
              <div className="flex justify-between"><span>Flood risk</span><span className="text-orange-400">HIGH</span></div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-slate-400"><ShieldAlert className="h-4 w-4 text-red-400" /> Alerts</div>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li>Critical infrastructure alert for SH-5 Coastal Highway</li>
              <li>Medical shelter accessibility risk on east corridor</li>
              <li>Flood-watch active for low-lying zones</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
