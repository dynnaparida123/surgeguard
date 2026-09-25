import { differenceInMinutes } from 'date-fns';

export type DuplicateCheckResult = {
  duplicate: boolean;
  status: 'DUPLICATE' | 'POSSIBLE_DUPLICATE' | 'UNIQUE';
  score: number;
};

export function checkDuplicateReport(opts: {
  lat: number;
  lng: number;
  hash?: string;
  existing: Array<{ latitude: number; longitude: number; createdAt: Date; imageHash?: string }>;
  radiusMeters?: number;
}): DuplicateCheckResult {
  const radius = opts.radiusMeters ?? 50;
  let best = 0;

  for (const existing of opts.existing) {
    const distance = getDistanceKm(opts.lat, opts.lng, existing.latitude, existing.longitude) * 1000;
    if (distance > radius) continue;

    let score = 1 - distance / radius;
    if (opts.hash && existing.imageHash && existing.imageHash === opts.hash) score += 0.7;
    if (differenceInMinutes(new Date(), existing.createdAt) < 120) score += 0.1;
    if (score > best) best = score;
  }

  if (best >= 0.8) return { duplicate: true, status: 'DUPLICATE', score: best };
  if (best >= 0.5) return { duplicate: true, status: 'POSSIBLE_DUPLICATE', score: best };
  return { duplicate: false, status: 'UNIQUE', score: best };
}

function getDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const toRad = (v: number) => (v * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
