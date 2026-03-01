import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'
import { db } from '@/db/client'
import { submissions } from '@/db/schema'
import { desc, eq, sql } from 'drizzle-orm'
const app = new Hono().basePath('/api')
const submissionSchema = z.object({ role: z.enum(['importer', 'carrier']), email: z.string().email(), phone: z.string().min(7), city: z.string().min(2), port: z.string().optional(), deliveryCity: z.string().optional(), haulDates: z.array(z.string()).optional(), fleetBaseCity: z.string().optional(), originStates: z.array(z.string()).optional(), destinationStates: z.array(z.string()).optional(), paymentTerms: z.enum(['7_days', '15_days', '30_days', 'immediate']).optional(), pricingMode: z.enum(['auto', 'manual']).optional() })
app.post('/submissions', zValidator('json', submissionSchema), async (c) => { const body = c.req.valid('json'); const [row] = await db.insert(submissions).values(body).returning({ id: submissions.id }); return c.json({ ok: true, id: row.id }) })
app.get('/submissions/report', async (c) => { const token = c.req.query('token'); if (!process.env.REPORT_TOKEN || token !== process.env.REPORT_TOKEN) return c.json({ ok: false, error: 'unauthorized' }, 401); const totalQ = await db.select({ count: sql<number>`count(*)::int` }).from(submissions); const importersQ = await db.select({ count: sql<number>`count(*)::int` }).from(submissions).where(eq(submissions.role, 'importer')); const carriersQ = await db.select({ count: sql<number>`count(*)::int` }).from(submissions).where(eq(submissions.role, 'carrier')); const byCityQ = await db.select({ city: submissions.city, count: sql<number>`count(*)::int` }).from(submissions).groupBy(submissions.city).orderBy(desc(sql`count(*)`)).limit(10); return c.json({ total: totalQ[0]?.count ?? 0, importers: importersQ[0]?.count ?? 0, carriers: carriersQ[0]?.count ?? 0, byCity: byCityQ }) })
export const GET = handle(app)
export const POST = handle(app)
