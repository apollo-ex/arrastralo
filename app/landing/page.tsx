import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Bell, Clock, FileText, Gauge, Handshake, MapPin, Route, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const kpis = [
  { icon: Clock, label: 'Tiempo de cotización', value: 'Minutos' },
  { icon: Handshake, label: 'Canal', value: 'Directo' },
  { icon: Route, label: 'Operación', value: 'Centralizada' },
  { icon: Shield, label: 'Modelo', value: 'Sin intermediarios' },
]

const steps = [
  { n: '1', title: 'Solicita tu arrastre', desc: 'Selecciona puerto, fechas (múltiples días) y ciudad de entrega.' },
  { n: '2', title: 'Compara transportistas', desc: 'Filtra por precio, línea local, términos de pago, rapidez, reputación y reseñas validadas; o usa recomendación por IA.' },
  { n: '3', title: 'Elige y ejecuta', desc: 'Escoge la opción más conveniente para ti y listo.' },
]

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* ── Nav ─────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-background/82 backdrop-blur-xl border-b border-border">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Image src="/arrastralo-logo-transparent.png" alt="Arrástralo" width={240} height={76} className="w-[150px] sm:w-[190px] h-auto" />
          <Button variant="dark" size="sm" asChild>
            <Link href="/">
              Solicita acceso <ArrowRight className="size-3.5" />
            </Link>
          </Button>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────── */}
      <section className="px-4 sm:px-6 pt-12 sm:pt-16 pb-12 bg-[radial-gradient(ellipse_700px_420px_at_0%_0%,rgba(194,65,12,.06),transparent),radial-gradient(ellipse_500px_320px_at_100%_60%,rgba(194,65,12,.04),transparent)]">
        <div className="max-w-[1100px] mx-auto grid gap-8 items-start">
          <div className="animate-fade-up">
            <Badge variant="accent" className="mb-5 text-[11px] tracking-widest uppercase">
              Marketplace de Arrastre Portuario
            </Badge>
            <h1 className="font-display text-[clamp(2rem,5.5vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-foreground mb-4 sm:mb-5">
              Sin intermediarios<br />en arrastre portuario.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-[620px] leading-relaxed">
              Publica una vez. Recibe varias ofertas. Reserva al instante.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-[650px] leading-relaxed">
              Arrástralo prioriza tu carga entre los transportistas que han indicado específicamente que desean esa ruta, tipo de equipo y puerto.
            </p>
            <ul className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed list-disc pl-5 space-y-1 max-w-[650px]">
              <li>Elige entre varias ofertas.</li>
              <li>Consulta el equipo y las certificaciones de cada transportista.</li>
              <li>Los transportistas reciben alertas instantáneas y responden rápidamente.</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Button size="lg" asChild>
                <Link href="/">
                  Solicita acceso <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href="#como-funciona">Ver cómo funciona</a>
              </Button>
            </div>
          </div>

          <div />
        </div>
      </section>

      {/* ── Importer offer mock ─────────────────────── */}
      <section className="px-4 sm:px-6 py-10 sm:py-12">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-5">
            <h2 className="font-display text-[clamp(1.3rem,3vw,2rem)] font-extrabold tracking-tight">
              Vista de ofertas para importador
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-1">
              Así se vería la comparación de transportistas en tiempo real para seleccionar la mejor opción.
            </p>
          </div>

          <Card className="overflow-hidden border-warm-300/60">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 sm:grid-cols-[1.2fr_.8fr] bg-warm-100 px-4 sm:px-5 py-3 border-b border-border text-[11px] sm:text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <span>Transportista / Servicio</span>
                <span className="text-right">Oferta</span>
              </div>

              {[
                {
                  id: 'A1',
                  carrier: 'Logística Regia',
                  route: 'Manzanillo → 66367 Santa Catarina',
                  equipment: 'Chasis 40’ • Caja seca',
                  certs: ['ISO 9001', 'Hazmat'],
                  eta: 'Recolecta hoy 14:00',
                  payment: 'Términos: 30 días',
                  price: '$18,900 MXN',
                  score: '4.9',
                },
                {
                  id: 'B4',
                  carrier: 'Noreste Freight',
                  route: 'Manzanillo → 66367 Santa Catarina',
                  equipment: 'Chasis 20/40 • GPS activo',
                  certs: ['CTPAT', 'OEA'],
                  eta: 'Recolecta mañana 08:00',
                  payment: 'Términos: Pago al retornar vacío',
                  price: '$19,300 MXN',
                  score: '4.8',
                },
                {
                  id: 'C7',
                  carrier: 'Pacific Drayage MX',
                  route: 'Manzanillo → 66367 Santa Catarina',
                  equipment: 'Chasis 40’ • Custodia opcional',
                  certs: ['ISO 28000'],
                  eta: 'Recolecta hoy 18:00',
                  payment: 'Términos: Pago inmediato',
                  price: '$18,500 MXN',
                  score: '4.7',
                },
              ].map((offer) => (
                <div key={offer.id} className="grid grid-cols-1 sm:grid-cols-[1.2fr_.8fr] gap-3 px-4 sm:px-5 py-4 border-b last:border-b-0 border-border hover:bg-warm-100/60 transition-colors">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center justify-center px-2 py-0.5 rounded bg-warm-100 text-primary text-[10px] font-bold">{offer.id}</span>
                      <strong className="font-display text-base tracking-tight">{offer.carrier}</strong>
                      <span className="text-xs text-muted-foreground">★ {offer.score}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{offer.route}</p>
                    <p className="text-xs text-muted-foreground mt-1">{offer.equipment}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {offer.certs.map((c) => (
                        <span key={c} className="text-[10px] font-semibold rounded px-2 py-0.5 bg-[#fff7ed] text-primary border border-warm-300/70">{c}</span>
                      ))}
                    </div>
                  </div>
                  <div className="sm:text-right flex sm:block items-center justify-between gap-3">
                    <div>
                      <div className="text-xs text-muted-foreground">{offer.eta}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{offer.payment}</div>
                      <div className="font-display text-xl font-extrabold tracking-tight mt-1">{offer.price}</div>
                    </div>
                    <Button size="sm" className="shrink-0">Elegir oferta</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── KPIs ────────────────────────────────────── */}
      <section className="px-4 sm:px-6 pb-12">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 animate-fade-up-delay-2">
          {kpis.map(({ icon: Icon, label, value }) => (
            <Card key={label} className="hover:shadow-md hover:border-warm-300">
              <CardContent className="p-4 sm:p-5">
                <Icon size={18} className="text-primary mb-2" />
                <span className="block text-[11px] font-bold text-muted-foreground uppercase tracking-wider">{label}</span>
                <strong className="block font-display text-xl sm:text-2xl font-extrabold tracking-tight mt-1">{value}</strong>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Counteroffer / speed mock ───────────────── */}
      <section className="px-4 sm:px-6 pb-10 sm:pb-12">
        <div className="max-w-[1100px] mx-auto">
          <Card className="overflow-hidden border-warm-300/60">
            <CardContent className="p-6 sm:p-8">
              <h3 className="font-display text-[clamp(1.4rem,3vw,2.2rem)] font-extrabold tracking-tight text-primary leading-tight">
                Reserva tu carga más rápido, 24 horas al día, 7 días a la semana 24/7
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mt-4 max-w-[780px]">
                Una cobertura más rápida significa que usted puede concentrarse en construir relaciones y resolver problemas.
              </p>
              <ul className="mt-4 space-y-2 text-sm sm:text-base text-foreground">
                <li>• Tiempo medio de partida: 38 minutos</li>
                <li>• 83% de amonestaciones sin contacto</li>
              </ul>

              <div className="mt-7 grid gap-4 sm:grid-cols-[1fr_.95fr] items-end">
                <div className="rounded-xl bg-[#1f2433] text-[#e5e7eb] p-4 sm:p-5 shadow-lg">
                  <p className="font-semibold text-sm">Monterrey, NLE → Chattanooga, TN</p>
                  <p className="text-xs text-[#cbd5e1] mt-1">Recogida: 24 de octubre a las 10:00 CST</p>
                  <p className="text-xs text-[#cbd5e1] mt-1">Dy Van • 472 millas • 40,000 lb • Repuestos para automóviles</p>
                  <span className="inline-block text-[10px] mt-2 rounded px-2 py-1 bg-[#334155]">Transportador CTPAT</span>
                  <div className="mt-4">
                    <Button className="bg-primary text-primary-foreground">Presentar oferta: $4,100</Button>
                  </div>
                </div>

                <div className="rounded-xl bg-white border border-border p-4 sm:p-5 shadow-lg">
                  <p className="font-display text-primary text-lg font-extrabold tracking-tight">Contraoferta: $3,800</p>
                  <p className="text-sm text-muted-foreground mt-2">Acepte esta tarifa o envíe una contraoferta en respuesta.</p>
                  <div className="mt-4 flex gap-2">
                    <Button variant="secondary" className="flex-1">Encimera</Button>
                    <Button className="flex-1">Aceptar: $3,800</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── Platform features ───────────────────────── */}
      <section className="px-4 sm:px-6 pb-10 sm:pb-12">
        <div className="max-w-[1100px] mx-auto">
          <Card className="bg-dark text-warm-50 border-0 shadow-lg">
            <CardContent className="p-6 sm:p-7">
              <h3 className="font-display text-base sm:text-lg font-bold mb-4 tracking-tight">
                Todo en una sola plataforma
              </h3>
              <ul className="grid gap-3.5">
                {[
                  [FileText, 'Documentos y facturación'],
                  [MapPin, 'GPS y visibilidad operativa'],
                  [Bell, 'Alertas por correo y WhatsApp'],
                  [Route, 'Estatus de punta a punta'],
                  [Gauge, 'Historial por proveedor y ruta'],
                ].map(([Icon, text]) => (
                  <li key={text as string} className="flex items-center gap-3 text-sm text-warm-300">
                    <Icon size={15} className="text-[#fed7aa] shrink-0" />
                    {text as string}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── Steps ───────────────────────────────────── */}
      <section id="como-funciona" className="px-4 sm:px-6 py-12 sm:py-14 bg-card border-y border-border">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-display text-[clamp(1.4rem,3vw,2.2rem)] font-extrabold tracking-tight mb-7">
            Arrástralo en 1, 2 por 3
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map(({ n, title, desc }) => (
              <Card key={n} className="bg-background hover:shadow-sm hover:border-warm-300">
                <CardContent className="p-5 sm:p-6">
                  <span className="inline-grid place-items-center size-9 rounded-full bg-primary text-primary-foreground font-display text-sm font-extrabold mb-4">
                    {n}
                  </span>
                  <h4 className="font-display text-base sm:text-lg font-bold tracking-tight mb-1.5">{title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Audiences ───────────────────────────────── */}
      <section className="px-4 sm:px-6 py-12 sm:py-14">
        <div className="max-w-[1100px] mx-auto grid gap-4 md:grid-cols-2">
          {[
            {
              title: 'Para importadores',
              items: [
                'Sin intermediarios, comunicación directa con la línea de transporte',
                'Visibilidad en tiempo real con GPS',
                'Sube tus documentos y configura alertas por correo o WhatsApp',
                'Centraliza todo flujo del arrastre en una misma plataforma',
              ],
            },
            {
              title: 'Para transportistas',
              items: [
                'Más cargas recurrentes y menos tiempo ocioso',
                'Pago más rápido y trazable',
                'Facturación y documentación desde la app',
                'Badge de compañía local por desempeño',
              ],
            },
          ].map(({ title, items }) => (
            <Card key={title} className="hover:shadow-md hover:border-warm-300">
              <CardHeader>
                <CardTitle className="text-xl">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3">
                  {items.map((item) => (
                    <li key={item} className="relative pl-4 text-sm text-muted-foreground leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[7px] before:size-1.5 before:rounded-full before:bg-primary">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────── */}
      <section className="bg-dark px-4 sm:px-6 py-12 sm:py-14">
        <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-extrabold text-warm-50 tracking-tight">
              ¿Listo para entrar al piloto?
            </h3>
            <p className="text-warm-400 mt-1.5 text-sm sm:text-base">
              Recibirás tu usuario y contraseña en tu correo.
            </p>
          </div>
          <Button size="lg" asChild className="w-full sm:w-auto">
            <Link href="/">
              Solicita acceso <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
