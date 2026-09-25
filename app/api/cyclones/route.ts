import { demoReports } from '@/lib/demo-data';

export async function GET() {
  return Response.json({
    results: [
      { id: 'CYC-01', name: 'Cyclone Aman', category: 2, windSpeed: 113, pressure: 990, positionLat: 19.9, positionLng: 85.8, direction: 'NE', status: 'ACTIVE' },
      { id: 'CYC-02', name: 'Storm Surge Risk', category: 1, windSpeed: 72, pressure: 1000, positionLat: 20.2, positionLng: 85.9, direction: 'E', status: 'MONITOR' }
    ],
    total: 2,
    source: 'demo'
  });
}
