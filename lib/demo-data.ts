export const demoWeather = {
  sourceTimestamp: '2026-09-25T06:54:00Z',
  ingestedAt: '2026-09-25T06:55:14Z',
  temperature: 31.4,
  rainfall: 42,
  windSpeed: 113,
  windDirection: 220,
  pressure: 990,
  humidity: 82,
  cloudCoverage: 76,
  stormStatus: 'Warning',
  cycloneStatus: 'Active'
};

export const demoReports = [
  { id: 'SG-00421', location: 'Puri Coast Road', latitude: 19.8135, longitude: 85.8312, riskScore: 84, hazardType: 'pothole', source: 'Citizen', status: 'Verified', aiConfidence: 97 },
  { id: 'SG-00434', location: 'Bhubaneswar Ring Road', latitude: 20.2961, longitude: 85.8245, riskScore: 77, hazardType: 'road damage', source: 'Citizen', status: 'Verified', aiConfidence: 94 },
  { id: 'SG-00442', location: 'Cuttack Junction', latitude: 20.4625, longitude: 85.8830, riskScore: 91, hazardType: 'flood risk', source: 'AI', status: 'Reviewed', aiConfidence: 89 },
  { id: 'SG-00453', location: 'NH-16', latitude: 20.1750, longitude: 85.8520, riskScore: 66, hazardType: 'road crack', source: 'Infrastructure', status: 'Active', aiConfidence: 86 }
];

export const demoRescueTeams = [
  { id: 'RT-01', name: 'Team Orion', latitude: 19.8098, longitude: 85.8232, status: 'EN ROUTE' },
  { id: 'RT-02', name: 'Rescue Base 4', latitude: 20.2897, longitude: 85.8536, status: 'AVAILABLE' },
  { id: 'RT-03', name: 'Medical Unit 7', latitude: 20.4682, longitude: 85.8759, status: 'BUSY' }
];

export const demoAlerts = [
  { id: 'AL-01', title: 'High-risk pothole near SH-5', description: 'Large verified pothole on coastal corridor', severity: 'HIGH', time: '4 min ago' },
  { id: 'AL-02', title: 'Heavy rainfall', description: 'Persistent rain increasing flood risk on low-lying roads', severity: 'MEDIUM', time: '8 min ago' },
  { id: 'AL-03', title: 'Infrastructure alert', description: 'Medical shelter accessibility under stress after rainfall', severity: 'CRITICAL', time: '12 min ago' }
];

export const leaderboardData = [
  { rank: 1, user: 'DEEPWAY', verifiedReports: 47, points: 1240, accuracy: 94, resolvedReports: 31 },
  { rank: 2, user: 'MAYA', verifiedReports: 39, points: 1120, accuracy: 92, resolvedReports: 28 },
  { rank: 3, user: 'COASTLY', verifiedReports: 31, points: 980, accuracy: 89, resolvedReports: 24 }
];
