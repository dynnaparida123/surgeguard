import Link from 'next/link';
import { ArrowRight, BellRing, Activity, CloudRain, ShieldAlert, Gauge, Map, Users } from 'lucide-react';
import { DashboardShell } from '@/components/dashboard-shell';
import { demoWeather, demoReports, demoRescueTeams, demoAlerts } from '@/lib/demo-data';

export default function HomePage() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-400">SurgeGuard</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-100">Command Center</h1>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-cyan-200">
            <Activity className="h-4 w-4" />
            System operational
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { label: 'Active hazards', value: '18', detail: '+4 since last refresh', icon: ShieldAlert },
            { label: 'Critical zones', value: '06', detail: '2 high-impact corridors', icon: Gauge },
            { label: 'Verified reports', value: '241', detail: '94% AI validation rate', icon: Map },
            { label: 'Rescue teams', value: '23', detail: '11 available now', icon: Users }
          ].map(({ label, value, detail, icon: Icon }) => (
            <div key={label} className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 shadow-glow">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.22em] text-slate-400">{label}</span>
                <Icon className="h-4 w-4 text-cyan-300" />
              </div>
              <div className="mt-5 text-3xl font-semibold text-slate-100">{value}</div>
              <div className="mt-2 text-xs text-slate-400">{detail}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.7fr)_minmax(300px,0.7fr)]">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3 shadow-glow">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 px-2">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-slate-300">
                <div className="h-2 w-2 rounded-full bg-emerald-400" />
                Live data feed
              </div>
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-slate-400">
                <span>UI refresh: 10s</span>
                <span>Source timestamp: {demoWeather.sourceTimestamp}</span>
              </div>
            </div>
            <div className="relative h-[520px] overflow-hidden rounded-2xl border border-slate-800 bg-[radial-gradient(circle_at_center,_rgba(40,120,150,0.22),_rgba(3,7,18,0.95)_55%)]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(103,232,249,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,0.06)_1px,transparent_1px)] bg-[size:30px_30px]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(45,212,191,0.24),transparent_25%),radial-gradient(circle_at_60%_60%,rgba(249,115,22,0.18),transparent_22%)]" />

              {demoReports.map((report) => (
                <div
                  key={report.id}
                  className="absolute"
                  style={{
                    left: `${((report.longitude - 84.5) / 2.2) * 100}%`,
                    top: `${((20.9 - report.latitude) / 3.5) * 100}%`
                  }}
                >
                  <div className="group relative flex items-center justify-center">
                    <span className="h-3.5 w-3.5 rounded-full border border-white/50 bg-red-500 shadow-[0_0_25px_rgba(239,68,68,0.8)]" />
                    <span className="absolute -bottom-5 hidden rounded bg-slate-900 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-slate-200 group-hover:block">
                      {report.hazardType}
                    </span>
                  </div>
                </div>
              ))}

              {demoRescueTeams.map((team) => (
                <div
                  key={team.id}
                  className="absolute"
                  style={{
                    left: `${((team.longitude - 84.5) / 2.2) * 100}%`,
                    top: `${((20.9 - team.latitude) / 3.5) * 100}%`
                  }}
                >
                  <div className="rounded-full border border-cyan-300/60 bg-cyan-500/20 px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-cyan-100">
                    {team.name}
                  </div>
                </div>
              ))}

              <div className="absolute left-4 top-4 max-w-xs rounded-xl border border-slate-700 bg-slate-950/80 p-3 backdrop-blur-sm">
                <div className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Current threat</div>
                <div className="mt-3 space-y-3 text-sm text-slate-200">
                  <div className="flex items-center justify-between">
                    <span>Cyclone</span>
                    <span className="text-amber-400">Aman</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Rainfall</span>
                    <span className="text-cyan-300">42 mm/hr</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Flood</span>
                    <span className="text-orange-400">High</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Wind</span>
                    <span className="text-red-400">113 km/h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-slate-400">
                <CloudRain className="h-4 w-4 text-cyan-300" />
                Weather intelligence
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Temperature</span>
                  <span className="text-xl font-semibold text-slate-100">31.4°C</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Rainfall</span>
                  <span className="text-xl font-semibold text-cyan-300">42 mm/hr</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Wind</span>
                  <span className="text-xl font-semibold text-amber-300">113 km/h</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Pressure</span>
                  <span className="text-xl font-semibold text-slate-100">990 hPa</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-slate-400">
                <BellRing className="h-4 w-4 text-orange-300" />
                Live caution feed
              </div>
              <div className="mt-4 space-y-3">
                {demoAlerts.map((alert) => (
                  <div key={alert.id} className="rounded-xl border border-slate-800 bg-slate-900/70 p-3">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs uppercase tracking-[0.18em] text-orange-300">{alert.severity}</span>
                      <span className="text-[10px] text-slate-400">{alert.time}</span>
                    </div>
                    <div className="mt-2 text-sm font-medium text-slate-100">{alert.title}</div>
                    <div className="mt-1 text-xs text-slate-400">{alert.description}</div>
                    <button className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-cyan-300">
                      View on map <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Operational overview</div>
            <Link href="/dashboard" className="text-xs text-cyan-300">Open full dashboard</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {demoReports.slice(0, 3).map((report) => (
              <div key={report.id} className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-orange-300">{report.hazardType}</div>
                <div className="mt-3 text-lg font-medium text-slate-100">{report.location}</div>
                <div className="mt-2 flex justify-between text-sm text-slate-400">
                  <span>Risk</span>
                  <span className="text-red-400">{report.riskScore}/100</span>
                </div>
                <div className="mt-1 flex justify-between text-sm text-slate-400">
                  <span>AI verified</span>
                  <span className="text-emerald-400">97%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
