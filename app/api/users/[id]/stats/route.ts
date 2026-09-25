export async function GET() {
  return Response.json({
    userId: 'demo-user',
    points: 1240,
    verifiedReports: 47,
    reportsAccepted: 41,
    reportsRejected: 3,
    reportsResolved: 8,
    accuracyRate: 94,
    trustScore: 91,
    currentRank: 1
  });
}
