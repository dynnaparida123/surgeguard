const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const adminRole = await prisma.role.upsert({
    where: { name: 'ADMIN' },
    update: {},
    create: { name: 'ADMIN' }
  });

  await prisma.role.upsert({ where: { name: 'MUNICIPAL' }, update: {}, create: { name: 'MUNICIPAL' } });
  await prisma.role.upsert({ where: { name: 'RESCUE' }, update: {}, create: { name: 'RESCUE' } });
  await prisma.role.upsert({ where: { name: 'CITIZEN' }, update: {}, create: { name: 'CITIZEN' } });

  await prisma.user.upsert({
    where: { email: 'admin@surgeguard.ai' },
    update: {},
    create: {
      email: 'admin@surgeguard.ai',
      name: 'Operations Admin',
      username: 'opsadmin',
      roleId: adminRole.id,
      points: 1200,
      trustScore: 95,
      verifiedReports: 42,
      acceptedReports: 31,
      rejectedReports: 2
    }
  });

  const demoReports = [
    { name: 'Puri Coastal Road', latitude: 19.8135, longitude: 85.8312, riskScore: 84, hazardType: 'pothole', status: 'VERIFIED', severity: 'HIGH' },
    { name: 'Bhubaneswar Ring Road', latitude: 20.2961, longitude: 85.8245, riskScore: 72, hazardType: 'road_crack', status: 'VERIFIED', severity: 'MEDIUM' },
    { name: 'Cuttack Junction', latitude: 20.4625, longitude: 85.8830, riskScore: 91, hazardType: 'pothole', status: 'PENDING_AI', severity: 'CRITICAL' }
  ];

  for (const item of demoReports) {
    await prisma.citizenReport.upsert({
      where: { id: `demo-${item.name.replace(/\s+/g, '-').toLowerCase()}` },
      update: {},
      create: {
        id: `demo-${item.name.replace(/\s+/g, '-').toLowerCase()}`,
        latitude: item.latitude,
        longitude: item.longitude,
        hazardType: item.hazardType,
        riskScore: item.riskScore,
        status: item.status,
        severity: item.severity,
        aiVerificationStatus: 'likely_real',
        authenticityStatus: 'LIKELY_REAL',
        authenticityConfidence: 0.91,
        duplicateStatus: 'none'
      }
    });
  }

  console.log('Demo seed complete');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
