import Link from 'next/link';
import { BarChart3, BellRing, CloudSun, Gauge, MapPinned, ShieldCheck, Users, Building2, LayoutDashboard } from 'lucide-react';

const nav = [
  { label: 'Command Center', href: '/', icon: LayoutDashboard },
  { label: 'Risk Intelligence', href: '/risk-intelligence', icon: Gauge },
  { label: 'Infrastructure', href: '/infrastructure', icon: Building2 },
  { label: 'Citizen Reports', href: '/citizen-reports', icon: MapPinned },
  { label: 'Rescue Network', href: '/rescue-network', icon: Users },
  { label: 'Weather & Satellite', href: '/weather', icon: CloudSun },
  { label: 'Alerts', href: '/alerts', icon: BellRing },
  { label: 'Leaderboard', href: '/leaderboard', icon: BarChart3 }
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#06131a] text-slate-100">
      <aside className="w-[270px] border-r border-slate-800 bg-[#081a22]/95 p-5">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/40 bg-cyan-500/10 text-sm font-bold text-cyan-300">SG</div>
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-slate-400">System</div>
            <div className="text-xl font-semibold text-slate-50">SURGEGUARD</div>
          </div>
        </div>

        <nav className="space-y-2">
          {nav.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm text-slate-300 transition hover:border-cyan-500/30 hover:bg-slate-900/70"
            >
              <Icon className="h-4 w-4 text-cyan-300" />
              {label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-950/70 p-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-sm font-semibold text-cyan-100">DA</div>
            <div>
              <div className="font-medium text-slate-100">Deepak A.</div>
              <div className="text-xs text-slate-400">Municipal analyst</div>
            </div>
          </div>
          <div className="mt-4 space-y-2 text-xs text-slate-300">
            <div className="flex items-center justify-between"><span>Points</span><span className="text-cyan-300">1,240</span></div>
            <div className="flex items-center justify-between"><span>Trust</span><span className="text-emerald-400">91</span></div>
            <div className="flex items-center justify-between"><span>Status</span><span className="text-amber-300">Verified</span></div>
          </div>
        </div>

        <div className="mt-6 space-y-2 text-sm text-slate-300">
          <Link href="/profile" className="block rounded-xl px-3 py-2 hover:bg-slate-900/70">Profile</Link>
          <Link href="/admin" className="block rounded-xl px-3 py-2 hover:bg-slate-900/70">Admin</Link>
          <Link href="/login" className="block rounded-xl px-3 py-2 hover:bg-slate-900/70">Logout</Link>
        </div>
      </aside>

      <main className="flex-1 p-6">
        <header className="mb-6 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-slate-300">
            <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /> System status: operational</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-[0.18em] text-slate-400">
            <span>Satellite: Connected</span>
            <span>Weather: Connected</span>
            <span>GEE: Connected</span>
            <span>AI: online</span>
            <span>Updated 14s ago</span>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
