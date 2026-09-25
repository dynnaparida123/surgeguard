import { z } from 'zod';

export const frontendReportSchema = z.object({
  imageUrl: z.string().url().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  locationAccuracy: z.number().optional(),
  description: z.string().optional(),
  hazardType: z.string().optional(),
  status: z.enum(['PENDING_AI', 'VERIFIED', 'REJECTED', 'DUPLICATE', 'NEEDS_REVIEW', 'RESOLVED']).default('PENDING_AI')
});

export type FrontendReport = z.infer<typeof frontendReportSchema>;
