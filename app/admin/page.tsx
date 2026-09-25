export default function AdminPage() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
      <h2 className="text-2xl font-semibold text-slate-100">Municipal Admin</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {['Pending reviews', 'Critical incidents', 'Unauthorized reports'].map((item) => (
          <div key={item} className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
            <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">{item}</div>
            <div className="mt-3 text-2xl font-semibold text-orange-300">12</div>
          </div>
        ))}
      </div>
    </div>
  );
}
