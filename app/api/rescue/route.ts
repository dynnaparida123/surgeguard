import { demoReports } from '@/lib/demo-data';

export async function GET() {
  return Response.json({
    results: [
      { id: 'RT-01', name: 'Team Orion', team: 'Rescue', status: 'EN ROUTE', latitude: 19.8098, longitude: 85.8232 },
      { id: 'RT-02', name: 'Rescue Base 4', team: 'Logistics', status: 'AVAILABLE', latitude: 20.2897, longitude: 85.8536 },
      { id: 'RT-03', name: 'Medical Unit 7', team: 'Medical', status: 'BUSY', latitude: 20.4682, longitude: 85.8759 }
    ],
    total: 3,
    source: 'demo'
  });
}
