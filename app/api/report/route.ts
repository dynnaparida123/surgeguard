import { NextResponse } from 'next/server';
import { z } from 'zod';

const bodySchema = z.object({
  userId: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  description: z.string().optional(),
  hazardType: z.string().optional(),
  imageUrl: z.string().url().optional()
});

export async function POST(req: Request) {
  const json = await req.json();
  const parsed = bodySchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid report payload' }, { status: 400 });
  }

  const data = {
    ...parsed.data,
    id: `SG-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
    status: 'PENDING_AI',
    createdAt: new Date().toISOString()
  };

  return NextResponse.json({ ok: true, data }, { status: 201 });
}
