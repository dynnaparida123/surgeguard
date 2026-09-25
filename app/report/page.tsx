export default function ReportPage() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
      <h2 className="text-2xl font-semibold text-slate-100">Report Road Hazard</h2>
      <div className="mt-6 max-w-2xl space-y-4">
        <div className="rounded-xl border border-dashed border-slate-700 p-10 text-center text-slate-400">Upload / capture photo</div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200">
          Allow location access to automatically attach your report location.
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200">
          AI Verification: Likely authentic • Hazard: pothole • Severity: HIGH • Risk: 82/100
        </div>
        <button className="rounded-xl border border-cyan-500/50 bg-cyan-500/10 px-4 py-3 font-medium text-cyan-200">Submit verified report</button>
      </div>
    </div>
  );
}
