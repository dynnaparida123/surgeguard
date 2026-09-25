export async function GET() {
  return Response.json({
    results: [
      { rank: 1, user: 'DEEPWAY', verifiedReports: 47, points: 1240, accuracy: 94, resolvedReports: 31 },
      { rank: 2, user: 'MAYA', verifiedReports: 39, points: 1120, accuracy: 92, resolvedReports: 28 },
      { rank: 3, user: 'COASTLY', verifiedReports: 31, points: 980, accuracy: 89, resolvedReports: 23 }
    ],
    source: 'demo'
  });
}
