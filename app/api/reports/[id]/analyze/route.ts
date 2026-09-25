import { demoReports } from '@/lib/demo-data';

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const report = demoReports.find((item) => item.id === params.id);
  if (!report) return Response.json({ error: 'Report not found' }, { status: 404 });

  return Response.json({
    ok: true,
    data: {
      id: params.id,
      status: 'verified',
      riskScore: report.riskScore,
      authenticity: 'likely_real',
      model: 'gemini-1.5-flash',
      timestamp: new Date().toISOString()
    }
  });
}
