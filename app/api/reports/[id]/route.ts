import { demoReports } from '@/lib/demo-data';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const report = demoReports.find((item) => item.id === params.id);

  if (!report) {
    return Response.json({ error: 'Report not found' }, { status: 404 });
  }

  return Response.json({ data: report });
}
