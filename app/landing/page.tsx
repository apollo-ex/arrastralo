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
                  equipment: 'Contenedor: CMAU4221748 • Tamaño y Tipo: 40HC',
                  certs: ['ISO 9001', 'Hazmat'],
                  eta: 'Cita de despacho: 24 de octubre a las 10:00 CST en CONTECON',
                  payment: 'Condiciones de Pago: 30 días',
                  price: '$45,900 MXN + IVA',
                  score: '4.9',
                },
                {
                  id: 'B4',
                  carrier: 'Noreste Freight',
                  route: 'Manzanillo → 66367 Santa Catarina',
                  equipment: 'Contenedor: CMAU4221748 • Tamaño y Tipo: 40HC',
                  certs: ['CTPAT', 'OEA', 'Arrastre Directo desde Aduana'],
                  eta: 'Cita de despacho: 24 de octubre a las 10:00 CST en CONTECON',
                  payment: 'Condiciones de Pago: Pago al retornar vacío',
                  price: '$48,300 MXN + IVA',
                  score: '4.8',
                },
                {
                  id: 'C7',
                  carrier: 'Pacific Drayage MX',
                  route: 'Manzanillo → 66367 Santa Catarina',
                  equipment: 'Contenedor: CMAU4221748 • Tamaño y Tipo: 40HC',
                  certs: ['ISO 28000', 'Cambio de Unidad en Patio'],
                  eta: 'Cita de despacho: 24 de octubre a las 10:00 CST en CONTECON',
                  payment: 'Condiciones de Pago: Pago inmediato',
                  price: '$44,500 MXN + IVA',
                  score: '4.7',
                },
                {
                  id: 'JG',
                  carrier: 'Transportes Juan Gabriel SA de CV',
                  route: 'Manzanillo → 66367 Santa Catarina',
                  equipment: 'Contenedor: CMAU4221748 • Tamaño y Tipo: 40HC',
                  certs: ['Local; Base en Manzanillo', 'CAAT: 100i'],
                  eta: 'Cita de despacho: 24 de octubre a las 10:00 CST en CONTECON',
                  payment: 'Condiciones de Pago: 30 días',
                  price: '$45,000 MXN + IVA',
                  score: '5.0',
                },
              ].map((offer) => (
                <div key={offer.id} className="grid grid-cols-1 sm:grid-cols-[1.2fr_.8fr] gap-3 px-4 sm:px-5 py-4 border-b last:border-b-0 border-border hover:bg-warm-100/60 transition-colors">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center justify-center px-2 py-0.5 rounded bg-warm-100 text-primary text-[10px] font-bold">{offer.id}</span>
                      <strong className="font-display text-base tracking-tight">{offer.carrier}</strong>
                      <span className="text-xs text-amber-500">★ {offer.score}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{offer.route}</p>
                    {offer.equipment.includes('Contenedor:') ? (
                      <span className="inline-block mt-1 text-[10px] font-semibold rounded px-2 py-1 bg-violet-100 text-violet-800 border border-violet-300">
                        {offer.equipment}
                      </span>
                    ) : (
                      <p className="text-xs text-muted-foreground mt-1">{offer.equipment}</p>
                    )}
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {offer.certs.map((c) => (
                        <span
                          key={c}
                          className={`text-[10px] font-semibold rounded px-2 py-0.5 border ${c.includes('Local') || c.includes('Arrastre Directo') ? 'bg-emerald-50 text-emerald-700 border-emerald-300' : c.includes('Cambio de Unidad') ? 'bg-amber-100 text-amber-800 border-amber-300' : 'bg-[#fff7ed] text-primary border-warm-300/70'}`}
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="sm:text-right flex sm:block items-center justify-between gap-3">
                    <div>
                      <div className="text-xs text-muted-foreground">{offer.eta}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{offer.payment}</div>
                      <div className="font-display text-xl font-extrabold tracking-tight mt-1">{offer.price}</div>
                    </div>
                    <div className="sm:text-right">
                      <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-2 mb-1">Ver Detalles</button>
                      <Button size="sm" className="shrink-0">Elegir oferta</Button>
                    </div>
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
                Reserva tu arrastre más rápido, 24 horas al día, 7 días a la semana 24/7
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mt-4 max-w-[780px]">
                Conseguir un transportista rápidamente significa un contenedor desaduanado sin complicaciones.
              </p>
              <ul className="mt-4 space-y-2 text-sm sm:text-base text-foreground">
                <li>• Tiempo promedio en recibir más de 5 ofertas: 28 minutos</li>
                <li>• 87% de citas despachadas sin multas</li>
                <li>• Solicita servicio de puerto a almacén sin interrupciones, sin cambio de unidad en patio</li>
              </ul>

              <div className="mt-7 grid gap-4 sm:grid-cols-[1fr_.95fr] items-end">
                <div className="rounded-xl bg-[#1f2433] text-[#e5e7eb] p-4 sm:p-5 shadow-lg">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="inline-block text-[10px] rounded px-2 py-1 bg-[#334155]">Contenedor: CMAU4221748</span>
                    <span className="inline-block text-[10px] rounded px-2 py-1 bg-[#334155]">Tamaño y Tipo: 40HC</span>
                  </div>
                  <p className="font-semibold text-sm">Manzanillo, COL → Santa Catarina, NL</p>
                  <p className="text-xs text-[#cbd5e1] mt-1">Cita de despacho: 24 de octubre a las 10:00 CST en CONTECON</p>

                  <div className="mt-3 border-t border-[#334155] pt-3 text-xs text-[#cbd5e1] space-y-1">
                    <p><span className="text-[#94a3b8]">Razón Social:</span> Transportes Juan Gabriel SA de CV</p>
                    <p><span className="text-[#94a3b8]">RFC:</span> JGA980604VMZ</p>
                    <p><span className="text-[#94a3b8]">CAAT:</span> 100i</p>
                  </div>

                  <div className="mt-4">
                    <Button className="bg-primary text-primary-foreground">Aceptar Tarifa: $45,000 + IVA</Button>
                  </div>
                </div>

                <div className="rounded-xl bg-white border border-border p-4 sm:p-5 shadow-lg">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-muted-foreground">Contraoferta</label>
                    <input
                      value="$40,000"
                      readOnly
                      className="w-full h-10 rounded-md border border-red-300 bg-red-50 px-3 text-sm font-semibold text-red-700"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Acepte esta tarifa o envíe una contraoferta en respuesta.</p>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px]">
                    <p className="text-red-600 font-medium">El valor de la contraoferta no debe superar +/- 9.5%</p>
                    <span className="text-emerald-600 font-semibold">Contraoferta mínima permitida: $40,725</span>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button variant="secondary" className="flex-1">Contraofertar</Button>
                    <Button className="flex-1">Aceptar: $45,000 + IVA</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── Rate trend mock ─────────────────────────── */}
      <section className="px-4 sm:px-6 pb-10 sm:pb-12">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center max-w-[900px] mx-auto">
            <h3 className="font-display text-[clamp(1.8rem,4.2vw,3.2rem)] font-extrabold tracking-tight text-blue-700 leading-[1.08]">
              Accede a tarifas de mercado precisas para tu ruta
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mt-4 leading-relaxed">
              Acceda a tarifas precisas del mercado. Cotice arrastres con datos de miles de ofertas verificadas en el mercado.
              Actualizaciones semanales y disponibilidad instantánea para que pueda tener certeza en su estimacion de costos en destino final, proyecciones financieras y cuidar sus margenes.
            </p>
          </div>

          <div className="mt-7 rounded-[22px] border border-blue-100 bg-[#f5f8ff] p-3 sm:p-5 shadow-[0_10px_28px_rgba(30,64,175,.10)]">
            <Card className="rounded-[16px] border border-blue-100 bg-white shadow-none">
              <CardContent className="p-3 sm:p-4">
                <div className="rounded-md border border-border bg-muted/20 p-2 sm:p-3 grid gap-2 sm:grid-cols-[1fr_1fr_1fr_1fr_auto] text-xs items-end">
                  <div><span className="text-muted-foreground block mb-1">Tipo de equipo</span><div className="h-9 rounded border bg-background px-2 flex items-center">40HC</div></div>
                  <div><span className="text-muted-foreground block mb-1">Origen</span><div className="h-9 rounded border bg-background px-2 flex items-center">Manzanillo, COL</div></div>
                  <div><span className="text-muted-foreground block mb-1">Destino</span><div className="h-9 rounded border bg-background px-2 flex items-center">Santa Catarina, NL</div></div>
                  <div><span className="text-muted-foreground block mb-1">Cruce</span><div className="h-9 rounded border bg-background px-2 flex items-center">N/A</div></div>
                  <Button size="sm" className="h-9">Ver tarifas</Button>
                </div>

                <div className="text-center mt-4 mb-2">
                  <h4 className="font-display text-xl font-extrabold tracking-tight">Manzanillo, COL → Santa Catarina, NL</h4>
                  <p className="text-xs text-muted-foreground mt-1">Contenedor: CMAU4221748  |  Cita: 24 oct 10:00 CST  |  40HC</p>
                </div>

                <div className="grid gap-2 sm:grid-cols-4 text-xs">
                  <div className="rounded-md border border-border bg-muted/20 px-2 py-1.5">
                    <span className="text-muted-foreground">Origen</span>
                    <p className="font-semibold">Manzanillo, COL</p>
                  </div>
                  <div className="rounded-md border border-border bg-muted/20 px-2 py-1.5">
                    <span className="text-muted-foreground">Destino</span>
                    <p className="font-semibold">Santa Catarina, NL</p>
                  </div>
                  <div className="rounded-md border border-border bg-muted/20 px-2 py-1.5">
                    <span className="text-muted-foreground">Contenedor</span>
                    <p className="font-semibold">40HC</p>
                  </div>
                  <div className="rounded-md border border-border bg-muted/20 px-2 py-1.5">
                    <span className="text-muted-foreground">Cita</span>
                    <p className="font-semibold">24 Oct · 10:00 CST</p>
                  </div>
                </div>

                <div className="mt-4 rounded-lg border border-border p-3 sm:p-4">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs font-semibold text-muted-foreground">Rango de tarifa</p>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-2 py-0.5">Confianza alta</span>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                    <div>
                      <p className="text-[11px] text-muted-foreground">Baja (P25)</p>
                      <p className="font-display text-lg sm:text-xl font-extrabold">$43,200</p>
                    </div>
                    <div>
                      <p className="text-[11px] text-muted-foreground">Media (P50)</p>
                      <p className="font-display text-lg sm:text-xl font-extrabold">$45,000</p>
                    </div>
                    <div>
                      <p className="text-[11px] text-muted-foreground">Alta (P75)</p>
                      <p className="font-display text-lg sm:text-xl font-extrabold">$48,700</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-lg border border-border p-3 sm:p-4">
                  <p className="text-xs text-muted-foreground mb-2">Histórico de cotizaciones (12 semanas)</p>
                  <div className="h-40 relative">
                    <svg viewBox="0 0 600 170" className="w-full h-full">
                      <defs>
                        <linearGradient id="trendFill" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.08" />
                        </linearGradient>
                      </defs>

                      {/* Grid + Y axis */}
                      <line x1="56" y1="128" x2="580" y2="128" stroke="#cbd5e1" strokeWidth="1" />
                      <line x1="56" y1="96" x2="580" y2="96" stroke="#e2e8f0" strokeWidth="1" />
                      <line x1="56" y1="64" x2="580" y2="64" stroke="#e2e8f0" strokeWidth="1" />
                      <line x1="56" y1="32" x2="580" y2="32" stroke="#e2e8f0" strokeWidth="1" />
                      <line x1="56" y1="20" x2="56" y2="128" stroke="#cbd5e1" strokeWidth="1" />

                      {/* Y labels */}
                      <text x="8" y="132" fontSize="10" fill="#64748b">$40,000</text>
                      <text x="8" y="100" fontSize="10" fill="#64748b">$43,000</text>
                      <text x="8" y="68" fontSize="10" fill="#64748b">$46,000</text>
                      <text x="8" y="36" fontSize="10" fill="#64748b">$49,000</text>

                      {/* Trend */}
                      <path d="M56,88 L104,90 L152,87 L200,89 L248,85 L296,78 L344,74 L392,71 L440,73 L488,69 L536,67 L580,65 L580,128 L56,128 Z" fill="url(#trendFill)" />
                      <polyline fill="none" stroke="#2563eb" strokeWidth="3" points="56,88 104,90 152,87 200,89 248,85 296,78 344,74 392,71 440,73 488,69 536,67 580,65" />
                      <circle cx="580" cy="65" r="4" fill="#2563eb" />

                      {/* X labels (meses) */}
                      <text x="56" y="150" fontSize="10" fill="#64748b">May 24</text>
                      <text x="152" y="150" fontSize="10" fill="#64748b">Jun 24</text>
                      <text x="248" y="150" fontSize="10" fill="#64748b">Jul 24</text>
                      <text x="344" y="150" fontSize="10" fill="#64748b">Ago 24</text>
                      <text x="440" y="150" fontSize="10" fill="#64748b">Sep 24</text>
                      <text x="528" y="150" fontSize="10" fill="#64748b">Oct 24</text>
                    </svg>
                  </div>
                  <div className="mt-2 text-[11px] text-muted-foreground flex flex-wrap gap-x-3 gap-y-1">
                    <span>May 24: $43,900</span>
                    <span>Ago 24: $45,000</span>
                    <span>Oct 24: $47,200</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── GPS monitoring mock ─────────────────────── */}
      <section className="px-4 sm:px-6 pb-10 sm:pb-12">
        <div className="max-w-[1100px] mx-auto">
          <Card className="overflow-hidden border-warm-300/60">
            <CardContent className="p-6 sm:p-8">
              <h3 className="font-display text-[clamp(1.4rem,3vw,2.2rem)] font-extrabold tracking-tight text-primary leading-tight">
                Monitoreo GPS en Tiempo Real
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-[850px]">
                Visualiza la ubicación exacta de cada unidad durante el arrastre desde puerto hasta destino final, con eventos de movimiento y estatus operativo en tiempo real.
              </p>

              <div className="mt-5 rounded-xl border border-border bg-card p-2 sm:p-3">
                <Image
                  src="/gps-monitoring-manzanillo.jpg"
                  alt="Monitoreo GPS en tiempo real de unidad en Manzanillo"
                  width={1600}
                  height={1200}
                  className="w-full h-auto rounded-lg border border-border"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── WhatsApp notification mock ─────────────── */}
      <section className="px-4 sm:px-6 pb-10 sm:pb-12">
        <div className="max-w-[1100px] mx-auto">
          <Card className="overflow-hidden border-0 bg-[#0b2252] text-white shadow-[0_16px_42px_rgba(11,34,82,.35)]">
            <CardContent className="p-6 sm:p-8">
              <h3 className="font-display text-[clamp(1.4rem,3vw,2.2rem)] font-extrabold tracking-tight text-white leading-tight">
                Monitoreo y notificaciones por WhatsApp en tiempo real
              </h3>
              <p className="text-sm sm:text-base text-blue-100 mt-3 max-w-[900px] leading-relaxed">
                Recibe alertas instantáneas del estatus de tu arrastre con formato claro, acciones rápidas y evidencia operativa para
                <b> Transportes Juan Gabriel SA de CV</b>.
              </p>

              <div className="mt-6 rounded-2xl bg-[#07173a] border border-[#1a3f83] p-4 sm:p-5">

                <div className="rounded-xl border border-[#1a3f83] bg-[#0b2a62] p-2.5 sm:p-3 flex flex-col sm:flex-row gap-2">
                  <div className="flex-1 h-10 rounded-lg bg-[#072052] border border-[#214a93] px-3 flex items-center text-blue-100 text-sm">
                    +52 8181234567
                  </div>
                  <button className="h-10 rounded-lg px-4 bg-gradient-to-r from-[#7c3aed] to-[#9333ea] text-white text-sm font-semibold">
                    Enviar WhatsApp
                  </button>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-[.9fr_1.1fr] items-start">
                  <div className="text-white/90 text-sm leading-relaxed">
                    <p className="font-semibold">Configura alertas automáticas y comparte a tus colaboradores:</p>
                    <ul className="mt-2 space-y-1 text-blue-100 text-[13px]">
                      <li>• Asignación de transportista</li>
                      <li>• Salida de puerto y ETA a destino</li>
                      <li>• Llegada a almacén</li>
                      <li>• Retorno de vacío y cierre</li>
                    </ul>
                  </div>

                  <div className="rounded-xl bg-[#ece9df] border border-[#d3cec0] p-3 sm:p-4">
                    <div className="rounded-lg bg-white p-3 text-[13px] text-[#1f2937] leading-relaxed shadow-sm">
                      <p><b>Arrástralo:</b> Tu arrastre fue asignado a <b>Transportes Juan Gabriel SA de CV</b>.</p>
                      <p className="mt-2">Ruta: Manzanillo, COL → Santa Catarina, NL</p>
                      <p className="mt-1">Contenedor: CMAU4221748 • 40HC</p>
                      <p className="mt-1">Cita de despacho: 24 Oct 10:00 CST (CONTECON)</p>
                      <p className="mt-2 text-[#4b5563]">Solo responde a este mensaje para soporte 24/7.</p>
                    </div>
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
