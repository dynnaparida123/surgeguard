import { z } from 'zod';

export const geminiResponseSchema = z.object({
  isRelevantRoadHazard: z.boolean(),
  hazardType: z.string(),
  authenticity: z.object({
    status: z.enum(['real', 'likely_real', 'suspicious', 'likely_ai_generated']),
    confidence: z.number().min(0).max(1)
  }),
  severity: z.object({
    level: z.enum(['low', 'medium', 'high', 'critical']),
    confidence: z.number().min(0).max(1)
  }),
  visualEvidence: z.array(z.string()),
  estimatedRisk: z.number().min(0).max(100),
  reasoningFactors: z.array(z.string()),
  needsHumanReview: z.boolean()
});

export type GeminiAnalysis = z.infer<typeof geminiResponseSchema>;

export function validateAnalysis(input: unknown): GeminiAnalysis {
  return geminiResponseSchema.parse(input);
}
