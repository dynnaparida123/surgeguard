import { demoReports } from '@/lib/demo-data';

export async function GET() {
  return Response.json({
    results: [
      { id: 'INF-01', name: 'Puri Medical Shelter', type: 'Medical Shelter', latitude: 19.81, longitude: 85.82, riskScore: 74, floodRisk: 72, accessibility: 68, lastVerified: '2026-09-25T06:20:00Z' },
      { id: 'INF-02', name: 'SH-5 Highway', type: 'Road', latitude: 20.29, longitude: 85.86, riskScore: 82, floodRisk: 78, accessibility: 61, lastVerified: '2026-09-25T06:15:00Z' }
    ],
    total: 2,
    source: 'demo'
  });
}
