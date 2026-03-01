import { db } from '../db/client'
import { submissions } from '../db/schema'
import { eq, sql, desc } from 'drizzle-orm'
async function run() {
  const totalQ = await db.select({ count: sql<number>`count(*)::int` }).from(submissions)
  const importersQ = await db.select({ count: sql<number>`count(*)::int` }).from(submissions).where(eq(submissions.role, 'importer'))
  const carriersQ = await db.select({ count: sql<number>`count(*)::int` }).from(submissions).where(eq(submissions.role, 'carrier'))
  const byCityQ = await db.select({ city: submissions.city, count: sql<number>`count(*)::int` }).from(submissions).groupBy(submissions.city).orderBy(desc(sql`count(*)`)).limit(20)
  console.log('Arrástralo submissions report')
  console.log('Total:', totalQ[0]?.count ?? 0)
  console.log('Importers:', importersQ[0]?.count ?? 0)
  console.log('Carriers:', carriersQ[0]?.count ?? 0)
  byCityQ.forEach((r) => console.log(`- ${r.city}: ${r.count}`))
}
run().catch((e) => { console.error(e); process.exit(1) })
