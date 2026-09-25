import { demoReports } from '@/lib/demo-data';

export async function GET() {
  return Response.json({
    results: [
      { id: 'HZ-01', name: 'High-risk coastal road', type: 'Flood Zone', latitude: 19.82, longitude: 85.83, riskScore: 82, source: 'AI' },
      { id: 'HZ-02', name: 'Cuttack transport corridor', type: 'Infrastructure', latitude: 20.46, longitude: 85.88, riskScore: 76, source: 'Weather' }
    ],
    total: 2,
    source: 'demo'
  });
}
