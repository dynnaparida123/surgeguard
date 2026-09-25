import prisma from '@/lib/prisma';
import { demoWeather, demoReports, demoRescueTeams } from '@/lib/demo-data';

export async function GET() {
  return Response.json({
    message: 'Demo weather intelligence service',
    data: demoWeather,
    source: 'demo',
    sourceTimestamp: demoWeather.sourceTimestamp,
    ingestedAt: demoWeather.ingestedAt,
    lastUpdated: demoWeather.ingestedAt
  });
}
