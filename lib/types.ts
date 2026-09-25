export type RiskZone = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  riskScore: number;
  type: 'Flood' | 'Cyclone' | 'Infrastructure';
  source: 'AI' | 'Weather' | 'Satellite';
};

export type WeatherObservation = {
  source: string;
  temperature: number;
  rainfall: number;
  windSpeed: number;
  windDirection: number;
  pressure: number;
  humidity: number;
  cloudCoverage: number;
  stormStatus: string;
  cycloneStatus: string;
  sourceTimestamp: string;
  lastUpdated: string;
};

export type RescueTeam = {
  id: string;
  name: string;
  team: string;
  latitude: number;
  longitude: number;
  status: 'AVAILABLE' | 'EN ROUTE' | 'BUSY' | 'OFFLINE';
  availability: string;
  lastUpdated: string;
};

export type CitizenReport = {
  id: string;
  userId?: string;
  imageUrl?: string;
  latitude?: number;
  longitude?: number;
  locationAccuracy?: number;
  description?: string;
  hazardType?: string;
  severity?: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  riskScore?: number;
  authenticityStatus?: string;
  authenticityConfidence?: number;
  aiVerificationStatus?: string;
  aiVerificationReason?: string;
  duplicateStatus?: string;
  createdAt?: string;
  verificationSource?: string;
  status?: 'PENDING_AI' | 'VERIFIED' | 'REJECTED' | 'DUPLICATE' | 'NEEDS_REVIEW' | 'RESOLVED';
  location?: string;
  source?: string;
  aiConfidence?: number;
};
