import { leaderboardData } from '@/lib/demo-data';

export default function LeaderboardPage() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
      <h2 className="text-2xl font-semibold text-slate-100">Leaderboard</h2>
      <div className="mt-6 overflow-hidden rounded-xl border border-slate-800">
        <table className="min-w-full text-left text-sm text-slate-200">
          <thead className="bg-slate-900 text-[10px] uppercase tracking-[0.18em] text-slate-400">
            <tr>
              <th className="px-4 py-3">Rank</th>
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Verified Reports</th>
              <th className="px-4 py-3">Points</th>
              <th className="px-4 py-3">Accuracy</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((row) => (
              <tr key={row.user} className="border-t border-slate-800">
                <td className="px-4 py-3">#{row.rank}</td>
                <td className="px-4 py-3 text-cyan-300">{row.user}</td>
                <td className="px-4 py-3">{row.verifiedReports}</td>
                <td className="px-4 py-3">{row.points}</td>
                <td className="px-4 py-3">{row.accuracy}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
