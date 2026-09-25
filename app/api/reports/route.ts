import { demoReports, demoRescueTeams } from '@/lib/demo-data';

export async function GET() {
  return Response.json({
    results: demoReports,
    total: demoReports.length,
    source: 'demo'
  });
}

export async function POST(req: Request) {
  const body = await req.json();
  const result = {
    id: `SG-${Math.floor(Math.random() * 9000 + 1000)}`,
    ...body,
    status: 'PENDING_AI',
    source: 'Citizen',
    createdAt: new Date().toISOString()
  };

  return Response.json({ ok: true, data: result }, { status: 201 });
}
