export async function GET() {
  return Response.json({
    results: [
      { id: 'AL-01', title: 'Critical infrastructure alert', description: 'SH-5 Coastal Highway', severity: 'CRITICAL', recommendedAction: 'Inspect road segment immediately', createdAt: '2026-09-25T06:50:00Z' },
      { id: 'AL-02', title: 'Heavy rainfall risk', description: 'Flood-prone low-lying corridors', severity: 'HIGH', recommendedAction: 'Prepare shelter access routes', createdAt: '2026-09-25T06:41:00Z' }
    ],
    total: 2,
    source: 'demo'
  });
}

export async function POST(req: Request) {
  const body = await req.json();
  return Response.json({ ok: true, data: { id: `AL-${Date.now()}`, ...body } }, { status: 201 });
}
