export async function GET() {
  return Response.json({
    results: [
      { name: 'Sentinel-1', source: 'Google Earth Engine', lastUpdated: '2026-09-25T06:54:00Z', ageMinutes: 11, status: 'connected' },
      { name: 'Landsat', source: 'Satellite datasets', lastUpdated: '2026-09-25T06:44:00Z', ageMinutes: 21, status: 'connected' },
      { name: 'NOAA weather', source: 'Meteorological provider', lastUpdated: '2026-09-25T06:53:00Z', ageMinutes: 12, status: 'connected' }
    ]
  });
}
