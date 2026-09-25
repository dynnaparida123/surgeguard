import { demoReports } from '@/lib/demo-data';

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const report = demoReports.find((item) => item.id === params.id);
  if (!report) return Response.json({ error: 'Report not found' }, { status: 404 });

  return Response.json({
    ok: true,
    data: {
      id: params.id,
      score: report.riskScore,
      authenticity: 'likely_real',
      hazardType: report.hazardType,
      severity: 'HIGH',
      confidence: 0.96,
      reasons: ['road deformation', 'heavy rainfall exposure', 'active traffic corridor']
    }
  });
}
